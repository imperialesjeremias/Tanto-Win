import React from "react";
import tantowinlogo from "/src/images/tantowinlogo.svg";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { numbers } from "../utils/codeNumbers/numbers";

const Contact = () => {
  return (
    <section id="contact" className="mt-16">
      <div className="flex flex-col w-11/12 m-4 md:m-7">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-plainRegular mb-2 md:mb-4 md:text-5xl">
            Contacto
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="artboard artboard-horizontal bg-[#1F1F1F] rounded-md flex flex-col p-4 h-4/5">
            <div className="text-white">
              <h2 className="text-[22px] font-plain mb-3 md:text-[32px]">
                Proporciona sus detalles de contacto
              </h2>
              <p className="text-sm font-extralight md:text-xl">
                Nos pondremos en contacto con usted para evaluar necesidades y
                elaborar un plan adecuado.
              </p>
            </div>
            <div className="flex flex-col w-full mt-4 gap-2 md:mt-6">

              {/* <input type="text" className="grow" placeholder="Nombre" /> */}
              <Input type="text" label="Nombre" size="sm" variant="underlined" />
              <Input type="email" label="Email" variant="underlined" />
              <Input type="text" label="Entidad representante" variant="underlined" />

              <div className="flex flex-row">
                <Select className="max-w-xs" radius="sm" label="Codigo de area" variant="underlined"> {numbers.map((number) => (
                  <SelectItem key={number.value} value={number.value}>{number.label}</SelectItem>))}
                </Select>
                <Input type="number" label="Télefono" variant="underlined" />
              </div>

              <Textarea label="Mensaje adicional" className="w-full" variant="underlined"/>
              <Button radius="sm" className="mt-4">Enviar</Button>
            </div>
            <div className="mt-8 mb-2 mr-2 flex items-center justify-center">
              <img
                className="w-10/12 md:w-8/12"
                src={tantowinlogo}
                alt="TantoWinLogo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
