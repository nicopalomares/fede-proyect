import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Descrip from './components/Descrip';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Descrip/>
        <Contact/>
    </div>
  );
}

export default App;
