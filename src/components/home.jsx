import React from 'react'
import {Link} from 'react-scroll'
import Header from './navbar';
import Footer from './footer';
import backgroundImage from '../assets/background.jpg'
import logo from '../assets/GDSC-LOGO.png'
import focus_logo from '../assets/focus_logo.png';
import team_logo from '../assets/team.png';
import calander_logo from '../assets/calander.png';
import contact_logo from '../assets/contact_log.png';
import linkedin_logo from '../assets/contactUs/LinkedIn.png'
// import {BsInstagram} from 'react-icons/bs'



const Home = () => {
  return (
    <div name='home' className='w-full h-full ' style={{ backgroundImage: `url(${backgroundImage})`}}  >
        <Header/>
        <div name='aboutus' className='max-w-full md:max-w-[1000px] mx-auto px-[20px] md:px-[80px] flex flex-col pt-10 md:pt-20 h-full gap-6 md:gap-64'>

            <div className='flex flex-col pt-9 gap-4'>
                <div className='flex flex-row gap-2'>
                    <img src={logo} width={60} alt="logo" />
                    <p className='font-bold text-3xl'> Google Development Student Clubs</p>
                </div>
                <div className='px-auto '>
                    <p className='ml-20 font-semibold'>MIT ADT UNIVERSITY</p>
                </div>
                <div>
                    <p className='text-[#7B7B7B]'>GDSC MIT ADT offers cool workshops, exciting projects and opportunities to connect with tech pros. It helps you get hands-on experience and access Google's resources, making your career tech-ready. It's where young developers meet, learn and rock the tech world together!</p>
                </div>
            </div>


            <div className='flex flex-col pt-9 gap-4'>
                <div className='flex flex-row gap-2 items-center'>
                    <img src={focus_logo} width={60} alt="logo" className=''/>
                    <p className='font-bold text-3xl text-[#0059B2] '> Our Focus</p>
                </div>
                <div>
                    <p className='text-[#7B7B7B]'>We're on a mission to catapult aspiring developers to the stars of success! Join us in unleashing the tech universe's limitless wonders. Collaborate with fellow developers to build innovative projects, with access to Google's vast resources.</p>
                </div>
            </div>


            <div name='ourteam' className='flex flex-col pt-9 gap-4 '>
                <div className='flex flex-row gap-2 items-center'>
                    <img src={team_logo} width={60} alt="logo" />
                    <p className='font-bold text-3xl'> Our Team</p>
                </div>
                <div>
                    <p className='text-[#7B7B7B]'>Unveiling to you our stupendous team of speed freak Coders, supportive superintendent Managers, our very own influencers being the Social Media team along with Sponsorship and PR team and to capture all our beautiful moments, the Content and Documentation team!</p>
                </div>

                <div className=''>
                <Link to='' className="text-blue-600imporr cursor-pointer p-10 ">
                        <button className='rounded-xl border-2 border-blue-600 px-10 py-3 my-2  hover:bg-blue-600 hover:text-white  mr-20'>
                            The Team
                        </button>
                </Link>
                </div>
            </div>

            <div name='events' className='flex flex-col pt-9 gap-4'>
                <div className='flex flex-row gap-2 items-center'>
                    <img src={calander_logo} width={60} alt="logo" />
                    <p className='font-bold text-3xl text-[#DEB200]'> Our Events</p>
                </div>
                <div>
                    <p className='text-[#7B7B7B]'>We offer fabulous workshops, exciting projects and opportunities to connect with tech pros. It helps you get hands-on experience and access Google's resources, making your career tech-ready. It's where young developers meet, learn and rock the tech world together!</p>
                </div>

                <div className=''>
                <Link to='' className="text-blue-600 cursor-pointer p-10 ">
                        <button className='rounded-xl border-2 border-blue-600 px-10 py-3 my-2  hover:bg-blue-600 hover:text-white  mr-20'>
                            Our Events
                        </button>
                </Link>
                </div>
            </div>

            <div name="contact" className='flex flex-col gap-4 pt-10'>
                <div className='flex flex-row gap-2 items-center'>
                    <img src={contact_logo} width={60} alt="logo" />
                    <p className='font-bold text-3xl text-[#00681C]'>Contact Us</p>
                </div>
                <div>
                    <p className='text-[#7B7B7B]'>Feel free to connect with us/Don’t be hesitant to reach out to us!/Our social media game? Stronger than your Wi-Fi connection./We're social butterflies on the internet – follow our digital footprints!</p>
                </div>

                <div className='flex flex-row gap-6'>
                    <a href="https://in.linkedin.com/company/gdsc-mitadt" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin_logo} className="h-10" alt="LinkedIn" />
                    </a>

                    <a href="https://in.linkedin.com/company/gdsc-mitadt" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin_logo} className="h-10" alt="LinkedIn" />
                    </a>
                     
                    <a href="https://in.linkedin.com/company/gdsc-mitadt" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin_logo} className="h-10" alt="LinkedIn" />
                    </a>
                </div>

            </div>
        </div>
        <Footer/>
   
    </div>
    
  )
}

export default Home