import MenuSection from "../components/menus/MenuSection";
import PageHeader from "../components/menus/PageHeader";
import MenuNav from "../components/menus/MenuNav";
import DrinkSection from "../components/menus/drinks/DrinkSection";
import { useContext } from "react";
import { MenuContext } from "../App";
import useScrollToTop from "../helpers/useScrollToTop";

const MenuPage: React.FC = () => {
  useScrollToTop();

  const { menu }: any = useContext(MenuContext);
  const { drinks }: any = useContext(MenuContext);

  return (
    <main className="menu-page page">
      <PageHeader
        title="MENU"
      />
      <MenuNav />
      {Object.keys(menu).length > 0 && <div className="menu-page_sections">
        {menu.adventurous.length > 0 && <MenuSection menuItems={menu.adventurous} />}
        {menu.authentic.length > 0 && <MenuSection menuItems={menu.authentic} />}
        {menu.desserts.length > 0 && <MenuSection menuItems={menu.desserts} />}
      </div>}
      {Object.keys(drinks).length && <div className="menu-page_sections" id="drinks">
        <header className="menu-page_sections_drinks-header">
          <h2>Drinks</h2>
          <span>đồ uống</span>
        </header>
        {drinks.cocktails.length > 0 && <DrinkSection drinkItems={drinks.cocktails} />}
        {drinks.shooters.length > 0 && <DrinkSection drinkItems={drinks.shooters} />}
        {drinks.beerOnTap.length > 0 && <DrinkSection drinkItems={drinks.beerOnTap} />}
        {drinks.bottledBeer.length > 0 && <DrinkSection drinkItems={drinks.bottledBeer} />}
        {drinks.soju.length > 0 && <DrinkSection drinkItems={drinks.soju} />}
        {drinks.sake.length > 0 && <DrinkSection drinkItems={drinks.sake} />}
        {drinks.nonAlcoholic.length > 0 && <DrinkSection drinkItems={drinks.nonAlcoholic} />}
      </div>}
    </main>
  );
}

export default MenuPage;