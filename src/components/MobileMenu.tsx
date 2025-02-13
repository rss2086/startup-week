'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CountdownTimer } from './CountdownTimer'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: { name: string; href: string }[]
}

function NavLink({ 
  href, 
  children,
  onClick
}: { 
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-lg font-medium transition-colors duration-200 ${
        isActive 
          ? 'text-[#9eff65] font-semibold'
          : 'text-gray-300 hover:text-[#9eff65]'
      }`}
    >
      {children}
    </Link>
  )
}

function ExternalLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="text-lg font-medium text-[#9eff65] hover:text-white transition-colors duration-200 flex items-center gap-1"
    >
      {children}
      <svg
        className="w-3 h-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </Link>
  )
}

export function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#1a1150] shadow-xl z-[9999] lg:hidden"
            style={{ touchAction: 'none' }}
          >
            <div className="flex h-[100dvh] flex-col overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-gray-400">Startup Week</span>
                  <span className="text-xl font-bold text-[#9eff65]">March 17-21, 2025</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              
              <motion.nav 
                className="flex-1 overflow-y-auto overscroll-contain bg-[#1a1150] px-4 py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-sm font-bold text-[#9eff65]">Time until Startup Week</h1>
                </div>
                <div className="flex justify-center mb-8">
                  <CountdownTimer/>
                </div>
                <div className="flex flex-col space-y-8">
                  <div className="grid grid-cols-1 gap-6">
                    {navigation.map((item) => (
                      <NavLink key={item.name} href={item.href} onClick={onClose}>
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-800 pt-8">
                    <ExternalLink href="https://whartonentrepreneurship.com" onClick={onClose}>
                      Visit E-Club Website
                    </ExternalLink>
                  </div>
                  
                  <div className="pt-2 pb-8">
                    <Button href="#tickets" className="w-full text-lg" onClick={onClose}>
                      Get Your Ticket
                    </Button>
                  </div>
                </div>
              </motion.nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 