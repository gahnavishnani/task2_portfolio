import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const linkStyle = (path) =>
    `hover:text-green-400 transition ${
      location.pathname === path ? "text-green-400 font-semibold" : ""
    }`;

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-green-400">Gahna's Portfolio</h1>
      <div className="space-x-6 text-sm sm:text-base">
        <Link to="/" className={linkStyle("/")}>Home</Link>
        <Link to="/about" className={linkStyle("/about")}>About</Link>
        <Link to="/projects" className={linkStyle("/projects")}>Projects</Link>
        <Link to="/contact" className={linkStyle("/contact")}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;