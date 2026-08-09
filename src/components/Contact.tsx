import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Send, Mail, MessageSquare, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const options = t('contact.options', { returnObjects: true }) as string[]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">
            {t('contact.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t('contact.title1')} <span className="gradient-text">{t('contact.title2')}</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">{t('contact.sub')}</p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[#1e2030] bg-[#0f1117] p-8 md:p-10"
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle2 size={32} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t('contact.success_title')}</h3>
              <p className="text-slate-400 max-w-sm">{t('contact.success_sub')}</p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); setSelected(null) }}
                className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
              >
                {t('contact.success_reset')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  {t('contact.what_label')}
                </label>
                <div className="flex flex-wrap gap-2">
                  {options.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => setSelected(o)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-all border ${
                        selected === o
                          ? 'bg-indigo-600 border-indigo-500 text-white'
                          : 'bg-transparent border-[#1e2030] text-slate-400 hover:border-indigo-500/40 hover:text-white'
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t('contact.name_label')}
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t('contact.name_placeholder')}
                    className="w-full bg-[#08090c] border border-[#1e2030] rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t('contact.email_label')}
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t('contact.email_placeholder')}
                    className="w-full bg-[#08090c] border border-[#1e2030] rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {t('contact.message_label')}
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t('contact.message_placeholder')}
                  rows={4}
                  className="w-full bg-[#08090c] border border-[#1e2030] rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                >
                  <Send size={16} />
                  {t('contact.submit')}
                </button>
                <div className="flex items-center gap-4 text-slate-500 text-xs">
                  <span className="flex items-center gap-1.5">
                    <Mail size={12} />
                    hello@kaferlabs.com
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquare size={12} />
                    {t('contact.reply')}
                  </span>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
