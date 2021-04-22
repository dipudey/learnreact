// import ClockList from './components/ClockList';
// import Calculator from './components/Calculator';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  const clocks = [1,2,3,4];
  return (
    <div>
      {/* <ClockList quantity={clocks}/> */}
      {/* <Form /> */}
      {/* <Calculator /> */}
      <ClickCounter />
      <HoverCounter />
    </div>
  )
}

export default App;