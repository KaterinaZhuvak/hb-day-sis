import './styles/global.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import MemoryGallery from './components/MemoryGallery/MemoryGallery';
import Letter from './components/Letter/Letter';
import Wishes from './components/Wishes/Wishes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main>
      <Header />
      <Hero /> 
      <MemoryGallery />
      <Letter />
      <Wishes />
      <Footer />
      
    </main>
  );
}

export default App;
