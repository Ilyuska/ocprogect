import classes from "./Home.module.css";
import { CaruselBox } from "./CaruselBox/CaruselBox";
import { Photos } from "./Photos/Photos";
import { Reservation } from "./Reservation/Reservation";
import { AboutRest } from "./AboutRest/AboutRest";
function Home() {
  return (
    <>
      <CaruselBox />
      <AboutRest title="AboutRest" />
      <Photos title="Photo Gallery" />
      <Reservation title="Reservation" />
    </>
  );
}

export { Home };
