import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";
<link
  href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;1,700&display=swap"
  rel="stylesheet"
/>;

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}

export default App;
