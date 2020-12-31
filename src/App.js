import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Control Flow Visualizer</h1>
            </header>
            <body>
            <table class="center">
                <tr>
                    <td><strong>Code</strong></td>
                    <td><strong>Visual</strong></td>
                </tr>
                <tr>
                    <td><div className="Code">
                        <textarea rows={30} cols={80}></textarea>
                    </div></td>
                    <td><img src="https://media.geeksforgeeks.org/wp-content/uploads/20190515152609/666.jpg"
                             name="placeholder" height="500" width="400"/></td>
                </tr>
                <tr>
                    <td><div className="button"><button type="button">Run</button></div></td>
                </tr>
                <tr>
                    <div className="Console">
                        <p>This is a place for error messages yay</p>
                    </div>
                </tr>
            </table>
            </body>
            <footer>©2020 Tiger Z & Clara K</footer>
        </div>
    );
}

export default App;



