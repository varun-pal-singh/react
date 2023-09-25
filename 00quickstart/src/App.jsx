import MyApp from './quick-start/NestedComponents'
import AboutPage from './quick-start/WritingMarkupWithJSX'
import DisplayData from './quick-start/DisplayingData'
import Condition from './quick-start/ConditionalRendering'
import ShoppingList from './quick-start/RenderingList'
import MyButton from './quick-start/RespondingToEvents'
import MyCountButton from './quick-start/UpdatingTheScreen'
import MyParentCountBtn from './quick-start/UsingParentState'



function App() {
  return (
    <>
      <DisplayData/>
      <MyApp/>
      <AboutPage/>
      <Condition/>
      <ShoppingList/>
      <MyButton/> <br />
      <MyCountButton/> <br />
      <MyCountButton/>
      <MyParentCountBtn/>
    </>
  )
}

export default App
