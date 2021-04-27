import "../csss/header.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";



let button = (
  <Button variant="contained" color="primary" startIcon={<PersonIcon />}>
    Profile
  </Button>
);

let button1 = (
  <Button id="btn1" variant="contained" color="secondary">
    Secondary
  </Button>
);

let button2 = (
  <Button variant="contained" startIcon={<ExitToAppIcon />}>
    Log Out
  </Button>
);

export default function Header() {
  return (
    <header className="nav">
      <ul className="nav_buttons_ul">
        <li className="nav_button">
          <Link to="/homePage">{button1}</Link>
        </li>
        <li className="nav_button">
          <Link to="/profilePage">{button}</Link>
        </li>
      </ul>

      <h1 id="title">
        <Link to={{ pathname: "/groupPage", state: { name: "name" } }}>
          Pire
        </Link>
      </h1>
      <li id="logoutbtn">
        <Link to="/app">{button2}</Link>
      </li>
    </header>
  );
}
