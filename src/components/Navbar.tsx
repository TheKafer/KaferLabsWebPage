import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.clients'), href: '#clients' },
    { label: t('nav.team'), href: '#team' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language.startsWith('es') ? 'en' : 'es')
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const isEs = i18n.language.startsWith('es')

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090cdd] backdrop-blur-xl border-b border-[#1e2030]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <img
            src="/kaferlabs-icon.png"
            alt=""
            className="h-8 w-8 rounded-lg"
          />
          <span className="font-semibold text-white tracking-tight">
            kafer<span className="gradient-text">labs</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#1e2030] hover:border-indigo-500/40 text-slate-400 hover:text-white text-xs font-semibold tracking-widest transition-all"
            title={isEs ? 'Switch to English' : 'Cambiar a Español'}
          >
            <span className={!isEs ? 'text-white' : 'text-slate-600'}>EN</span>
            <span className="text-slate-700">/</span>
            <span className={isEs ? 'text-white' : 'text-slate-600'}>ES</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
          >
            {t('nav.cta')}
          </a>
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f1117] border-b border-[#1e2030] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3">
                <button
                  onClick={toggleLang}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-[#1e2030] text-slate-400 text-xs font-semibold tracking-widest"
                >
                  <span className={!isEs ? 'text-white' : 'text-slate-600'}>EN</span>
                  <span className="text-slate-700">/</span>
                  <span className={isEs ? 'text-white' : 'text-slate-600'}>ES</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium"
                >
                  {t('nav.cta')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
