import s from "./Contacts.module.css";
import ContactCard from "./ContactCard/ContactCard";
import { ContactsData } from "../../lib/ContactsData";

const Contacts = () => {
  return (
    <section id="contacts" className={s.container}>
      <div className={s.wrapper}>
        <div className={s.titles}>
          <h5 className={s.subtitle}>Where to find me</h5>
          <h2 className={s.title}>Contacts</h2>
        </div>
        <div className={s.cards}>
          {ContactsData.map((c) => (
            <ContactCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
