import './App.css';
// import StylePage from './Components/Style/StylePage';
import Navbar from './Components/Navbar/Navbar';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes/>
      {/* <StylePage/> */}
    </div>
  );
}

export default App;
