import logo from './images/fruit2/6.jpg';
import './App.css';

// const title = '臣亮言 先帝創業未半而中道三顧茅廬';
function App(props) {
  console.log(props);
  const subject = props.subject;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="fruit" alt="logo" />
        <p>
          {subject}
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="../fruit.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn fruit
        </a>
        <a>
          蕙萱萌萌
        </a> 
      </header>
    </div>
  );
}

export default App;
