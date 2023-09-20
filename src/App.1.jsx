import Counter from "./counter";
import Player from "./player";

export function App() {
  function Button1() {
    alert('clicked button 1');
  }
  const Button2 = () => {
    alert('clicked button 2');
  };
  const Button3 = (num) => {
    alert(num + 10);
  };
  return (
    <>
      <h2>React Core Concept Part 2</h2>
      <Player />
      <Counter></Counter>
      <button onClick={Button1}>Click Me</button>
      <button onClick={Button2}>Click Me2</button>
      <button onClick={() => alert('clicked button 3')}>Click Me3</button>
      {/* passing parmiter using onclick */}
      <button onClick={() => Button3(3)}>Click Me</button>

    </>
  );
}
