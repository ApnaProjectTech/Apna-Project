import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Hero from '../../components/sections/inner-pages/about/Hero';
import Content_02 from '../../components/sections/inner-pages/about/Content_02';
import CoreValue from '../../components/sections/inner-pages/about/CoreValue';

const About = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='About Us' link='About' />
        <Content_02 />
        <Hero />
        {/* <FunFact /> for future*/}
        <CoreValue />
        {/* <Team /> */}
        {/* <Contact /> */}
      </main>
    </>
  );
};

export default About;
