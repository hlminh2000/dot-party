import actionCreators from '../index.js'

test('Should create the right actions', () => {
  [
    'TOOL_LINESEGMENT',
    'TOOL_CIRCLE',
    'TOOL_GRID',
  ].forEach( toolId => {
    expect(actionCreators.USER_SELECT_TOOL({
      selectedTool: toolId,
    })).toEqual({
      type: 'USER_SELECT_TOOL',
      payload: {
        selectedTool: toolId,
      }
    })
  })
})
