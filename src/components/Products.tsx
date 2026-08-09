import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ShoppingCart, TrendingDown, ClipboardList, BarChart3,
  Smartphone, Apple, Zap, Server, Store, ExternalLink,
} from 'lucide-react'

const featureIcons = [
  <TrendingDown size={18} />,
  <BarChart3 size={18} />,
  <ClipboardList size={18} />,
  <ShoppingCart size={18} />,
]

const tech = [
  { icon: <Zap size={16} />, label: '100% Serverless' },
  { icon: <Server size={16} />, label: 'Full-Stack APIs' },
  { icon: <Store size={16} />, label: 'Dual Store Deploy' },
]

export default function Products() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const features = t('products.features', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    <section id="products" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-600/8 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-purple-400 text-sm font-medium uppercase tracking-widest mb-4">
            {t('products.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t('products.title1')} <span className="gradient-text">{t('products.title2')}</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">{t('products.sub')}</p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-[#1e2030] bg-[#0f1117] overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/20">
                    🥑
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Fudd</h3>
                    <p className="text-emerald-400 text-sm">{t('products.fudd_tagline')}</p>
                  </div>
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-8">{t('products.fudd_desc')}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {features.map((f, i) => (
                    <div key={f.title} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {featureIcons[i]}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{f.title}</p>
                        <p className="text-slate-500 text-xs">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {tech.map((t_) => (
                    <span
                      key={t_.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1a1d2a] border border-[#1e2030] text-slate-400 text-xs"
                    >
                      <span className="text-indigo-400">{t_.icon}</span>
                      {t_.label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.fudd.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-sm font-medium transition-all group"
                  >
                    <Smartphone size={16} className="text-green-400" />
                    {t('products.google_play')}
                    <ExternalLink size={12} className="text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://apps.apple.com/co/app/fudd/id6762944639"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-sm font-medium transition-all group"
                  >
                    <Apple size={16} className="text-slate-300" />
                    {t('products.app_store')}
                    <ExternalLink size={12} className="text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-emerald-950/40 via-[#0f1117] to-indigo-950/40 flex items-center justify-center p-12 min-h-64">
              <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at center, #10b981 0%, transparent 70%)' }}
              />
              <div className="relative w-44 h-80 rounded-3xl border-2 border-emerald-500/30 bg-[#0d1f17] shadow-2xl shadow-emerald-900/40 flex flex-col overflow-hidden">
                <div className="bg-emerald-950 px-4 py-3 flex items-center justify-between border-b border-emerald-900/50">
                  <span className="text-emerald-300 text-xs font-semibold">Fudd</span>
                  <span className="text-emerald-500 text-xs">🥑</span>
                </div>
                <div className="flex-1 p-3 space-y-2">
                  {['🥦 Broccoli · 3d', '🥛 Milk · 1d', '🍅 Tomatoes · 5d', '🧀 Cheese · 7d'].map((item) => (
                    <div key={item} className="bg-emerald-900/20 rounded-lg px-3 py-2">
                      <p className="text-emerald-200 text-xs">{item}</p>
                    </div>
                  ))}
                  <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg px-3 py-2 mt-3">
                    <p className="text-emerald-300 text-xs font-semibold">💰 Saved this month</p>
                    <p className="text-emerald-400 text-lg font-bold">$43.20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
