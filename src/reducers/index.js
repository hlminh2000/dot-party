
export const INITIAL_STATE = {
  currentSelectedTool: "TOOL_GRID",
  availableTools: [
    {id: 'TOOL_GRID', title: 'Grid'},
    {id: 'TOOL_LINESEGMENT', title: 'Line Segment'},
    {id: 'TOOL_CIRCLE', title: 'Circle'},
  ],
  configs: {
    'TOOL_GRID': {
      toolId: 'TOOL_GRID',
      interval: 20,
      type: 'DOT',
      dotSize: 2,
      dotColor: '#ffffff',
    },
    'TOOL_LINESEGMENT': {
      toolId: 'TOOL_LINESEGMENT',
      width: 2,
      color: '#ffffff',
    },
    'TOOL_CIRCLE': {
      toolId: 'TOOL_CIRCLE',
    },
  },
  drawnComponents: [
    'TOOL_LINESEGMENT': [

    ]
  ],
  capturedFrames: []
}

export default (state, action) => {
  switch (action.type) {
    case 'USER_SELECT_TOOL':
      return {
        ...state,
        currentSelectedTool: action.payload.selectedTool
      }
    case 'CONFIG_GRID_INTERVAL_CHANGE':
      return {
        ...state,
        configs: {
          ...state.configs,
          TOOL_GRID: {
            ...state.configs.TOOL_GRID,
            interval: Number(action.payload.newValue)
          }
        }
      }
    case 'CONFIG_GRID_DOTSIZE_CHANGE':
      return {
        ...state,
        configs: {
          ...state.configs,
          TOOL_GRID: {
            ...state.configs.TOOL_GRID,
            dotSize: Number(action.payload.newValue)
          }
        }
      }
    case 'CONFIG_GRID_DOTCOLOR_CHANGE':
      return {
        ...state,
        configs: {
          ...state.configs,
          TOOL_GRID: {
            ...state.configs.TOOL_GRID,
            dotColor: action.payload.newValue
          }
        }
      }
    case 'CONFIG_SEGMENT_WIDTH_CHANGE':
      return {
        ...state,
        configs: {
          ...state.configs,
          TOOL_LINESEGMENT: {
            ...state.configs.TOOL_LINESEGMENT,
            width: Number(action.payload.newValue)
          }
        }
      }
    case 'CONFIG_SEGMENT_COLOR_CHANGE':
      return {
        ...state,
        configs: {
          ...state.configs,
          TOOL_LINESEGMENT: {
            ...state.configs.TOOL_LINESEGMENT,
            color: action.payload.newValue
          }
        }
      }
    case 'USER_CAPTURE_CURRENT_FRAME':
      return {
        ...state,
        capturedFrames: state.capturedFrames.concat({
          configs: state.configs,
          delay: 0.1
        })
      }
    case 'ANIMATION_SET_CURRENT_FRAME':
      return {
        ...state,
        configs: state.capturedFrames[action.payload.frameIdx].configs
      }
    case 'USER_ANIMATION_FRAME_DELAY_CHANGE':
      return {
        ...state,
        capturedFrames: state.capturedFrames
          .slice(0, action.payload.frameIndex)
          .concat([{
            ...state.capturedFrames[action.payload.frameIdx],
            delay: Number(Math.max(action.payload.newValue, 0))
          }])
          .concat(
            state.capturedFrames
              .slice(action.payload.frameIndex+1, state.capturedFrames.length)
          )
      }
    default:
      return {
        ...state
      }
  }
}
