import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

function Editor() {
    return (
        <AceEditor
            mode="c_cpp"
            theme="monokai"
        />
    )
}

export default Editor;