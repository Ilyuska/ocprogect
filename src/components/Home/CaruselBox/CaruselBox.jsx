import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Rest from "./img/Rest.png";
import Wom from "./img/Wom.png";
import classes from "./CaruselBox.module.css";

function CaruselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className={classes.carus} src={Rest} alt="rest" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={classes.carus} src={Wom} alt="wom" />
      </Carousel.Item>
    </Carousel>
  );
}

export { CaruselBox };
