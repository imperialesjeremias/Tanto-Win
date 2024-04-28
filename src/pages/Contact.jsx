import React from "react";
import tantowinlogo from "/src/images/tantowinlogo.svg";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { numbers } from "../utils/codeNumbers/numbers";
import { useEffect, useState } from "react";


const Contact = () => {
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
    <section id="contact" className="mt-16">  
      <div className={`${isMobile ? 'flex flex-col items-center justify-center m-8' : 'w-3/5 m-auto flex flex-col justify-center h-[390] 2xl:h-[420px]'}`}>
        <h1 className={`${isMobile ? 'text-3xl font-plainRegular mb-2 md:mb-4 md:text-5xl' : 'text-4xl font-plainRegular'}`}>Contacto</h1>
        <div className={`mt-4 gap-4 ${isMobile ? 'artboard artboard-horizontal bg-[#1F1F1F] rounded-md flex flex-col p-7 h-4/5' : 'bg-[#1F1F1F] rounded-xl flex flex-row p-10'}`}>
          <div className={`${isMobile ? 'text-white' : 'text-white w-3/4 2xl:w-2/4'}`}>
            <h2 className={`${isMobile ? 'font-plain text-[22px] md:text-[25px]' : 'text-2xl leading-9 2xl:text-4xl'} font-plainBold mb-3 md:mb-4`}>
              Proporciona sus detalles de contacto
            </h2>
            <p className={`${isMobile ? 'text-sm font-extralight md:text-xl' : 'text-md 2xl:text-xl'}`}>
              Nos pondremos en contacto con usted para evaluar sus necesidades y
              elaborar un plan adecuado.
            </p>
            {!isMobile ? <div className="h-full flex items-center">
              <img
                className="w-2/3 mb-3"
                src={tantowinlogo}
                alt="TantoWinLogo"
              />
            </div> : ''}
          </div>
          <div className={`flex flex-col ${isMobile ? 'w-full mt-4 gap-2 md:mt-6' : 'w-3/4 2xl:w-2/4'}`}>
            <Input type="text" label="Nombre" size="sm" variant="underlined" />
            <Input type="email" label="Email" variant="underlined" />
            <Input type="text" label="Entidad representante" variant="underlined" />
            <div className="flex flex-row gap-4">
              <Select className="max-w-xs" radius="sm" label="Codigo de area" variant="underlined">
                {numbers.map((number) => (
                  <SelectItem key={number.value} value={number.value}>{number.label}</SelectItem>
                ))}
              </Select>
              <Input type="number" label="Télefono" variant="underlined" />
            </div>
            <Textarea label="Mensaje adicional" className="w-full" variant="underlined" />
            <Button radius="sm" className="mt-4">Enviar</Button>
          </div>
          {isMobile ?
            <div className="mt-8 mb-2 mr-2 flex items-center justify-center">
              <img
                className="w-10/12 md:w-8/12"
                src={tantowinlogo}
                alt="TantoWinLogo"
              />
            </div>
            : ''}

        </div>
      </div>
    </section>
  );
};

export default Contact;
