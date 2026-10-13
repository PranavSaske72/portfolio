import React, { useState } from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { Mail, Copy, Check, Send, Phone, MapPin, FileText, ExternalLink } from 'lucide-react'
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
      className="py-10 sm:py-12 border-b border-border relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="04"
          subtitle="CONNECT"
          title="Contact"
          id="contact-heading"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Direct Inquiries & Profiles */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="editorial-card p-5 sm:p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-2">
                Get In Touch
              </h3>
              <p className="text-xs text-text-muted mb-4 leading-relaxed">
                Open to internships, software development projects, and engineering collaborations.
              </p>

              {/* Direct Channels */}
              <div className="space-y-2 font-mono text-xs mb-4">
                {/* Email Box */}
                <div className="p-2.5 rounded-lg bg-surface-2 border border-border flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-text min-w-0">
                    <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span className="truncate">{contact.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1 rounded hover:bg-surface text-text-muted hover:text-text transition-colors shrink-0"
                    aria-label="Copy email address"
                    title="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-accent" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                {contact.phone && (
                  <div className="p-2.5 rounded-lg bg-surface-2 border border-border flex items-center justify-between">
                    <div className="flex items-center gap-2 text-text-muted">
                      <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{contact.phone}</span>
                    </div>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-accent hover:underline text-[11px] font-semibold"
                    >
                      Call
                    </a>
                  </div>
                )}

                {/* Location */}
                {contact.address && (
                  <div className="p-2.5 rounded-lg bg-surface-2 border border-border flex items-center gap-2 text-text-dim">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{contact.address}</span>
                  </div>
                )}
              </div>

              {/* Resume download */}
              <div className="pt-3 border-t border-border">
                <a
                  href={contact.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View / Download Resume</span>
                </a>
              </div>
            </div>

            {/* Profiles */}
            <div className="editorial-card p-4 sm:p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-text-dim block mb-2.5 font-semibold">
                Profiles
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-1.5 px-3"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-text-dim" />
                </a>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-1.5 px-3"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-text-dim" />
                </a>

                {contact.codechef && (
                  <a
                    href={contact.codechef}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-1.5 px-3"
                  >
                    <CodechefIcon className="w-3.5 h-3.5" />
                    <span>CodeChef</span>
                    <ExternalLink className="w-3 h-3 text-text-dim" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="editorial-card p-5 sm:p-6 space-y-3.5"
              noValidate
            >
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-0.5">
                  Send a Message
                </h3>
                <p className="text-xs text-text-dim font-mono">
                  Directly pre-fills your email client.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-text-muted mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Alex"
                    className="w-full px-3 py-2 rounded-lg bg-surface-2 border border-border text-text placeholder-text-dim font-mono text-xs focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono text-text-muted mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder="e.g. Project inquiry"
                    className="w-full px-3 py-2 rounded-lg bg-surface-2 border border-border text-text placeholder-text-dim font-mono text-xs focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-text-muted mb-1"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formMessage}
                  onChange={(e) => {
                    setFormMessage(e.target.value)
                    if (formError) setFormError(null)
                  }}
                  placeholder="Write your message here..."
                  className="w-full px-3 py-2 rounded-lg bg-surface-2 border border-border text-text placeholder-text-dim font-mono text-xs focus:outline-none focus:border-accent resize-none"
                  required
                />
              </div>

              {formError && (
                <p className="text-xs font-mono text-amber-400">
                  {formError}
                </p>
              )}

              <div className="pt-1 flex items-center justify-between">
                <button type="submit" className="btn-primary">
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </button>

                <span className="text-[11px] font-mono text-text-dim">
                  To {contact.email}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
