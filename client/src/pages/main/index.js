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
      <Content
        title="Section 1"
        dark={true}
        id="section1"
      />
      <Descrip
        title="Section 2"

        dark={true}
        id="section2"
      />
      <Products
        title="Section 3"

        dark={true}
        id="section3"
      />
      <Contact />
    </div>
  );
}

export default App;
