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
          <td> Dot spacing </td>
          <td><input onChange={props.onIntervalChange} type="number" className="input is-small" value={props.config.interval}></input></td>
        </tr>
        <tr>
          <td>Dot size</td>
          <td><input onChange={props.onDotSizeChange} type="number" className="input is-small" value={props.config.dotSize}></input></td>
        </tr>
        <tr>
          <td>Dot color</td>
          <td><input onChange={props.onDotColorChange} type="color" className="input is-small" value={props.config.dotColor}></input></td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default connect(

  (state, ownProps) => ({
    config: state.configs.TOOL_GRID
  }),

  (dispatch, ownProps) => ({
    onIntervalChange: e => {
      dispatch(actions.CONFIG_GRID_INTERVAL_CHANGE({
        newValue: e.target.value
      }))
      dispatch(actions.USER_CAPTURE_CURRENT_FRAME({}))
    },
    onDotSizeChange: e => {
      dispatch(actions.CONFIG_GRID_DOTSIZE_CHANGE({
        newValue: e.target.value
      }))
      dispatch(actions.USER_CAPTURE_CURRENT_FRAME({}))
    },
    onDotColorChange: e => {
      dispatch(actions.CONFIG_GRID_DOTCOLOR_CHANGE({
        newValue: e.target.value
      }))
      dispatch(actions.USER_CAPTURE_CURRENT_FRAME({}))
    }
  })

)(layout)
