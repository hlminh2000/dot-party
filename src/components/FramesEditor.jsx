import React from 'react'
import 'bulma/css/bulma.css'
import { connect } from 'react-redux'
import actions from '../actionCreators'


const STYLE = {
  WRAPPER: {
    width: '100%',
    flex: 1,
  },
  TABLE: {
    width: '100%'
  }
}

const Layout = props => (
  <div style={STYLE.WRAPPER}>
    {
      // <button className="button is-small" onClick={props.captureCurrentFrame}>
      //   Capture Frame
      // </button>
    }
    <button className="button is-small is-primary" onClick={() => {
        props.startAnimation(props.frameList)
      }}>
      Play
    </button>
    <table style={STYLE.TABLE} className="table">
      <tbody>
        <tr>
          <td>Index</td>
          <td>delay</td>
        </tr>
        {
          props.frameList.map((frame, index) => (
            <tr key={"frame_" + index}>
              <td>
                {index}
              </td>
              <td>
                <input type="number" step={0.1} className="input is-small"
                  value={frame.delay}
                  onChange={e => {
                    props.onDelayChange(index, e.target.value)
                  }}
                ></input>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

export default connect(

  (state, ownProps) => ({
    frameList: state.capturedFrames,
  }),

  (dispatch, ownProps) => ({
    captureCurrentFrame: e => {
      dispatch(actions.USER_CAPTURE_CURRENT_FRAME({}))
    },
    onDelayChange: (frameIndex, newValue) =>{
      dispatch(actions.USER_ANIMATION_FRAME_DELAY_CHANGE({
        frameIndex: frameIndex,
        newValue: newValue,
      }))
    },
    startAnimation: (frameList) => {
      frameList.forEach(frame => {
        const index = frameList.indexOf(frame)
        const delay = frameList.slice(0, index)
          .map(frame => frame.delay*1000)
          .reduce((sum, num) => sum+num, 0)
        setTimeout(function () {
          dispatch(actions.ANIMATION_SET_CURRENT_FRAME({
            frameIdx: index
          }))
        }, delay);
      })
    }
  })

)(Layout)
