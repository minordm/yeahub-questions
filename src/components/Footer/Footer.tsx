import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1>Yeahub</h1>
      <div className={styles.main}>
        Выбери, каким будет IT завтра, вместе с нами
      </div>
      <div className={styles.desc}>
        YeaHub — это полностью открытый проект, призванный объединить и улучшить
        IT-сферу. Наш исходный код доступен для просмотра на GitHub. Дизайн
        проекта также открыт для ознакомления в Figma.
      </div>
      <hr />
      <div className={styles.footer}>
        <div className={styles.copyright}>
          <p>© 2024 YeaHub</p>
          <a>Документы</a>
        </div>
        <div className={styles.links}>
          <p>Ищите нас и в других соцсетях @yeahub_it</p>
          <a href="">
            <img src="/figma-icon.png" alt="Иконка фигмы" />
          </a>
          <a href="">
            <img src="/tg-icon.png" alt="Иконка телеграмма" />
          </a>
          <a href="">
            <img src="/yt-icon.png" alt="Иконка ютьюба" />
          </a>
          <a href="">
            <img src="/tt-icon.png" alt="Иконка тиктока" />
          </a>
          <a href="">
            <img src="/git-icon.png" alt="Иконка гита" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
