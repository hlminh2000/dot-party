import React from 'react'
import {ToolbarLayout} from '../ToolBar.jsx'
import {STYLE} from '../ToolBar.jsx'

test('Should render properly', () => {
  const TOOLS = [
    "TOOL_CIRCLE",
  ]
  const TOOL_CIRCLE = 'TOOL_CIRCLE'
  const SET_SELECTED_TOOL = () => {}
  const layout = (
    <ToolbarLayout
      tools={ TOOLS }
      selectedTool={ TOOL_CIRCLE }
      setSelectedTedTool={ SET_SELECTED_TOOL }
    ></ToolbarLayout>
  )
  expect( layout.props.tools ).toEqual( TOOLS )
  expect( layout.props.selectedTool ).toEqual( TOOL_CIRCLE )
  expect( layout.props.setSelectedTedTool ).toEqual( SET_SELECTED_TOOL )
})
