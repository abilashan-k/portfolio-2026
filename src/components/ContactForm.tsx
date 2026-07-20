import { FormEvent, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { CheckCircle2, LoaderCircle, Send, XCircle } from 'lucide-react'

type FormStatus = 'idle' | 'success' | 'error'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [isSending, setIsSending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      return
    }

    const data = new FormData(form)
    setIsSending(true)
    setStatus('idle')

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.get('from_name')?.toString().trim(),
          from_email: data.get('from_email')?.toString().trim(),
          subject: data.get('subject')?.toString().trim(),
          message: data.get('message')?.toString().trim(),
        },
        { publicKey }
      )

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          Your name
          <input
            name="from_name"
            required
            minLength={2}
            placeholder="How should I call you?"
            autoComplete="name"
          />
        </label>

        <label>
          Email address
          <input
            name="from_email"
            type="email"
            required
            placeholder="you@company.com"
            autoComplete="email"
          />
        </label>

        <label>
          Subject
          <input
            name="subject"
            required
            minLength={3}
            placeholder="What would you like to discuss?"
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            required
            minLength={10}
            placeholder="Tell me a little about your opportunity..."
            rows={3}
          />
        </label>

        <button className="button primary" type="submit" disabled={isSending}>
          {isSending ? (
            <>
              <LoaderCircle className="send-spinner" size={17} /> Sending...
            </>
          ) : (
            <>
              Send a message <Send size={17} />
            </>
          )}
        </button>
      </form>

      <AnimatePresence>
        {status !== 'idle' && (
          <motion.p
            className={`form-toast ${status}`}
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.24 }}
          >
            <span>
              {status === 'success' ? (
                <CheckCircle2 size={18} />
              ) : (
                <XCircle size={18} />
              )}
            </span>
            {status === 'success'
              ? 'Thank you! Your message has been sent successfully.'
              : 'Failed to send message. Please try again.'}
          </motion.p>
        )}
      </AnimatePresence>
    </>
  )
}