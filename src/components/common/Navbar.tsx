import { Button } from "../ui/button";
import Logo from "@/assets/images/Logo.svg";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About us", href: "#" },
  { name: "Programs", href: "#" },
  { name: "Treatments", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Enquiry", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Contact us", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isClient, setIsClient] = useState(false); // To track if it's client-side

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // This will run only on the client
    setIsClient(true);

    if (isClient) {
      const handleScroll = () => {
        if (headerRef.current) {
          const headerHeight = headerRef.current.offsetHeight;
          setIsSticky(window.scrollY > headerHeight);
        }
      };

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(target) &&
          buttonRef.current &&
          !buttonRef.current.contains(target)
        ) {
          setOpen(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      if (open) document.addEventListener("mousedown", handleClickOutside);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [open, isClient]);

  useEffect(() => {
    // Get the current pathname, but only after the component has mounted
    if (isClient) {
      const currentPath = window.location.pathname;
      setActiveLink(currentPath);
    }
  }, [isClient]);

  return (
    <header
      ref={headerRef}
      className={`bg-white px-4 z-50 ${
        isSticky
          ? "fixed top-0 left-0 right-0 shadow-md transition-all duration-300"
          : "relative"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-[14px]">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={Logo.src} alt="Logo" className="w-[178px] sm:w-[242px]" />
        </a>

        {/* Mobile Menu Toggle */}
        <Button
          ref={buttonRef}
          className="bg-transparent text-black border md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </Button>

        
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden absolute inset-x-0 bg-white transition-transform duration-500 shadow-[0_33px_30px_rgba(0,0,0,0.2)] ${
          open ? "translate-x-0" : "translate-x-[-800px]"
        }`}
      >
        <nav className="flex flex-col items-start p-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
