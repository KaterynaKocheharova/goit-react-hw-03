import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contactsArr }) {
  return (
    <ul className={css["contact-list"]}>
      {contactsArr.map((contact) => (
        <Contact key={contact.id} contactData={contact} />
      ))}
    </ul>
  );
}
