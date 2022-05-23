import "./App.css";
import Content from "../../components/Content";
import Descrip from "../../components/Descrip";
import Contact from "../../components/Contact";
import Products from "../../components/Products";
import NavBar from "../../components/Header/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Descrip />
      <Products/>
      <Contact />
    </div>
  );
}

export default App;
