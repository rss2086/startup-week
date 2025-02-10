"use client"
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Logo from '@/images/eclub-logo.png'

const navigation = {
  main: [
    { name: 'Schedule', href: '/schedule' },
    { name: 'Summit', href: '/summit' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Organizers', href: '/organizers' },
    { name: 'FAQ', href: '/faq' },
  ]
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium text-[#9eff65] hover:text-white transition-colors duration-200 flex items-center gap-1"
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

function NavLink({ 
  href, 
  children
}: { 
  href: string
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors duration-200 ${
        isActive 
          ? 'text-[#9eff65] font-semibold'
          : 'text-gray-300 hover:text-[#9eff65]'
      }`}
    >
      {children}
    </Link>
  )
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu')
      if (nav && !nav.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="relative z-50 flex-none bg-[#1a1150]/95 backdrop-blur-sm sticky top-0">
      <Container className="flex flex-wrap items-center justify-between py-4 lg:flex-nowrap">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="E-Club Logo"
              width={120}
              height={120}
              className="h-16 w-auto invert"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2b1c8c]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          <div className="flex items-center gap-3 text-lg font-bold text-[#9eff65]">
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider text-gray-400">Startup Week</span>
              <span className="text-xl">March 17-21, 2025</span>
            </div>
          </div>
          <div className="h-4 w-px bg-gray-600" />
          <div className="flex items-center space-x-5">
            {navigation.main.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="h-4 w-px bg-gray-600" />
          <ExternalLink href="https://whartonentrepreneurship.com">
            Visit E-Club Website
          </ExternalLink>
          <Button href="#tickets">Get Your Ticket</Button>
        </nav>

        {/* Mobile navigation */}
        <div
          id="mobile-menu"
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:hidden absolute top-full left-0 right-0 bg-[#1a1150]/95 backdrop-blur-sm border-t border-gray-800`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="flex flex-col items-center justify-center gap-1 p-3">
              <span className="text-xs uppercase tracking-wider text-gray-400">Startup Week</span>
              <span className="text-xl font-bold text-[#9eff65]">March 17-21, 2025</span>
            </div>
            <div className="grid grid-cols-2 gap-2 p-2">
              {navigation.main.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="p-2 border-t border-gray-800">
              <ExternalLink href="https://whartonentrepreneurship.com">
                Visit E-Club Website
              </ExternalLink>
            </div>
            <div className="p-2">
              <Button href="#tickets" className="w-full">
                Get Your Ticket
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
