import logo from './logo.svg';
import './App.css';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <SectionOne/>
     <SectionTwo/>
     <SectionThree/>
     <Footer/>
    </div>
  );
}

export default App;
