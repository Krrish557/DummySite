import Navbar from "./components/mainPage/navbar";
import asset1 from "./assets/asset1.png";
import HeadText from "./components/mainPage/headtext";
import Page2sideText from "./components/mainPage/Page2sideText";
import GrowTogText from "./components/mainPage/GrowTogText";
import Page2Img from "./components/mainPage/Page2Img";
import FreqTitle from "./components/mainPage/FreqTitle";
import Questions from "./components/mainPage/Questions";
import "./App.css";

function App() {
  return (
    <>
      <div className="page1">
        <Navbar />
        <img src={asset1} id="asset1" />
        <HeadText />
      </div>
      <div className="page2">
        <GrowTogText />
        <Page2sideText />
        <Page2Img />
      </div>
      <div className="page3">
        <FreqTitle />
        <Questions />
      </div>
    </>
  );
}

export default App;
