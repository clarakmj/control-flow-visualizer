import './App.css';
import Editor from "./Editor";
import Header from "./Header";
import Footer from "./Footer";
import FlowChart from "./FlowChart";
import React, {useState} from 'react';

function App() {
    const [code, updateCode] = useState("");

    return (
        <div className="App">
            <header className="App-header">
                <Header />
            </header>
            <body>
            <table class="center" className="main">
                <tr>
                    <td><strong>Code</strong></td>
                    <td><strong>Visual</strong></td>
                </tr>
                <tr>
                    <td>
                        <Editor
                        updateCode={updateCode}
                        />
                    </td>
                    <td>
                        <FlowChart
                        text={code}
                        />
                    </td>
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
            <Footer />
        </div>
    );
}

export default App;



