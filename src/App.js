import logo from './logo.svg';
import './App.css';

// const asd = <h1>Hello World</h1>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <h2>Login button</h2>
          <button>Login</button>
        </div>
      </header>
    </div>
  );
}

export default App;
