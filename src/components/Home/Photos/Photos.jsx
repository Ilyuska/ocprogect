import classes from "./Photos.module.css";

import Pic1 from "./img/1.png";
import Pic2 from "./img/2.png";
import Pic3 from "./img/3.png";
import Pic4 from "./img/4.png";
import Pic5 from "./img/5.png";
import Pic6 from "./img/6.png";

function Photos(props) {
  return (
    <>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.gallery}>
        <img className={classes.photos_item} src={Pic1} alt="eda" />
        <img className={classes.photos_item} src={Pic2} alt="eda" />
        <img className={classes.photos_item} src={Pic3} alt="eda" />
        <img className={classes.photos_item} src={Pic4} alt="eda" />
        <img className={classes.photos_item} src={Pic5} alt="eda" />
        <img className={classes.photos_item} src={Pic6} alt="eda" />
      </div>
    </>
  );
}

export { Photos };
