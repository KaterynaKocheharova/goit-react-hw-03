import { CiUser } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { IconContext } from "react-icons";

import css from "./Contact.module.css";

export default function Contact({ contactData: { name, number } }) {
  return (
    <li className={css["contact-item"]}>
      <div>
        <div className={css["item-icon-box"]}>
          <IconContext.Provider value={{ className: "contact-person-icon" }}>
            <div>
              <CiUser className={css["contact-person-icon"]} />
            </div>
          </IconContext.Provider>
          <p>{name}</p>
        </div>
        <div className={css["item-icon-box"]}>
          <IconContext.Provider value={{ className: "contact-phone-icon" }}>
            <div>
              <CiPhone className={css["contact-phone-icon"]} />
            </div>
          </IconContext.Provider>
          <p>{number}</p>
        </div>
      </div>
      <button className={css["delete-button"]}>Delete contact</button>
    </li>
  );
}
