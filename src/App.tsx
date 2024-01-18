import "./App.css";
import Apps from "./components/Apps/Apps";
import Contact from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";

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
