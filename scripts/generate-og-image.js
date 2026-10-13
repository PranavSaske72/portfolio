import fs from 'node:fs'
import zlib from 'node:zlib'
import path from 'node:path'

function crc32(buf) {
  let table = new Uint32Array(256)
  for (let i = 0; i < 256; i++) {
    let c = i
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1)
    }
    table[i] = c
  }
  let crc = 0 ^ (-1)
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff]
  }
  return (crc ^ (-1)) >>> 0
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii')
  const lenBuf = Buffer.alloc(4)
  lenBuf.writeUInt32BE(data.length, 0)
  
  const crcTarget = Buffer.concat([typeBuf, data])
  const crcVal = crc32(crcTarget)
  const crcBuf = Buffer.alloc(4)
  crcBuf.writeUInt32BE(crcVal, 0)
  
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf])
}

const width = 1200
const height = 630

// RGB format: 3 bytes per pixel
const rowSize = 1 + width * 3
const rawData = Buffer.alloc(height * rowSize)

// Colors
const bgR = 11, bgG = 11, bgB = 12
const surfR = 18, surfG = 18, surfB = 20
const limeR = 198, limeG = 244, limeB = 50
const textR = 242, textG = 242, textB = 238
const borderR = 45, borderG = 45, borderB = 50

for (let y = 0; y < height; y++) {
  const rowOffset = y * rowSize
  rawData[rowOffset] = 0 // Filter type 0 (None)
  
  for (let x = 0; x < width; x++) {
    const pxOffset = rowOffset + 1 + x * 3
    let r = bgR, g = bgG, b = bgB

    // Blueprint grid pattern (every 60px)
    if (x % 60 === 0 || y % 60 === 0) {
      r = 16; g = 16; b = 18
    }

    // Border line inset 30px
    if ((x === 30 || x === width - 30) && (y >= 30 && y <= height - 30)) {
      r = borderR; g = borderG; b = borderB
    }
    if ((y === 30 || y === height - 30) && (x >= 30 && x <= width - 30)) {
      r = borderR; g = borderG; b = borderB
    }

    // Corner tick marks in lime
    const cornerSize = 16
    const inTopLeft = (x >= 26 && x <= 26 + cornerSize && (y === 26 || y === 27)) ||
                      (y >= 26 && y <= 26 + cornerSize && (x === 26 || x === 27))
    const inTopRight = (x >= width - 26 - cornerSize && x <= width - 26 && (y === 26 || y === 27)) ||
                       (y >= 26 && y <= 26 + cornerSize && (x === width - 27 || x === width - 26))
    const inBottomLeft = (x >= 26 && x <= 26 + cornerSize && (y === height - 27 || y === height - 26)) ||
                         (y >= height - 26 - cornerSize && y <= height - 26 && (x === 26 || x === 27))
    const inBottomRight = (x >= width - 26 - cornerSize && x <= width - 26 && (y === height - 27 || y === height - 26)) ||
                          (y >= height - 26 - cornerSize && y <= height - 26 && (x === width - 27 || x === width - 26))

    if (inTopLeft || inTopRight || inBottomLeft || inBottomRight) {
      r = limeR; g = limeG; b = limeB
    }

    // Atmospheric subtle radial glow in center
    const dx = x - width / 2
    const dy = y - height / 2 - 40
    const distSq = dx * dx + dy * dy
    if (distSq < 300 * 300) {
      const factor = (1 - Math.sqrt(distSq) / 300) * 0.12
      r = Math.min(255, Math.floor(r + limeR * factor))
      g = Math.min(255, Math.floor(g + limeG * factor))
      b = Math.min(255, Math.floor(b + limeB * factor))
    }

    // Accent badge top bar
    if (y >= 80 && y <= 84 && x >= 80 && x <= 160) {
      r = limeR; g = limeG; b = limeB
    }

    rawData[pxOffset] = r
    rawData[pxOffset + 1] = g
    rawData[pxOffset + 2] = b
  }
}

const compressed = zlib.deflateSync(rawData, { level: 9 })

const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])

const ihdrData = Buffer.alloc(13)
ihdrData.writeUInt32BE(width, 0)
ihdrData.writeUInt32BE(height, 4)
ihdrData[8] = 8 // bit depth
ihdrData[9] = 2 // color type: RGB
ihdrData[10] = 0 // compression
ihdrData[11] = 0 // filter
ihdrData[12] = 0 // interlace

const ihdrChunk = makeChunk('IHDR', ihdrData)
const idatChunk = makeChunk('IDAT', compressed)
const iendChunk = makeChunk('IEND', Buffer.alloc(0))

const png = Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk])

const outPath = path.join(process.cwd(), 'public', 'og-image.png')
fs.writeFileSync(outPath, png)
console.log('Successfully generated public/og-image.png (1200x630)')
