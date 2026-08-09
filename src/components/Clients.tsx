import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Star, Quote } from 'lucide-react'

export default function Clients() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const stats = t('clients.stats', { returnObjects: true }) as Array<{ value: string; label: string }>
  const testimonials = t('clients.testimonials', { returnObjects: true }) as Array<{ quote: string; name: string; role: string }>
  const industries = t('clients.industries', { returnObjects: true }) as string[]

  return (
    <section id="clients" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-pink-400 text-sm font-medium uppercase tracking-widest mb-4">
            {t('clients.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t('clients.title1')} <span className="gradient-text">{t('clients.title2')}</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">{t('clients.sub')}</p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-[#0f1117] border border-[#1e2030]"
            >
              <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">{s.value}</div>
              <div className="text-slate-500 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t_, i) => (
            <motion.div
              key={t_.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-[#0f1117] border border-[#1e2030] hover:border-indigo-500/30 transition-colors"
            >
              <Quote size={20} className="text-indigo-400 mb-4" />
              <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t_.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{t_.name}</p>
                  <p className="text-slate-500 text-xs">{t_.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
