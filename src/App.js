import Data from './Data';
import './App.css';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import Cards from './components/Cards';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import DataSection5 from './DataSection5';
import Section4Texts from './components/Section4Texts';
import Section5 from './components/Section5';
import Section5Card from './components/Section5Card';
import DataSection5Card from './DataSection5Card';
import SignUp from './components/SignUp';
import FooterData from './FooterData';
import Footer from './components/Footer';
import FooterSocial from './components/FooterSocial';
import FooterEnd from './components/FooterEnd';
import FooterEndAddress from './components/FooterEndAddress';

function App() {
  
  const cards = Data.map (item => { 
    return (
      <Cards key = {item.id}
      item = {item} 
      />
    )
  })

  const section4 = DataSection5.map (item => {
    return (
      <Section4Texts key = {item.id}
      item = {item} />
    )
  })

  const footerLinks = FooterData.map (item => {
    return (
      <Footer key = {item.id}
      item = {item} />
    )
  })

  const section5Card = DataSection5Card.map (item => {
    return(
      <Section5Card key={item.id} item = {item} />
    )
  })

  return (
    <>
      <Navbar/>
      <Testimonial className="first-section" />
      <section className="second-section container-fluid row gx-md-4">
        <Section2/>
        {cards}
      </section>
      <Section3/>
      <section className="container-fluid section-four row gx-md-4">
        <Section4/>
        {section4}
      </section>
      <footer className='section-five container-fluid row px-md-4 pb-md-5'>
        <Section5/>
        {section5Card}
        <SignUp/>
        {footerLinks}
        <FooterSocial/>
        <FooterEnd/>
        <FooterEndAddress/>
      </footer>
      </>
  );
}

export default App;
