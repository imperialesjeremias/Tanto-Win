import React from 'react'
import logo from '../../public/LogoTW1.png'
import tantowinlogo from "../../public/tantowinlogo.svg"

const Contact = () => {
  return (
    <div className='flex flex-col w-11/12 m-4 md:m-7'>
      <div className='flex items-center justify-center'>
        <h1 className='text-4xl font-plainRegular mb-2 md:mb-4 md:text-5xl'>Contacto</h1>
      </div>
      <div className='flex items-center justify-center'>
        <div className='artboard artboard-horizontal bg-[#1F1F1F] rounded-md flex flex-col p-4 h-4/5'>
          <div className='text-white'>
            <h2 className='text-[22px] font-plain mb-3 md:text-[32px]'>Proporciona sus detalles de contacto</h2>
            <p className='text-sm font-extralight md:text-xl'>Nos pondremos en contacto con usted para evaluar necesidades y elaborar un plan adecuado.</p>
          </div>
          <div className='flex flex-col w-full mt-4 gap-2 md:mt-6'>
            <label className="input input-bordered flex items-center gap-2 bg-transparent border-2 border-b-gray-533 text-gray-533 md:border-4 md:input-lg">
              <input type="text" className="grow" placeholder="Nombre" />
            </label>
            <label className="input *:input-bordered flex items-center gap-2 bg-transparent border-2 border-b-gray-533 text-gray-533 md:border-4 md:input-lg">
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-transparent border-2 border-b-gray-533 text-gray-533 md:border-4 md:input-lg">
              <input type="text" className="grow" placeholder="Entidad representante" />
            </label>
            <div className='flex flex-row '>
              <select className="select bg-transparent border-2 border-b-gray-533 text-gray-533 md:border-4 md:select-lg">
                <option disabled selected>🇦🇷 +54</option>
              </select>
              <label className="input w-full input-bordered flex items-center gap-2 bg-transparent border-2 border-b-gray-533 text-gray-533 md:border-4 md:input-lg">
                <input type="text" className="grow" placeholder="Teléfono" />
              </label>
            </div>
            <textarea className="textarea textarea-bordered bg-transparent border-2 border-b-gray-533 text-gray-533 md:border-4" placeholder="Mensaje adicional"></textarea>
            <button className="btn bg-transparent text-white md:btn-lg">Button</button>
          </div>
            <div className='mt-8 mb-2 mr-2 flex items-center justify-center'>
              <img className="w-10/12 md:w-8/12" src={tantowinlogo} alt="TantoWinLogo" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact