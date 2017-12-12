import React from 'react'
import { connect } from 'react-redux'
import 'bulma/css/bulma.css'
import actions from '../../actionCreators'

const STYLE = {
  WRAPPER: {
    width: '100%'
  },
  TABLE: {
    width: '100%'
  }
}

const layout = props => (
  <div style={STYLE.WRAPPER}>
    <table style={STYLE.TABLE} className='table'>
      <tbody>
        <tr>
          <td>Line width</td>
          <td><input onChange={props.onSegmentWidthChange} type="number" className="input is-small" value={props.config.width}></input></td>
        </tr>
        <tr>
          <td>Dot color</td>
          <td><input onChange={props.onSegmentColorChange} type="color" className="input is-small" value={props.config.color}></input></td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default connect(

  (state, ownProps) => ({
    config: state.configs.TOOL_LINESEGMENT
  }),

  (dispatch, ownProps) => ({
    onSegmentWidthChange: e => {
      dispatch(actions.CONFIG_SEGMENT_WIDTH_CHANGE({
        newValue: e.target.value
      }))
    },
    onSegmentColorChange: e => {
      dispatch(actions.CONFIG_SEGMENT_COLOR_CHANGE({
        newValue: e.target.value
      }))
    }
  })

)(layout)
