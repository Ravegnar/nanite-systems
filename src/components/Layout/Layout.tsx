import Navbar from '@/views/navbar/Navbar';
import Header from '@/views/header/Header';
import AboutUs from '@/views/aboutUs/AboutUs';
import Services from '@/views/services/Services';
import References from '@/views/references/References';
import Clients from '@/views/clients/Clients';
import Contacts from '@/views/contacts/Contacts';
import Footer from '@/views/footer/Footer';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Header />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <References />
      </div>
      <div>
        <Clients />
      </div>
      <div>
        <Contacts />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
