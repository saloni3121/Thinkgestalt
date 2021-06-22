import logo from './logo.svg';
import Hero from './components/Hero'
import WhyUs from './components/WhyUs';
import CaseStudies from './components/CaseStudies';
import ExploreServices from './components/ExploreServices';
import './App.css'
import Inspirations from './components/Inspirations';

function App() {
  return (
    <div>
      <Hero/>
      <WhyUs/>
      <CaseStudies />
      <Inspirations />
      <ExploreServices/>
    </div>
  );
}

export default App;
