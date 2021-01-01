import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

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
        console.log('change', newValue);
        this.setState({content: newValue});
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