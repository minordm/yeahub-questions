import styles from "./Info.module.css";

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.container}>
        <div className={styles["profile__container"]}>
          <img src="/profile.png" alt="" />
          <div className={styles.profile}>
            <div className={styles["profile__title"]}>Руслан Куянец</div>
            <div className={styles["profile__desc"]}>Python Guru</div>
          </div>
        </div>
        <div className={styles.desc}>
          Guru – это эксперты YeaHub, которые помогают развивать комьюнити.
        </div>
      </div>
      <div className={styles.socials}>
        <img src="/tg-icon.svg" alt="" />
        <img src="/yt-icon.svg" alt="" />
        <img src="/profile-icon.svg" alt="" />
      </div>
    </div>
  );
};

export default Info;
