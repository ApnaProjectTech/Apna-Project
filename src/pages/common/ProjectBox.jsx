import { useState, useEffect } from 'react';

const ProjectBox = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 4;

  const slides = [
    {
      title: 'Web',
      content: (
        <div>
          <h5 className='text-xl'>
            What are the services we provide in this category?
          </h5>
          <ul className='list-disc list-inside text-sm md:text-base'>
            <li>Business Websites</li>
            <li>eCommerce Solutions</li>
            <li>Portfolio Websites</li>
            <li>Content Management Systems (CMS)</li>
            <li>Landing Pages</li>
            <li>Web Maintenance & Support</li>
          </ul>
          <br></br>
          <p className='text-sm md:text-base'>
            Use the tabs below to change slide
          </p>
          {/* <p>
            <strong className='text-green-500'>NEW:</strong> Arrow keys work too
            after your first selection.
          </p>
          <p>Et voila.</p> */}
        </div>
      ),
      background:
        'https://res.cloudinary.com/dmgsjcxcf/image/upload/v1727471781/1_yx3bri.png',
    },
    {
      title: 'Mobile Apps',
      content: (
        <div>
          <h5 className='text-xl'>
            What are the services we provide in this category?
          </h5>
          <ul className='list-disc list-inside text-sm md:text-base'>
            <li>Customised Business Apps</li>
            <li>eCommerce Apps</li>
            <li>On-Demand Service Apps</li>
            <li>Social Networking Apps</li>
            <li>Health & Fitness Apps</li>
            <li>Educational Apps</li>
          </ul>
          <br></br>
          <p className='text-sm md:text-base'>
            Use the tabs below to change slide
          </p>
          {/* <p>
            <strong className='text-green-500'>NEW:</strong> Arrow keys work too
            after your first selection.
          </p>
          <p>Et voila.</p> */}
        </div>
      ),
      background:
        'https://res.cloudinary.com/dmgsjcxcf/image/upload/v1727471781/2_k1ike4.png',
    },
    {
      title: 'UI/UX',
      content: (
        <div>
          <h5 className='text-xl'>
            What are the services we provide in this category?
          </h5>
          <ul className='list-disc list-inside text-sm md:text-base'>
            <li>Website & App Design</li>
            <li>Wireframing & Prototyping</li>
            <li>Branding & Identity Design</li>
            <li>Interaction Design</li>
          </ul>
          <br></br>
          <p className='text-sm md:text-base'>
            Use the tabs below to change slide
          </p>
          {/* <p>
            <strong className='text-green-500'>NEW:</strong> Arrow keys work too
            after your first selection.
          </p>
          <p>Et voila.</p> */}
        </div>
      ),
      background:
        'https://res.cloudinary.com/dmgsjcxcf/image/upload/v1727471782/3_jtpzqb.png',
    },
    {
      title: 'SaaS',
      content: (
        <div>
          <h5 className='text-xl'>
            What are the services we provide in this category?
          </h5>
          <ul className='list-disc list-inside text-sm md:text-base'>
            <li>Custom SaaS Development</li>
            <li>CRM & ERP Solutions</li>
            <li>Data Analytics Platforms</li>
            <li>Project Management Tools</li>
            <li>HR & Payroll Systems</li>
            <li>Subscription Management Platforms</li>
          </ul>
          <br></br>
          <p className='text-sm md:text-base'>
            Use the tabs below to change slide
          </p>
          {/* <p>
            <strong className='text-green-500'>NEW:</strong> Arrow keys work too
            after your first selection.
          </p>
          <p>Et voila.</p> */}
        </div>
      ),
      background:
        'https://res.cloudinary.com/dmgsjcxcf/image/upload/v1727471782/4_sz3j1o.png',
    },
  ];

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  // Parallax effect

  return (
    <div className='pb-18 h-screen '>
      {/* Section Container */}
      <div className='global-container'>
        {/* Section Content Block */}
        <div className='pb-10 jos text-center'>
          <div className='mx-auto xl:max-w-[1200px] text-white'>
            <h2>Services we can provide...</h2>
          </div>
        </div>
      </div>
      {/* Section Container */}
      <div className='w-full h-4/5 pb-16 flex justify-center items-center bg-black text-gray-300 relative'>
        <div className='relative h-full mb-5 w-10/12 flex shadow-lg rounded-lg border-white border-opacity-50 border-2 overflow-hidden'>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 h-full w-full flex transition-transform duration-500 ease-in-out
              ${
                activeSlide === index + 1
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-full opacity-0'
              }
            `}
            >
              {/* Left half - Background Image with Parallax */}
              <div
                className='w-1/2 h-full parallax hidden md:block'
                data-speed='0.5'
                style={{
                  backgroundImage: `url(${slide.background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2)', // White shadow effect
                }}
              ></div>

              {/* Right half - Slide content */}
              <div className='w-full md:w-1/2 p-4 md:p-12 h-full flex flex-col justify-center bg-black bg-opacity-50 text-left'>
                <h1 className='text-5xl mb-4'>{slide.title}</h1>
                <div className='slide__content'>{slide.content}</div>
              </div>

              {/* Slide Number */}
              <div className='absolute top-4 right-4 bg-gray-800 text-white rounded px-4 py-2'>
                {index + 1} of {totalSlides}
              </div>
            </div>
          ))}
          <nav className='absolute bottom-0 right-0 w-full md:w-1/2 bg-gradient-to-t from-gray-900 to-transparent py-3'>
            {slides.map((slide, index) => (
              <button
                key={index}
                className={`w-1/4 text-center py-2 uppercase font-bold text-lg border-b-4 transition-colors duration-300
              ${
                activeSlide === index + 1
                  ? 'text-white border-white'
                  : 'text-gray-500 border-gray-500 hover:text-white hover:border-white'
              }
            `}
                onClick={() => handleSlideChange(index + 1)}
              >
                {slide.title.split(' ')[0]}
              </button>
            ))}
          </nav>
        </div>

        {/* Navigation */}
      </div>
    </div>
  );
};

export default ProjectBox;
