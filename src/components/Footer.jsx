import { Link } from "react-router-dom";
import logo from "../assets/logo/logo_footer.png";

function Footer() {
  const style = { backgroundColor: "black" };

  return (
    <footer>
      <Link to="/">
        <figure>
          <img src={logo} alt="logo du footer" style={style} />
        </figure>
      </Link>
    </footer>
  );
}

export default Footer;
