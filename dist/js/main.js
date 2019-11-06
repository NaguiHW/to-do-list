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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_show_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/show-form */ \"./src/partials/show-form.js\");\n/* harmony import */ var _partials_create_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/create-task */ \"./src/partials/create-task.js\");\n/* harmony import */ var _partials_create_project_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/create-project-button */ \"./src/partials/create-project-button.js\");\n/* harmony import */ var _partials_show_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/show-projects */ \"./src/partials/show-projects.js\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nObject(_partials_show_form__WEBPACK_IMPORTED_MODULE_0__[\"showForm\"])();\nObject(_partials_create_task__WEBPACK_IMPORTED_MODULE_1__[\"createTask\"])();\nObject(_partials_create_project_button__WEBPACK_IMPORTED_MODULE_2__[\"createProject\"])();\nObject(_partials_show_projects__WEBPACK_IMPORTED_MODULE_3__[\"showProjects\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaG93Rm9ybSB9IGZyb20gJy4vcGFydGlhbHMvc2hvdy1mb3JtJ1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vcGFydGlhbHMvY3JlYXRlLXRhc2snXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9wYXJ0aWFscy9jcmVhdGUtcHJvamVjdC1idXR0b24nO1xuaW1wb3J0IHsgc2hvd1Byb2plY3RzIH0gZnJvbSAnLi9wYXJ0aWFscy9zaG93LXByb2plY3RzJztcblxuaW1wb3J0ICcuL3N0eWxlL21haW4uc2Nzcydcblxuc2hvd0Zvcm0oKTtcbmNyZWF0ZVRhc2soKTtcbmNyZWF0ZVByb2plY3QoKTtcbnNob3dQcm9qZWN0cygpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/partials/storage.js\");\n/* harmony import */ var _clear_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear-form */ \"./src/partials/clear-form.js\");\n\n\n\nlet createProjectButton = document.querySelector('.post-project-button');\nconst showButton = document.querySelector('.new-project-button');\nconst form = document.querySelector('.new-project');\n\nlet createProject = () => {\n  createProjectButton.addEventListener('click', (e) => {\n    Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"storage\"])();\n    form.classList.add('hide')\n    showButton.innerText = 'Create Project';\n    showButton.classList.remove('close-form')\n    Object(_clear_form__WEBPACK_IMPORTED_MODULE_1__[\"clearForm\"])();\n  });\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvY3JlYXRlLXByb2plY3QtYnV0dG9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRpYWxzL2NyZWF0ZS1wcm9qZWN0LWJ1dHRvbi5qcz8yNjk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c3RvcmFnZX0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7Y2xlYXJGb3JtfSBmcm9tICcuL2NsZWFyLWZvcm0nO1xuXG5sZXQgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0LXByb2plY3QtYnV0dG9uJyk7XG5jb25zdCBzaG93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWJ1dHRvbicpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpO1xuXG5sZXQgY3JlYXRlUHJvamVjdCA9ICgpID0+IHtcbiAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc3RvcmFnZSgpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgc2hvd0J1dHRvbi5pbm5lclRleHQgPSAnQ3JlYXRlIFByb2plY3QnO1xuICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2UtZm9ybScpXG4gICAgY2xlYXJGb3JtKCk7XG4gIH0pO1xuXG59XG5cbmV4cG9ydCB7Y3JlYXRlUHJvamVjdH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/partials/create-project-button.js\n");

/***/ }),

/***/ "./src/partials/create-task.js":
/*!*************************************!*\
  !*** ./src/partials/create-task.js ***!
  \*************************************/
