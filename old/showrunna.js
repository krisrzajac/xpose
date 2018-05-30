const requireUncached = require('require-uncached');

const ShowRunner = {

  testConBuilder() {
    let cm = requireUncached('C:\\Users\\krisr\\Documents\\GitHub\\xpose\\api\\controllermaker.js')
    cm.controllerMaker();
  },
  testRouteBuilder() {
    let rm = requireUncached('C:\\Users\\krisr\\Documents\\GitHub\\xpose\\api\\routeMaker.js')
    rm.routeMaker();
  }

};

module.exports = ShowRunner