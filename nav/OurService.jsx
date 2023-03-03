import React from 'react'
import Home from './Home'

function OurService() {
  return (
    <div>
        {/* Our Services */}
        
        <section class="bg-red-300 rounded-2xl p-5 mb-10">
        <Home/>
        <div class="container  mx-auto ">
            <div class="py-16 lg:py-24 ">
               <h2 class="text-center text-3xl lg:text-5xl font-semibold ">Our Services</h2>
                <p class="lg:w1/2 text-center mx-auto mt-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quo incidunt nesciunt vel dolore enim! Ad nam a maxime tenetur cum eaque amet velit porro, nihil, optio delectus dignissimos id!
                </p>
            </div>
            <div class="flex flex-wrap justify-center pb-16 lg:pb-24 ">
                <div class="w-full lg:w-1/2 xl:w-1/3 py-3 lg:p-5">
                <div class="bg-white p-10 rounded-3xl shadow-lg">
                   <div class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                      
                    <h3  class="text-gray-800 text-2xl font-bold ml-2 mt-2">Web Design</h3></div> 
                   <p class="mt-5"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam veniam odio rem sit labore magnam eum nemo, exercitationem natus sapiente architecto et quod consectetur pariatur facere placeat, dolorem harum aliquam.</p>
                </div>
                </div>
                <div class="w-full lg:w-1/2 xl:w-1/3 py-3 lg:p-5">
                <div class="bg-white p-10 rounded-3xl shadow-lg">
                    <div class="flex">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                      
                    <h3 class="text-gray-800 text-2xl font-bold ml-3  mt-2">Application </h3></div>
                    <p class="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eius debitis architecto quo nulla nihil. Similique hic sequi nesciunt ad iste alias delectus eligendi aut eius. Optio repellendus labore perferendis?</p>
                </div>
                </div>
                <div class="w-full lg:w-1/2 xl:w-1/3 py-3 lg:p-5 ">
                    <div class="bg-white p-10 rounded-3xl shadow-lg">
                        <div class="flex"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-blue-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                          </svg>
                          
                        <h3 class="text-gray-800 text-2xl font-bold ml-4 mt-4">Digital Marketing</h3></div>
                        <p class="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio mollitia nulla repudiandae, totam, expedita culpa iure eveniet itaque iste, ipsum ex quibusdam voluptatum labore consequatur. Incidunt aliquid obcaecati hic reiciendis.</p>
                    </div>
                </div>
                
            </div>
        </div>
        </section>
    </div>
  )
}

export default OurService
