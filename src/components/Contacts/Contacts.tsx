import s from "./contacts.module.css";

const Contacts = () => {
  return (
    <section id="contacts" className={s.container}>
      <div className={s.wrapper}>
        <div className={s.titles}>
          <h5 className={s.subtitle}>Where to find me</h5>
          <h2 className={s.title}>Contacts</h2>
        </div>
        <div className={s.sides}>
          <div className={s.cards}>
            <div className={s.card}>
              <span>GitHub</span>
              <span>+1 1 1 1 1</span>
            </div>
            <div className={s.card}>
              <span>Email</span>
              <span>gmail@gmail.com</span>
            </div>
            <div className={s.card}>
              <span>Telegram</span>
              <span>Berezkin</span>
            </div>
            <div className={s.card}>
              <span>GitHub</span>
              <span>+1 1 1 1 1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
