import logo from './logo.svg';
import './App.css';
import Footer from './Footer'
import Header from "./Header";

function App() {
    return (
        <div className="App">
            <Header />
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
            <Footer />
        </div>
    );
}

export default App;
