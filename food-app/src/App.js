
import './App.css';
import Navbar from './components/navigation bar/Navbar';
import Work from './pages/Home/work';
import Body from './components/body';
import Bottom from './components/bottom';
import Down from './components/down';

import 'bootstrap/dist/css/bootstrap.min.css';


// import Alright from './components/alright';
import CarouselFadeExample from './components/CarouselExample';






function App() {
  return (
    <div className="App">
      <Navbar />
      <Work />
      <CarouselFadeExample />
      <Body />
      <Bottom />
      <Down />
      {/* <ReactBootsrap /> */}
      {/* <Alright /> */}
      
    
     
    
      
      
    
      
    </div>
  );
}

export default App;