/*! exports provided: createTask, counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTask\", function() { return createTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"counter\", function() { return counter; });\nlet createTaskButton = document.querySelector('.fa-plus');\nlet newTask = document.querySelector('.new-task');\nlet n = 0;\n\nlet createTask = () => {\n  createTaskButton.addEventListener('click', ()=> {\n    let input = document.createElement('input');\n    input.setAttribute('type', 'text');\n    input.classList.add('task-input')\n    input.setAttribute('id', `${n}`)\n    newTask.appendChild(input);\n    n++;\n  });\n}\n    let counter = () =>{\n      n = 0;\n    }\n\n\n\n\n// var input = document.createElement(\"input\");\n// input.setAttribute('type', 'text'); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvY3JlYXRlLXRhc2suanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvY3JlYXRlLXRhc2suanM/MzgyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY3JlYXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1wbHVzJyk7XG5sZXQgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xubGV0IG4gPSAwO1xuXG5sZXQgY3JlYXRlVGFzayA9ICgpID0+IHtcbiAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bn1gKVxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIG4rKztcbiAgfSk7XG59XG4gICAgbGV0IGNvdW50ZXIgPSAoKSA9PntcbiAgICAgIG4gPSAwO1xuICAgIH1cblxuZXhwb3J0IHsgY3JlYXRlVGFzaywgY291bnRlciB9XG5cblxuLy8gdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuLy8gaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTsgIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/create-task.js\n");

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
/*! exports provided: showProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showProjects\", function() { return showProjects; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/partials/storage.js\");\n\nlet projects = document.querySelector('.projects');\nlet allProjects = [];\n\nlet showProjects = () => {\n  allProjects = _storage__WEBPACK_IMPORTED_MODULE_0__[\"DataBase\"].getProjects();\n\n  if(allProjects === null){\n    allProjects = [];\n  }else{\n    allProjects.forEach(element => {\n      if(element.status){\n        projects.innerHTML += `<div class=\"alert alert-success\" role=\"alert\"><i class=\"material-icons float-left mr-2\">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class=\"float-right\"><i class=\"material-icons\">done</i><i class=\"material-icons\">delete</i></span></div>`\n      }else{\n        projects.innerHTML += `Status False`\n      }\n    });\n  }\n}\n\n\n\n// // Variables globales\n// ​\n// const formularioUI = document.querySelector('#formulario');\n// const listaActividadesUI = document.getElementById('listaActividades');\n// let arrayActividades = [];\n// ​\n// ​\n// // Funciones\n// ​\n// const CrearItem = (actividad) => {\n// ​\n//   let item = {\n//     actividad: actividad,\n//     estado: false\n//   }\n// ​\n//   arrayActividades.push(item);\n// ​\n//   return item;\n// ​\n// }\n// ​\n// const GuardarDB = () => {\n// ​\n//   localStorage.setItem('rutina', JSON.stringify(arrayActividades));\n// ​\n//   PintarDB();\n// ​\n// }\n// ​\n// const PintarDB = () => {\n// ​\n//   listaActividadesUI.innerHTML = '';\n// ​\n//   arrayActividades = JSON.parse(localStorage.getItem('rutina'));\n  \n//   if(arrayActividades === null){\n//     arrayActividades = [];\n//   }else{\n// ​\n//     arrayActividades.forEach(element => {\n// ​\n//       if(element.estado){\n//         listaActividadesUI.innerHTML += `<div class=\"alert alert-success\" role=\"alert\"><i class=\"material-icons float-left mr-2\">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class=\"float-right\"><i class=\"material-icons\">done</i><i class=\"material-icons\">delete</i></span></div>`\n//       }else{\n//         listaActividadesUI.innerHTML += `<div class=\"alert alert-danger\" role=\"alert\"><i class=\"material-icons float-left mr-2\">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class=\"float-right\"><i class=\"material-icons\">done</i><i class=\"material-icons\">delete</i></span></div>`\n//       }\n//     });\n// ​\n//   }\n// }\n// ​\n// const EliminarDB = (actividad) => {\n//   let indexArray;\n//   arrayActividades.forEach((elemento, index) => {\n    \n//     if(elemento.actividad === actividad){\n//       indexArray = index;\n//     }\n    \n//   });\n// ​\n//   arrayActividades.splice(indexArray,1);\n//   GuardarDB();\n// ​\n// }\n// ​\n// const EditarDB = (actividad) => {\n// ​\n//   let indexArray = arrayActividades.findIndex((elemento)=>elemento.actividad === actividad);\n// ​\n//   arrayActividades[indexArray].estado = true;\n// ​\n//   GuardarDB();\n// ​\n// }\n// ​\n// ​\n// ​\n// ​\n// // EventListener\n// ​\n// formularioUI.addEventListener('submit', (e) => {\n// ​\n//   e.preventDefault();\n//   let actividadUI = document.querySelector('#actividad').value;\n// ​\n//   CrearItem(actividadUI);\n//   GuardarDB();\n// ​\n//   formularioUI.reset();\n// ​\n// });\n// ​\n// document.addEventListener('DOMContentLoaded', PintarDB);\n// ​\n// listaActividadesUI.addEventListener('click', (e) => {\n// ​\n//   e.preventDefault();\n// ​\n//   if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){\n//     let texto = e.path[2].childNodes[1].innerHTML;\n//     if(e.target.innerHTML === 'delete'){\n//       // Accción de eliminar\n//       EliminarDB(texto);\n//     }\n//     if(e.target.innerHTML === 'done'){\n//       // Accción de editar\n//       EditarDB(texto);\n//     }\n//   }\n// ​\n// });\n// Contraer\n\n\n////# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvc2hvdy1wcm9qZWN0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9zaG93LXByb2plY3RzLmpzPzgzODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhQmFzZX0gZnJvbSAnLi9zdG9yYWdlJ1xubGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5sZXQgYWxsUHJvamVjdHMgPSBbXTtcblxubGV0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcbiAgYWxsUHJvamVjdHMgPSBEYXRhQmFzZS5nZXRQcm9qZWN0cygpO1xuXG4gIGlmKGFsbFByb2plY3RzID09PSBudWxsKXtcbiAgICBhbGxQcm9qZWN0cyA9IFtdO1xuICB9ZWxzZXtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYoZWxlbWVudC5zdGF0dXMpe1xuICAgICAgICBwcm9qZWN0cy5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBmbG9hdC1sZWZ0IG1yLTJcIj5hY2Nlc3NpYmlsaXR5PC9pPjxiPiR7ZWxlbWVudC5hY3RpdmlkYWR9PC9iPiAtICR7ZWxlbWVudC5lc3RhZG99PHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kb25lPC9pPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGU8L2k+PC9zcGFuPjwvZGl2PmBcbiAgICAgIH1lbHNle1xuICAgICAgICBwcm9qZWN0cy5pbm5lckhUTUwgKz0gYFN0YXR1cyBGYWxzZWBcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge3Nob3dQcm9qZWN0c31cblxuLy8gLy8gVmFyaWFibGVzIGdsb2JhbGVzXG4vLyDigItcbi8vIGNvbnN0IGZvcm11bGFyaW9VSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtdWxhcmlvJyk7XG4vLyBjb25zdCBsaXN0YUFjdGl2aWRhZGVzVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdGFBY3RpdmlkYWRlcycpO1xuLy8gbGV0IGFycmF5QWN0aXZpZGFkZXMgPSBbXTtcbi8vIOKAi1xuLy8g4oCLXG4vLyAvLyBGdW5jaW9uZXNcbi8vIOKAi1xuLy8gY29uc3QgQ3JlYXJJdGVtID0gKGFjdGl2aWRhZCkgPT4ge1xuLy8g4oCLXG4vLyAgIGxldCBpdGVtID0ge1xuLy8gICAgIGFjdGl2aWRhZDogYWN0aXZpZGFkLFxuLy8gICAgIGVzdGFkbzogZmFsc2Vcbi8vICAgfVxuLy8g4oCLXG4vLyAgIGFycmF5QWN0aXZpZGFkZXMucHVzaChpdGVtKTtcbi8vIOKAi1xuLy8gICByZXR1cm4gaXRlbTtcbi8vIOKAi1xuLy8gfVxuLy8g4oCLXG4vLyBjb25zdCBHdWFyZGFyREIgPSAoKSA9PiB7XG4vLyDigItcbi8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3J1dGluYScsIEpTT04uc3RyaW5naWZ5KGFycmF5QWN0aXZpZGFkZXMpKTtcbi8vIOKAi1xuLy8gICBQaW50YXJEQigpO1xuLy8g4oCLXG4vLyB9XG4vLyDigItcbi8vIGNvbnN0IFBpbnRhckRCID0gKCkgPT4ge1xuLy8g4oCLXG4vLyAgIGxpc3RhQWN0aXZpZGFkZXNVSS5pbm5lckhUTUwgPSAnJztcbi8vIOKAi1xuLy8gICBhcnJheUFjdGl2aWRhZGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncnV0aW5hJykpO1xuICBcbi8vICAgaWYoYXJyYXlBY3RpdmlkYWRlcyA9PT0gbnVsbCl7XG4vLyAgICAgYXJyYXlBY3RpdmlkYWRlcyA9IFtdO1xuLy8gICB9ZWxzZXtcbi8vIOKAi1xuLy8gICAgIGFycmF5QWN0aXZpZGFkZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbi8vIOKAi1xuLy8gICAgICAgaWYoZWxlbWVudC5lc3RhZG8pe1xuLy8gICAgICAgICBsaXN0YUFjdGl2aWRhZGVzVUkuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZmxvYXQtbGVmdCBtci0yXCI+YWNjZXNzaWJpbGl0eTwvaT48Yj4ke2VsZW1lbnQuYWN0aXZpZGFkfTwvYj4gLSAke2VsZW1lbnQuZXN0YWRvfTxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZG9uZTwvaT48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZGVsZXRlPC9pPjwvc3Bhbj48L2Rpdj5gXG4vLyAgICAgICB9ZWxzZXtcbi8vICAgICAgICAgbGlzdGFBY3RpdmlkYWRlc1VJLmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZmxvYXQtbGVmdCBtci0yXCI+YWNjZXNzaWJpbGl0eTwvaT48Yj4ke2VsZW1lbnQuYWN0aXZpZGFkfTwvYj4gLSAke2VsZW1lbnQuZXN0YWRvfTxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZG9uZTwvaT48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZGVsZXRlPC9pPjwvc3Bhbj48L2Rpdj5gXG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vLyDigItcbi8vICAgfVxuLy8gfVxuLy8g4oCLXG4vLyBjb25zdCBFbGltaW5hckRCID0gKGFjdGl2aWRhZCkgPT4ge1xuLy8gICBsZXQgaW5kZXhBcnJheTtcbi8vICAgYXJyYXlBY3RpdmlkYWRlcy5mb3JFYWNoKChlbGVtZW50bywgaW5kZXgpID0+IHtcbiAgICBcbi8vICAgICBpZihlbGVtZW50by5hY3RpdmlkYWQgPT09IGFjdGl2aWRhZCl7XG4vLyAgICAgICBpbmRleEFycmF5ID0gaW5kZXg7XG4vLyAgICAgfVxuICAgIFxuLy8gICB9KTtcbi8vIOKAi1xuLy8gICBhcnJheUFjdGl2aWRhZGVzLnNwbGljZShpbmRleEFycmF5LDEpO1xuLy8gICBHdWFyZGFyREIoKTtcbi8vIOKAi1xuLy8gfVxuLy8g4oCLXG4vLyBjb25zdCBFZGl0YXJEQiA9IChhY3RpdmlkYWQpID0+IHtcbi8vIOKAi1xuLy8gICBsZXQgaW5kZXhBcnJheSA9IGFycmF5QWN0aXZpZGFkZXMuZmluZEluZGV4KChlbGVtZW50byk9PmVsZW1lbnRvLmFjdGl2aWRhZCA9PT0gYWN0aXZpZGFkKTtcbi8vIOKAi1xuLy8gICBhcnJheUFjdGl2aWRhZGVzW2luZGV4QXJyYXldLmVzdGFkbyA9IHRydWU7XG4vLyDigItcbi8vICAgR3VhcmRhckRCKCk7XG4vLyDigItcbi8vIH1cbi8vIOKAi1xuLy8g4oCLXG4vLyDigItcbi8vIOKAi1xuLy8gLy8gRXZlbnRMaXN0ZW5lclxuLy8g4oCLXG4vLyBmb3JtdWxhcmlvVUkuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbi8vIOKAi1xuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGxldCBhY3RpdmlkYWRVSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY3RpdmlkYWQnKS52YWx1ZTtcbi8vIOKAi1xuLy8gICBDcmVhckl0ZW0oYWN0aXZpZGFkVUkpO1xuLy8gICBHdWFyZGFyREIoKTtcbi8vIOKAi1xuLy8gICBmb3JtdWxhcmlvVUkucmVzZXQoKTtcbi8vIOKAi1xuLy8gfSk7XG4vLyDigItcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBQaW50YXJEQik7XG4vLyDigItcbi8vIGxpc3RhQWN0aXZpZGFkZXNVSS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4vLyDigItcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8g4oCLXG4vLyAgIGlmKGUudGFyZ2V0LmlubmVySFRNTCA9PT0gJ2RvbmUnIHx8IGUudGFyZ2V0LmlubmVySFRNTCA9PT0gJ2RlbGV0ZScpe1xuLy8gICAgIGxldCB0ZXh0byA9IGUucGF0aFsyXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTDtcbi8vICAgICBpZihlLnRhcmdldC5pbm5lckhUTUwgPT09ICdkZWxldGUnKXtcbi8vICAgICAgIC8vIEFjY2Npw7NuIGRlIGVsaW1pbmFyXG4vLyAgICAgICBFbGltaW5hckRCKHRleHRvKTtcbi8vICAgICB9XG4vLyAgICAgaWYoZS50YXJnZXQuaW5uZXJIVE1MID09PSAnZG9uZScpe1xuLy8gICAgICAgLy8gQWNjY2nDs24gZGUgZWRpdGFyXG4vLyAgICAgICBFZGl0YXJEQih0ZXh0byk7XG4vLyAgICAgfVxuLy8gICB9XG4vLyDigItcbi8vIH0pO1xuLy8gQ29udHJhZXJcblxuXG4vLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/show-projects.js\n");

/***/ }),

