import React from "react";
import tantowinlogo from "/src/images/tantowinlogo.svg";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { numbers } from "../utils/codeNumbers/numbers";

const widthWindow = ['640', '768', '1024', '1280', '1536', '1920'];

/*
* widthWindow va almacenar los tamaños de las ventanas 
* para mediante un conditional render mostramos el tipo de responsive
* si es para mobile o desktop 
*/

const Contact = () => {
  return (
    window.innerWidth < widthWindow[2] ? (
      <section id="contact" className="mt-16">
        <div className="flex flex-col w-11/12 m-4 md:m-7">
          <div className="flex items-center justify-center ">
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
                <Input type="text" label="Nombre" size="sm" variant="underlined" />
                <Input type="email" label="Email" variant="underlined" />
                <Input type="text" label="Entidad representante" variant="underlined" />

                <div className="flex flex-row gap-4">
                  <Select className="max-w-xs" radius="sm" label="Codigo de area" variant="underlined"> {numbers.map((number) => (
                    <SelectItem key={number.value} value={number.value}>{number.label}</SelectItem>))}
                  </Select>
                  <Input type="number" label="Télefono" variant="underlined" />
                </div>

                <Textarea label="Mensaje adicional" className="w-full" variant="underlined" />
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
    ) : (
      <section id="contact" className="mt-16">
        <div className="flex flex-col w-11/12 m-4 md:m-7 2xl:m-8">
          <div className="w-full mt-8 flex justify-center">
            <div className="w-3/4 3xl:mr-16 xl:mr-12">
              <h1 className="text-5xl font-plainRegular">
                Contacto
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center h-[390px] w-full m-8 2xl:h-[420px]">
            <div className="w-3/4 h-full 2xl:w-5/6 lg:w-5/6">
              <div className="bg-[#1F1F1F] rounded-xl flex flex-row h-full p-4 2xl:p-6">
                <div className="text-white">
                  <h2 className="font-plain mb-4 md:text-[25px] leading-9 2xl:text-4xl">
                    Proporciona sus detalles de contacto
                  </h2>
                  <p className="text-sm font-plainLight md:text-lg 2xl:text-xl">
                    Nos pondremos en contacto con usted para evaluar sus necesidades y
                    elaborar un plan adecuado.
                  </p>
                  <div className="h-full flex items-center mt-4">
                    <img
                      className="w-2/3"
                      src={tantowinlogo}
                      alt="TantoWinLogo"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-3/4 2xl:w-2/4">
                  <Input type="text" label="Nombre" size="sm" variant="underlined" />
                  <Input type="email" label="Email" variant="underlined" size="sm" />
                  <Input type="text" label="Entidad representante" variant="underlined" size="sm" />

                  <div className="flex flex-row gap-4">
                    <Select className="max-w-xs" radius="xs" label="Codigo de area" variant="underlined" size="sm"> {numbers.map((number) => (
                      <SelectItem key={number.value} value={number.value}>{number.label}</SelectItem>))}
                    </Select>
                    <Input type="number" label="Télefono" variant="underlined" size="sm" />
                  </div>

                  <Textarea label="Mensaje adicional" className="w-full mt-4" variant="bordered" size="sm" />
                  <Button radius="xs" className="mt-4" size="sm">Enviar</Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Contact;
