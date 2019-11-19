/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bulma/bulma.sass":
/*!***************************************!*\
  !*** ./node_modules/bulma/bulma.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYnVsbWEvYnVsbWEuc2Fzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9idWxtYS9idWxtYS5zYXNzP2QwMjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bulma/bulma.sass\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_show_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/show-form */ \"./src/partials/show-form.js\");\n/* harmony import */ var _partials_show_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/show-projects */ \"./src/partials/show-projects.js\");\n/* harmony import */ var _partials_show_task_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/show-task-form */ \"./src/partials/show-task-form.js\");\n/* harmony import */ var bulma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bulma */ \"./node_modules/bulma/bulma.sass\");\n/* harmony import */ var bulma__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bulma__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* eslint-disable import/prefer-default-export */\n\n\n\n\n\n\n\nObject(_partials_show_projects__WEBPACK_IMPORTED_MODULE_1__[\"showProjects\"])();\nObject(_partials_show_form__WEBPACK_IMPORTED_MODULE_0__[\"showForm\"])();\nObject(_partials_show_task_form__WEBPACK_IMPORTED_MODULE_2__[\"showTaskForm\"])();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBzaG93Rm9ybSB9IGZyb20gJy4vcGFydGlhbHMvc2hvdy1mb3JtJztcbmltcG9ydCB7IHNob3dQcm9qZWN0cyB9IGZyb20gJy4vcGFydGlhbHMvc2hvdy1wcm9qZWN0cyc7XG5pbXBvcnQgeyBzaG93VGFza0Zvcm0gfSBmcm9tICcuL3BhcnRpYWxzL3Nob3ctdGFzay1mb3JtJztcblxuaW1wb3J0ICdidWxtYSc7XG5pbXBvcnQgJy4vc3R5bGUvbWFpbi5zY3NzJztcblxuc2hvd1Byb2plY3RzKCk7XG5zaG93Rm9ybSgpO1xuc2hvd1Rhc2tGb3JtKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/partials/append-project.js":
/*!****************************************!*\
  !*** ./src/partials/append-project.js ***!
  \****************************************/
/*! exports provided: appendProject, createProjectBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendProject\", function() { return appendProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProjectBox\", function() { return createProjectBox; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/partials/storage.js\");\n/* harmony import */ var _delete_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-project */ \"./src/partials/delete-project.js\");\n\n\n\nlet allProjects = document.querySelector('#table-row');\nlet getProjects = [];\n\nconst createProjectBox = element => {\n  let project = document.createElement('div');\n  project.setAttribute('class', 'project panel');\n  let title = document.createElement('h1');\n  title.setAttribute('class', 'task-title');\n  title.innerHTML = element.title;\n  let buttons = document.createElement('div');\n  buttons.setAttribute('class', 'buttons');\n  let deleteButton = document.createElement('button');\n  deleteButton.setAttribute('class', 'button is-danger delete-project');\n  deleteButton.innerHTML = 'Delete Project'\n  deleteButton.addEventListener('click', e => {\n    Object(_delete_project__WEBPACK_IMPORTED_MODULE_1__[\"deleteProject\"])(e.target);\n  });\n  buttons.appendChild(deleteButton);\n  project.appendChild(title);\n  project.appendChild(buttons);\n  const newCell = allProjects.insertCell(-1);\n  newCell.appendChild(project);\n}\n\nlet appendProject = () => {\n  getProjects = _storage__WEBPACK_IMPORTED_MODULE_0__[\"DataBase\"].getProjects();\n  const lastProject = getProjects[getProjects.length - 1];\n  createProjectBox(lastProject);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvYXBwZW5kLXByb2plY3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvYXBwZW5kLXByb2plY3QuanM/NWJjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhQmFzZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9kZWxldGUtcHJvamVjdFwiO1xuXG5sZXQgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUtcm93Jyk7XG5sZXQgZ2V0UHJvamVjdHMgPSBbXTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEJveCA9IGVsZW1lbnQgPT4ge1xuICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdCBwYW5lbCcpO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stdGl0bGUnKTtcbiAgdGl0bGUuaW5uZXJIVE1MID0gZWxlbWVudC50aXRsZTtcbiAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9ucy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbnMnKTtcbiAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24gaXMtZGFuZ2VyIGRlbGV0ZS1wcm9qZWN0Jyk7XG4gIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnRGVsZXRlIFByb2plY3QnXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGRlbGV0ZVByb2plY3QoZS50YXJnZXQpO1xuICB9KTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgY29uc3QgbmV3Q2VsbCA9IGFsbFByb2plY3RzLmluc2VydENlbGwoLTEpO1xuICBuZXdDZWxsLmFwcGVuZENoaWxkKHByb2plY3QpO1xufVxuXG5sZXQgYXBwZW5kUHJvamVjdCA9ICgpID0+IHtcbiAgZ2V0UHJvamVjdHMgPSBEYXRhQmFzZS5nZXRQcm9qZWN0cygpO1xuICBjb25zdCBsYXN0UHJvamVjdCA9IGdldFByb2plY3RzW2dldFByb2plY3RzLmxlbmd0aCAtIDFdO1xuICBjcmVhdGVQcm9qZWN0Qm94KGxhc3RQcm9qZWN0KTtcbn1cblxuZXhwb3J0IHsgYXBwZW5kUHJvamVjdCwgY3JlYXRlUHJvamVjdEJveCB9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/append-project.js\n");

