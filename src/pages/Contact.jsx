// src/pages/Contact.jsx
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="page">
      <h1 className="text-3xl font-bold mb-4">Get in Touch!</h1>
      <p className="text-lg">
        I'm always on the outlet for new opportunities to expand my work portfolio and build new relationships. Whether you’re a business looking for creative talent within your company, or if you are needing some form of contract or freelance work done, feel free to reach out below and I’ll respond as soon as circumstances permit.
      </p>

      <ContactForm />
    </div>
  );
};

export default Contact;
