import React, { Component } from 'react'

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import {Card, CardTitle, CardText} from 'material-ui/Card'

import {Treebeard} from './treeview';

import {sourceData, targetData} from './data';
import * as filters from './filter';
import { debuglog } from 'util';

const styleLeft = {
  top: 5,
  left: 5,
  margin: 20,
  position: 'absolute',
  height: '100%',
  width: '400px',
  textAlign: 'center',
  display: 'inline-block'
};

const styleCardCenter = {
  top: 5,
  margin: 20,
  left: '33%',
  position: 'absolute',
  height: '100px',
  width: '410px',
  textAlign: 'center',
  display: 'inline-block',
};

const styleRight = {
  top: 5,
  right: 5,
  position: 'absolute',
  height: '100%',
  width: '400px',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const HELP_MSG = 'Select A Node To See Its Data Structure Here...';

class NodeViewer extends Component {
  render() {
      let json = this.props.result !== null ? JSON.stringify(this.props.result) : undefined;

      if (!json) {
          json = HELP_MSG;
      }

      return(
            <div style={this.props.style}>
              {json}
            </div>
      )
  }
}

export default class DataMapping extends Component {

  constructor(props) {
    super(props);
    this.state = {sourceData: sourceData,
                  targetData: targetData,
                  canvas: null,
                  connections: null,
                  result: null};
    this.onToggle = this.onToggle.bind(this);
  }

/**
 * event of toggle in tree, using callback function
 * @param {*} node 
 * @param {*} toggled 
 */
onToggle(node, toggled) {

    //TODO RETIRAR DAQUI E COLOCAR DENTRO DO COMPONENTE TREEBEARD
    const {cursor} = this.state;

    if (cursor) {
        cursor.active = false;
    }

    node.active = true;
    if (node.children) {
        node.toggled = toggled;
    }

    this.setState({cursor: node});
}

/**
 * Filter source nodes in tree view
 * @param {*} e 
 */
onFilterSourceMouseUp(e) {
    const filter = e.target.value.trim();
    if (!filter) {
        return this.setState({sourceData});
    }
    var filtered = filters.filterTree(sourceData, filter);
    filtered = filters.expandFilteredNodes(filtered, filter);
    this.setState({sourceData: filtered});
}

/**
 * Filter target nodes in tree view
 * @param {*} e 
 */
onFilterTargetMouseUp(e) {
  const filter = e.target.value.trim();
  if (!filter) {
      return this.setState({targetData});
  }
  var filtered = filters.filterTree(targetData, filter);
  filtered = filters.expandFilteredNodes(filtered, filter);
  this.setState({targetData: filtered});
}

/**
 * Create new Canvas after mount component
 */
componentDidMount(){
    let canvas = new draw2d.Canvas("canvassvg");
    this.setState({canvas: canvas});
}

/**
 * save the data after performing data mapping on the component
 */
save(){
        const {sourceData, targetData, connections, canvas} = this.state;
        var connectionsResult = connections !== null ? connections : [];
        debugger;
        canvas && canvas.lines.data.map((data) =>
        connectionsResult.push({
                key: data.id,
                sourcePort:{
                    path: data.sourcePort.parent.id,
                    x: data.sourcePort.x,
                    y: data.sourcePort.y
                },
                targetPort:{
                    path: data.targetPort.parent.id,
                    x: data.targetPort.x,
                    y: data.targetPort.y 
                }
            })
        );
        this.setState({result: {source: sourceData, target: targetData, connections: connectionsResult}});
}

render() {

  const {sourceData, targetData, connections, canvas, result} = this.state;

  return(
        <div>
        <div style={styleLeft}>
            <div className="input-group">
                <input className="form-control"
                    onKeyUp={this.onFilterSourceMouseUp.bind(this, sourceData)}
                    placeholder="Search the tree..."
                    type="text" />
            </div>
            <Treebeard
                position='source'
                canvas={canvas} 
                data={sourceData}
                onToggle={this.onToggle} />
        </div>
        <NodeViewer result={result} style={styleCardCenter} />
        <div style={styleRight}>
            <Treebeard
                position='target'
                canvas={canvas}
                data={targetData}
                onToggle={this.onToggle}/> 
        </div>
        <RaisedButton onClick={() => this.save()}>save</RaisedButton>
        </div>
    )
}
}