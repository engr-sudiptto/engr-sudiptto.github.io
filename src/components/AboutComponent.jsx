import React from 'react'
import aboutImage from '../assets/homeAbout.jpg'

const AboutComponent = () => {
  return (
    <div>
      <div className="w-full max-w-300 m-auto my-10">
        <div className='w-full'>
          <div>
            <img className='w-full sm:w-70' src={aboutImage} />
          </div>
          {/* ------- about description --------- */}
          <div className='mt-5 '>
            <div className='mx-5'>
              <h2 className='text-5xl tracking-widest'>DESIGN</h2>
              <h2 className='text-5xl ml-10 tracking-widest mt-2'>CULTURE</h2>
              {/* ------- about text ---------  */}
              <div>
                <div>
                  <p className='text-xl font-semibold mt-4 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem similique ad.</p>
                  <button className='p-2.5 px-5 text-white text-sm tracking-widest bg-gray-800 my-5 rounded-md cursor-pointer'>EXPLORE COLLECTION</button>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id libero architecto quas modi necessitatibus amet accusantium voluptas fugiat error dolores!</p>
                  <button className='mt-5 text-xs underline text-gray-400 cursor-pointer'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent