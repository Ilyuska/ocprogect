import classes from "./Delicios.module.css";

function Delicios(props) {
  return (
    <>
      <div className={classes.bludo_item}>
        <img src={props.pict} alt="bludo_pict" className={classes.bludo_pict} />
        <div className={classes.info_bl}>
          <div className={classes.bludo_title}>{props.titleBludo}</div>
          <div className={classes.bludo_info}>{props.aboutBludo}</div>
          <div className={classes.bludo_select}>Заказать</div>
        </div>
      </div>
    </>
  );
}

export { Delicios };
