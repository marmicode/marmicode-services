export const createGradient = ({colorA, colorB}) => ([
  `-webkit-linear-gradient(${colorA}, ${colorB})`,
  `linear-gradient(${colorA}, ${colorB})`
])
