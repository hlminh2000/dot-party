import React from 'react'
import * as PIXI from 'pixi.js'
import { connect } from 'react-redux'
import _ from 'lodash'

const STYLE = {
  WRAPPER: {
    position: 'absolute',
    left: '0px',
    right: '0px',
    top: '0px',
    bottom: '0px',
    background: '#1577E8',
    overflow: 'hidden',
  }
}

class CanvasApp extends React.Component {

  componentDidMount(){
    this.initPixiApp()
    this.renderPixiApp()
  }

  componentDidUpdate(){
    this.renderPixiApp()
  }

  initPixiApp(){
    const canvasEl = this.canvasEl
    const wrapperDiv = this.wrapper
    const pixiApp = this.pixiApp = new PIXI.Application({
      view: canvasEl,
      transparent: true,
      width: wrapperDiv.clientWidth,
      height: wrapperDiv.clientHeight,
      antialias: true,
      resolution: 2
    })
    const gridLayer = this.gridLayer = new PIXI.Graphics()
      .lineStyle(1, 0x000000, 1)
      .drawRect(0, 0, 100, 100)
    pixiApp.stage.addChild(gridLayer)
    const resize = e => {
      pixiApp.renderer.view.style.width = wrapperDiv.clientWidth + 'px'
      pixiApp.renderer.view.style.height = wrapperDiv.clientHeight + 'px'
      pixiApp.renderer.resize(wrapperDiv.clientWidth, wrapperDiv.clientHeight)
      this.renderPixiApp()
    }
    window.addEventListener('resize', resize)
    resize()
  }

  renderPixiApp(){
    const gridHeight = this.wrapper.clientHeight
    const gridWidth = this.wrapper.clientWidth
    const gridLayer = this.gridLayer
    const gridInterval = this.props.configs.TOOL_GRID.interval
    const dotSize = this.props.configs.TOOL_GRID.dotSize
    const dotColor = Number(this.props.configs.TOOL_GRID.dotColor.split('#').join('0x'))
    gridLayer.clear()
    _.range(0, gridHeight/gridInterval).forEach(rowIdx => {
      _.range(0, gridWidth/gridInterval).forEach(colIdx => {
        gridLayer
          .beginFill(dotColor, 1)
          .drawCircle(colIdx*gridInterval, rowIdx*gridInterval, dotSize)
          .endFill()
      })
    })
  }

  render(){
    return (
      <div ref={thisDiv => this.wrapper = thisDiv } style={STYLE.WRAPPER}>
        <canvas ref={ thisCanvas => this.canvasEl = thisCanvas }></canvas>
      </div>
    )
  }
}

export default connect(

  (state, ownProps) => ({
    selectedTool: state.currentSelectedTool,
    configs: state.configs
  }),

  (dispatch, ownProps) => ({

  })

)(CanvasApp)
