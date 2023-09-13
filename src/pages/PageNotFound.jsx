import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="errorContainer">
      <p className="errorContainer__Number">404</p>
      <p className="errorContainer__Text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="errorContainer__Link">
        Retourner sur la page d'accueil
      </NavLink>
    </main>
  );
}

export default PageNotFound;
