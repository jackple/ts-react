const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

const { shallow, render, mount } = Enzyme

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })
// Make Enzyme functions available in all test files without importing
global.EnzymeShallow = shallow
global.EnzymeRender = render
global.EnzymeMount = mount
