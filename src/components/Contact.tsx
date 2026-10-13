import React, { useState } from 'react'
import { portfolioContent, isPlaceholder } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { PlaceholderLink } from './PlaceholderLink'
import { Reveal } from './Reveal'
import { Mail, Copy, Check, Send, AlertCircle, Phone, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export const Contact: React.FC = () => {
  const { contact } = portfolioContent
  const [copied, setCopied] = useState(false)
  const [formName, setFormName] = useState('')
  const [formSubject, setFormSubject] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [formError, setFormError] = useState<string | null>(null)

  const isEmailSet = !isPlaceholder(contact.email)

  const handleCopyEmail = async () => {
    if (!isEmailSet) {
      alert('Email address is currently a placeholder [[EMAIL]]. Replace it in src/data/content.ts to enable copying.')
      return
    }

    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback
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

    // Build real mailto URI
    const targetEmail = isEmailSet ? contact.email : 'pranav@example.com'
    const subjectLine = formSubject.trim() ? encodeURIComponent(formSubject.trim()) : encodeURIComponent('Hello from Portfolio')
    const bodyContent = encodeURIComponent(
      `From: ${formName.trim() || 'Visitor'}\n\n${formMessage.trim()}`
    )

    window.location.href = `mailto:${targetEmail}?subject=${subjectLine}&body=${bodyContent}`
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 md:py-32 border-b border-border relative bg-surface/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="07"
          subtitle="COMMUNICATION"
          title="Let's build something useful."
          id="contact-heading"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Inquiries & Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Reveal>
                <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-8">
                  Whether you are discussing first-year collaborations, student open-source hardware, AI experiments, or future internship opportunities, feel free to reach out directly.
                </p>
              </Reveal>

              {/* Direct Email Action Box */}
              <Reveal delayMs={100}>
                <div className="blueprint-card corner-ticks p-6 rounded-xl border border-border bg-surface mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
                    <span className="font-mono text-xs uppercase tracking-wider text-text font-medium">
                      Direct Email
                    </span>
                  </div>

                  <div className="font-mono text-sm text-text break-all mb-4 p-3 rounded bg-surface-2 border border-border/80 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                      <span>{contact.email}</span>
                    </div>
                    {contact.phone && (
                      <div className="flex items-center gap-2 text-text-muted">
                        <Phone className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                        <a href={`tel:${contact.phone}`} className="hover:text-accent transition-colors">
                          {contact.phone}
                        </a>
                      </div>
                    )}
                    {contact.address && (
                      <div className="flex items-center gap-2 text-text-dim text-xs">
                        <MapPin className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                        <span>{contact.address}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <PlaceholderLink
                      href={contact.email}
                      placeholderLabel="Email"
                      isEmail={true}
                      variant="button-primary"
                      icon={<Mail className="w-3.5 h-3.5" aria-hidden="true" />}
                      ariaLabel="Send email to Pranav"
                    >
                      Open in Mail Client
                    </PlaceholderLink>

                    {/* Functional Copy Email Button with Clipboard API & Live Region */}
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address to clipboard"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-border hover:border-accent text-xs font-mono text-text hover:text-accent bg-surface hover:bg-surface-2 transition-all"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                          <span className="text-accent font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Accessible aria-live region announcing copy status */}
                  <div aria-live="polite" className="sr-only">
                    {copied ? 'Email address copied to clipboard' : ''}
                  </div>
                </div>
              </Reveal>

              {/* Social Channels */}
              <Reveal delayMs={150}>
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-text-dim block">
                    Verified Networks:
                  </span>
                  <div className="flex flex-wrap gap-3">
                    <PlaceholderLink
                      href={contact.github}
                      placeholderLabel="GitHub Profile"
                      variant="button-secondary"
                      icon={<GithubIcon className="w-3.5 h-3.5" />}
                      ariaLabel="View GitHub Profile (Link coming soon)"
                    >
                      GitHub
                    </PlaceholderLink>

                    <PlaceholderLink
                      href={contact.linkedin}
                      placeholderLabel="LinkedIn Profile"
                      variant="button-secondary"
                      icon={<LinkedinIcon className="w-3.5 h-3.5" />}
                      ariaLabel="View LinkedIn Profile (Link coming soon)"
                    >
                      LinkedIn
                    </PlaceholderLink>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="pt-8 mt-8 border-t border-border font-mono text-xs text-text-dim hidden lg:block">
              // TIMEZONE: IST (UTC+05:30) • SHIRPUR, MH
            </div>
          </div>

          {/* Right Column: Functional Mailto Note Composer (NO fake dead forms) */}
          <div className="lg:col-span-7">
            <Reveal delayMs={120}>
              <div className="blueprint-card corner-ticks rounded-2xl p-6 sm:p-8 border border-border bg-surface">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4 text-accent" aria-hidden="true" />
                    <h3 className="font-mono text-xs uppercase tracking-wider text-text font-medium">
                      Direct Message Composer
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-text-dim">
                    VIA MAILTO PROTOCOL
                  </span>
                </div>

                <p className="text-xs text-text-muted mb-6 leading-relaxed">
                  Compose a quick draft below. Clicking Send opens your preferred email application pre-populated with your subject and message. No opaque backend or dead form submissions.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="sender-name"
                      className="block font-mono text-xs text-text-dim mb-1"
                    >
                      Your Name (Optional)
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-2 border border-border text-sm text-text placeholder:text-text-dim/60 focus:outline-none focus:border-accent"
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
                      placeholder="e.g. Project inquiry / Glitchverse follow-up"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-2 border border-border text-sm text-text placeholder:text-text-dim/60 focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email-message"
                      className="block font-mono text-xs text-text-dim mb-1"
                    >
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="email-message"
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Write your note here..."
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-2 border border-border text-sm text-text placeholder:text-text-dim/60 focus:outline-none focus:border-accent resize-y"
                    />
                  </div>

                  {formError && (
                    <div
                      role="alert"
                      className="flex items-center gap-2 text-xs font-mono text-rose-400 p-2.5 rounded bg-rose-950/20 border border-rose-800/40"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-text font-mono text-xs font-semibold hover:brightness-110 active:scale-[0.98] transition-all shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Send via Email Client</span>
                    </button>

                    <span className="font-mono text-[11px] text-text-dim">
                      Target: {contact.email}
                    </span>
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
