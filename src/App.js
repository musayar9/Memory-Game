
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import MemoryComponent from './Components/MemoryComponent';
import './Components/MemoCard.css'
import ModalGame from './Components/ModalGame';


function App() {

  return (
    <div className="App">

      <Navbar />
      <Header />

      <ModalGame  />


      <MemoryComponent />






    </div>
  );
}

export default App;
