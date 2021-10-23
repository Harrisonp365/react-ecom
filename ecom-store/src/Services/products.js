const products = [
  {
    name: "RTX 3090",
    variant: "Founders",
    price: 10000,
    favourited: false,
    imageUrl:
      "https://www.pcworld.com/wp-content/uploads/2021/09/dsc01056-100858556-orig.jpg?resize=1240%2C826&quality=50&strip=all",
  },
  {
    name: "AMD 6900XT",
    variant: "Nitro Sapphire",
    price: 3000,
    favourited: true,
    imageUrl:
      "https://www.pcworld.com/wp-content/uploads/2021/09/dsc01056-100858556-orig.jpg?resize=1240%2C826&quality=50&strip=all",
  },
  {
    name: "RTX 2080Ti",
    variant: "Founders",
    price: 2000,
    favourited: false,
    imageUrl:
      "https://www.pcworld.com/wp-content/uploads/2021/09/dsc01056-100858556-orig.jpg?resize=1240%2C826&quality=50&strip=all",
  },
];

const idProducts = products.map((product, index) => {
  product.id = index + 1;
  return product;
});

export default idProducts;
