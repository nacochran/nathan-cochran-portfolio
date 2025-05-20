// src/pages/Services.jsx
import ServicePanel from '../components/ServicePanel';

const services = [
  {
    name: "Full Stack Developer",
    description: "Websites and web apps are some of my favorite pieces of software to work on. I enjoy developing both the front-end and the back-end, which gives every project a unique blend of design challenges on the front-end with programming challenges on the back-end. Besides designing your business's website or web app, I also offer competitive hosting prices."
  },
  // {
  //   name: "Mobile App Developer",
  //   description: "I also offer mobile app development services. I use React Native to develop mobile apps for both iOS and Android. I can develop a mobile app for your business that is tailored to your needs and goals."
  // },
  {
    name: "Graphic Designer",
    description: "I have experience creating various types of graphics and branding materials. Whether your business needs a logo, business card, or other form of branding material, get in touch and we'll get you your perfect design!"
  }
]

const Services = () => {
  return (
    <div className="page">
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <p className="text-lg">
        I love working with technology in many sectors and I&apos;m always excited to explore more avenues to challenge myself.
        Below I have listed some of the services that I am currently offering. If you are a business needing talent in one of the following areas, feel free to reach out and get a bid for your requested service. Besides freelance projects, I am also available to do contract work and/or positions within a company as well.
      </p>

      <div className="space-y-6">
        {services.map((service, index) => (
          <ServicePanel key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
