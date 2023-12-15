import classes from "./Reservation.module.css";
import { Forma } from "./Forma/Forma";
function Reservation(props) {
  return (
    <>
      <div className={classes.mainReserv}>
        <div className={classes.title}>{props.title}</div>
        <Forma />
      </div>
    </>
  );
}

export { Reservation };
