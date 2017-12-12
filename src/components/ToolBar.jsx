import React from 'react'
import 'bulma/css/bulma.css'
import { connect } from 'react-redux'
import actions from '../actionCreators'
import GridConfig from './toolConfigs/GridConfig'
import LineSegmentConfig from './toolConfigs/LineSegmentConfig'
import FramesEditor from './FramesEditor'

export const STYLE = {
  WRAPPER: {
    position: 'absolute',
    width: '300px',
    left: '20px',
    top: '20px',
    bottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  CONFIG_CONTENT: {
    // flex: '1',
    overflowY: 'scroll',
    alignItems: 'flex-start',
  }
}


export const ToolbarLayout = props => (
  <nav style={STYLE.WRAPPER} className="panel">
    <p className="panel-heading">
      Configs
    </p>
    <p className="panel-tabs">
      {
        // props.tools.map( tool => (
        //   <a className={[
        //       props.selectedTool === tool.id ? 'is-active' : "",
        //     ].join(" ")}
        //     onClick={() => props.setSelectedTedTool(tool.id)}
        //     key={tool.id}>
        //     {tool.title}
        //   </a>
        // ))
      }
    </p>
    <div style={STYLE.CONFIG_CONTENT}>
      {
          props.selectedTool === "TOOL_GRID" ? <GridConfig></GridConfig>
        : props.selectedTool === "TOOL_LINESEGMENT" ? <LineSegmentConfig></LineSegmentConfig>
        : props.selectedTool === "TOOL_CIRCLE" ? <div>{'TOOL_CIRCLE'}</div>
        : <div>{'NONE'}</div>
      }
    </div>
    <div style={{...STYLE.CONFIG_CONTENT, flex: 1}}className="panel-block">
      <FramesEditor></FramesEditor>
    </div>
  </nav>
)

export default connect(
  (state, ownProps) => ({
    tools: state.availableTools,
    selectedTool: state.currentSelectedTool
  }),

  (dispatch, ownProps) => ({
    setSelectedTedTool: (toolId) => {
      dispatch(actions.USER_SELECT_TOOL({
        selectedTool : toolId
      }))
    }
  })

)(ToolbarLayout)
