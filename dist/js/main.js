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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_show_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/show-form */ \"./src/partials/show-form.js\");\n/* harmony import */ var _partials_create_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/create-task */ \"./src/partials/create-task.js\");\n/* harmony import */ var _partials_create_project_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/create-project-button */ \"./src/partials/create-project-button.js\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nObject(_partials_show_form__WEBPACK_IMPORTED_MODULE_0__[\"showForm\"])();\nObject(_partials_create_task__WEBPACK_IMPORTED_MODULE_1__[\"createTask\"])();\nObject(_partials_create_project_button__WEBPACK_IMPORTED_MODULE_2__[\"createProject\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaG93Rm9ybSB9IGZyb20gJy4vcGFydGlhbHMvc2hvdy1mb3JtJ1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vcGFydGlhbHMvY3JlYXRlLXRhc2snXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9wYXJ0aWFscy9jcmVhdGUtcHJvamVjdC1idXR0b24nO1xuXG5pbXBvcnQgJy4vc3R5bGUvbWFpbi5zY3NzJ1xuXG5zaG93Rm9ybSgpO1xuY3JlYXRlVGFzaygpO1xuY3JlYXRlUHJvamVjdCgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

/***/ "./src/partials/storage.js":
/*!*********************************!*\
  !*** ./src/partials/storage.js ***!
  \*********************************/
/*! exports provided: storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage\", function() { return storage; });\nlet title = document.querySelector('#title-project-input');\nlet description = document.querySelector('#description');\nlet date = document.querySelector('#date');\nlet priority = document.querySelector('#priority');\nlet task = document.querySelector('.new-task');\nlet taskArray = []\nlet allProjects = [];\n\nclass Storage {\n  static getProjects() {\n    if (localStorage.getItem('project') === null) {\n      allProjects = [];\n    } else {\n      allProjects = JSON.parse(localStorage.getItem('project'));\n    }\n    return allProjects;\n  }\n\n  static addProject(project) {\n    const projects = Storage.getProjects();\n    projects.push(project);\n    localStorage.setItem('project', JSON.stringify(projects));\n  }\n}\n\nclass ToDo {\n  constructor (task) {\n    this.task = task;\n    this.status = false;\n  }\n}\n\nclass Project {\n  constructor(title, description, date, priority, task) {\n    this.title = title;\n    this.description = description;\n    this.date = date;\n    this.priopriority = priority;\n    if (task.childElementCount > 0) {\n      for (let i = 0; i<task.childElementCount; i++){\n        let todo = new ToDo(document.getElementById(i).value);\n        taskArray.push(todo);\n      }\n      this.task = taskArray;\n    }\n  }\n}\n\nlet storage = () => {\n  let newProject = new Project(title.value, description.value, date.value, priority.value, task);\n  Storage.addProject(newProject);\n  console.log(newProject);\n  taskArray = [];\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvc3RvcmFnZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9zdG9yYWdlLmpzPzM2NWUiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLXByb2plY3QtaW5wdXQnKTtcbmxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xubGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xubGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5sZXQgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xubGV0IHRhc2tBcnJheSA9IFtdXG5sZXQgYWxsUHJvamVjdHMgPSBbXTtcblxuY2xhc3MgU3RvcmFnZSB7XG4gIHN0YXRpYyBnZXRQcm9qZWN0cygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSA9PT0gbnVsbCkge1xuICAgICAgYWxsUHJvamVjdHMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JykpO1xuICAgIH1cbiAgICByZXR1cm4gYWxsUHJvamVjdHM7XG4gIH1cblxuICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBTdG9yYWdlLmdldFByb2plY3RzKCk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cbn1cblxuY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yICh0YXNrKSB7XG4gICAgdGhpcy50YXNrID0gdGFzaztcbiAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCB0YXNrKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgaWYgKHRhc2suY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaTx0YXNrLmNoaWxkRWxlbWVudENvdW50OyBpKyspe1xuICAgICAgICBsZXQgdG9kbyA9IG5ldyBUb0RvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpLnZhbHVlKTtcbiAgICAgICAgdGFza0FycmF5LnB1c2godG9kbyk7XG4gICAgICB9XG4gICAgICB0aGlzLnRhc2sgPSB0YXNrQXJyYXk7XG4gICAgfVxuICB9XG59XG5cbmxldCBzdG9yYWdlID0gKCkgPT4ge1xuICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIHRhc2spO1xuICBTdG9yYWdlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuICB0YXNrQXJyYXkgPSBbXTtcbn1cblxuZXhwb3J0IHtzdG9yYWdlfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/partials/storage.js\n");

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