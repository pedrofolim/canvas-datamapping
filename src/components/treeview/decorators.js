import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Radium from 'radium';
import {VelocityComponent} from 'velocity-react';
import {pictureCanvasChildrenOrganize} from '../filter';

const Loading = ({style}) => {
    return <div style={style}>loading...</div>;
};
Loading.propTypes = {
    style: PropTypes.object
};

const Toggle = ({style}) => {
    const {height, width} = style;
    const midHeight = height * 0.5;
    const points = `0,0 0,${height} ${width},${midHeight}`;

    return (
        <div style={style.base}>
            <div style={style.wrapper}>
                <svg height={height} width={width}>
                    <polygon points={points}
                             style={style.arrow}/>
                </svg>
            </div>
        </div>
    );
};
Toggle.propTypes = {
    style: PropTypes.object
};

class Header extends React.Component {
    
    componentDidMount(){
        this.createNodeCanvas();
    }

    componentDidUpdate(){
        this.createNodeCanvas();
    }

    createNodeCanvas(){
        const {node, canvas, position, style} = this.props;
        const nodeKey = node.path;
        const domNode = ReactDOM.findDOMNode(this.refs[node.path]);

        debugger;
    
        if(domNode && canvas){
            //check if there is a figure on the canvas
            var picture =  canvas.figures.data.filter((picture) => picture.id === nodeKey);
            //if it does not exist, create a new
            if(!picture || (picture && picture.length === 0)){
                const domNode = ReactDOM.findDOMNode(this.refs[nodeKey]);
                const coordinate = domNode.getBoundingClientRect();
                debugger;
                var color = new draw2d.util.Color('none');
                let draw = new draw2d.shape.basic.Text({text:node.name,
                                                        id:node.path,
                                                        deleteable: false,
                                                        resizeable:false,
                                                        outlineColor: color,
                                                        color: color});
                draw.setDraggable(false);
                draw.setPadding(5);
                if(position === 'source'){
                    draw.createPort("hybrid", new draw2d.layout.locator.RightLocator(this));
                }else{
                    draw.createPort("hybrid", new draw2d.layout.locator.LeftLocator(this));
                }
                canvas.add(draw, coordinate.x, coordinate.y);
            }
        }
    }

    render(){
        const {node, style, position} = this.props;
        const nodeKey = node.path;
        debugger;
        return (
            <div style={style.base}>
                <div style={style.title} ref={nodeKey} id={nodeKey}>
                </div>
            </div>
        )
    }
};
Header.propTypes = {
    style: PropTypes.object,
    node: PropTypes.object.isRequired,
    canvas: PropTypes.object,
    position: PropTypes.string
};

class Container extends React.Component {


    render() {
        const {style, decorators, terminal, onClick, node, canvas, position} = this.props;
        return (
            <div onClick={onClick}
                 ref={ref => this.clickableRef = ref}
                 style={style.container}>
                {!terminal ? this.renderToggle() : null}

                
                <decorators.Header position={position} canvas={canvas} node={node} style={style.header}/>
            </div>
        );
    }

    renderToggle() {
        const {animations} = this.props;

        if (!animations) {
            return this.renderToggleDecorator();
        }

        return (
            <VelocityComponent animation={animations.toggle.animation}
                               duration={animations.toggle.duration}
                               ref={ref => this.velocityRef = ref}>
                {this.renderToggleDecorator()}
            </VelocityComponent>
        );
    }

    renderToggleDecorator() {
        const {style, decorators} = this.props;

        return <decorators.Toggle style={style.toggle}/>;
    }
}
Container.propTypes = {
    style: PropTypes.object.isRequired,
    decorators: PropTypes.object.isRequired,
    terminal: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]).isRequired,
    node: PropTypes.object.isRequired,
    canvas: PropTypes.object,
    position: PropTypes.string
};

export default {
    Loading,
    Toggle,
    Header,
    Container
};
