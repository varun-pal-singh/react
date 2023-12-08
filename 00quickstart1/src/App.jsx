import MyButton from "./react-basics/MyButton";
import AboutPage from "./react-basics/WritingMarkupWithJSX";
import Profile from "./react-basics/DisplayingData"
import Conditional from "./react-basics/ConditionalRendering"
import "./App.css";

function App() {
  return (
    <>
      <h1>hello react!!</h1>
      <MyButton/> <br/>
      <AboutPage/>
      <Profile/>
      <Conditional />
    </>
  )
}

export default App
