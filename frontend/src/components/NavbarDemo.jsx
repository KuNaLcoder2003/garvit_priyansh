"use client";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ResizeableNavbar"
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Our band",
      link: "/bandInfo",
    },
    {
      name: "Releases",
      link: '/music'
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <div className="" onClick={()=>navigate('/events')}>
              <NavbarButton variant="secondary">Events</NavbarButton>
            </div>
            <NavbarButton variant="primary" href={'https://forms.gle/1t2aErfkLNEySDPUA'}>Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <p
                key={`mobile-link-${idx}`}
                onClick={() => { setIsMobileMenuOpen(false); navigate(`${item.link}`) }}
                className="relative text-neutral-600 ">
                <span className="block">{item.name}</span>
              </p>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => {setIsMobileMenuOpen(false) ; navigate('/events') }}
                variant="primary"
                className="w-full">
                Events
              </NavbarButton>
              <NavbarButton
              href={'https://forms.gle/1t2aErfkLNEySDPUA'}
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* <DummyContent /> */}
      {/* Navbar */}
    </div>
  );
}

