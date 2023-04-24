import { useState, useEffect } from "react";

function App() {
  const [conuter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((e) => e + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("Calling API..");
  }, []);
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [conuter]);
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{conuter}</h1>
      <button onClick={onClick}>Click!</button>
    </div>
  );
}

export default App;
