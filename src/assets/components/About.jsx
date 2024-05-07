import React from 'react';
import logo from "../../images/list.png"
import Navbar from './Navbar';

const About = () => {
  return (
  <> 
  <Navbar/>
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-full md:w-1/2">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <div className="flex justify-center">
            <img src={logo} alt="Phone Icon" style={{ width: '45px', height: '45px' }} />
            </div>
            <h2 className="block uppercase tracking-wide text-grey-darker text-xl text-center font-bold mb-2">Tasker! Complete Instantly</h2>
            <p className="block text-grey-darker text-base leading-relaxed mb-6">
              Introducing Tasker! Complete Instantly, the ultimate to-do list application meticulously crafted with the power of React.js components. Tasker is not just another task manager; it's a seamless blend of efficiency, functionality, and user-centric design, meticulously engineered to elevate your productivity to new heights.
            </p>
          
            <ul className="list-disc pl-5 mb-6">
              <li>Add Tasks: Seamlessly add tasks to your to-do list with just a few clicks or taps. Whether it's a work assignment, a personal errand, or a project milestone.</li>
              <li>Update and Delete Tasks: Need to make changes to your tasks? Tasker offers intuitive options to update or delete tasks with ease.</li>
              <li>Check off Completed Tasks: Celebrate your accomplishments by checking off tasks as you complete them. Tasker keeps track of your progress.</li>
              <li>Show and Hide Completed Tasks: Maintain a clutter-free workspace by effortlessly toggling between displaying and hiding completed tasks. </li>
            </ul>
           
          </div>
        </div>
      </div>
    </div>
    </>  
  );
};

export default About;
