# Dot Party

This an experimental demo app with React, Redux and Pixi.js. The app simply draws a series of colored circles on a canvas using Pixi.js app (a WebGL rendering engine) wrapped inside a React component. The circles' spacing, size, and color can be modified from a configuration interface rendered on the Dom. On every change of these properties, the new configuration is captured in a part of the state through an additional action dispatch, along with all the previous configurations. Together, these configurations act as frames in an animation sequence, which are played back frame by frame when the "Play" button is pressed.

This acts as a proof of concept of an animation builder.

This project is currently deployed at: http://www.minhified.io/dot_party/

<img src="https://d26dzxoao6i3hh.cloudfront.net/items/2C0d3j1q1k3A1G1y472c/Screen%20Recording%202017-12-11%20at%2009.52%20PM.gif?v=70df610d"></img>
