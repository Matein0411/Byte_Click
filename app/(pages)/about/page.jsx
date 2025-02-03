import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AboutUs = () => {
  return (
    <section className="w-full flex justify-center p-5">
      <div className="flex flex-col gap-5 max-w-[900px]">
        <h1 className="text-center font-semibold text-2xl">Acerca de Byte_Clic</h1>
        <LocationOnIcon className="mx-auto" fontSize="large" />
        <p className="text-justify text-lg">
          Byte_Clic es una empresa líder en la venta de tecnología en Ecuador. Nos especializamos en ofrecer los últimos productos tecnológicos a precios competitivos, con un enfoque en la satisfacción del cliente y el servicio de calidad.
        </p>
        <p className="text-justify text-lg">
          Fundada en el corazón de Ecuador, Byte_Clic se ha comprometido a proporcionar a nuestros clientes una experiencia de compra excepcional, ya sea en línea o en nuestras tiendas físicas. Nuestro equipo está compuesto por expertos en tecnología que están siempre dispuestos a ayudar y asesorar a nuestros clientes.
        </p>
        <h2 className="text-center font-semibold text-xl">Nuestra Ubicación</h2>
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.908123456789!2d-78.467838!3d-0.180653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTAnNTkuNCJTIDc4wrAyOCc0MC4yIlc!5e0!3m2!1sen!2sec!4v1633024800000!5m2!1sen!2sec"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <p className="text-center text-lg">
          Visítanos en nuestra tienda principal ubicada en Calle Falsa 123, Quito, Ecuador.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;