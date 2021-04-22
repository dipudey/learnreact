// import ClockList from './components/ClockList';
// import Calculator from './components/Calculator';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
import Counter from './components/RenderProps/Counter'
import ClickCounter from './components/RenderProps/ClickCounter'
import HoverCounter from './components/RenderProps/HoverCounter'

function App() {
  const clocks = [1,2,3,4];
  return (
    <div>
      {/* <ClockList quantity={clocks}/> */}
      {/* <Form /> */}
      {/* <Calculator /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      <Counter >
        {(count,incrementCounter) => (
          <ClickCounter count={count} incrementCounter={incrementCounter} />
        )}
      </Counter>

      <Counter>
        {(count,incrementCounter) => (
          <HoverCounter count={count} incrementCounter={incrementCounter}></HoverCounter>
        )}
      </Counter>

    </div>
  )
}

export default App;