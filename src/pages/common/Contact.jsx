import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Contact_Section from '../../components/sections/inner-pages/contact/contact_section/Contact_Section';
import useAccordion from '../../hooks/useAccordion';

const Contact = () => {
  const [activeIndex, handleAccordion] = useAccordion();

  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Contact Us' link='Contact' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Contact Section Start :::... */}
        <Contact_Section />
        <div className='bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2'>
              {/* FAQ Left Block */}
              <div
                className='jos flex flex-col'
                data-jos_animation='fade-right'
              >
                {/* Section Content Block */}
                <div className='mb-8 text-left lg:mb-16 xl:mb-6'>
                  <div className='mx-auto text-white md:mx-0 md:max-w-none'>
                    <h2>Freely ask us for more information</h2>
                  </div>
                </div>
                {/* Section Content Block */}
                {/* <div className='text-lg leading-[1.4] lg:text-[21px]'>
                  <p className='mb-7 last:mb-0 text-gray-500'>
                    Our AI SaaS solutions can be quickly deployed, enabling
                    users to start benefiting from AI capabilities without
                    lengthy setup and development times in fast-paced
                    industries.
                  </p>
                </div> */}
              </div>
              {/* FAQ Left Block */}
              {/* FAQ Right Block */}
              <div
                className='jos md:ml-10 lg:ml-20 xl:ml-32'
                data-jos_animation='fade-left'
              >
                {/* Accordion*/}
                <ul className='accordion'>
                  {/* Accordion items */}
                  <li
                    onClick={() => handleAccordion(0)}
                    className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                      activeIndex === 0 ? 'active' : ''
                    }`}
                  >
                    <div className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'>
                      <p className='text-gray-300'>
                        What types of projects can you handle?
                      </p>
                      <div className='accordion-icon'>
                        <img src='assets/img/plus-white.svg' alt='plus' />
                      </div>
                    </div>
                    <div className='accordion-content disappear translate-y-3 text-lg leading-[1.66] text-white'>
                      <p>
                        We specialize in a variety of projects, including custom
                        website development, mobile app creation, UI/UX design,
                        and SaaS solutions. Whether you need a personal
                        portfolio, an eCommerce platform, a CRM tool, or a data
                        analytics application, we can build it to meet your
                        unique business needs.
                      </p>
                    </div>
                  </li>
                  {/* Accordion items */}
                  {/* Accordion items */}
                  <li
                    onClick={() => handleAccordion(1)}
                    className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                      activeIndex === 1 ? 'active' : ''
                    }`}
                  >
                    <div className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-gray-300 lg:text-[28px]'>
                      <p>
                        How do you ensure the quality and security of your
                        projects?
                      </p>
                      <div className='accordion-icon'>
                        <img src='assets/img/plus-white.svg' alt='plus' />
                      </div>
                    </div>
                    <div className='accordion-content disappear translate-y-3 text-lg leading-[1.66] text-white'>
                      <p>
                        We follow industry best practices and rigorous testing
                        procedures to ensure our projects meet high-quality
                        standards. Our team implements robust security measures,
                        such as data encryption and secure coding practices, to
                        protect your data and ensure a safe user experience.
                      </p>
                    </div>
                  </li>
                  {/* Accordion items */}
                  {/* Accordion items */}
                  <li
                    onClick={() => handleAccordion(2)}
                    className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                      activeIndex === 2 ? 'active' : ''
                    }`}
                  >
                    <div className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-gray-300 lg:text-[28px]'>
                      <p>
                        What is the typical timeline for completing a project?
                      </p>
                      <div className='accordion-icon'>
                        <img src='assets/img/plus-white.svg' alt='plus' />
                      </div>
                    </div>
                    <div className='accordion-content disappear translate-y-3 text-lg leading-[1.66] text-white'>
                      <p>
                        The timeline for project completion varies based on the
                        complexity and scope of the project. After understanding
                        your requirements, we provide a detailed project plan
                        with estimated timelines for each phase. We prioritize
                        timely delivery while ensuring the highest quality.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* FAQ Right Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/*...::: Contact Section End :::... */}
        {/*...::: Map Section Start :::... */}
        {/*...::: Map Section Start :::... */}
      </main>
    </>
  );
};

export default Contact;
