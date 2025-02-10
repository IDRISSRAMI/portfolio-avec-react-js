import React from 'react'
import logo from "../assets/images/astronout.png"
import logo1 from "../assets/images/astronout1.png"
import bg from "../assets/images/bg.jpg"
import Navbar from './Navbar'
import "../styles.css"

function Header() {
  return (
   <> 
   <div id='home' style={{backgroundImage: `url(${bg})`}} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
        <div className="btn py-3">
          <button  className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Welcome to my Portfolio</button>
        </div>
        <h1 className='text-white text-5xl font-bold'>Hi! I'm Idriss</h1>
        <p className='text-white py-4 max-w-lg '>Driss Rami est un développeur web passionné par la création de solutions numériques innovantes. Fort de son expertise en développement front-end et back-end, il conçoit des sites web intuitifs, performants et adaptés aux besoins spécifiques de chaque client. Grâce à sa maîtrise des technologies modernes telles que HTML, CSS, JavaScript, et PHP, Driss s'engage à offrir des expériences utilisateur fluides et des interfaces visuellement attractives. Toujours à la recherche de nouveaux défis, il reste à l'affût des dernières tendances du secteur pour offrir des produits de haute qualité.</p>
        <button className='  text-white text-2xl'>Connect <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i> </button>
      </div>
      <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
      <img className='w-96 ast-img' src={logo1} alt="" />
    
      </div>
      <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
     
      <img className='w-96 ast-img' src={logo} alt="" />
      </div>
   
    </div>
   </div>
   </>
  )
}

export default Header