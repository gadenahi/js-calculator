(this["webpackJsonpjs-calculator"]=this["webpackJsonpjs-calculator"]||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_hideakinagaya_React_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_Users_hideakinagaya_React_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_Users_hideakinagaya_React_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_Users_hideakinagaya_React_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_Users_hideakinagaya_React_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(15),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),App=function(_React$Component){Object(_Users_hideakinagaya_React_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(_Users_hideakinagaya_React_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(e){var _;return Object(_Users_hideakinagaya_React_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(_=_super.call(this,e)).state={display:"0",subdisplay:"0",calStatus:!1},_.displayClear=_.displayClear.bind(Object(_Users_hideakinagaya_React_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleNumbers=_.handleNumbers.bind(Object(_Users_hideakinagaya_React_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleOperators=_.handleOperators.bind(Object(_Users_hideakinagaya_React_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleDecimals=_.handleDecimals.bind(Object(_Users_hideakinagaya_React_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_}return Object(_Users_hideakinagaya_React_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"handleOperators",value:function handleOperators(e){if(this.state.calStatus)switch(e.target.value){case"/":case"x":case"-":case"+":this.setState({display:e.target.value,subdisplay:this.state.display+e.target.value,calStatus:!1});break;default:var totalVal=this.state.display;this.state.subdisplay.match(/x/g)&&(totalVal=this.state.display.replace(/x/g,"*"));var answer=Math.round(1e12*eval(totalVal))/1e12;this.setState({display:answer.toString(),calStatus:!0})}else if(this.state.display.match(/\d/))switch(e.target.value){case"/":case"x":case"-":case"+":this.setState({display:e.target.value,subdisplay:this.state.subdisplay+e.target.value});break;default:totalVal=this.state.subdisplay,this.state.subdisplay.match(/x/g)&&(totalVal=this.state.subdisplay.replace(/x/g,"*"));var _answer=Math.round(1e12*eval(totalVal))/1e12;this.setState({display:_answer.toString(),calStatus:!0})}else if(this.state.display.match(/\D$/))switch(e.target.value){case"/":case"x":case"-":case"+":this.setState({display:e.target.value,subdisplay:this.state.subdisplay.slice(0,-1)+e.target.value});break;default:this.setState({subdisplay:this.state.subdisplay.slice(0,-1)+e.target.value,display:this.state.subdisplay.slice(0,-1),calStatus:!0})}}},{key:"handleNumbers",value:function(e){if(this.state.calStatus)this.setState({display:String(e.target.value),subdisplay:String(e.target.value),calStatus:!1});else{if(this.state.display.length>19||this.state.subdisplay.length>19)return;"0"===this.state.display?this.setState({display:String(Number(this.state.display+e.target.value)),subdisplay:String(Number(this.state.subdisplay+e.target.value))}):this.setState({display:this.state.display+e.target.value,subdisplay:this.state.subdisplay+e.target.value})}}},{key:"handleDecimals",value:function(){-1===this.state.display.indexOf(".")&&this.state.display.match(/\d/)&&("0"===this.state.display?this.setState({display:"0.",subdisplay:"0."}):this.setState({display:String(this.state.display+"."),subdisplay:String(this.state.subdisplay+".")}))}},{key:"displayClear",value:function(){this.setState({display:"0",subdisplay:"0",calStatus:!1})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"cal_main"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"subdisplay"},this.state.subdisplay),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"display"},this.state.display),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"clear",value:"AC",onClick:this.displayClear},"AC"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"symbol",value:"/",onClick:this.handleOperators,id:"divide"},"/"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"symbol",value:"x",onClick:this.handleOperators,id:"multiply"},"x"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"number",value:"7",onClick:this.handleNumbers,id:"seven"},"7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"number",value:"8",onClick:this.handleNumbers,id:"eight"},"8"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"number",value:"9",onClick:this.handleNumbers,id:"nine"},"9"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"symbol",value:"-",onClick:this.handleOperators,id:"subtract"},"-"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"number",value:"4",onClick:this.handleNumbers,id:"four"},"4"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"number",value:"5",onClick:this.handleNumbers,id:"five"},"5"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"number",value:"6",onClick:this.handleNumbers,id:"six"},"6"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"symbol",value:"+",onClick:this.handleOperators,id:"add"},"+"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"number",value:"1",onClick:this.handleNumbers,id:"one"},"1"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"number",value:"2",onClick:this.handleNumbers,id:"two"},"2"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"number",value:"3",onClick:this.handleNumbers,id:"three"},"3"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"zero",value:"0",onClick:this.handleNumbers,id:"zero"},"0"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"decimal",value:".",onClick:this.handleDecimals,id:"decimal"},"."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"equals",value:"=",onClick:this.handleOperators,id:"equals"},"="))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},,,,,function(e,_,a){e.exports=a(16)},,,,,function(e,_,a){},function(e,_,a){},function(e,_,a){"use strict";a.r(_);var t=a(0),s=a.n(t),l=a(3),i=a.n(l),r=(a(14),a(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(r.a,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.57edd6a0.chunk.js.map