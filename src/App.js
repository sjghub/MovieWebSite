import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState();
  const [btc, setBtc] = useState(money);
  const onChange = (event) => setMoney(event.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((respose) =>
      respose.json().then((json) => {
        setCoins(json);
        setLoading(false);
      })
    );
  }, []);

  return (
    <div>
      <h1>The Coins!({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <h2>Current price</h2>

      <hr />
      <ul>
        {coins.map((coin, index) => (
          <li>
            {coin.name}({coin.symbol}) : ${coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
