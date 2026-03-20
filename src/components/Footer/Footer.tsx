import styles from "./Footer.module.css";

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
                <img src="/figma-icon.png" alt="Иконка фигмы" />
              </a>
              <a href="https://t.me/yeahub" target="_blank">
                <img src="/tg-icon.png" alt="Иконка телеграмма" />
              </a>
              <a href="https://www.youtube.com/@yeahub" target="_blank">
                <img src="/yt-icon.png" alt="Иконка ютьюба" />
              </a>
              <a href="https://www.tiktok.com/@yeahub%5C_it" target="_blank">
                <img src="/tt-icon.png" alt="Иконка тиктока" />
              </a>
              <a
                href="https://github.com/YeaHubTeam/yeahub-platform"
                target="_blank"
              >
                <img src="/git-icon.png" alt="Иконка гита" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
