import React, {useState, useEffect} from 'react';
import ReactFlow from 'react-flow-renderer';

// let code = "";
// let elements = [  { id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
//     // you can also pass a React Node as a label
//     { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
//     { id: 'e1-2', source: '1', target: '2', animated: true }
//     ];

function FlowChart(props) {
    const [content, setContent] = useState([]);

    useEffect(() => {
            console.log(content);
            const elements = [newNode('1', 'input', props.text, 450, 5)];
            setContent(elements);
        }, [props.text])



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