import profileImg from "@widgets/Question/ui/QuestionDetailSidebar/assets/profile.png";
import tgIcon from "@widgets/Question/ui/QuestionDetailSidebar/assets/tg-icon.svg";
import ytIcon from "@widgets/Question/ui/QuestionDetailSidebar/assets/yt-icon.svg";
import profileIcon from "@widgets/Question/ui/QuestionDetailSidebar/assets/profile-icon.svg";
import styles from "./styles.module.css";

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.container}>
        <div className={styles["profile__container"]}>
          <img src={profileImg} alt="Аватарка профиля" />
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
        <a href="https://t.me/reactify_IT" target="_blank">
          <img src={tgIcon} alt="иконка телеграма" />
        </a>
        <a href="https://www.youtube.com/@reactify-it" target="_blank">
          <img src={ytIcon} alt="иконка ютюба" />
        </a>
        <a href="https://reactify.ru/" target="_blank">
          <img src={profileIcon} alt="иконка профиля" />
        </a>
      </div>
    </div>
  );
};

export default Info;
