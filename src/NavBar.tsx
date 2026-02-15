/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { NavLink } from 'react-router-dom'
import innoFest26 from './assets/inno26.png'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  
  return (
    <div>
      {children}
    </div>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/main' },
    { name: 'Events', href: '/events' },
  ]

  return (
    <nav className={`sticky top-0 z-50 bg-white/15 backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 lg:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium text-black   hover:bg-gray-200 hover:text-teal-600`}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-center">
            <div className="max-w-lg w-full lg:max-w-xs">
              <div className="innologo">
                 <img src={innoFest26} className='innologo' alt='InnoFest'></img>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:ml-6">
            
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 hover:text-teal-400`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}