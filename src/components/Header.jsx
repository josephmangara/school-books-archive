import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";


export default function Header() {
  const [open, setOpen] = useState(false);

  
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold ">School Books Archive</h1>
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

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt1 />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t">
          <Link to="/" className="block p-3 border-b">Home</Link>
          <Link to="/primary" className="block p-3 border-b">Primary School</Link>
          <Link to="/highschool" className="block p-3 border-b">High School </Link>
          <Link to="/about" className="block p-3 border-b">About</Link>
        </nav>
      )}
    </header>
  );
}
