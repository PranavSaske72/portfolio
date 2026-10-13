import React, { useState } from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { Mail, Copy, Check, Send, AlertCircle, Phone, MapPin, ExternalLink } from 'lucide-react'
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
      setFormError('Please enter a brief message before launching your email client.')
      return
    }

    setFormError(null)

    const targetEmail = contact.email
    const subjectLine = formSubject.trim()
      ? encodeURIComponent(formSubject.trim())
      : encodeURIComponent('Inquiry for Pranav Mohan Saske')
    const bodyContent = encodeURIComponent(
      `From: ${formName.trim() || 'Visitor'}\n\n${formMessage.trim()}`
    )

    window.location.href = `mailto:${targetEmail}?subject=${subjectLine}&body=${bodyContent}`
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-12 md:py-16 border-b border-border/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="07"
          subtitle="GET IN TOUCH"
          title="Let's build something impactful."
          id="contact-heading"
          colorTheme="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Inquiries & Social Links */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal>
              <div className="glass-card rounded-2xl p-6 border border-cyan-500/30 bg-surface/80 shadow-[0_10px_35px_-8px_rgba(0,245,255,0.15)]">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                    Direct Contact Information
                  </span>
                </div>

                <div className="space-y-2.5 font-mono text-xs mb-5">
                  <div className="p-3 rounded-xl bg-surface-2/80 border border-white/10 flex items-center justify-between">
                    <span className="text-text break-all font-medium">{contact.email}</span>
                  </div>

                  {contact.phone && (
                    <div className="p-3 rounded-xl bg-surface-2/80 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-text-muted">
                        <Phone className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{contact.phone}</span>
                      </div>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-cyan-400 hover:text-cyan-300 font-semibold text-xs"
                      >
                        Call
                      </a>
                    </div>
                  )}

                  {contact.address && (
                    <div className="p-3 rounded-xl bg-surface-2/80 border border-white/10 flex items-center gap-2 text-text-dim">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{contact.address}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={`mailto:${contact.email}`}
                    className="btn-gradient-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open Email Client</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border hover:border-cyan-400 text-xs font-mono text-text hover:text-cyan-400 bg-surface-2 transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-cyan-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Social Channels with CodeChef */}
            <Reveal delayMs={100}>
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <span className="font-mono text-xs uppercase tracking-wider text-text-dim block mb-3 font-semibold">
                  Official Online Profiles:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-surface-2 border border-border hover:border-cyan-400 text-xs font-mono text-text hover:text-cyan-400 transition-colors shadow-sm"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-surface-2 border border-border hover:border-purple-400 text-xs font-mono text-text hover:text-purple-400 transition-colors shadow-sm"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-purple-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  {contact.codechef && (
                    <a
                      href={contact.codechef}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-surface-2 border border-amber-500/40 hover:border-amber-400 text-xs font-mono text-amber-300 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.12)]"
                    >
                      <CodechefIcon className="w-3.5 h-3.5 text-amber-400" />
                      <span>CodeChef</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Mailto Note Composer */}
          <div className="lg:col-span-7">
            <Reveal delayMs={120}>
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 bg-surface/80">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                    <h3 className="font-mono text-xs uppercase tracking-wider text-text font-semibold">
                      Direct Message Composer
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-cyan-400 font-semibold">
                    via Mailto Protocol
                  </span>
                </div>

                <p className="text-xs text-text-muted mb-4 leading-relaxed">
                  Compose a draft below. Clicking Send opens your native email client with your pre-filled subject and message directly to Pranav.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label
                      htmlFor="sender-name"
                      className="block font-mono text-xs text-text-dim mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Recruiter / Collaborator"
                      className="w-full px-3.5 py-2 rounded-xl bg-surface-2 border border-white/10 text-xs text-text placeholder:text-text-dim/60 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email-subject"
                      className="block font-mono text-xs text-text-dim mb-1"
                    >
                      Subject
                    </label>
                    <input
                      id="email-subject"
                      type="text"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      placeholder="e.g. Project collaboration / AI Discussion"
                      className="w-full px-3.5 py-2 rounded-xl bg-surface-2 border border-white/10 text-xs text-text placeholder:text-text-dim/60 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email-message"
                      className="block font-mono text-xs text-text-dim mb-1"
                    >
                      Message <span className="text-pink-400">*</span>
                    </label>
                    <textarea
                      id="email-message"
                      rows={3}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Write your message here..."
                      required
                      className="w-full px-3.5 py-2 rounded-xl bg-surface-2 border border-white/10 text-xs text-text placeholder:text-text-dim/60 focus:outline-none focus:border-cyan-400 resize-y"
                    />
                  </div>

                  {formError && (
                    <div
                      role="alert"
                      className="flex items-center gap-2 text-xs font-mono text-pink-400 p-2.5 rounded bg-pink-950/20 border border-pink-800/40"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="submit"
                      className="btn-gradient-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send to {contact.email}</span>
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
