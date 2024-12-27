// src/pages/Services.jsx
import React from 'react';
import ServicePanel from '../components/ServicePanel';

const services = [
  {
    name: "Full Stack Developer",
    description: "Websites are some of my favorite pieces of software to work on. I enjoy developing both the front-end and the back-end, which gives every project a unique blend of design challenges on the front-end with programming challenges on the back-end."
  }
]

const Services = () => {
  return (
    <div className="page">
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <p className="text-lg">
        I love working with technology in many sectors and I'm always excited to explore more avenues to challenge myself.
        Below I have listed some of the services that I am currently offering for contract work. If you are local business or need help working on a personal project, feel free to reach out and git a bid for your requested service.
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
