import styles from "./Carousel.module.scss";
import Carousel from "react-bootstrap/Carousel";

const ProdCarousel = () => {
  return (
    <div>
      <Carousel className={styles.carousel}>
        <Carousel.Item className={styles.carousel_item}>
          <img
            className={styles.carousel_item_image}
            src="https://www.pcworld.com/wp-content/uploads/2021/09/dsc01056-100858556-orig.jpg?resize=1240%2C826&quality=50&strip=all"
            alt="RTX3090 Founders Edition"
          />
          <Carousel.Caption>
            <h3>RTX3090 Founders Edition</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cdn.videocardz.com/1/2020/12/SAPPHIRE-Radeon-RX-6900-XT-16GB-NITRO8.jpg"
            alt="AMD 6900XT Sapphire Nitro"
          />
          <Carousel.Caption>
            <h3>AMD 6900XT Sapphire Nitro</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cdn.videocardz.com/1/2020/12/SAPPHIRE-Radeon-RX-6900-XT-16GB-NITRO8.jpg"
            alt="AMD 6900XT Sapphire Nitro"
          />
          <Carousel.Caption>
            <h3>AMD 6900XT Sapphire Nitro</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cdn.videocardz.com/1/2020/12/SAPPHIRE-Radeon-RX-6900-XT-16GB-NITRO8.jpg"
            alt="AMD 6900XT Sapphire Nitro"
          />
          <Carousel.Caption>
            <h3>AMD 6900XT Sapphire Nitro</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default ProdCarousel;
