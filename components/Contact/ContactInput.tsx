import styles from "./Contact.module.scss";

interface IContactInput {
  type: string;
  text: string;
  placeholder: string;
  name: string;
  required?:boolean;
}

const ContactInput = ({ type, text, placeholder, name, required }: IContactInput) => (
  <label className={styles.contact__form__label}>
    <span className={styles.contact__form__label__text}>{text}</span>
    <input
      className={styles.contact__form__label__input}
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
    />
  </label>
);

export default ContactInput;
