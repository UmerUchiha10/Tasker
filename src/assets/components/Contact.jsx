import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
return (
<div>
    <Navbar/>
    <section class=" bg-red-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white ">Contact Us
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Got a technical
                issue?
            </p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-white">Your
                        email</label>
                    <input type="email" id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Enter Name" required/>
                </div>
                <div>
                    <label for="subject"
                        class="block mb-2 text-sm font-medium text-white">Subject</label>
                    <input type="text" id="subject"
                        class="block p-3 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:text-black  dark:focus:ring-primary-500  dark:shadow-sm-light"
                        placeholder="Let us know how we can help you" required/>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-white">Your
                        message</label>
                    <textarea id="message" rows="6"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit"
                    class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-red-600 hover:bg-red-950 ">Send
                    message</button>
            </form>
        </div>
    </section>
</div>
)
}

export default Contact
