import React from 'react'

import { FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const Fotter = () => {
  return (
<>
    <div id="ubicanos" className="p-15 flex justify-center m-[25px] py-0 text-lg flex-wrap xl:justify-between">
        <div className=" py-0 max-w-[100%] flex flex-wrap justify-center flex-col items-center overflow-hidden">
                    <img src="IMG/logo.jpg" alt="Logo de SLee Dw" className="w-[250px]" />
        </div>
        <div className="max-w-[100%] flex flex-wrap justify-center flex-col items-center m-[2rem] text-gray-500 text-xl text-center leading-[2.5rem]">
            <h2 className='flex overflow-hidden flex-wrap break-all font-bold leading-[3rem] md:leading-[7rem] text-primary '>SOBRE NOSOTROS</h2>
            <p className='flex overflow-hidden flex-wrap break-all '>Dirección: 123 Calle Principal, Ciudad, País</p>
            <p className='flex overflow-hidden flex-wrap break-all '>Email: info@bikeshop.com</p>
            <p className='flex overflow-hidden flex-wrap break-all '>Teléfono: +123 456 789</p>
        </div>
        <div className="max-w-[100%] flex flex-wrap justify-center flex-col items-center overflow-hidden m-[2rem] text-xl pt-0 mt-0 leading-[3rem]">
            <h2 className='flex overflow-hidden flex-wrap break-all font-bold leading-[3rem] md:leading-[7rem] text-primary pt-0 mt-0 pb-[60px]'>SIGUENOS</h2>
            <div className="flex flex-wrap aling-center items-center text-center justify-center felx-col list-none">
                <li className='pl-5'>                 
                <a href="#" className="no-underline w-45 h-45 text-center text-3xl"><FaFacebook /></a>
                </li>
                <li  className='pl-5'>
                    <a href="#"   className="no-underline w-45 h-45 text-center text-3xl"><FaInstagram /></a>
                </li>
                <li className='pl-5'>
                    <a href="#"  className="no-underline w-45 h-45 text-center text-3xl"><FaTwitter /></a>
                </li>
                <li className='pl-5'>
                    <a href="#"  className="no-underline w-45 h-45 text-center text-3xl"><FaYoutube /></a>
                </li>
            </div>
        </div>
    </div>
    <div className="flex text-center justify-center m-0 bg-gray-100">
        <small>&copy; 2023 <b>Bike shop Name</b> - Todos los Derechos Reservados.</small>
    </div>
</>
  )
}

export default Fotter
