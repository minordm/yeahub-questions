import figmaIcon from "@widgets/Footer/assets/figma-icon.png";
import tgIcon from "@widgets/Footer/assets/tg-icon.png";
import ytIcon from "@widgets/Footer/assets/yt-icon.png";
import ttIcon from "@widgets/Footer/assets/tt-icon.png";
import gitIcon from "@widgets/Footer/assets/git-icon.png";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <h1>Yeahub</h1>
        <div className={styles.main}>
          Выбери, каким будет IT завтра, вместе с нами
        </div>
        <div className={styles.desc}>
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </div>
        <hr />
        <div className={styles.foot}>
          <div className={styles.copyright}>
            <p>© 2024 YeaHub</p>
            <a>Документы</a>
          </div>
          <div className={styles.socials}>
            <p>Ищите нас и в других соцсетях @yeahub_it</p>
            <div className={styles.links}>
              <a
                href="https://www.figma.com/community/file/1438482355619792777/yeahub-public"
                target="_blank"
              >
                <img src={figmaIcon} alt="Иконка фигмы" />
              </a>
              <a href="https://t.me/yeahub" target="_blank">
                <img src={tgIcon} alt="Иконка телеграмма" />
              </a>
              <a href="https://www.youtube.com/@yeahub" target="_blank">
                <img src={ytIcon} alt="Иконка ютьюба" />
              </a>
              <a href="https://www.tiktok.com/@yeahub%5C_it" target="_blank">
                <img src={ttIcon} alt="Иконка тиктока" />
              </a>
              <a
                href="https://github.com/YeaHubTeam/yeahub-platform"
                target="_blank"
              >
                <img src={gitIcon} alt="Иконка гита" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
