import Navbar from '@/views/navbar/Navbar';
import NavbarC from '@/views/navbar copy/Navbar';
import NavbarB from '@/views/navbar copy 2/Navbar';
import Header from '@/views/header/Header';
import AboutUs from '@/views/aboutUs/AboutUs';
import Services from '@/views/services/Services';
import References from '@/views/references/References';
import Clients from '@/views/clients/Clients';
import Contacts from '@/views/contacts/Contacts';
import Footer from '@/views/footer/Footer';
import Scroller from '@/components/scroller/Scroller';

export const Layout = () => {
  return (
    <>
      {/*
      <Navbar />
      <NavbarC />
      <Navbar></Navbar>
      max-w-7xl mx-auto
    */}
      <Scroller />
      <div id='header'>
        <NavbarB />
        <Header />
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='aboutUs'>
        <AboutUs />
      </div>
      <div id='references'>
        <References />
      </div>
      <div>
        <Clients />
      </div>
      <div id='contacts'>
        <Contacts />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
