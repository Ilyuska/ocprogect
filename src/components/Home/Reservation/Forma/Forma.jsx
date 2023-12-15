import classes from "./Forma.module.css";
import Map from "./Map.png";

function Forma() {
  return (
    <>
      <div className={classes.forma}>
        <div className={classes.forma_map}>
          <img src={Map} alt="map" />
        </div>
        <div className={classes.forma_text}>
          <h2 className={classes.forma_title}>Book a Table</h2>
          <div className={classes.forma_polya}>
            <input
              className={classes.forma_pole}
              type="text"
              placeholder="Your Name"
            ></input>
            <input
              className={classes.forma_pole}
              type="tel"
              placeholder="Phone"
            ></input>
            <input className={classes.forma_pole} type="date" placeholder="" />
            <input
              className={classes.forma_pole}
              type="email"
              placeholder="Email"
            ></input>
          </div>
          <textarea
            className={classes.dopoln}
            type="text"
            placeholder="For Notes"
          ></textarea>

          <button type="submit">Book</button>
        </div>
      </div>
    </>
  );
}

export { Forma };
