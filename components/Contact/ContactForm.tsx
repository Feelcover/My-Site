import { MutableRefObject, useRef, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import ContactInput from "./ContactInput";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.scss";

const ContactForm = () => {
  const [acceptRules, setAcceptRules] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;

  const toggleAcceptRules = () => setAcceptRules(!acceptRules);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSpinner(true);
    emailjs
      .sendForm(
        "service_7xs39jc",
        "template_vbhwmwq",
        formRef.current,
        "ciq2wrBXILZ8Z0ZIh"
      )
      .then(
        (result) => {
          setSpinner(false);
          toast(`Данные отправлены ${result.text}`);
        },
        (error) => {
          setSpinner(false);
          toast.error(`Данные отправлены ${error.text}`);
        }
      );

    formRef.current.reset();
    setAcceptRules(false);
  };

  return (
    <form onSubmit={sendEmail} className={styles.contact__form} ref={formRef}>
      <ContactInput
        text="Ф.И.О.*"
        placeholder="Укажите ваши Ф.И.О."
        type="text"
        name="fullName"
        required
      />
      <ContactInput
        text="Должность/компания"
        placeholder="Укажите вашу должность/компанию"
        type="text"
        name="company"
      />
      <ContactInput
        text="E-mail*"
        placeholder="Укажите ваш E-mail"
        type="email"
        name="email"
        required
      />
      <ContactInput
        text="Телефон*"
        placeholder="Укажите ваш телефон"
        type="tel"
        name="phone"
        required
      />
      <ContactInput
        text="Сообщение"
        placeholder="Укажите дополнительную информацию"
        type="text"
        name="message"
      />
      <button className={styles.contact__form__btn} disabled={!acceptRules}>
        {spinner ? <PropagateLoader color="#fff" /> : "Отправить заявку"}
      </button>
      <label className={styles.contact__checkbox}>
        <input
          className={styles.contact__checkbox__input}
          type="checkbox"
          onChange={toggleAcceptRules}
        />
        <span className={styles.contact__checkbox__span} />
        <span className={styles.contact__checkbox__text}>
          Нажимая на кнопку «Отправить заявку», я соглашаюсь с{" "}
          <Link href="/privacy-policy" passHref legacyBehavior>
            <a className={styles.contact__checkbox__link}>
              Политикой конфиденциальности
            </a>
          </Link>{" "}
          и даю{" "}
          <Link legacyBehavior href="/privacy-policy" passHref>
            <a className={styles.contact__checkbox__link}>
              Согласие на обработку персональных данных.
            </a>
          </Link>
        </span>
      </label>
    </form>
  );
};

export default ContactForm;
