import "./App.css";
import Contact from "./components/Contact/Contact";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";
import Apps from "./components/Apps/Apps";

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Skills />
      <Apps />
      <Contact />
    </div>
  );
}

export default App;
