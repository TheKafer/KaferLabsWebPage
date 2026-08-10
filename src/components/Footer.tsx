import { useTranslation } from 'react-i18next'
import { GitBranch, Globe, Mail } from 'lucide-react'
import { SALES_EMAIL } from '../lib/contact'

const socials = [
  { icon: <GitBranch size={16} />, href: '#', label: 'GitHub' },
  { icon: <Globe size={16} />, href: '#', label: 'LinkedIn' },
  { icon: <Mail size={16} />, href: `mailto:${SALES_EMAIL}`, label: 'Email' },
]

export default function Footer() {
  const { t } = useTranslation()

  const links = [
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.clients'), href: '#clients' },
    { label: t('nav.team'), href: '#team' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <footer className="border-t border-[#1e2030] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#" className="flex items-center gap-2.5">
              <img
                src="/kaferlabs-icon.png"
                alt=""
                className="h-8 w-8 rounded-lg"
              />
              <span className="font-semibold text-white text-sm tracking-tight">
                kafer<span className="gradient-text">labs</span>
              </span>
            </a>
            <p className="text-slate-600 text-xs max-w-xs text-center md:text-left">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-500 hover:text-white text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg border border-[#1e2030] bg-[#0f1117] hover:border-indigo-500/40 text-slate-500 hover:text-white flex items-center justify-center transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1e2030] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Kafer Labs. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