/***/ }),

/***/ "./src/partials/append-task.js":
/*!*************************************!*\
  !*** ./src/partials/append-task.js ***!
  \*************************************/
/*! exports provided: appendTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendTask\", function() { return appendTask; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/partials/storage.js\");\n\n\nlet appendTask = project => {\n  // let projects = document.querySelector('#table-row');\n  // for (let i = 0; i < projects.clientHeight; i++) {\n  //   console.log(projects.childNodes[i]);\n  // }\n  // let allProjects = DataBase.getProjects();\n  // for (let i = 0; i < allProjects.length; i++) {\n  //   if (project === allProjects[i].title) {\n\n  //   }\n  // }\n  console.log(project);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvYXBwZW5kLXRhc2suanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvYXBwZW5kLXRhc2suanM/ZTU5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhQmFzZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxubGV0IGFwcGVuZFRhc2sgPSBwcm9qZWN0ID0+IHtcbiAgLy8gbGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlLXJvdycpO1xuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmNsaWVudEhlaWdodDsgaSsrKSB7XG4gIC8vICAgY29uc29sZS5sb2cocHJvamVjdHMuY2hpbGROb2Rlc1tpXSk7XG4gIC8vIH1cbiAgLy8gbGV0IGFsbFByb2plY3RzID0gRGF0YUJhc2UuZ2V0UHJvamVjdHMoKTtcbiAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAvLyAgIGlmIChwcm9qZWN0ID09PSBhbGxQcm9qZWN0c1tpXS50aXRsZSkge1xuXG4gIC8vICAgfVxuICAvLyB9XG4gIGNvbnNvbGUubG9nKHByb2plY3QpO1xufTtcblxuZXhwb3J0IHsgYXBwZW5kVGFzayB9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/append-task.js\n");

/***/ }),

/***/ "./src/partials/clear-form.js":
/*!************************************!*\
  !*** ./src/partials/clear-form.js ***!
  \************************************/
/*! exports provided: clearForm, clearTaskForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearForm\", function() { return clearForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearTaskForm\", function() { return clearTaskForm; });\n/* eslint-disable import/prefer-default-export */\n\nconst title = document.querySelector('#title-project-input');\nlet taskName = document.querySelector('#task-form-title');\nlet taskDescription = document.querySelector('#task-form-description');\nlet taskDate = document.querySelector('#date');\nlet taskPriority = document.querySelector('#priority');\n\nconst clearForm = () => {\n  title.value = '';\n};\n\nconst clearTaskForm = () => {\n  taskName.value = '';\n  taskDescription.value = '';\n  taskDate.value = '';\n  taskPriority.value = '';\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvY2xlYXItZm9ybS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9jbGVhci1mb3JtLmpzPzJlNjAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1wcm9qZWN0LWlucHV0Jyk7XG5sZXQgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtLXRpdGxlJyk7XG5sZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybS1kZXNjcmlwdGlvbicpO1xubGV0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbmxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcblxuY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICB0aXRsZS52YWx1ZSA9ICcnO1xufTtcblxuY29uc3QgY2xlYXJUYXNrRm9ybSA9ICgpID0+IHtcbiAgdGFza05hbWUudmFsdWUgPSAnJztcbiAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gIHRhc2tEYXRlLnZhbHVlID0gJyc7XG4gIHRhc2tQcmlvcml0eS52YWx1ZSA9ICcnO1xufVxuXG5leHBvcnQgeyBjbGVhckZvcm0sIGNsZWFyVGFza0Zvcm0gfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/clear-form.js\n");

/***/ }),

/***/ "./src/partials/create-project.js":
/*!****************************************!*\
  !*** ./src/partials/create-project.js ***!
  \****************************************/
