import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            LUCAS HAS BEEN SERVING FRESH BAKED HOMESTYLE PIZZA SINCE 1984.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WHERE TO FIND US</h1>
          <p className={styles.text}>
            89 Pike St #110
            <br /> Seattle, WA 98101
            <br /> (425) 555-5555
          </p>
          <p className={styles.text}>
            180 Denny Way
            <br /> Seattle, WA 98109
            <br /> (425) 555-5555
          </p>
          <p className={styles.text}>
            1857 E Mercer St
            <br /> Seattle, WA 98112
            <br /> (425) 555-5555
          </p>
          <p className={styles.text}>
            4315 196th St SW
            <br /> Lynnwood, WA 98036
            <br /> (425) 555-5555
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HOURS OF OPERATION</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 10AM – 10PM
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 11AM – 12AM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
