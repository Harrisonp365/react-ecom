import styles from "./BrandCards.module.scss";
import { Link } from "react-router-dom";

const BrandCards = ({ product }) => {
  //Get first listed product from each brand and display that as the card image
  //Then click into card to see all graphics cards from that brand
  return (
    <div className={styles.Brand_container}>
      <div className={styles.Brand_card}>
        <h2 className={styles.Brand_card_title}>AMD Graphics Cards</h2>
        <Link to="/products/amd">
          <img
            className={styles.Brand_card_img}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2020%2F10%2FAMD-Radeon-RX-6000-Series_Big-Navi-GPU_Graphics-Card_1.png&f=1&nofb=1"
          ></img>
        </Link>
      </div>
      <div className={styles.Brand_card}>
        <h2 className={styles.Brand_card_title}>Nvidia Graphics Cards</h2>
        <Link to="/products/nvidia">
          <img
            className={styles.Brand_card_img}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2020%2F05%2FNVIDIA-Ampere-GA100-GPU_7nm-Tesla-A100_Next-Gen_10-2060x859.png&f=1&nofb=1"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default BrandCards;
