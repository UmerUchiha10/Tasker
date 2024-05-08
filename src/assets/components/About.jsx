import React from 'react';
import logo from "../../images/list.png"
import Navbar from './Navbar';

const About = () => {
return (
<>
    <Navbar />


    <div className='flex justify-center my-3'>

    <div class="relative flex flex-col md:flex-row bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem]">
    
    <div class="p-6">
        <div className='flex justify-center gap-2'>
        <img src={logo} alt="Phone Icon" style={{ width: '35px', height: '35px' }} />
        <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            Tasker! Complete Instantly
        </h6>
        </div>
       
        <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Introducing Tasker! Complete Instantly, the ultimate to-do list application meticulously crafted
            with the power of React.js components
        </h4>
        <ul class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            <li>add tasks to your to-do list.it Has options to update or delete tasks with ease.asker keeps track
                of your progress. toggling between displaying and hiding completed tasks.</li>
        </ul>
        <a href="#" class="inline-block">
            <div class="w-full h-40 flex items-center justify-center cursor-pointer">
                <div class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-600 group-hover:h-full"></span>
                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-5 h-5 text-green-400">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </span>
                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-5 h-5 text-green-400">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </span>
                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">Learn More</span>
                </div>
            </div>
        </a>
    </div>
</div>

    </div>


</>
);
};

export default About;
