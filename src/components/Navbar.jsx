import "../css/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
