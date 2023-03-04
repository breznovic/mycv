import "./App.css";
import Contact from "./components/Contact/Contact";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
