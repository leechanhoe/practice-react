import styles from "./App.module.css";
import { useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  console.log("all time");

  useEffect(() => {console.log("api");},[]);
  useEffect(() => {console.log("search for", keyword);}, [keyword]);

console.log({keyword});
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search" />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;