// src/components/Navbar.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FaBars, FaTimes, FaChevronDown, FaTelegram, FaShieldAlt } from 'react-icons/fa';
import { SiStellar } from 'react-icons/si';

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  subItems?: NavItem[];
}

interface NavbarProps {
  isScrolled?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);

  // Cerrar menú al cambiar ruta
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Definir navegación según la página actual
  const isAcademyPage = location.pathname === '/academia';

  const mainNavItems: NavItem[] = isAcademyPage 
    ? [
        {
          label: '← Volver a LUXKR+',
          href: '/',
        },
        
      ]
    : [
        {
          label: 'Inicio',
          href: '#inicio',
        },
        {
          label: 'Servicios',
          href: '#servicios',
          subItems: [
            { label: 'Auditorías Web2/Web3', href: '#servicios' },
            { label: 'Capacitaciones', href: '#capacitaciones' },
            { label: 'Casos de Éxito', href: '#casos' },
          ],
        },
        {
          label: 'Equipo',
          href: '#equipo',
        },
        {
          label: 'Academia',
          href: '/academia',
        },
        {
          label: 'Contacto',
          href: '#contacto',
        },
      ];

  const handleNavClick = (item: NavItem, e?: React.MouseEvent) => {
    if (item.external) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
      return;
    }

    if (item.href.startsWith('/')) {
      navigate(item.href);
    } else if (item.href.startsWith('#')) {
      const id = item.href.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        e?.preventDefault();
        if (location.pathname !== '/') {
          navigate('/', { state: { scrollTo: id } });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Efecto para scroll después de navegar
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Limpiar el estado
          navigate(location.pathname, { replace: true, state: {} });
        }
      }, 100);
    }
  }, [location.state, navigate, location.pathname]);

  const Logo = () => (
    <Link 
      to="/" 
      className="flex items-center gap-3 group"
      onClick={() => {
        if (location.pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }}
    >
      <div className="p-2 bg-linear-to-br from-[#9333EA]/20 to-[#CC00CC]/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
        {isAcademyPage ? (
          <FaShieldAlt className="text-2xl text-white" />
        ) : (
          <SiStellar className="text-2xl text-white" />
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-wider text-white">
          {isAcademyPage ? 'CYBERACADEMY' : 'LUXKR+'}
        </span>
        <span className="text-xs text-[#9333EA] font-mono tracking-wide">
          {isAcademyPage ? 'Formación Élite' : 'Security Auditing Firm'}
        </span>
      </div>
    </Link>
  );

  const DesktopNav = () => (
    <nav className="hidden lg:flex items-center gap-8">
      {mainNavItems.map((item) => {
        if (item.subItems && item.subItems.length > 0) {
          return (
            <DropdownMenu.Root key={item.label}>
              <DropdownMenu.Trigger asChild>
                <button className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 focus:outline-none">
                  {item.label}
                  <FaChevronDown className="text-xs" />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="min-w-55 bg-[#1a1a1a] rounded-lg p-2 shadow-xl border border-white/10 z-50"
                  sideOffset={5}
                >
                  {item.subItems.map((subItem) => (
                    <DropdownMenu.Item
                      key={subItem.label}
                      className="text-sm text-gray-300 rounded-md px-3 py-2 hover:bg-[#9333EA]/20 hover:text-white cursor-pointer outline-none transition-colors"
                      onSelect={() => handleNavClick(subItem)}
                    >
                      {subItem.label}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          );
        }

        return (
          <button
            key={item.label}
            onClick={(e) => handleNavClick(item, e)}
            className="text-sm text-gray-300 hover:text-white transition-colors hover:scale-105"
          >
            {item.label}
          </button>
        );
      })}

      <button
        onClick={() => window.open('https://t.me/+R2JMS0zIj51iZTMx', '_blank')}
        className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-[#9333EA] to-[#CC00CC] text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-[#9333EA]/30 transition-all duration-300 hover:scale-105"
      >
        <FaTelegram className="text-base" />
        <span>{isAcademyPage ? 'Ingresar' : 'Unirse'}</span>
      </button>
    </nav>
  );

  const MobileNav = () => (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0a0f] border-t border-white/10 shadow-2xl z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              {mainNavItems.map((item) => (
                <div key={item.label} className="border-b border-white/5 last:border-b-0">
                  {item.subItems && item.subItems.length > 0 ? (
                    <div className="pb-3">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full text-left py-3 text-gray-300 hover:text-white transition-colors"
                      >
                        <span>{item.label}</span>
                        <FaChevronDown 
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {activeDropdown === item.label && (
                        <div className="ml-4 space-y-2 border-l border-white/10 pl-4 py-2">
                          {item.subItems.map((subItem) => (
                            <button
                              key={subItem.label}
                              onClick={(e) => handleNavClick(subItem, e)}
                              className="block w-full text-left py-2 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={(e) => handleNavClick(item, e)}
                      className="block w-full text-left py-3 text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}

              <button
                onClick={() => window.open('https://t.me/+R2JMS0zIj51iZTMx', '_blank')}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-[#9333EA] to-[#CC00CC] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#9333EA]/30 transition-all duration-300 mt-4"
              >
                <FaTelegram className="text-base" />
                <span>{isAcademyPage ? 'Ingresar al Telegram' : 'Unirse al Telegram'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#181824]/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;