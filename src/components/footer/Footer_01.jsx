import { Link } from 'react-router-dom';
import LogoDark from '../logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer_01 = () => {
  return (
    <footer className='relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]'>
      {/* Footer Top */}
      <div className='py-[60px] xl:pb-[100px] xl:pt-[130px]'>
        <div className='overflow-hidden'>
          {/* Footer Text Slider */}
          <div>
            <div className='overflow-hidden'>
              {/* Footer Text Slider */}
              <div className='footer-text-slider flex items-center gap-x-[30px] whitespace-nowrap'>
                {/* Footer Slide Items */}
                <img
                  src='assets/img/th-1/footer-text-slider-icon.svg'
                  alt='footer-text-slider-icon'
                  width={60}
                  height={60}
                  className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
                />
                <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
                  Future-Ready Tech
                </div>

                <img
                  src='assets/img/th-1/footer-text-slider-icon.svg'
                  alt='footer-text-slider-icon'
                  width={60}
                  height={60}
                  className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
                />
                <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
                  Creative Designs
                </div>

                <img
                  src='assets/img/th-1/footer-text-slider-icon.svg'
                  alt='footer-text-slider-icon'
                  width={60}
                  height={60}
                  className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
                />
                <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
                  Innovative Solutions
                </div>

                {/* Repeat items to make it continuous */}
                <img
                  src='assets/img/th-1/footer-text-slider-icon.svg'
                  alt='footer-text-slider-icon'
                  width={60}
                  height={60}
                  className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
                />
                <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
                  On Time Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Top */}
      <div className='global-container'>
        <div className='h-[1px] w-full bg-[#DBD6CF]' />
        {/* Footer Center */}
        <div className='grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto] xl:gap-20 xl:py-[20px]'>
          {/* Footer Widget 1 */}
          <div className='flex flex-col gap-y-6'>
            <LogoDark />
            <p>
              Our mission is to harness the power of new technologies to solve
              complex business challenges &amp; decision-makers with data-driven
              insights, and enhance user experiences across digital platforms.
            </p>
            <p>
              Website: <Link to='/'>www.apnaproject.com</Link>
            </p>
          </div>
          {/* Footer Widget 2 */}
          <div className='flex flex-col gap-y-6'>
            {/* Footer Title */}
            <h4 className='text-[21px] font-semibold capitalize text-black'>
              Primary Pages
            </h4>
            {/* Footer Navbar */}
            <ul className='flex flex-col gap-y-[10px] capitalize'>
              <li>
                <Link
                  to='/'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/projects'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Footer Widget 3 */}
          <div className='flex flex-col gap-y-6'>
            {/* Connect with Us Section */}
            <h4 className='text-[21px] font-semibold capitalize text-black'>
              Connect with us through our social media:
            </h4>
            <div className='flex gap-x-4'>
              <a
                href='https://www.instagram.com/_apnaproject_/'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className='h-8 w-8 text-black'
                />
              </a>
              <a
                href='https://www.linkedin.com/in/apna-project/'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className='h-8 w-8 text-black'
                />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Center */}
        <div className='h-[1px] w-full bg-[#DBD6CF]' />
        {/* Footer Bottom */}
        <div className='py-9 text-center'>
          <p>
            © Copyright {new Date().getFullYear()}, All Rights Reserved by Apna
            Project
          </p>
        </div>
        {/* Footer Bottom */}
      </div>
      {/* Footer Background Shape 1  */}
      <div className='orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]'></div>
      {/* Footer Background Shape 2  */}
      <div className='orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]'></div>
    </footer>
  );
};

export default Footer_01;
