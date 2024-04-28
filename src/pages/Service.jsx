import React from 'react'
import { useEffect, useState } from "react";
import bellingham from "/src/images/Bellingham.png";
import './service.css'
import { FaGear } from "react-icons/fa6";

const Service = () => {
  const jugadores = [
    {
      id: 1,
      name: 'Bellingham',
      rol: 'Motor',
      description: [
        'Jugador con gran capacidad para recuperar balones y distribuir el juego.'
      ],
      imagen: bellingham,
    }
  ]

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section id='service' className='mt-24'>
      <div className='flex flex-col items-center justify-center'>
        {
          jugadores.map((jugador) => {
            return (
              <div key={jugador.id} className='flex flex-col gap-4 p-2 items-center '>
                <div className={isMobile ? 'w-5/6 text-center text-wrap' : ' '}>
                  <div className={isMobile ? ' flex flex-row gap-4 ml-12 text-center ' : ' '}>
                    <h2 className={isMobile ? 'text-4xl font-bold mb-4' : ''}>{jugador.rol}</h2>
                    <div className='flex flex-row items-center'>
                      <FaGear id='gear1' className='fa fa-5x fa-gear spin' />
                      <FaGear id='gear1' className='fa fa-5x fa-gear spin mb-5' />
                    </div>
                  </div>
                  <p className={isMobile ? 'text-2xl tracking-wider text-center font-light' : ''}>{jugador.description}</p>
                </div>
                <div className={isMobile ? 'w-3/5  static' : ' '}>
                  <img src={jugador.imagen} alt={jugador.name} className='inline-block' />
                </div>
                <div id='bellingChart'>

                </div>
              </div>
            )

          })
        }
      </div>
    </section>
  )
}

export default Service