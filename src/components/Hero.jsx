import { useEffect } from 'react'
import { RiCheckboxBlankCircleFill, RiStarFill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css'


export const Hero = () => {

    useEffect(() => {
      AOS.init({
        duration : 3000,

      });
  },[]);

  return (
    <div className='grid grid-cols-1 xl:grid-cols-8 my-[4rem] lg:m-0 lg:my-0  xl:py-[2rem] xl-h[10vh] h-[160vh] xl:h-[80vh] xl:mt-[2rem] xl:mb-[4rem]' id="home">
    {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 md-[80vh] md:my-[0]">
        <div className="flex flex-col gap-4">
          <h1 className='text-7xl font-bold leading-[6rem] md:leading-[7rem]'>
             Bike Shop Name  <br></br>
              <span className='font-bold text-6xl text-primary py-2 px-6 border-8 border-primary relative'>Products
                <RiCheckboxBlankCircleFill className='text-lg text-white absolute right-[-17px] top-[85px] bg-primary rounded-full box-content p-1'/>
                <RiCheckboxBlankCircleFill className='text-lg text-white absolute right-[-17px] top-[-15px] bg-primary box-content rounded-full p-1'/>
                <RiCheckboxBlankCircleFill className='text-lg text-white absolute right-[285px] top-[85px] bg-primary box-content rounded-full p-1'/>
                <RiCheckboxBlankCircleFill className='text-lg text-white absolute right-[285px] top-[-15px] bg-primary box-content rounded-full p-1'/>
             </span> 
             </h1>
          <p className='pt-5 text-gray-500 text-xl leading-[2.5rem]'>
            We provide solutions to your bicycle problems and sale of spare parts and accessories.
            </p>
          <div className="pb-0  md:mb-5">
            <a href="#ubicanos"><button className='bg-primary text-white py-2 x px-8 rounded-xl text-xl '>Contac Us</button> </a>         
          </div>
        </div>
      </div>
      <div className="md:col-span-3 flex items-center mt-4 xl:mt-0">
        <div className="">
            <img src="/IMG/Bici.png" alt="" className='mt-5 xl:mt-0' data-aos="fade-right"/>
            <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
            <div className="flex items-center">
              <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300"
              />
              <img
                src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
            </div>
            <h2 className="text-xl font-bold tracking-[1px] text-gray-800  text-wrap">
            The quality in your ride
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" /> 5.0 (3.1k Reviews)
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero;
