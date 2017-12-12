const actionCreators = {
  USER_SELECT_TOOL: payload => ({
    type: 'USER_SELECT_TOOL',
    payload: {
      selectedTool: payload.selectedTool
    }
  }),
  CONFIG_GRID_INTERVAL_CHANGE: payload => ({
    type: 'CONFIG_GRID_INTERVAL_CHANGE',
    payload: {
      newValue: payload.newValue
    }
  }),
  CONFIG_GRID_DOTSIZE_CHANGE: payload => ({
    type: 'CONFIG_GRID_DOTSIZE_CHANGE',
    payload: {
      newValue: payload.newValue
    }
  }),
  CONFIG_GRID_DOTCOLOR_CHANGE: payload => ({
    type: 'CONFIG_GRID_DOTCOLOR_CHANGE',
    payload: {
      newValue: payload.newValue
    }
  }),
  CONFIG_SEGMENT_WIDTH_CHANGE: payload => ({
    type: 'CONFIG_SEGMENT_WIDTH_CHANGE',
    payload: {
      newValue: payload.newValue
    }
  }),
  CONFIG_SEGMENT_COLOR_CHANGE: payload => ({
    type: 'CONFIG_SEGMENT_COLOR_CHANGE',
    payload: {
      newValue: payload.newValue
    }
  }),
  USER_CAPTURE_CURRENT_FRAME: payload => ({
    type: 'USER_CAPTURE_CURRENT_FRAME',
    payload: {

    }
  }),
  USER_ANIMATION_FRAME_DELAY_CHANGE: payload => ({
    type: 'USER_ANIMATION_FRAME_DELAY_CHANGE',
    payload: {
      newValue: payload.newValue,
      frameIndex: payload.frameIndex
    }
  }),
  ANIMATION_SET_CURRENT_FRAME: payload => ({
    type: 'ANIMATION_SET_CURRENT_FRAME',
    payload: {
      frameIdx: payload.frameIdx,
    }
  }),
}

export default actionCreators

// if(module){
//   module.exports = actionCreators
// }
