import Swiper from "swiper";
import { useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/autoplay"
import "swiper/css/navigation";

import { Form } from "../Form/Form";
import "./Home.css";

export function Home() {

    useEffect(() => {
        const swiper = new Swiper(".swiper", {
          direction: "horizontal",
          loop: true,
          pagination: {
            el: ".swiper-pagination",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          scrollbar: {
            el: ".swiper-scrollbar",
          },
        });
    
        // Cleanup Swiper instance when the component unmounts
        return () => {
          swiper.destroy(true, true);
        };
      }, []);

  return (
    <>
      <div className="banner">
        <Form />
      </div>
      <section className="banner"></section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h2>Hotel Services</h2>
              <p>
                ¡Bienvenido al Hotel Serenidad Oasis! Sumérgete en una
                experiencia única de hospitalidad donde la elegancia se
                encuentra con la comodidad. Nuestro hotel de lujo te ofrece una
                variedad de servicios excepcionales para hacer que tu estancia
                sea inolvidable. Descubre la exquisitez culinaria en nuestro
                restaurante gourmet, donde los chefs expertos crean delicias
                irresistibles con ingredientes frescos y locales. Relájate en
                nuestro spa de clase mundial, donde experimentarás tratamientos
                rejuvenecedores diseñados para revitalizar tu cuerpo y mente.
                Para los amantes del fitness, nuestro gimnasio totalmente
                equipado te ayudará a mantener tu rutina de ejercicios incluso
                durante tus viajes. Las habitaciones y suites elegantes y bien
                equipadas te ofrecen un santuario de tranquilidad con
                comodidades modernas y detalles de diseño sofisticados. Además,
                nuestro servicio de habitaciones está disponible las 24 horas
                para satisfacer todas tus necesidades. Para eventos especiales,
                nuestro centro de conferencias y salones de eventos son el lugar
                perfecto para celebrar reuniones, conferencias o bodas
                inolvidables. Nuestro equipo de planificación de eventos está
                listo para ayudarte a organizar cada detalle. En el Hotel
                Serenidad Oasis, nos enorgullece ofrecer un servicio excepcional
                y atención personalizada para garantizar que cada momento de tu
                estancia sea inolvidable. ¡Esperamos darte la bienvenida pronto
                a un mundo de lujo y serenidad!
              </p>
              {/* <img
          src="../public/hotelimg.jpg"
          alt="foto"
          className="img-fluid w-100"
        /> */}
            </div>
          </div>
          <div className="row">
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src="../public/hotel3.jpg" />
                </div>
                <div className="swiper-slide ">
                <img src="../public/hotel1.jpg" alt=""/>
                    </div>
                <div className="swiper-slide ">
                <img src="../public/hotel2.jpg" alt=""/>
                    </div>               
              </div>
              <div className="swiper-pagination"></div>                            
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
