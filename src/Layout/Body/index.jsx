
import styles from "./Hero.module.css";
import body from "./body.svg";

export const Body = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>ParkingHub</h1>
        <p className={styles.description}>
          Una empresa que te brinda la mejor experiencia en estacionamientos en la ciudad de Perú y el mundo.
        </p>  
      </div>
      <img src={body} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
