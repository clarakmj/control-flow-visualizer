import './App.css';
import Footer from './Footer'
import Header from "./Header";
import Editor from "./Editor";

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
                        <Editor />
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
