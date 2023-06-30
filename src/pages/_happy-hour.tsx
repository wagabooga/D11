import { useContext, useEffect } from "react";

import { DataContext } from "../App";
import useScrollToTop from "../helpers/useScrollToTop";
import getMenuType from "../helpers/getMenuType";

import PageHeader from "../components/menuPages/PageHeader";
import MenuNav from "../components/menuPages/MenuNav";
import MenuSection from "../components/menuPages/food/MenuSection";
import DrinkSection from "../components/menuPages/drinks/DrinkSection";
import DietTable from "../components/menuPages/food/DietTable";

const HappyHourPage: React.FC = () => {
  useScrollToTop();

  useEffect(() => {
    document.title = "Happy Hour | District Eleven";
  }, []);

  const { data }: any = useContext(DataContext);
  const menu = data.menu;
  const drinks = data.drinks;

  const happyHourMenu = Object.entries(getMenuType(menu, "happyHour")).map(
    ([key, value]: [string, any]) => {
      if (value.length !== 0) {
        return <MenuSection key={key} menuItems={value} happyHour />;
      }
    }
  );

  const happyHourDrinksMenu = Object.entries(
    getMenuType(drinks, "happyHour")
  ).map(([key, value]: [string, any]) => {
    if (value.length !== 0) {
      return <DrinkSection key={key} drinkItems={value} happyHour />;
    }
  });

  return (
    <main className="happy-hour-page page">
      <PageHeader title="HAPPY HOUR MENU" />
      <MenuNav />

      <div className="menu-page_sections">
        {happyHourMenu}
        <DietTable />
      </div>

      <div className="menu-page_sections" id="drinks">
        <header className="menu-page_sections_drinks-header">
          <h2>Drinks</h2>
          <span>đồ uống</span>
        </header>
        {happyHourDrinksMenu}
      </div>
    </main>
  );
};

export default HappyHourPage;
