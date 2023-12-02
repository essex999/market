import styles from "./itemCard.module.css";
import imageLogo from "../../assets/icon_03.png";
function ItemCard() {
  return (
    <div className={styles.cards__item}>
      <div className={`${styles.cards__card} ${styles.card}`}>
        <div className={styles.card__image}>
          <a href="#" target="_blank">
            <img src={imageLogo} alt="picture" />
          </a>
        </div>
        <div className={styles.card__content}>
          <a href="" target="_blank">
            <h3 className={styles.card__title}>
              Ракетка для большого тенниса Triumph Pro ST
            </h3>
          </a>
          <p className={styles.card__price}>2&nbsp;200&nbsp;₽</p>
          <p className={styles.card__place}>Санкт Петербург</p>
          <p className={styles.card__date}>Сегодня в&nbsp;10:45</p>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
