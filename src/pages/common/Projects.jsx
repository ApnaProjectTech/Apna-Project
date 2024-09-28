import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';
import ProjectBox from './ProjectBox';

const Projects = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Our Work' link='Our Work' />
        <section id='content-section-2'>
          <div className='pb-20 pt-20'>
            <div className='global-container'>
              <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.3fr)_1fr]'>
                <div
                  className='jos order-2 overflow-hidden rounded-md'
                  data-jos_animation='fade-left'
                >
                  <img
                    src='assets/img/project.png'
                    alt='Project-1'
                    width={526}
                    height={550}
                    className='h-auto w-full'
                  />
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div className='jos order-1' data-jos_animation='fade-right'>
                  {/* Section Content Block */}
                  <div className='mb-6'>
                    <h2>What we can build...</h2>
                  </div>
                  {/* Section Content Block */}
                  <div className='text-lg leading-[1.4] lg:text-[21px]'>
                    <p className='mb-7 last:mb-0'>
                      We can build tech products in multiple horizons. We
                      specialize in creating everything from{' '}
                      <b>Personal websites </b>
                      for individuals to{' '}
                      <b>Professional portfolios for businesses </b>
                      of any size. Whether it's a custom <b>CRM tool </b>{' '}
                      tailored to your workflow, an <b>eCommerce website </b>{' '}
                      for your new venture, or a <b>Mobile app </b> that acts as
                      a central hub for managing your business, we've got you
                      covered.
                    </p>
                    <p className='mb-3 last:mb-0'>
                      <b>Need an app with specific functionalities? </b> We can
                      build exactly what you envision.
                    </p>
                    <p className='mb-7 last:mb-0'>
                      <b>Looking for a sleek and intuitive UI/UX design?</b> Our
                      team will bring your vision to life, crafting designs that
                      reflect your goals with stunning visuals and seamless user
                      experiences.
                    </p>
                    <Link
                      to='/contact'
                      className='button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                    >
                      Get in touch
                    </Link>
                  </div>
                </div>
                {/* Content Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>{' '}
        {/* <div>
\          <div className='global-container'>
\            <div className='jos text-center'>
              <div className='mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[950px]'>
                <h2>Our Field of works...</h2>
              </div>
            </div>
          </div>
        </div> */}
        <div className='bg-black pb-10 pt-20 xl:pb-[0px] xl:pt-[35px] rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[50px] lg:rounded-tr-[50px]'>
          <ProjectBox />
        </div>
      </main>
    </>
  );
};

export default Projects;
