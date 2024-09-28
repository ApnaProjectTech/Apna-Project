import { Link } from 'react-router-dom';

const Contact_Info = () => {
  return (
    <div className='order-2 flex flex-col md:order-1'>
      {/* Section Content Block */}
      <div className='mb-8 text-left lg:mb-16 xl:mb-6'>
        <div className='mx-auto md:mx-0 md:max-w-none'>
          <h2>Get in touch with us directly</h2>
        </div>
      </div>
      {/* Section Content Block */}
      <div className='text-lg leading-[1.4] lg:text-[21px]'>
        <p className='mb-7 last:mb-0'>
          Drop us a message, and let’s grab a cup of Tea (on us). Together,
          we’ll explore how we can craft the perfect solution for your business.
        </p>
        <ul className='mt-12 flex flex-col gap-y-8 lg:gap-y-12'>
          <li className='flex flex-col gap-y-4 text-2xl font-bold'>
            Send us an email:
            <a
              href='mailto:contact@apnaproject.com'
              className='text-2xl font-normal leading-loose hover:text-colorOrangyRed lg:text-3xl'
            >
              contact@apnaproject.com
            </a>
          </li>
          <li className='flex flex-col gap-y-4 text-2xl font-bold'>
            Give us a call:
            <a
              href='tel:+918857000254'
              className='text-2xl font-normal leading-loose hover:text-colorOrangyRed lg:text-3xl'
            >
              +91 8857000254
            </a>
          </li>
          <li className='flex flex-col gap-y-4 text-2xl font-bold'>
            Follow us:
            <ul className='mt-auto flex gap-x-[15px]'>
              <li>
                <Link
                  rel='noopener noreferrer'
                  target='_blank'
                  to='https://www.linkedin.com/in/apna-project/'
                  className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed'
                >
                  <img
                    src='assets/img/th-1/linkedin-icon-white.svg'
                    alt='linkedin'
                    width={14}
                    height={14}
                    className='opacity-100 group-hover:opacity-0'
                  />
                  <img
                    src='assets/img/th-1/linkedin-icon-black.svg'
                    alt='linkedin'
                    width={14}
                    height={14}
                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'
                  />
                </Link>
              </li>
              <li>
                <Link
                  rel='noopener noreferrer'
                  target='_blank'
                  to='https://www.instagram.com/_apnaproject_/'
                  className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed'
                >
                  <img
                    src='assets/img/th-1/instagram-icon-white.svg'
                    alt='instagram'
                    width={14}
                    height={14}
                    className='opacity-100 group-hover:opacity-0'
                  />
                  <img
                    src='assets/img/th-1/instagram-icon-black.svg'
                    alt='instagram'
                    width={14}
                    height={14}
                    className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'
                  />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact_Info;
