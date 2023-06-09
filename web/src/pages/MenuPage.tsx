import { useFetchMenu } from "../helpers/useFetchMenu";

import MenuSection from "../components/menus/MenuSection";
import PageHeader from "../components/menus/PageHeader";

const MenuPage: React.FC = () => {
  const menu: any = useFetchMenu();

  return (
    <div className="menu-page">
      <PageHeader
        title="MENU"
      />
      {Object.keys(menu).length && <div className="menu-page_sections">
        <MenuSection menuItems={menu.adventurous} />
        <MenuSection menuItems={menu.authentic} />
        <MenuSection menuItems={menu.desserts} />
      </div>}
    </div>
  );
}

export default MenuPage;