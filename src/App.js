import logo from './logo.svg';
import Hero from './components/Hero'
import WhyUs from './components/WhyUs';
import CaseStudies from './components/CaseStudies';
import ExploreServices from './components/ExploreServices';
import './App.css'

function App() {
  return (
    <div>
      <Hero/>
      <WhyUs/>
      <CaseStudies />
      <ExploreServices/>
    </div>
  );
}

export default App;
