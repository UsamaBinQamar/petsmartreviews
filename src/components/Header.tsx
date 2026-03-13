import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: "About Us", to: "/about" },
    { label: "Cat Behaviour", to: "/article/itch-relief-dogs-2025" },
    { label: "Stress & Anxiety", to: "/article/itch-relief-dogs-2025" },
    { label: "Multi-Cat Homes", to: "/article/itch-relief-dogs-2025" },
    { label: "Pheromone Science", to: "/article/itch-relief-dogs-2025" },
    { label: "Vet Advice", to: "/article/itch-relief-dogs-2025" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b-2 border-white/15"
      style={{
        backgroundImage:
          "radial-gradient(1200px 140px at 50% 0%, rgba(255,255,255,.06), rgba(255,255,255,0) 60%), linear-gradient(180deg, #050a17, #081026)",
      }}
    >
      <div className="container mx-auto px-5 md:px-6 h-24">
        <div className="flex h-full items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center no-underline outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-xl text-white font-bold text-lg md:text-xl"
            aria-label="PetSmartReviews.com home"
          >
            PetSmartReviews.com
          </Link>

          <button
            type="button"
            className="grid size-14 shrink-0 place-items-center rounded-xl bg-transparent text-white/90 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/55 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <img
              src="/imgi_2_hamburger.svg"
              alt="Menu"
              className="h-5 w-8"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          <button
            className="absolute inset-0 w-full h-full bg-black/40"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          />
          <nav className="absolute top-0 right-0 h-full w-72 max-w-full bg-[#316DFF] text-white shadow-xl flex flex-col pt-24 pb-10 px-6 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-base font-semibold tracking-wide uppercase text-white/80">
                Menu
              </span>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  aria-hidden="true"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-4 text-left">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block text-lg font-semibold tracking-wide hover:text-white/80 focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
