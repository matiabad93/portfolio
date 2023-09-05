import Nav from "../Nav/Nav";
import '../Header/Header.css'

const name = "Matias A. Abad";

const Header = () => {
  return (
    <>
    <header>
      <div className="head">
      <h1 className="name">{name}</h1>
      <Nav/>
      </div>
      </header>
    </>
  );
};

export default Header;
