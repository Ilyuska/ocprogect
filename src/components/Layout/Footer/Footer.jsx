import classes from "./Footer.module.css";
import logo from "../../../img/Logo.png";
import { Us } from "./us/us";

function Footer() {
  return (
    <footer>
      <div className={classes.us}>
        <img src={logo} alt="logo" className={classes.footer_logo} />
        <Us title="Aдрес:" info="г. Пермь, ул. Пушкина, д. 27" />
        <Us title="Время работы:" info="ПН-ВС: 9:00-23:00" />
        <Us title="Телефон:" info="+7 (800) 555-35-35" />
      </div>
      <div className={classes.links}>Useful Links</div>
      <div className={classes.subs}>Subscribe</div>
    </footer>
  );
}

export { Footer };
