import { Rabotnik } from "./Rabotnik/Rabotnik";
import classes from "./About.module.css";

function About() {
  return (
    <>
      <div className={classes.blok_rab}>
        <h2 className={classes.rab_title}>Personal</h2>
        <div className={classes.rab_area}>
          <Rabotnik
            pict={require("../About/imgPovora/Povar1.png")}
            name="Попов А.А."
            job="Повар"
          />
          <Rabotnik
            pict={require("../About/imgPovora/Povar2.png")}
            name="Иванов И.И."
            job="Повар"
          />
          <Rabotnik
            pict={require("../About/imgPovora/Admin.png")}
            name="Прокофьева Е.Э."
            job="Администратор"
          />
          <Rabotnik
            pict={require("../About/imgPovora/Ofic.png")}
            name="Петров П.П."
            job="Официант"
          />
        </div>
      </div>
    </>
  );
}

export { About };
