import { ReactFragment } from "react";
import Header from "./components/Header.js";
import Game from "./components/Game";
import Footer from "./components/Footer.js";

function App() {
  return (
    <ReactFragment>
      <Header />
      <Game />
      <Footer />
    </ReactFragment>
  );
}

export default App;
