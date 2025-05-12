import React from 'react';

const MusicReleaseCards = ({ obj  }) => {
  return (
    <div className="w-full max-w-4xl lg:max-w-[90%] mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 shadow-lg rounded-lg p-4 md:p-6">
        {/* Album Cover Image */}
        <div 
          className="w-full h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-center bg-cover rounded-lg shrink-0"
          style={{ backgroundImage: `url(${obj.thumbnail})` }}
        ></div>
        
        {/* Song Information */}
        <div className="w-full flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 py-4">
          <h1 className={`text-2xl md:text-3xl lg:text-5xl font-bold ${obj.gradient}`}>{obj.song}</h1>
          
          <div className="flex flex-wrap w-full gap-2 md:gap-3 text-sm md:text-base lg:text-xl font-semibold">
            <p style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} className='bg-clip-text text-transparent' >Garvit-Priyansh</p>
            <span className="hidden md:block">•</span>
            <p style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} className='bg-clip-text text-transparent'>{obj.song}</p>
            <span className="hidden md:block">•</span>
            <p style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} className='bg-clip-text text-transparent'>{obj.release}</p>
            <span className="hidden md:block">•</span>
            <p style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} className='bg-clip-text text-transparent'>{obj.duration}</p>
            <span className="hidden md:block">•</span>
            <p style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} className='bg-clip-text text-transparent'>{obj.plays}</p>
          </div>

          <button className='text-center w-[80%] md:w-[30%] bg-green-500 rounded-lg text-white font-lg px-4 py-2 cursor-pointer'>Stream on spotify</button>
        </div>

      
      </div>
    </div>
  );
};

export default MusicReleaseCards;