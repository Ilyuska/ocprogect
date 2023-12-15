import classes from "./AboutRest.module.css";
import ofic from "./Ofic.png";
import smal from "./small.png";

function AboutRest(props) {
  return (
    <>
      <div className={classes.aboutRest}>
        <div className={classes.aboutRest_text}>
          <div className={classes.aboutRest_text_title}>Nice Plate</div>
          <div className={classes.aboutRest_text_text}>
            Nice Plate – место, где гастрономическое искусство сочетается с
            уютной атмосферой, чтобы создать неповторимый опыт для наших гостей.
            "Nice Plate" - это не просто ресторан, это история вкуса и
            элегантности, начинающаяся с каждого блюда и пробуждающая в вас
            чувство удовлетворения и восхищения. Наши талантливые шеф-повара с
            любовью создают изысканные блюда, объединяя современные тренды и
            традиционные кулинарные техники.
          </div>
        </div>
        <div className={classes.aboutRest_imgs}>
          <img className={classes.aboutRest_imgs_item1} src={ofic} alt="ofic" />
          <img className={classes.aboutRest_imgs_item2} src={smal} alt="ofic" />
        </div>
      </div>
    </>
  );
}

export { AboutRest };
