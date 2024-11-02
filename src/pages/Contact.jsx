import React from 'react';
import '/src/pages/styles/Contact.css';
import '/src/pages/styles/Contact-info.css';
import '/src/pages/styles/Contact-form.css';
import UserIcon from '/src/icons/user.svg';
import MailIcon from '/src/icons/email.svg';
import MessageIcon from '/src/icons/message.svg';
import FacebookIcon from '/src/icons/facebook.svg';
import InstagramIcon from '/src/icons/instagram.svg';
import LocationIcon from '/src/icons/location.svg';
import TelephoneIcon from '/src/icons/telephone.svg';
import Footer from "../components/Footer.jsx";
import emailjs from '@emailjs/browser';

// Funcții pentru redirectare
const handleRedirect = (url) => {
    window.location.href = url;
};

// Componenta pentru Date de Contact
const ContactInfo = () => (
    <div className="contact-info">
        <h1 className="contact-title">Salut!</h1>
        <p className="contact-intro">
            Ai nevoie de ajutor sau vrei să discuți cu noi? Completează formularul sau contactează-ne
            direct prin e-mail sau telefon. Suntem aici pentru tine și vom reveni rapid!
        </p>
        <div className="social-media-links">
            <h2 className="contact-subtitle">DATE DE CONTACT:</h2>
            <hr />
            <div className="contact-data">
                <ContactItem icon={LocationIcon} text="Sat. Butoiesti, Jud. Mehedinti" />
                <ContactItem icon={TelephoneIcon} text="+40 740 123 456" />
                <ContactItem icon={MailIcon} text="rusinaru.exemplu@gmail.com" />
            </div>
            <SocialMediaList />
            <hr />
        </div>
    </div>
);

// Componentă pentru fiecare item de contact
const ContactItem = ({ icon, text }) => (
    <div className="contact-data-child">
        <p>
            <img className="contact-data-child" src={icon} alt="Icon" />
            {text}
        </p>
    </div>
);

// Componenta pentru lista de social media
const SocialMediaList = () => (
    <ul className="social-media-list">
        <li onClick={() => handleRedirect('https://www.facebook.com/profile.php?id=100074474800937')}>
            <img className="contact-icon" src={FacebookIcon} alt="Facebook Icon" />
        </li>
        <li onClick={() => handleRedirect('https://www.instagram.com/rus.steff/')}>
            <img className="contact-icon" src={InstagramIcon} alt="Instagram Icon" />
        </li>
    </ul>
);

// Componenta pentru formular de contact
const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dbsj6bg', 'template_5idm2ar', e.target, "uwY1mIu_Jpdhu_sGz")
            .then((result) => {
                console.log(result.text);
                alert("Mesaj trimis cu succes!");
            }, (error) => {
                console.log(error.text);
                alert("A apărut o eroare. Încearcă din nou.");
            });
    };

    return (
        <div className="contact-form">
            <form onSubmit={sendEmail}>
                <h1 className="contact-form-title">Simte-te liber să ne scrii</h1>
                <FormGroup icon={UserIcon} placeholder="Nume" inputType="input" name="from_subject"/>
                <FormGroup icon={MailIcon} placeholder="E-mail" inputType="input" name="from_email"/>
                <FormGroup icon={MessageIcon} placeholder="Mesaj" inputType="textarea" name="message"/>
                <div className="form-group">
                    <div className="submit-container">
                        <button type="submit" className="btn btn-primary">
                            Trimite mesaj
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
};

// Componenta pentru grupul de form (input sau textarea)
const FormGroup = ({ icon, placeholder, inputType, name }) => (
    <div className="form-group">
        <div className="block-text-container">
            <img className={inputType === 'textarea' ? 'input-icon-message' : 'input-icon'} src={icon} alt="Icon" />
            {inputType === 'textarea' ? (
                <textarea className="form-text-block message" name={name} rows="7" placeholder={placeholder} />
            ) : (
                <input className="form-text-block thick" name={name} placeholder={placeholder} />
            )}
        </div>
    </div>
);

// Componenta principală Contact
const Contact = () => (
    <section id="contact">
        <div className="contact-container">
            <ContactInfo />
            <ContactForm />
        </div>
        <Footer />
    </section>
);

export default Contact;