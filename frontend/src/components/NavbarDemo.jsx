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
      name: "About us",
      link: '/about'
    } , 
    {
      name : 'Events' , 
      link : '/events'
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
            <div className="" onClick={()=>window.open('https://www.patreon.com/garvitpriyansh?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink' ,'_blank')}>
              <NavbarButton variant="secondary">Inner Circle</NavbarButton>
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
                onClick={() => {setIsMobileMenuOpen(false) ; window.open('https://www.patreon.com/garvitpriyansh?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink' ,'_blank') }}
                variant="primary"
                className="w-full">
                Inner Circle
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

