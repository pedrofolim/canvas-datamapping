import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DataMapping from './dataMapping';

export default class Canvas extends Component {

render() {

  return(<MuiThemeProvider>   
    <div id="canvassvg" style={{height:1500,width:1500}}>
        <DataMapping />
    </div>
  </MuiThemeProvider>)
}
}