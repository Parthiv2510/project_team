import React from 'react';
import servicesData from '@/content/pages/services/serviceData'; // Adjust the import path if needed

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
              <p className="text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
