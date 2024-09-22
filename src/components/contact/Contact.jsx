import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id='about-conact'>
      {/* Section Spacer */}
      <div className='bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,_1fr)_1.4fr]'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-[20px] md:order-1'
              data-jos_animation='fade-right'
            >
              <img
                src='assets/img/th-1/about-contact-img.jpg'
                alt='about-contact-img'
                width={526}
                height={550}
                className='h-auto w-full'
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div
              className='jos order-1 md:order-2'
              data-jos_animation='fade-down'
            >
              {/* Section Content Block */}
              <div className='mb-6 md:max-w-max'>
                <h2 className='text-white'>
                  We are just a message away from connecting
                </h2>
              </div>
              {/* Section Content Block */}
              <div className='text-left text-lg leading-[1.4] text-white lg:text-[21px]'>
                <p className='mb-7 last:mb-0'>
                  Drop us a message, and let’s grab a cup of Tea (on us).
                  Together, we’ll explore how we can craft the perfect solution
                  for your business.
                </p>
              </div>
              <ul className='mt-10 flex flex-col gap-6 font-dmSans text-[30px] tracking-[1.33] lg:mt-14 lg:gap-y-3 xl:mt-[70px]'>
                <li className='flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal'>
                  Email:
                  <a
                    href='mailto:yourmail@mail.com'
                    className='text-white hover:text-colorOrangyRed'
                  >
                    contact@apnaproject.com
                  </a>
                </li>
                <li className='flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal'>
                  Phone:
                  <a
                    href='tel:+918857000254'
                    className='text-white hover:text-colorOrangyRed'
                  >
                    +91 8857000254
                  </a>
                </li>
              </ul>
            </div>
            {/* Content Right Block */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Contact;
