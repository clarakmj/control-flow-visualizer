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
const HORI_SPACE = 100;
const splitter = new RegExp("\s*[({*\s*\n+)|(}*\s*\n*)]");

function FlowChart(props) {
    const [content, setContent] = useState([]);

    useEffect(() => {
            const elements = parseCode(props.text);
            setContent(elements);
            console.log(content);
    }, [props.text])

    function parseCode(code) {
        code = code.split("");
        const elements = [newNode('0', 'input', code[0].slice(0, -1), X_INIT, Y_INIT)];
        let brackets = 0;
        for (let i = 1; i < code.length - 1; i++) {
            switch (code[i]) {
                case "{": brackets++;
                break;
                case "}": brackets--;
                break;
                default:
                    elements.push(newNode(String(i),
                        'default',
                        code[i],
                        X_INIT + brackets * HORI_SPACE,
                        Y_INIT + i * VERT_SPACE));
                    elements.push(newEdge("e" + String(i), String(i - 1), String(i), ""));
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