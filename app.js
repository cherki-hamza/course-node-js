const _   = require('lodash');

let result = _.take(['html','js','css'], 2);

console.log(result);    



// ^4.17.19   ==> major . minor . patch  4.17.20 

// major : change la philosofy du package
// minor : add new functions or new methodes
// patch : fix bag from any exist function or method

// carnet : ^ : fix la part major and change minor or patch , or mise a jour the minor or path 
// tilde :  ~ : fix major + minor an change patch

// get the version of package : npm view lodash versions
// install spécific package vesion : npm i lodash@4.0.1

// check the update for any package : npm outdated

// update package : npm update

// install latest version : npm i lodash@latest

// remove the package : npm uninstall mongoose or npm un mongoose 

// install package in DevDependency : npm i jshint --save-dev or npm instal nodemone -
