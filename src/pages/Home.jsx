import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HeroForm from '../components/HeroForm';
import Navbar from '../components/Navbar'
import TimeCard from '../components/TimeCard'
function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TimeCard/>
      <HeroForm/>
      <Footer/>
    </div>
  );
}

export default Home;