/*! exports provided: createProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\n/* harmony import */ var _clear_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear-form */ \"./src/partials/clear-form.js\");\n/* harmony import */ var _error_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-message */ \"./src/partials/error-message.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/partials/storage.js\");\n/* harmony import */ var _append_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./append-project */ \"./src/partials/append-project.js\");\n\n\n\n\n\nlet postProjectButton  = document.querySelector('.post-project-button');\nconst showButton = document.querySelector('.new-project-button');\nconst form = document.querySelector('.project-form');\nconst title = document.querySelector('#title-project-input');\nlet titleArray = [];\n\nlet createProject = () => {\n  postProjectButton.addEventListener('click', e => {\n    if (title.value === '') {\n      Object(_error_message__WEBPACK_IMPORTED_MODULE_1__[\"errorForm\"])('Please fill all the fields');\n    } else {\n      e.preventDefault();\n      let allProjects = _storage__WEBPACK_IMPORTED_MODULE_2__[\"DataBase\"].getProjects();\n\n      for (let i = 0; i < allProjects.length; i++) {\n        titleArray.push(allProjects[i].title);\n      }\n      if (titleArray.includes(title.value)){\n        Object(_error_message__WEBPACK_IMPORTED_MODULE_1__[\"errorForm\"])('Title is already used');\n      } else {\n          Object(_storage__WEBPACK_IMPORTED_MODULE_2__[\"storage\"])();\n          form.classList.add('hide');\n          showButton.innerText = 'Create Project';\n          Object(_append_project__WEBPACK_IMPORTED_MODULE_3__[\"appendProject\"])();\n          Object(_clear_form__WEBPACK_IMPORTED_MODULE_0__[\"clearForm\"])();\n      }\n    }\n  })\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvY3JlYXRlLXByb2plY3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvY3JlYXRlLXByb2plY3QuanM/NzI2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVhckZvcm0gfSBmcm9tIFwiLi9jbGVhci1mb3JtXCI7XG5pbXBvcnQgeyBlcnJvckZvcm0gfSBmcm9tIFwiLi9lcnJvci1tZXNzYWdlXCI7XG5pbXBvcnQgeyBzdG9yYWdlLCBEYXRhQmFzZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGFwcGVuZFByb2plY3QgfSBmcm9tIFwiLi9hcHBlbmQtcHJvamVjdFwiO1xuXG5sZXQgcG9zdFByb2plY3RCdXR0b24gID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtcHJvamVjdC1idXR0b24nKTtcbmNvbnN0IHNob3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtYnV0dG9uJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtcHJvamVjdC1pbnB1dCcpO1xubGV0IHRpdGxlQXJyYXkgPSBbXTtcblxubGV0IGNyZWF0ZVByb2plY3QgPSAoKSA9PiB7XG4gIHBvc3RQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYgKHRpdGxlLnZhbHVlID09PSAnJykge1xuICAgICAgZXJyb3JGb3JtKCdQbGVhc2UgZmlsbCBhbGwgdGhlIGZpZWxkcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgYWxsUHJvamVjdHMgPSBEYXRhQmFzZS5nZXRQcm9qZWN0cygpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRpdGxlQXJyYXkucHVzaChhbGxQcm9qZWN0c1tpXS50aXRsZSk7XG4gICAgICB9XG4gICAgICBpZiAodGl0bGVBcnJheS5pbmNsdWRlcyh0aXRsZS52YWx1ZSkpe1xuICAgICAgICBlcnJvckZvcm0oJ1RpdGxlIGlzIGFscmVhZHkgdXNlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdG9yYWdlKCk7XG4gICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgc2hvd0J1dHRvbi5pbm5lclRleHQgPSAnQ3JlYXRlIFByb2plY3QnO1xuICAgICAgICAgIGFwcGVuZFByb2plY3QoKTtcbiAgICAgICAgICBjbGVhckZvcm0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/create-project.js\n");

/***/ }),

/***/ "./src/partials/create-task.js":
/*!*************************************!*\
  !*** ./src/partials/create-task.js ***!
  \*************************************/
