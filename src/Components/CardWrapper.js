import Cards from "./Cards";

function CardWrapper({ cards, addToCart, removeFromCart }) {
  return (
    <div className="card-wrapper">
      {cards.map((item) => {
        return (
          <Cards
            key={item.id}
            {...item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
    </div>
  );
}

export default CardWrapper;