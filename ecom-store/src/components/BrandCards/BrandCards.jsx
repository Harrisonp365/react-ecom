const BrandCards = ({ product }) => {
  //Get first listed product from each brand and display that as the card image
  //Then click into card to see all graphics cards from that brand
  return (
    <div>
      <div>
        Nvidia Branded Cards
        {product.brand}
      </div>
      <div>
        AMD Branded Cards
        {product.brand}
      </div>
    </div>
  );
};

export default BrandCards;
