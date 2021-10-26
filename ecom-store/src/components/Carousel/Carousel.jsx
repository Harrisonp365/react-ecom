import styles from "./Carousel.module.scss";
import Carousel from "react-bootstrap";
//import { getProducts } from "../../Services/dbCRUD";

const Carousel = () => {
    return (
        <div className={styles.carousel}>
            <Carousel>
                {/* <Carousel.Item interval={4000}> */}
                <Carousel.Item>
                    <img src={} alt="First slide" />
                    <Carousel.Caption>
                        <h3>RTX 3090</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>AMD 6900XT</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>AMD 6800XT</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={} alt="Fourth slide" />
                    <Carousel.Caption>
                        <h3>RTX 3080Ti</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};
export default Carousel;
