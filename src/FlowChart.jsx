import React, {useState, useEffect} from 'react';
import ReactFlow from 'react-flow-renderer';

// let code = "";
// let elements = [  { id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
//     // you can also pass a React Node as a label
//     { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
//     { id: 'e1-2', source: '1', target: '2', animated: true }
//     ];

const keywords = ["if", "else", "while", "for", "return", "true", "false", "case", "switch", ""]
const X_INIT = 10;
const Y_INIT = 150;
const VERT_SPACE = 55
const HORI_SPACE = 180;
//const splitter = new RegExp("\s*[{}]?\n\s*}?\s*");
const openBracket = new RegExp("\s*{\s*");
const closeBracket = new RegExp("\s*}\s*");

function FlowChart(props) {
    const [content, setContent] = useState([]);

    useEffect(() => {
            const elements = parseCode(props.text);
            setContent(elements);
            console.log(content);
    }, [props.text])

    function toNextBracket(code, index) {
        let text = "";
        while (code[index] != "{" && index < code.length) {
            text += (" " + code[index]);
            index++;
        }
        return [text, index];
    }

    function parseCode(code) {
        code = code.split(/\s+/);
        let elements = [];
        let [label, index] = toNextBracket(code, 0);
        elements.push(newNode('0', 'input', label, X_INIT, Y_INIT));
        let id = 1;
        let brackets = -1;
        let booleanIDs = [];
        let edgeLabel = "";
        for (index; index < code.length - 1; index++) {
            switch (code[index]) {
                case "{":
                    brackets++;
                    break;
                case "}":
                    brackets--;
                    break;
                case "if":
                    [label, index] = toNextBracket(code, index);
                    elements.push(newNode(String(id),
                        'default',
                        label,
                        X_INIT + brackets * HORI_SPACE,
                        Y_INIT + id * VERT_SPACE));
                    brackets++;
                    booleanIDs.push(id);
                    elements.push(newEdge("e" + String(id), String(id - 1), String(id), edgeLabel));
                    edgeLabel = "T";
                    id++;
                    break;
                default:
                    label = code[index];
                    elements.push(newNode(String(id),
                        'default',
                        label,
                        X_INIT + brackets * HORI_SPACE,
                        Y_INIT + id * VERT_SPACE));
                    console.log(label);
                    if (booleanIDs.length && code[index - 1] == "}") {
                        let boolID = booleanIDs.pop();
                        elements.push(newEdge("e" + String(boolID) + "f",
                            String(boolID),
                            String(id),
                            "F"))
                    }
                    elements.push(newEdge("e" + String(id), String(id - 1), String(id), edgeLabel));
                    edgeLabel = "";
                    id++;
                    break;
            }
        }
        return elements;
    }

    function newNode(id_, type_, label_, x_, y_) {
        return {
            id: id_,
            type: type_,
            data: {
                label: label_
            },
            position: {x: x_, y: y_},
            draggable: false,
            selectable: false
        }
    }

    function newEdge(id_, source_, target_, label_) {
        return {
            id: id_,
            source: source_,
            target: target_,
            type: 'smoothedge',
            label: label_,
            arrowHeadType: 'arrow'
        }
    }

    return (
        <div style={{ height: 800, width: 500}}>
            <ReactFlow elements={content} />
        </div>
    );
}

export default FlowChart;