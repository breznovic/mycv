import "./App.css";
import Test from "./Test";
import Apps from "./components/Apps/Apps";
import Contact from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Nav />
     {/*  <Test/> */}
      <Main />
      <Skills />
      <Apps />
      <Contact />
    </div>
  );
}

export default App;
