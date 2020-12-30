import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Control Flow Visualizer</h1>
      </header>
        <body>
        <table>
            <tr>
                <th>Code</th>
                <th>Visual</th>
            </tr>
            <tr>
                <div className="Code">
                    <textarea rows={30} cols={80}></textarea>
                </div>
            </tr>
            <tr>
                <button type="button">Run</button>
            </tr>
        </table>
        </body>
        <footer>©2020 Tiger Z & Clara K</footer>
    </div>
  );
}

export default App;
