import "./App.css";
import Content from "../../components/Present/index";
// import Descrip from "../../components/Descrip";
import Contact from "../../components/Contact/Contact";
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
      {/* <Descrip
        title="Section 2"

        dark={true}
        id="section2"
      /> */}
      <Contact />
    </div>
  );
}

export default App;
