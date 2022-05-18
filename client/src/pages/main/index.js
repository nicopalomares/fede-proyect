import "./App.css";
import Header from "../../components/Header/Header";
import Content from "../../components/Content";
import Descrip from "../../components/Descrip";
import Contact from "../../components/Contact";
import Products from "../../components/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Descrip />
      <Products/>
      <Contact />
    </div>
  );
}

export default App;
