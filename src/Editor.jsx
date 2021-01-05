import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import diamondTest from "./images/diamondtest.jpg"

const keywords = ["if", "else", "while", "for", "return", "true", "false"]
const splitter = new RegExp("\s+|\(|\)|[;]") //TODO: make correct RegExp (current one doesn't work)
let cfDiagram = <img src={diamondTest} alt="testing"/>;

class Editor extends React.Component {
    /***
     * constructs the Editor with content set to null
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            words: null
        };
        this.onChange = this.onChange.bind(this);
    }

    /***
     * dynamically set the content to current text in editor
     *
     * @param newValue
     */
    onChange(newValue) {
        this.setState({content: newValue});
        let content = newValue.toString().split(" "); //TODO: replace with splitter
        let important = [];
        for (let i = 0; i < content.length; i++) {
            if (keywords.includes(content[i])) {
                important.push(content[i]);
                this.setState({words: important})
                console.log(this.state.words);
            }
        }
    }

    //TODO: function to take array of strings to convert to an image
    visualize(content) {
        const diagram = content.map(() =>
            <img src={diamondTest}/>
            );
        cfDiagram = <div>{diagram}</div>;
    }

    run() {
        //TODO: send to node server to compile
    }

    render() {
        return (
            <div>
                <table class="center">
                    <AceEditor
                        mode="c_cpp"
                        theme="monokai"
                        onChange={this.onChange}
                        content={this.state.content}
                        setOptions={
                            {
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                tabSize: 2
                            }
                        }
                    />
                    {/*cfDiagram*/}
                </table>
                <button
                    className="run"
                    onClick={ () => this.visualize(this.state.words)}
                    >
                    Run
                </button>
            </div>
        )
    }
}

export default Editor;