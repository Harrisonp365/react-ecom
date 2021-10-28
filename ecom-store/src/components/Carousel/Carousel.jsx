import styles from "./Carousel.module.scss";
import Carousel from "react-bootstrap/Carousel";

const ProdCarousel = () => {
  return (
    <div>
      <Carousel variant="dark" className={styles.Carousel}>
        <Carousel.Item>
          <img
            className={styles.Carousel_img}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2FAcgBa9CFyqV3rKQuVLsyfIa0590WHntXguSXpeI56nc.jpg%3Fauto%3Dwebp%26s%3D91153fdcf7daf726e598e6d3452c4d2d66cb39ee&f=1&nofb=1"
            alt="RTX3090 Founders Edition"
          />
          <Carousel.Caption>
            <h3 className={styles.carousel_title}>RTX3090 Founders Edition</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.Carousel_img}
            src="https://cdn.videocardz.com/1/2020/12/SAPPHIRE-Radeon-RX-6900-XT-16GB-NITRO8.jpg"
            alt="AMD 6900XT Sapphire Nitro"
          />
          <Carousel.Caption>
            <h3 className={styles.carousel_title}>AMD 6900XT Sapphire Nitro</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.Carousel_img}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdigitaalwinkel.com%2F58481%2Fmsi-geforce-rtx-3080-ti-suprim-x-12g-nvidia-12-gb-gddr6x-msi-geforce-rtx-3080-ti-suprim-x-12g-grafische-processor-familie-nvidia.jpg&f=1&nofb=1"
            alt="MSI RTX 3080Ti"
          />
          <Carousel.Caption>
            <h3 className={styles.carousel_title}>MSI RTX 3080Ti SUPRIM X</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.Carousel_img}
            src="https://www.svb.mc/wp-content/uploads/2021/03/6800XT-boite-et-carte-debout-1024x777.jpg"
            alt="AMD 6800XT Sapphire Nitro"
          />
          <Carousel.Caption>
            <h3 className={styles.carousel_title}>AMD 6800XT Sapphire Nitro</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default ProdCarousel;
