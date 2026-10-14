import React, { useState } from 'react'
import { portfolioContent } from '../data/content'
import { Mail, Copy, Check, Send, Phone, MapPin, FileText, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, CodechefIcon } from './SocialIcons'

export const Contact: React.FC = () => {
  const { contact } = portfolioContent
  const [copied, setCopied] = useState(false)
  const [formName, setFormName] = useState('')
  const [formSubject, setFormSubject] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [formError, setFormError] = useState<string | null>(null)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formMessage.trim()) {
      setFormError('Please enter a brief message before opening your email client.')
      return
    }

    setFormError(null)
    const targetEmail = contact.email
    const subjectLine = formSubject.trim()
      ? encodeURIComponent(formSubject.trim())
      : encodeURIComponent('Inquiry from Portfolio — Pranav Mohan Saske')
    const bodyContent = encodeURIComponent(
      `Hello Pranav,\n\nFrom: ${formName.trim() || 'Visitor'}\n\n${formMessage.trim()}`
    )

    window.location.href = `mailto:${targetEmail}?subject=${subjectLine}&body=${bodyContent}`
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-14 sm:py-20 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Contrasting Full Dark Anchor Container (Complementing the Lime Showcase container) */}
        <div className="bg-neutral-950 text-white rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle lime glow highlight in top corner */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-lime-400/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Inquiries & Profiles */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-lime-400" />
                  <span className="font-mono text-xs uppercase tracking-widest text-lime-400 font-bold">
                    / Get in Touch
                  </span>
                </div>

                <h2
                  id="contact-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3"
                >
                  Let's build together.
                </h2>

                <p className="text-sm text-neutral-400 mb-8 leading-relaxed max-w-md">
                  Whether you have an internship opportunity, a project proposal, or a technical question, feel free to reach out directly.
                </p>

                {/* Direct Contact Items */}
                <div className="space-y-3 font-mono text-xs mb-8">
                  {/* Email */}
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 text-neutral-200 min-w-0">
                      <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                      <span className="truncate">{contact.email}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors shrink-0"
                      aria-label="Copy email address"
                      title="Copy email address"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-lime-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Phone */}
                  {contact.phone && (
                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-neutral-300">
                        <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                        <span>{contact.phone}</span>
                      </div>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-lime-400 hover:underline text-xs font-semibold"
                      >
                        Call
                      </a>
                    </div>
                  )}

                  {/* Location */}
                  {contact.address && (
                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-2.5 text-neutral-400">
                      <MapPin className="w-4 h-4 text-lime-400 shrink-0" />
                      <span>{contact.address}</span>
                    </div>
                  )}
                </div>

                {/* Resume Download Pill Button (Vibrant Lime) */}
                <div className="mb-6">
                  <a
                    href={contact.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lime w-full sm:w-auto"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Official Resume</span>
                  </a>
                </div>
              </div>

              {/* Profiles Row */}
              <div className="pt-6 border-t border-neutral-800">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 block mb-3 font-semibold">
                  Official Online Channels:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>

                  {contact.codechef && (
                    <a
                      href={contact.codechef}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                    >
                      <CodechefIcon className="w-3.5 h-3.5" />
                      <span>CodeChef</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Pre-filled Email Message Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleFormSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4"
                noValidate
              >
                <div>
                  <h3 className="font-sans text-lg font-bold text-white mb-1">
                    Send a Message
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono">
                    Directly pre-fills your preferred email client to reach Pranav.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-neutral-400 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Alex"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 font-mono text-xs focus:outline-none focus:border-lime-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono text-neutral-400 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      placeholder="e.g. Internship Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 font-mono text-xs focus:outline-none focus:border-lime-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-neutral-400 mb-1.5"
                  >
                    Message <span className="text-lime-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formMessage}
                    onChange={(e) => {
                      setFormMessage(e.target.value)
                      if (formError) setFormError(null)
                    }}
                    placeholder="Write your note here..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 font-mono text-xs focus:outline-none focus:border-lime-400 resize-none"
                    required
                  />
                </div>

                {formError && (
                  <p className="text-xs font-mono text-amber-400">
                    {formError}
                  </p>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <button type="submit" className="btn-lime">
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>

                  <span className="text-[11px] font-mono text-neutral-500">
                    To {contact.email}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
