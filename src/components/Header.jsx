import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt1, HiOutlineX } from "react-icons/hi";


export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="relative bg-blue-100 text-black shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="md:text-xl font-semibold ">School Books Archive</h1>
        <input 
          type="text" 
          name="search bar" 
          placeholder="Search books" 
          className="bg-white border border-amber-900 rounded-xl p-2 text-black"
          id="main-search-bar" />
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/primary" className="hover:underline">Primary School</Link>
          <Link to="/highschool" className="hover:underline">High School </Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt1 />}
        </button>
      </div>

      {/* Mobile view/ responsiveness */}
      <div
        ref={menuRef}
        className={`absolute top-full left-0 w-full bg-white shadow-lg text-center z-50 transform transition-all duration-300 ease-in-out origin-top ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <nav>
          <Link to="/" onClick={handleLinkClick} className="block p-3 hover:bg-gray-200">Home</Link>
          <Link to="/primary" onClick={handleLinkClick} className="block p-3 hover:bg-gray-200">Primary School</Link>
          <Link to="/highschool" onClick={handleLinkClick} className="block p-3 hover:bg-gray-200">High School</Link>
          <Link to="/about" onClick={handleLinkClick} className="block p-3 hover:bg-gray-200">About</Link>
        </nav>
      </div>
    </header>
  );
}
