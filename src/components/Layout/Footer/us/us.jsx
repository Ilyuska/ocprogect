import classes from "./us.module.css";

function Us(props) {
  return (
    <div className={classes.footer_inf}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.info}>{props.info}</div>
    </div>
  );
}

export { Us };
