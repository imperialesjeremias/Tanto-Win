import React from 'react'

const Contact = () => {
  return (
    <div className='w-screen flex flex-col gap-4'>
      <div className='flex items-center justify-center w-1/3'>
        <h1 className='text-4xl'>Contact</h1>
      </div>
      <div className='flex items-center justify-center'>
        <div className='artboard artboard-horizontal phone-6 bg-[#1F1F1F] rounded-xl flex flex-row gap-4'>
          <div className='text-white font-plain'>
            <h2 className='text-4xl font-light'>Proporciona sus detalles de contacto</h2>
            <p>Nos pondremos en contacto con usted para evaluar necesidades y elaborar un plan adecuado</p>
            <div>
              <img src={logo} alt="" />
              <p className=' text-xl'>TANTO WIN</p>
            </div>

          </div>
          <div>
            <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact