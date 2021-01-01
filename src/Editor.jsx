import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

const keywords = ["if", "else", "while", "for", "return", "true", "false"]
const splitter = new RegExp("\s+|\(|\)|[;]") //TODO: make correct RegExp (current one doesn't work)

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
        for (let i = 0; i < content.length; i++) {
            if (keywords.includes(content[i])) {
                console.log(content[i]);
            }
        }
    }

    //TODO: function to take array of strings to convert to an image
    visualize(content) {
        return 0;
    }

    run() {
        //TODO: send to node server to compile
    }

    render() {
        return (
            <div>
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
                <button
                    className="run"
                    onClick={ () => this.run()}
                    >
                    Run
                </button>
            </div>
        )
    }
}

export default Editor;