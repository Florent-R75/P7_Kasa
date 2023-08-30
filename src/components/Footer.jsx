import logo from "../assets/logo/logo_footer.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo du footer" className="footer__logo" />
      <p className="footer__text-copyright">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
