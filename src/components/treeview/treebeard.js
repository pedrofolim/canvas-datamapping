import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import TreeNode from './node';
import defaultDecorators from './decorators';
import defaultTheme from './themes/default';
import defaultAnimations from './themes/animations';
import {pictureCanvasVisibledAndAligned, pictureCanvasChildrenOrganize} from '../filter';

class TreeBeard extends React.Component {
    
    componentDidUpdate(){
        const {canvas, data: propsData} = this.props;
        let data = propsData;
        // Support Multiple Root Nodes. Its not formally a tree, but its a use case
        if (!Array.isArray(data)) {
            data = [data];
        }
        //update the position of all the canvas with each update
        if(canvas){
            //check everyone in the tree
            data.map((node, index) => {
                pictureCanvasChildrenOrganize(node.children, node.toggled ? true : false, canvas);
            });
        }
    }

    render() {
        const {animations, decorators, data: propsData, onToggle, style, canvas, position} = this.props;
        let data = propsData;

        // Support Multiple Root Nodes. Its not formally a tree, but its a use case
        if (!Array.isArray(data)) {
            data = [data];
        }
        return (
            <ul style={style.tree.base}
                ref={ref => this.treeBaseRef = ref}>
                {data.map((node, index) =>
                    <TreeNode position={position}
                              canvas={canvas}
                              animations={animations}
                              decorators={decorators}
                              key={node.id || index}
                              node={node}
                              onToggle={onToggle}
                              style={style.tree.node}/>
                )}
            </ul>
        );
    }
}

TreeBeard.propTypes = {
    style: PropTypes.object,
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]),
    onToggle: PropTypes.func,
    decorators: PropTypes.object,
    canvas: PropTypes.object,
    position: PropTypes.string
};

TreeBeard.defaultProps = {
    style: defaultTheme,
    animations: defaultAnimations,
    decorators: defaultDecorators
};

export default TreeBeard;