/***/ "./src/partials/storage.js":
/*!*********************************!*\
  !*** ./src/partials/storage.js ***!
  \*********************************/
/*! exports provided: storage, DataBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage\", function() { return storage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataBase\", function() { return DataBase; });\nlet title = document.querySelector('#title-project-input');\nlet description = document.querySelector('#description');\nlet date = document.querySelector('#date');\nlet priority = document.querySelector('#priority');\nlet task = document.querySelector('.new-task');\nlet taskArray = []\n\nclass DataBase {\n  static getProjects() {\n    let allProjects = [];\n    if (localStorage.getItem('project') === null) {\n      allProjects = [];\n    } else {\n      allProjects = JSON.parse(localStorage.getItem('project'));\n    }\n    return allProjects;\n  }\n\n  static addProject(project) {\n    const projects = DataBase.getProjects();\n    projects.push(project);\n    localStorage.setItem('project', JSON.stringify(projects));\n  }\n}\n\nclass ToDo {\n  constructor (task) {\n    this.task = task;\n    this.status = false;\n  }\n}\n\nclass Project {\n  constructor(title, description, date, priority, task) {\n    this.title = title;\n    this.description = description;\n    this.date = date;\n    this.priopriority = priority;\n    if (task.childElementCount > 0) {\n      for (let i = 0; i<task.childElementCount; i++){\n        let todo = new ToDo(document.getElementById(i).value);\n        taskArray.push(todo);\n      }\n      this.task = taskArray;\n    }\n  }\n}\n\nlet storage = () => {\n  let newProject = new Project(title.value, description.value, date.value, priority.value, task);\n  DataBase.addProject(newProject);\n  console.log(newProject);\n  taskArray = [];\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvc3RvcmFnZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9zdG9yYWdlLmpzPzM2NWUiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLXByb2plY3QtaW5wdXQnKTtcbmxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xubGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xubGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5sZXQgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xubGV0IHRhc2tBcnJheSA9IFtdXG5cbmNsYXNzIERhdGFCYXNlIHtcbiAgc3RhdGljIGdldFByb2plY3RzKCkge1xuICAgIGxldCBhbGxQcm9qZWN0cyA9IFtdO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpID09PSBudWxsKSB7XG4gICAgICBhbGxQcm9qZWN0cyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSk7XG4gICAgfVxuICAgIHJldHVybiBhbGxQcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IERhdGFCYXNlLmdldFByb2plY3RzKCk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cbn1cblxuY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yICh0YXNrKSB7XG4gICAgdGhpcy50YXNrID0gdGFzaztcbiAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCB0YXNrKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgaWYgKHRhc2suY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaTx0YXNrLmNoaWxkRWxlbWVudENvdW50OyBpKyspe1xuICAgICAgICBsZXQgdG9kbyA9IG5ldyBUb0RvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpLnZhbHVlKTtcbiAgICAgICAgdGFza0FycmF5LnB1c2godG9kbyk7XG4gICAgICB9XG4gICAgICB0aGlzLnRhc2sgPSB0YXNrQXJyYXk7XG4gICAgfVxuICB9XG59XG5cbmxldCBzdG9yYWdlID0gKCkgPT4ge1xuICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIHRhc2spO1xuICBEYXRhQmFzZS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbiAgdGFza0FycmF5ID0gW107XG59XG5cbmV4cG9ydCB7c3RvcmFnZSwgRGF0YUJhc2V9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/storage.js\n");

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