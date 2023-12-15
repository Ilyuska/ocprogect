import { Delicios } from "./Delicios/Delicios";
import classes from "./Menu.module.css";

function Menu() {
  return (
    <div className={classes.bludo}>
      <Delicios
        pict={require("../Menu/imgDishes/1Losos.png")}
        titleBludo="Лосось с медово-горчичным глазурью"
        aboutBludo="Сочный кусок лосося, запеченный с медово-горчичной глазурью, подается на подушке из томленных овощей."
      />
      <Delicios
        pict={require("../Menu/imgDishes/2Resotto.png")}
        titleBludo="Ризотто с тыквой и сливочным сыром"
        aboutBludo="Кремовое ризотто, приготовленное с тыквой и обогащенное нежным сливочным сыром, украшено свежими листьями базилика."
      />
      <Delicios
        pict={require("../Menu/imgDishes/3Medallions.png")}
        titleBludo="Медальоны из телятины с соусом из красного вина"
        aboutBludo="Нежные медальоны из телятины, поданные с ароматным соусом из красного вина, с картофельным пюре и жареными лесными грибами."
      />
      <Delicios
        pict={require("../Menu/imgDishes/Soop.png")}
        titleBludo="Карри с кокосовым молоком и креветками"
        aboutBludo="Ароматное карри с сочными креветками, овощами и кокосовым молоком, подается с ароматным базмати рисом и лимонными дольками."
      />
      <Delicios
        pict={require("../Menu/imgDishes/5Pasta.png")}
        titleBludo="Паста с тигровыми креветками"
        aboutBludo="Легкая паста из домашнего теста с большими тигровыми креветками, заправленная свежим лимонным соусом и посыпанная пармезаном."
      />
      <Delicios
        pict={require("../Menu/imgDishes/6Turkey.png")}
        titleBludo="Филе индейки с клюквенным соусом"
        aboutBludo="Сочное филе индейки, подается с ароматным клюквенным соусом, карамелизованными морковками и картошкой-гратен."
      />
      <Delicios
        pict={require("../Menu/imgDishes/7CheesPlats.png")}
        titleBludo="Сырная тарелка с медом и орехами"
        aboutBludo="Разнообразие отборных сыров, дополненных натертыми орехами, свежим медом и подается с хрустящими ломтями свежего багета."
      />
      <Delicios
        pict={require("../Menu/imgDishes/8Tirammisu.png")}
        titleBludo="Десерт Тирамису"
        aboutBludo="Классический тирамису, приготовленный в стеклянной посуде, с мягкими слоями маскарпоне и пропитанным кофе бисквитом."
      />
    </div>
  );
}

export { Menu };
