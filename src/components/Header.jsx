import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">
          School Books Archive
        </h1>
        <input 
          type="text" 
          name="search bar" 
          placeholder="Search books" 
          className="bg-white border border-amber-900 rounded-xl p-2 text-black"
          id="main-search-bar" />
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/primary" className="hover:underline">
            Primary
          </Link>
          <Link to="/highschool" className="hover:underline">
            High School
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
