interface IProps {
  drinkItem: {
    soldOut?: boolean;
    type: string;
    name: string;
    brewery?: string;
    description?: string;
    size?: number;
    priceByGlass: number;
    priceByPitcher?: number;
    happyHourPrice?: number;
    takeOut: boolean;
    happyHour: boolean;
    alcoholContent?: number;
  }
}

const GlassItem: React.FC<IProps> = ({ drinkItem }) => {
  return (
    <li className={`menu-item ${drinkItem.soldOut && `sold-out`}`}>
      <div className="menu-item_main">
        <div className="menu-item_main_words">
          <header>{drinkItem.name}</header>
          {drinkItem.alcoholContent && <span>{drinkItem.alcoholContent}oz</span>}
          <p>{drinkItem.description}</p>
        </div>

        <div className="menu-item_main_price">
          <span>{drinkItem.priceByGlass}</span>
        </div>
      </div>
    </li>
  )
}

export default GlassItem;