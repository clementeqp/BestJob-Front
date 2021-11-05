import Toogle from "../toogle/Toggle";
import logo from "../../../assets/logo/logoOb2.svg";

// ! NAVBAR con logo, toogle, y boton

function NavBar() {
  return (
    <nav>
      <a href="/" className="logo-main">
        <img src={logo} alt=""></img>{" "}
      </a>
      <Toogle className="color-toogle"></Toogle>
      <button className="cuelga_oferta" a="/">
        {" "}
        ¿Eres una empresa?
      </button>
    </nav>
  );
}

export default NavBar;