/*! exports provided: createTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTask\", function() { return createTask; });\n/* harmony import */ var _error_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-message */ \"./src/partials/error-message.js\");\n/* harmony import */ var _storage_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage-task */ \"./src/partials/storage-task.js\");\n/* harmony import */ var _clear_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clear-form */ \"./src/partials/clear-form.js\");\n/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-list */ \"./src/partials/project-list.js\");\n/* harmony import */ var _append_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./append-task */ \"./src/partials/append-task.js\");\n\n// import { Project } from \"./project-class\";\n// import { Task } from \"./task-class\"\n\n\n\n\n\nlet showTaskFormButton = document.querySelector('#create-task');\nlet createTaskButton = document.getElementById('create-task-button');\nlet project = document.querySelector('#project-list')\nlet taskName = document.querySelector('#task-form-title');\nlet taskDate = document.querySelector('#date');\nlet taskPriority = document.querySelector('#priority');\nlet form = document.querySelector('.task-form');\n\nlet createTask = () => {\n    createTaskButton.addEventListener('click', e => {\n        if (taskName.value === '' || taskDate.value === '' || taskPriority.value === '') {\n            Object(_error_message__WEBPACK_IMPORTED_MODULE_0__[\"errorForm\"])('Please fill all the fields');\n        } else {\n            e.preventDefault();\n            Object(_storage_task__WEBPACK_IMPORTED_MODULE_1__[\"storageTask\"])();\n            Object(_append_task__WEBPACK_IMPORTED_MODULE_4__[\"appendTask\"])(_storage_task__WEBPACK_IMPORTED_MODULE_1__[\"index\"]);\n            form.classList.add('hide');\n            showTaskFormButton.innerText = 'Create Task';\n            Object(_clear_form__WEBPACK_IMPORTED_MODULE_2__[\"clearTaskForm\"])();\n            Object(_project_list__WEBPACK_IMPORTED_MODULE_3__[\"clearProjectList\"])();\n            // Project().task.push(Task())\n            // console.log(Project)\n        }\n    })\n}\n\n\n\n// import { clearForm } from \"./clear-form\";\n// import { errorForm } from \"./error-message\";\n// import { storage } from \"./storage\";\n// import { appendProject } from \"./append-project\";\n\n// let postProjectButton  = document.querySelector('.post-project-button');\n// const showButton = document.querySelector('.new-project-button');\n// const form = document.querySelector('.project-form');\n// const title = document.querySelector('#title-project-input');\n\n// let createProject = () => {\n//   postProjectButton.addEventListener('click', e => {\n//     if (title.value === '') {\n//       errorForm();\n//     } else {\n//       e.preventDefault();\n//       storage();\n//       form.classList.add('hide');\n//       showButton.innerText = 'Create Project';\n//       showButton.classList.remove('close-form');\n//       appendProject();\n//       clearForm();\n//     }\n//   })\n// }\n\n// export { createProject };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvY3JlYXRlLXRhc2suanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvY3JlYXRlLXRhc2suanM/MzgyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlcnJvckZvcm0gfSBmcm9tIFwiLi9lcnJvci1tZXNzYWdlXCI7XG4vLyBpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC1jbGFzc1wiO1xuLy8gaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2stY2xhc3NcIlxuaW1wb3J0IHsgc3RvcmFnZVRhc2ssIGluZGV4IH0gZnJvbSBcIi4vc3RvcmFnZS10YXNrXCI7XG5pbXBvcnQgeyBjbGVhclRhc2tGb3JtIH0gZnJvbSBcIi4vY2xlYXItZm9ybVwiO1xuaW1wb3J0IHsgY2xlYXJQcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3QtbGlzdFwiO1xuaW1wb3J0IHsgYXBwZW5kVGFzayB9IGZyb20gXCIuL2FwcGVuZC10YXNrXCI7XG5cbmxldCBzaG93VGFza0Zvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRhc2snKTtcbmxldCBjcmVhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS10YXNrLWJ1dHRvbicpO1xubGV0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JylcbmxldCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0tdGl0bGUnKTtcbmxldCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG5sZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5sZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcblxubGV0IGNyZWF0ZVRhc2sgPSAoKSA9PiB7XG4gICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpZiAodGFza05hbWUudmFsdWUgPT09ICcnIHx8IHRhc2tEYXRlLnZhbHVlID09PSAnJyB8fCB0YXNrUHJpb3JpdHkudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBlcnJvckZvcm0oJ1BsZWFzZSBmaWxsIGFsbCB0aGUgZmllbGRzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzdG9yYWdlVGFzaygpO1xuICAgICAgICAgICAgYXBwZW5kVGFzayhpbmRleCk7XG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIHNob3dUYXNrRm9ybUJ1dHRvbi5pbm5lclRleHQgPSAnQ3JlYXRlIFRhc2snO1xuICAgICAgICAgICAgY2xlYXJUYXNrRm9ybSgpO1xuICAgICAgICAgICAgY2xlYXJQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgLy8gUHJvamVjdCgpLnRhc2sucHVzaChUYXNrKCkpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhQcm9qZWN0KVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IHsgY3JlYXRlVGFzayB9XG5cbi8vIGltcG9ydCB7IGNsZWFyRm9ybSB9IGZyb20gXCIuL2NsZWFyLWZvcm1cIjtcbi8vIGltcG9ydCB7IGVycm9yRm9ybSB9IGZyb20gXCIuL2Vycm9yLW1lc3NhZ2VcIjtcbi8vIGltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG4vLyBpbXBvcnQgeyBhcHBlbmRQcm9qZWN0IH0gZnJvbSBcIi4vYXBwZW5kLXByb2plY3RcIjtcblxuLy8gbGV0IHBvc3RQcm9qZWN0QnV0dG9uICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0LXByb2plY3QtYnV0dG9uJyk7XG4vLyBjb25zdCBzaG93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWJ1dHRvbicpO1xuLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbi8vIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLXByb2plY3QtaW5wdXQnKTtcblxuLy8gbGV0IGNyZWF0ZVByb2plY3QgPSAoKSA9PiB7XG4vLyAgIHBvc3RQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4vLyAgICAgaWYgKHRpdGxlLnZhbHVlID09PSAnJykge1xuLy8gICAgICAgZXJyb3JGb3JtKCk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgIHN0b3JhZ2UoKTtcbi8vICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuLy8gICAgICAgc2hvd0J1dHRvbi5pbm5lclRleHQgPSAnQ3JlYXRlIFByb2plY3QnO1xuLy8gICAgICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZS1mb3JtJyk7XG4vLyAgICAgICBhcHBlbmRQcm9qZWN0KCk7XG4vLyAgICAgICBjbGVhckZvcm0oKTtcbi8vICAgICB9XG4vLyAgIH0pXG4vLyB9XG5cbi8vIGV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/create-task.js\n");

/***/ }),

/***/ "./src/partials/delete-project.js":
/*!****************************************!*\
  !*** ./src/partials/delete-project.js ***!
  \****************************************/
/*! exports provided: deleteProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProject\", function() { return deleteProject; });\nconst deleteProject = (e) => {\n  const index = e.parentElement.parentElement.parentElement.cellIndex;\n  const delProject = JSON.parse(localStorage.project);\n  delProject.splice(index, 1);\n  localStorage.setItem('project', JSON.stringify(delProject));\n  const row = document.querySelector('#table-row');\n  row.deleteCell(index);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvZGVsZXRlLXByb2plY3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvZGVsZXRlLXByb2plY3QuanM/YWVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgY29uc3QgaW5kZXggPSBlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNlbGxJbmRleDtcbiAgY29uc3QgZGVsUHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2plY3QpO1xuICBkZWxQcm9qZWN0LnNwbGljZShpbmRleCwgMSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoZGVsUHJvamVjdCkpO1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUtcm93Jyk7XG4gIHJvdy5kZWxldGVDZWxsKGluZGV4KTtcbn07XG5cbmV4cG9ydCB7IGRlbGV0ZVByb2plY3QgfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/delete-project.js\n");

/***/ }),

/***/ "./src/partials/error-message.js":
/*!***************************************!*\
  !*** ./src/partials/error-message.js ***!
  \***************************************/
/*! exports provided: errorForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errorForm\", function() { return errorForm; });\nconst errors = document.querySelector('.errors');\n\nconst errorForm = (errorMessage) => {\n  const message = document.createElement('p');\n  message.setAttribute('class', 'notification is-danger');\n  message.innerHTML = errorMessage;\n  errors.appendChild(message);\n  setTimeout(() => message.remove(), 4000);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvZXJyb3ItbWVzc2FnZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9lcnJvci1tZXNzYWdlLmpzPzk2NzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9ycycpO1xuXG5jb25zdCBlcnJvckZvcm0gPSAoZXJyb3JNZXNzYWdlKSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdub3RpZmljYXRpb24gaXMtZGFuZ2VyJyk7XG4gIG1lc3NhZ2UuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuICBlcnJvcnMuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIHNldFRpbWVvdXQoKCkgPT4gbWVzc2FnZS5yZW1vdmUoKSwgNDAwMCk7XG59O1xuXG5leHBvcnQgeyBlcnJvckZvcm0gfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/error-message.js\n");

/***/ }),

/***/ "./src/partials/project-class.js":
/*!***************************************!*\
  !*** ./src/partials/project-class.js ***!
  \***************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* eslint-disable import/prefer-default-export */\n\nclass Project {\n  constructor(title) {\n    this.title = title;\n    this.task = [];\n  }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvcHJvamVjdC1jbGFzcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9wcm9qZWN0LWNsYXNzLmpzPzc3MzEiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50YXNrID0gW107XG4gIH1cbn1cblxuZXhwb3J0IHsgUHJvamVjdCB9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/project-class.js\n");

/***/ }),

/***/ "./src/partials/project-list.js":
/*!**************************************!*\
  !*** ./src/partials/project-list.js ***!
  \**************************************/
/*! exports provided: createProjectList, clearProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProjectList\", function() { return createProjectList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearProjectList\", function() { return clearProjectList; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/partials/storage.js\");\n\n\nlet projectList = document.querySelector('#project-list');\n\nlet createProjectList = () => {\n  const projects = _storage__WEBPACK_IMPORTED_MODULE_0__[\"DataBase\"].getProjects();\n  for (let i = 0; i < projects.length; i++) {\n    let option = document.createElement('option');\n    option.setAttribute('value', `${projects[i].title}`);\n    option.innerHTML = projects[i].title;\n    projectList.appendChild(option);\n  }\n}\n\nlet clearProjectList = () => {\n  projectList.innerHTML = '';\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvcHJvamVjdC1saXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRpYWxzL3Byb2plY3QtbGlzdC5qcz9kYmFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFCYXNlIH0gZnJvbSBcIi4vc3RvcmFnZVwiXG5cbmxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcblxubGV0IGNyZWF0ZVByb2plY3RMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IERhdGFCYXNlLmdldFByb2plY3RzKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtwcm9qZWN0c1tpXS50aXRsZX1gKTtcbiAgICBvcHRpb24uaW5uZXJIVE1MID0gcHJvamVjdHNbaV0udGl0bGU7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxufVxuXG5sZXQgY2xlYXJQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RMaXN0LCBjbGVhclByb2plY3RMaXN0IH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/project-list.js\n");

/***/ }),

/***/ "./src/partials/show-form.js":
/*!***********************************!*\
  !*** ./src/partials/show-form.js ***!
  \***********************************/
/*! exports provided: showForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showForm\", function() { return showForm; });\n/* harmony import */ var _clear_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear-form */ \"./src/partials/clear-form.js\");\n/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project */ \"./src/partials/create-project.js\");\n/* eslint-disable import/prefer-default-export */\n\n\n\nconst showButton = document.querySelector('.new-project-button');\nconst form = document.querySelector('.project-form');\n\nconst showForm = () => {\n  Object(_create_project__WEBPACK_IMPORTED_MODULE_1__[\"createProject\"])();\n  showButton.addEventListener('click', (e) => {\n    if (e.target.innerText === 'Close Form') {\n      form.classList.add('hide');\n      showButton.innerText = 'Create Project';\n      Object(_clear_form__WEBPACK_IMPORTED_MODULE_0__[\"clearForm\"])();\n    } else if (e.target.innerText === 'Create Project') {\n      form.classList.remove('hide');\n      showButton.innerText = 'Close Form';\n    }\n  });\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvc2hvdy1mb3JtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRpYWxzL3Nob3ctZm9ybS5qcz83NDViIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IGNsZWFyRm9ybSB9IGZyb20gJy4vY2xlYXItZm9ybSc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9jcmVhdGUtcHJvamVjdCc7XG5cbmNvbnN0IHNob3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtYnV0dG9uJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuXG5jb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgY3JlYXRlUHJvamVjdCgpO1xuICBzaG93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09PSAnQ2xvc2UgRm9ybScpIHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgc2hvd0J1dHRvbi5pbm5lclRleHQgPSAnQ3JlYXRlIFByb2plY3QnO1xuICAgICAgY2xlYXJGb3JtKCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT09ICdDcmVhdGUgUHJvamVjdCcpIHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgc2hvd0J1dHRvbi5pbm5lclRleHQgPSAnQ2xvc2UgRm9ybSc7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IHNob3dGb3JtIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/show-form.js\n");

/***/ }),

/***/ "./src/partials/show-projects.js":
/*!***************************************!*\
  !*** ./src/partials/show-projects.js ***!
  \***************************************/
/*! exports provided: showProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showProjects\", function() { return showProjects; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/partials/storage.js\");\n/* harmony import */ var _append_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append-project */ \"./src/partials/append-project.js\");\n\n\n\nlet allProjects = [];\n\nconst showProjects = () => {\n  allProjects = _storage__WEBPACK_IMPORTED_MODULE_0__[\"DataBase\"].getProjects();\n  if (allProjects === null) {\n    allProjects = [];\n  } else {\n    allProjects.forEach((element) => {\n      Object(_append_project__WEBPACK_IMPORTED_MODULE_1__[\"createProjectBox\"])(element);\n    });\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvc2hvdy1wcm9qZWN0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9zaG93LXByb2plY3RzLmpzPzgzODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YUJhc2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Qm94IH0gZnJvbSBcIi4vYXBwZW5kLXByb2plY3RcIjtcblxubGV0IGFsbFByb2plY3RzID0gW107XG5cbmNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcbiAgYWxsUHJvamVjdHMgPSBEYXRhQmFzZS5nZXRQcm9qZWN0cygpO1xuICBpZiAoYWxsUHJvamVjdHMgPT09IG51bGwpIHtcbiAgICBhbGxQcm9qZWN0cyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIGFsbFByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNyZWF0ZVByb2plY3RCb3goZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHNob3dQcm9qZWN0cyB9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/show-projects.js\n");

/***/ }),

/***/ "./src/partials/show-task-form.js":
/*!****************************************!*\
  !*** ./src/partials/show-task-form.js ***!
  \****************************************/
/*! exports provided: showTaskForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showTaskForm\", function() { return showTaskForm; });\n/* harmony import */ var _clear_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear-form */ \"./src/partials/clear-form.js\");\n/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-list */ \"./src/partials/project-list.js\");\n/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-task */ \"./src/partials/create-task.js\");\n\n\n\n\nlet showTaskFormButton = document.querySelector('#create-task');\nlet form = document.querySelector('.task-form');\n\nconst showTaskForm = () => {\n  Object(_create_task__WEBPACK_IMPORTED_MODULE_2__[\"createTask\"])();\n  showTaskFormButton.addEventListener('click', e => {\n    if (e.target.innerText === 'Close Form') {\n      form.classList.add('hide');\n      showTaskFormButton.innerText = 'Create Task';\n      Object(_project_list__WEBPACK_IMPORTED_MODULE_1__[\"clearProjectList\"])();\n      Object(_clear_form__WEBPACK_IMPORTED_MODULE_0__[\"clearForm\"])();\n    } else if (e.target.innerText === 'Create Task') {\n      form.classList.remove('hide');\n      Object(_project_list__WEBPACK_IMPORTED_MODULE_1__[\"createProjectList\"])();\n      showTaskFormButton.innerText = 'Close Form';\n    };\n  })\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvc2hvdy10YXNrLWZvcm0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvc2hvdy10YXNrLWZvcm0uanM/MmIzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVhckZvcm0gfSBmcm9tIFwiLi9jbGVhci1mb3JtXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0TGlzdCwgY2xlYXJQcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3QtbGlzdFwiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZS10YXNrXCJcblxubGV0IHNob3dUYXNrRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdGFzaycpO1xubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5cbmNvbnN0IHNob3dUYXNrRm9ybSA9ICgpID0+IHtcbiAgY3JlYXRlVGFzaygpO1xuICBzaG93VGFza0Zvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09PSAnQ2xvc2UgRm9ybScpIHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgc2hvd1Rhc2tGb3JtQnV0dG9uLmlubmVyVGV4dCA9ICdDcmVhdGUgVGFzayc7XG4gICAgICBjbGVhclByb2plY3RMaXN0KCk7XG4gICAgICBjbGVhckZvcm0oKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ0NyZWF0ZSBUYXNrJykge1xuICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBjcmVhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgc2hvd1Rhc2tGb3JtQnV0dG9uLmlubmVyVGV4dCA9ICdDbG9zZSBGb3JtJztcbiAgICB9O1xuICB9KVxufVxuXG5leHBvcnQgeyBzaG93VGFza0Zvcm0gfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/partials/show-task-form.js\n");

/***/ }),

/***/ "./src/partials/storage-task.js":
/*!**************************************!*\
  !*** ./src/partials/storage-task.js ***!
  \**************************************/
/*! exports provided: storageTask, index */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storageTask\", function() { return storageTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"index\", function() { return index; });\n/* harmony import */ var _task_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-class */ \"./src/partials/task-class.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/partials/storage.js\");\n\n\n\nlet taskName = document.querySelector('#task-form-title');\nlet taskDescription = document.querySelector('#task-form-description');\nlet taskDate = document.querySelector('#date');\nlet taskPriority = document.querySelector('#priority');\nlet project = document.querySelector('#project-list')\nlet index;\n\nconst storageTask = () => {\n  const newTask = new _task_class__WEBPACK_IMPORTED_MODULE_0__[\"Task\"](taskName.value, taskDescription.value, taskDate.value, taskPriority.value);\n  let allProjects = _storage__WEBPACK_IMPORTED_MODULE_1__[\"DataBase\"].getProjects();\n  for (let i = 0; i < allProjects.length; i++) {\n    if (project.value === allProjects[i].title) {\n      allProjects[i].task.push(newTask);\n      index = i;\n      localStorage.setItem('project', JSON.stringify(allProjects));\n    }\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvc3RvcmFnZS10YXNrLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRpYWxzL3N0b3JhZ2UtdGFzay5qcz8xMTkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLWNsYXNzXCI7XG5pbXBvcnQgeyBEYXRhQmFzZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxubGV0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybS10aXRsZScpO1xubGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0tZGVzY3JpcHRpb24nKTtcbmxldCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG5sZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5sZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKVxubGV0IGluZGV4O1xuXG5jb25zdCBzdG9yYWdlVGFzayA9ICgpID0+IHtcbiAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tOYW1lLnZhbHVlLCB0YXNrRGVzY3JpcHRpb24udmFsdWUsIHRhc2tEYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUpO1xuICBsZXQgYWxsUHJvamVjdHMgPSBEYXRhQmFzZS5nZXRQcm9qZWN0cygpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByb2plY3QudmFsdWUgPT09IGFsbFByb2plY3RzW2ldLnRpdGxlKSB7XG4gICAgICBhbGxQcm9qZWN0c1tpXS50YXNrLnB1c2gobmV3VGFzayk7XG4gICAgICBpbmRleCA9IGk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBzdG9yYWdlVGFzaywgaW5kZXggfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/storage-task.js\n");

/***/ }),

/***/ "./src/partials/storage.js":
/*!*********************************!*\
  !*** ./src/partials/storage.js ***!
  \*********************************/
/*! exports provided: storage, DataBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage\", function() { return storage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataBase\", function() { return DataBase; });\n/* harmony import */ var _project_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-class */ \"./src/partials/project-class.js\");\n/* eslint-disable import/prefer-default-export */\n\n\nconst title = document.querySelector('#title-project-input');\n\nclass DataBase {\n  static getProjects() {\n    let allProjects = [];\n    if (localStorage.getItem('project') === null) {\n      allProjects = [];\n    } else {\n      allProjects = JSON.parse(localStorage.getItem('project'));\n    }\n    return allProjects;\n  }\n\n  static addProject(project) {\n    const projects = DataBase.getProjects();\n    projects.push(project);\n    localStorage.setItem('project', JSON.stringify(projects));\n  }\n}\n\n\nconst storage = () => {\n  const newProject = new _project_class__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](title.value);\n  DataBase.addProject(newProject);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvc3RvcmFnZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9zdG9yYWdlLmpzPzM2NWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdC1jbGFzcyc7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLXByb2plY3QtaW5wdXQnKTtcblxuY2xhc3MgRGF0YUJhc2Uge1xuICBzdGF0aWMgZ2V0UHJvamVjdHMoKSB7XG4gICAgbGV0IGFsbFByb2plY3RzID0gW107XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JykgPT09IG51bGwpIHtcbiAgICAgIGFsbFByb2plY3RzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFsbFByb2plY3RzO1xuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gRGF0YUJhc2UuZ2V0UHJvamVjdHMoKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgfVxufVxuXG5cbmNvbnN0IHN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZS52YWx1ZSk7XG4gIERhdGFCYXNlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG59O1xuXG5leHBvcnQgeyBzdG9yYWdlLCBEYXRhQmFzZSB9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/partials/storage.js\n");

/***/ }),

/***/ "./src/partials/task-class.js":
/*!************************************!*\
  !*** ./src/partials/task-class.js ***!
  \************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n/* eslint-disable import/prefer-default-export */\n\nclass Task {\n    constructor(taskName, description, date, priority) {\n      this.taskName = taskName;\n      this.description = description;\n      this.date = date;\n      this.priority = priority;\n    }\n  }\n  \n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvdGFzay1jbGFzcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy90YXNrLWNsYXNzLmpzPzQxNDAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXNrTmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgICB0aGlzLnRhc2tOYW1lID0gdGFza05hbWU7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IHsgVGFzayB9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/partials/task-class.js\n");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUvbWFpbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL21haW4uc2Nzcz83NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/style/main.scss\n");

/***/ })

/******/ });