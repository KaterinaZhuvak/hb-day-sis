
import './styles/global.css';

import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import SectionHeading from './components/SectionHeading/SectionHeading';
import MemoryGallery from './components/MemoryGallery/MemoryGallery';
import Letter from './components/Letter/Letter';
import WishGarden from './components/WishGarden/WishGarden';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <SectionHeading
        eyebrow="Там, де починається тепло"
  title="Наші корені"
  description="Люди, обійми й моменти, які завжди нагадуватимуть нам, що таке дім."
  align="left"
      /> */}
      <MemoryGallery />
       <Letter />
       <WishGarden />
      <Footer /> 
    </main>
  );
}

export default App;
