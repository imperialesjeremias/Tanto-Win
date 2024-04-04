import React from 'react'
import logo from '../../public/LogoTW1.png'

const Contact = () => {
  return (
    <div className='flex flex-col w-11/12 m-4'>
      <div className='flex items-center justify-center'>
        <h1 className='text-3xl font-plainBold mb-2'>Contact</h1>
      </div>
      <div className='flex items-center justify-center'>
        <div className='artboard artboard-horizontal bg-[#1F1F1F] rounded-xl flex flex-col p-4 h-4/5'>
          <div className='text-white'>
            <h2 className='text-[19px] font-plain mb-3'>Proporciona sus detalles de contacto</h2>
            <p className='text-sm font-plainLight'>Nos pondremos en contacto con usted para evaluar necesidades y elaborar un plan adecuado.</p>
          </div>
          <div className='flex flex-col w-full mt-4 gap-2'>
            <label className="input input-md input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Nombre" />
            </label>
            <label className="input input-md *:input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-md input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Entidad representante" />
            </label>
            <div className='flex flex-row'>
              <select className="select">
                <option disabled selected>🇦🇷 +54</option>
              </select>
              <label className="input w-full input-md input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Teléfono" />
              </label>
            </div>
            <textarea className="textarea textarea-bordered" placeholder="Mensaje adicional"></textarea>
            <button className="btn">Button</button>
          </div>
          <div className='mt-10 flex flex-row gap-2'>
            <img src={logo} className="w-16 "alt="" />
            <div className='flex flex-col'>
              <p className='text-sm text-white font-aileronBold'>TANTO  WIN</p>
              <p className='text-white'>VISUALIZING YOUR SUCCESS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact