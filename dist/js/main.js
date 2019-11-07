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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_show_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/show-form */ \"./src/partials/show-form.js\");\n/* harmony import */ var _partials_create_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/create-task */ \"./src/partials/create-task.js\");\n/* harmony import */ var _partials_create_project_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/create-project-button */ \"./src/partials/create-project-button.js\");\n/* harmony import */ var _partials_show_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/show-projects */ \"./src/partials/show-projects.js\");\n/* harmony import */ var bulma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bulma */ \"./node_modules/bulma/bulma.sass\");\n/* harmony import */ var bulma__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bulma__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nObject(_partials_show_form__WEBPACK_IMPORTED_MODULE_0__[\"showForm\"])();\nObject(_partials_create_task__WEBPACK_IMPORTED_MODULE_1__[\"createTask\"])();\nObject(_partials_create_project_button__WEBPACK_IMPORTED_MODULE_2__[\"createProject\"])();\nObject(_partials_show_projects__WEBPACK_IMPORTED_MODULE_3__[\"showProjects\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaG93Rm9ybSB9IGZyb20gJy4vcGFydGlhbHMvc2hvdy1mb3JtJ1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vcGFydGlhbHMvY3JlYXRlLXRhc2snXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9wYXJ0aWFscy9jcmVhdGUtcHJvamVjdC1idXR0b24nO1xuaW1wb3J0IHsgc2hvd1Byb2plY3RzIH0gZnJvbSAnLi9wYXJ0aWFscy9zaG93LXByb2plY3RzJztcbmltcG9ydCAnYnVsbWEnO1xuXG5pbXBvcnQgJy4vc3R5bGUvbWFpbi5zY3NzJ1xuXG5zaG93Rm9ybSgpO1xuY3JlYXRlVGFzaygpO1xuY3JlYXRlUHJvamVjdCgpO1xuc2hvd1Byb2plY3RzKCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/partials/clear-form.js":
/*!************************************!*\
  !*** ./src/partials/clear-form.js ***!
  \************************************/
/*! exports provided: clearForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearForm\", function() { return clearForm; });\n/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task */ \"./src/partials/create-task.js\");\n\n\nlet title = document.querySelector('#title-project-input');\nlet description = document.querySelector('#description');\nlet date = document.querySelector('#date');\nlet priority = document.querySelector('#priority');\nlet taskRemove = document.querySelector('.new-task');\n\nlet clearForm = () => {\n  title.value = '';\n  description.value = '';\n  date.value = '';\n  priority.value = '';\n  taskRemove.innerHTML = ''\n  Object(_create_task__WEBPACK_IMPORTED_MODULE_0__[\"counter\"])();  \n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvY2xlYXItZm9ybS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9jbGVhci1mb3JtLmpzPzJlNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY291bnRlciB9IGZyb20gJy4vY3JlYXRlLXRhc2snXG5cbmxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1wcm9qZWN0LWlucHV0Jyk7XG5sZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbmxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbmxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xubGV0IHRhc2tSZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTtcblxubGV0IGNsZWFyRm9ybSA9ICgpID0+IHtcbiAgdGl0bGUudmFsdWUgPSAnJztcbiAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgZGF0ZS52YWx1ZSA9ICcnO1xuICBwcmlvcml0eS52YWx1ZSA9ICcnO1xuICB0YXNrUmVtb3ZlLmlubmVySFRNTCA9ICcnXG4gIGNvdW50ZXIoKTsgIFxufVxuXG5leHBvcnQgeyBjbGVhckZvcm0gfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/clear-form.js\n");

/***/ }),

/***/ "./src/partials/create-project-button.js":
/*!***********************************************!*\
  !*** ./src/partials/create-project-button.js ***!
  \***********************************************/
/*! exports provided: createProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/partials/storage.js\");\n/* harmony import */ var _clear_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear-form */ \"./src/partials/clear-form.js\");\n/* harmony import */ var _show_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-projects */ \"./src/partials/show-projects.js\");\n/* harmony import */ var _delete_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-project */ \"./src/partials/delete-project.js\");\n\n\n\n\n\nlet createProjectButton = document.querySelector('.post-project-button');\nconst showButton = document.querySelector('.new-project-button');\nconst form = document.querySelector('.new-project');\n\nlet createProject = () => {\n  createProjectButton.addEventListener('click', (e) => {\n    Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"storage\"])();\n    form.classList.add('hide')\n    showButton.innerText = 'Create Project';\n    showButton.classList.remove('close-form')\n    Object(_clear_form__WEBPACK_IMPORTED_MODULE_1__[\"clearForm\"])();\n    Object(_show_projects__WEBPACK_IMPORTED_MODULE_2__[\"storedProjects\"])();\n    Object(_delete_project__WEBPACK_IMPORTED_MODULE_3__[\"deleteProject\"])();\n  });\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvY3JlYXRlLXByb2plY3QtYnV0dG9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRpYWxzL2NyZWF0ZS1wcm9qZWN0LWJ1dHRvbi5qcz8yNjk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c3RvcmFnZX0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7Y2xlYXJGb3JtfSBmcm9tICcuL2NsZWFyLWZvcm0nO1xuaW1wb3J0IHtzdG9yZWRQcm9qZWN0c30gZnJvbSAgJy4vc2hvdy1wcm9qZWN0cyc7XG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0IH0gZnJvbSAnLi9kZWxldGUtcHJvamVjdCc7XG5cbmxldCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtcHJvamVjdC1idXR0b24nKTtcbmNvbnN0IHNob3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtYnV0dG9uJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG5cbmxldCBjcmVhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzdG9yYWdlKCk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICBzaG93QnV0dG9uLmlubmVyVGV4dCA9ICdDcmVhdGUgUHJvamVjdCc7XG4gICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZS1mb3JtJylcbiAgICBjbGVhckZvcm0oKTtcbiAgICBzdG9yZWRQcm9qZWN0cygpO1xuICAgIGRlbGV0ZVByb2plY3QoKTtcbiAgfSk7XG5cbn1cblxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0fSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/create-project-button.js\n");

/***/ }),

/***/ "./src/partials/create-task.js":
/*!*************************************!*\
  !*** ./src/partials/create-task.js ***!
  \*************************************/
/*! exports provided: createTask, counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTask\", function() { return createTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"counter\", function() { return counter; });\nlet createTaskButton = document.querySelector('.fa-plus');\nlet newTask = document.querySelector('.new-task');\nlet n = 0;\n\nlet createTask = () => {\n  createTaskButton.addEventListener('click', ()=> {\n    let taskContainer = document.createElement('div');\n    let input = document.createElement('input');\n    let delIcon = document.createElement('i');\n    delIcon.setAttribute('class', 'fas fa-minus-square');\n    input.setAttribute('type', 'text');\n    input.classList.add('task-input')\n    input.setAttribute('id', `${n}`)\n    taskContainer.appendChild(input);\n    taskContainer.appendChild(delIcon);\n    newTask.appendChild(taskContainer);\n    n++;\n  });\n}\n    let counter = () =>{\n      n = 0;\n    }\n\n\n\n//<i class=\"fas fa-minus-square\"></i>//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvY3JlYXRlLXRhc2suanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvY3JlYXRlLXRhc2suanM/MzgyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY3JlYXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1wbHVzJyk7XG5sZXQgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xubGV0IG4gPSAwO1xuXG5sZXQgY3JlYXRlVGFzayA9ICgpID0+IHtcbiAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgZGVsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBkZWxJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmFzIGZhLW1pbnVzLXNxdWFyZScpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1pbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGAke259YClcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbEljb24pO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgbisrO1xuICB9KTtcbn1cbiAgICBsZXQgY291bnRlciA9ICgpID0+e1xuICAgICAgbiA9IDA7XG4gICAgfVxuXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBjb3VudGVyIH1cblxuLy88aSBjbGFzcz1cImZhcyBmYS1taW51cy1zcXVhcmVcIj48L2k+Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/create-task.js\n");

/***/ }),

/***/ "./src/partials/delete-project.js":
/*!****************************************!*\
  !*** ./src/partials/delete-project.js ***!
  \****************************************/
/*! exports provided: deleteProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProject\", function() { return deleteProject; });\nlet deleteProject = e => {\n  let index = e.parentElement.parentElement.rowIndex;\n  let delProject = JSON.parse(localStorage.project);\n  delProject.splice(index, 1);\n  localStorage.setItem('project', JSON.stringify(delProject));\n  let table = document.querySelector('#project-list');\n  table.deleteRow(index);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvZGVsZXRlLXByb2plY3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvZGVsZXRlLXByb2plY3QuanM/YWVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGVsZXRlUHJvamVjdCA9IGUgPT4ge1xuICBsZXQgaW5kZXggPSBlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yb3dJbmRleDtcbiAgbGV0IGRlbFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9qZWN0KTtcbiAgZGVsUHJvamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KGRlbFByb2plY3QpKTtcbiAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICB0YWJsZS5kZWxldGVSb3coaW5kZXgpO1xufVxuXG5leHBvcnQge2RlbGV0ZVByb2plY3R9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/partials/delete-project.js\n");

/***/ }),

/***/ "./src/partials/show-form.js":
/*!***********************************!*\
  !*** ./src/partials/show-form.js ***!
  \***********************************/
/*! exports provided: showForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showForm\", function() { return showForm; });\n/* harmony import */ var _clear_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear-form */ \"./src/partials/clear-form.js\");\n\n\nconst showButton = document.querySelector('.new-project-button');\nconst form = document.querySelector('.new-project');\n\nlet showForm = () => {\n    showButton.addEventListener('click', (e) => {\n        if (e.target.innerText === 'Close Form'){\n            form.classList.add('hide')\n            showButton.innerText = 'Create Project';\n            showButton.classList.remove('close-form');\n            Object(_clear_form__WEBPACK_IMPORTED_MODULE_0__[\"clearForm\"])();\n        }else if (e.target.innerText === 'Create Project') {\n            form.classList.remove('hide');\n            showButton.innerText = 'Close Form';\n            showButton.classList.add('close-form')\n        }\n    });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvc2hvdy1mb3JtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRpYWxzL3Nob3ctZm9ybS5qcz83NDViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y2xlYXJGb3JtfSBmcm9tICcuL2NsZWFyLWZvcm0nXG5cbmNvbnN0IHNob3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtYnV0dG9uJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG5cbmxldCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICBzaG93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ0Nsb3NlIEZvcm0nKXtcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgICAgICBzaG93QnV0dG9uLmlubmVyVGV4dCA9ICdDcmVhdGUgUHJvamVjdCc7XG4gICAgICAgICAgICBzaG93QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlLWZvcm0nKTtcbiAgICAgICAgICAgIGNsZWFyRm9ybSgpO1xuICAgICAgICB9ZWxzZSBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09PSAnQ3JlYXRlIFByb2plY3QnKSB7XG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHNob3dCdXR0b24uaW5uZXJUZXh0ID0gJ0Nsb3NlIEZvcm0nO1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1mb3JtJylcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgeyBzaG93Rm9ybSB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/partials/show-form.js\n");

/***/ }),

/***/ "./src/partials/show-projects.js":
/*!***************************************!*\
  !*** ./src/partials/show-projects.js ***!
  \***************************************/
/*! exports provided: showProjects, storedProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showProjects\", function() { return showProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storedProjects\", function() { return storedProjects; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/partials/storage.js\");\n/* harmony import */ var _delete_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-project */ \"./src/partials/delete-project.js\");\n\n\nlet projectList = document.querySelector('#project-list');\nlet allProjects = [];\n\nlet createProjectBox = element => {\n  let toDoList = document.createElement('ul');\n  if (element.task) {\n    for (let i = 0; i < element.task.length; i++) {\n      let item = document.createElement('li');\n      item.innerHTML = element.task[i].task;\n      toDoList.appendChild(item);\n    }\n  }\n  let delButton = document.createElement('i');\n  delButton.setAttribute('class', 'fas fa-trash')\n  delButton.addEventListener('click', () => {\n    Object(_delete_project__WEBPACK_IMPORTED_MODULE_1__[\"deleteProject\"])(delButton);\n  });\n  let project = document.createElement('div');\n  project.classList.add('box')\n  let title = document.createElement('h3');\n  title.setAttribute('class', 'title is-3');\n  title.innerHTML = element.title;\n  let description = document.createElement('p');\n  description.innerHTML = element.description;\n  let priority = document.createElement('p');\n  priority.innerHTML = `Priority: ${element.priority}`;\n  let date = document.createElement('p');\n  date.innerHTML = element.date;\n  project.appendChild(title);\n  project.appendChild(description);\n  project.appendChild(priority);\n  project.appendChild(toDoList);\n  project.appendChild(date);\n  project.appendChild(delButton);\n  let newRow = projectList.insertRow(-1);\n  newRow.appendChild(project);\n}\n\nlet showProjects = () => {\n  allProjects = _storage__WEBPACK_IMPORTED_MODULE_0__[\"DataBase\"].getProjects();\n  if(allProjects === null){\n    allProjects = [];\n  }else{\n    allProjects.forEach(element => {\n      createProjectBox(element);\n    });\n  }\n}\n\nlet storedProjects = () => {\n  allProjects = _storage__WEBPACK_IMPORTED_MODULE_0__[\"DataBase\"].getProjects();\n  let lastProject = allProjects[allProjects.length-1]\n  createProjectBox(lastProject);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvc2hvdy1wcm9qZWN0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9zaG93LXByb2plY3RzLmpzPzgzODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhQmFzZX0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7ZGVsZXRlUHJvamVjdH0gZnJvbSAnLi9kZWxldGUtcHJvamVjdCc7XG5sZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG5sZXQgYWxsUHJvamVjdHMgPSBbXTtcblxubGV0IGNyZWF0ZVByb2plY3RCb3ggPSBlbGVtZW50ID0+IHtcbiAgbGV0IHRvRG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgaWYgKGVsZW1lbnQudGFzaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC50YXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBpdGVtLmlubmVySFRNTCA9IGVsZW1lbnQudGFza1tpXS50YXNrO1xuICAgICAgdG9Eb0xpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuICB9XG4gIGxldCBkZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGRlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhcyBmYS10cmFzaCcpXG4gIGRlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZWxldGVQcm9qZWN0KGRlbEJ1dHRvbik7XG4gIH0pO1xuICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2JveCcpXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUgaXMtMycpO1xuICB0aXRsZS5pbm5lckhUTUwgPSBlbGVtZW50LnRpdGxlO1xuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJpb3JpdHkuaW5uZXJIVE1MID0gYFByaW9yaXR5OiAke2VsZW1lbnQucHJpb3JpdHl9YDtcbiAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRhdGUuaW5uZXJIVE1MID0gZWxlbWVudC5kYXRlO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHRvRG9MaXN0KTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChkYXRlKTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxCdXR0b24pO1xuICBsZXQgbmV3Um93ID0gcHJvamVjdExpc3QuaW5zZXJ0Um93KC0xKTtcbiAgbmV3Um93LmFwcGVuZENoaWxkKHByb2plY3QpO1xufVxuXG5sZXQgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xuICBhbGxQcm9qZWN0cyA9IERhdGFCYXNlLmdldFByb2plY3RzKCk7XG4gIGlmKGFsbFByb2plY3RzID09PSBudWxsKXtcbiAgICBhbGxQcm9qZWN0cyA9IFtdO1xuICB9ZWxzZXtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY3JlYXRlUHJvamVjdEJveChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5sZXQgc3RvcmVkUHJvamVjdHMgPSAoKSA9PiB7XG4gIGFsbFByb2plY3RzID0gRGF0YUJhc2UuZ2V0UHJvamVjdHMoKTtcbiAgbGV0IGxhc3RQcm9qZWN0ID0gYWxsUHJvamVjdHNbYWxsUHJvamVjdHMubGVuZ3RoLTFdXG4gIGNyZWF0ZVByb2plY3RCb3gobGFzdFByb2plY3QpO1xufVxuXG5cbmV4cG9ydCB7c2hvd1Byb2plY3RzLCBzdG9yZWRQcm9qZWN0c30iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/show-projects.js\n");

/***/ }),

/***/ "./src/partials/storage.js":
/*!*********************************!*\
  !*** ./src/partials/storage.js ***!
  \*********************************/
/*! exports provided: storage, DataBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage\", function() { return storage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataBase\", function() { return DataBase; });\nlet title = document.querySelector('#title-project-input');\nlet description = document.querySelector('#description');\nlet date = document.querySelector('#date');\nlet priority = document.querySelector('#priority');\nlet task = document.querySelector('.new-task');\nlet taskArray = []\n\nclass DataBase {\n  static getProjects() {\n    let allProjects = [];\n    if (localStorage.getItem('project') === null) {\n      allProjects = [];\n    } else {\n      allProjects = JSON.parse(localStorage.getItem('project'));\n    }\n    return allProjects;\n  }\n\n  static addProject(project) {\n    const projects = DataBase.getProjects();\n    projects.push(project);\n    localStorage.setItem('project', JSON.stringify(projects));\n  }\n}\n\nclass ToDo {\n  constructor (task) {\n    this.task = task;\n    this.status = false;\n  }\n}\n\nclass Project {\n  constructor(title, description, date, priority, task) {\n    this.title = title;\n    this.description = description;\n    this.date = date;\n    this.priority = priority;\n    if (task.childElementCount > 0) {\n      for (let i = 0; i<task.childElementCount; i++){\n        let todo = new ToDo(document.getElementById(i).value);\n        taskArray.push(todo);\n      }\n      this.task = taskArray;\n    }\n  }\n}\n\nlet storage = () => {\n  let newProject = new Project(title.value, description.value, date.value, priority.value, task);\n  DataBase.addProject(newProject);\n  taskArray = [];\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvc3RvcmFnZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9zdG9yYWdlLmpzPzM2NWUiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLXByb2plY3QtaW5wdXQnKTtcbmxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xubGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xubGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5sZXQgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xubGV0IHRhc2tBcnJheSA9IFtdXG5cbmNsYXNzIERhdGFCYXNlIHtcbiAgc3RhdGljIGdldFByb2plY3RzKCkge1xuICAgIGxldCBhbGxQcm9qZWN0cyA9IFtdO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpID09PSBudWxsKSB7XG4gICAgICBhbGxQcm9qZWN0cyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSk7XG4gICAgfVxuICAgIHJldHVybiBhbGxQcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IERhdGFCYXNlLmdldFByb2plY3RzKCk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cbn1cblxuY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yICh0YXNrKSB7XG4gICAgdGhpcy50YXNrID0gdGFzaztcbiAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCB0YXNrKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBpZiAodGFzay5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpPHRhc2suY2hpbGRFbGVtZW50Q291bnQ7IGkrKyl7XG4gICAgICAgIGxldCB0b2RvID0gbmV3IFRvRG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSkudmFsdWUpO1xuICAgICAgICB0YXNrQXJyYXkucHVzaCh0b2RvKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFzayA9IHRhc2tBcnJheTtcbiAgICB9XG4gIH1cbn1cblxubGV0IHN0b3JhZ2UgPSAoKSA9PiB7XG4gIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgdGFzayk7XG4gIERhdGFCYXNlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gIHRhc2tBcnJheSA9IFtdO1xufVxuXG5leHBvcnQge3N0b3JhZ2UsIERhdGFCYXNlfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/partials/storage.js\n");

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