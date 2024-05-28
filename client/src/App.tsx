import './App.css';
import Navbar from './Components/Navigation/Navbar';
import { Homepage } from './Components/Homepage/Hompage';
import { Footer } from './Components/Navigation/Footer';

 const App = ()=> {
  return <div>
    <Navbar/>
    <Homepage/>
    <Footer/>
    </div>
}
export default App;
