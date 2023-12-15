import classes from "./Rabotnik.module.css";

function Rabotnik(props) {
  return (
    <>
      <div className={classes.Rabotnik}>
        <img
          src={props.pict}
          alt="sotrudnik"
          className={classes.Rabotnik_pic}
        />
        <div className={classes.Rabotnik_job}>
          {props.job}: {props.name}
        </div>
      </div>
    </>
  );
}

export { Rabotnik };
