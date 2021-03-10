
import "./App.css";
// import { World } from "./Components/World/World";
import {Routes} from "./Routes/Routes";
// import StylePage from './Components/Style/StylePage';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes/>
    </div>
  );
}

export default App;
