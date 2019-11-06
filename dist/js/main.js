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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_show_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/show-form */ \"./src/partials/show-form.js\");\n/* harmony import */ var _partials_create_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/create-task */ \"./src/partials/create-task.js\");\n/* harmony import */ var _partials_create_project_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/create-project-button */ \"./src/partials/create-project-button.js\");\n/* harmony import */ var _partials_show_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/show-projects */ \"./src/partials/show-projects.js\");\n/* harmony import */ var _partials_delete_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partials/delete-project */ \"./src/partials/delete-project.js\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nObject(_partials_show_form__WEBPACK_IMPORTED_MODULE_0__[\"showForm\"])();\nObject(_partials_create_task__WEBPACK_IMPORTED_MODULE_1__[\"createTask\"])();\nObject(_partials_create_project_button__WEBPACK_IMPORTED_MODULE_2__[\"createProject\"])();\nObject(_partials_show_projects__WEBPACK_IMPORTED_MODULE_3__[\"showProjects\"])();\nObject(_partials_delete_project__WEBPACK_IMPORTED_MODULE_4__[\"deleteProject\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaG93Rm9ybSB9IGZyb20gJy4vcGFydGlhbHMvc2hvdy1mb3JtJ1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vcGFydGlhbHMvY3JlYXRlLXRhc2snXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9wYXJ0aWFscy9jcmVhdGUtcHJvamVjdC1idXR0b24nO1xuaW1wb3J0IHsgc2hvd1Byb2plY3RzIH0gZnJvbSAnLi9wYXJ0aWFscy9zaG93LXByb2plY3RzJztcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tICcuL3BhcnRpYWxzL2RlbGV0ZS1wcm9qZWN0JztcblxuaW1wb3J0ICcuL3N0eWxlL21haW4uc2Nzcydcblxuc2hvd0Zvcm0oKTtcbmNyZWF0ZVRhc2soKTtcbmNyZWF0ZVByb2plY3QoKTtcbnNob3dQcm9qZWN0cygpO1xuZGVsZXRlUHJvamVjdCgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTask\", function() { return createTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"counter\", function() { return counter; });\nlet createTaskButton = document.querySelector('.fa-plus');\nlet newTask = document.querySelector('.new-task');\nlet n = 0;\n\nlet createTask = () => {\n  createTaskButton.addEventListener('click', ()=> {\n    let input = document.createElement('input');\n    input.setAttribute('type', 'text');\n    input.classList.add('task-input')\n    input.setAttribute('id', `${n}`)\n    newTask.appendChild(input);\n    n++;\n  });\n}\n    let counter = () =>{\n      n = 0;\n    }\n\n\n\n\n// var input = document.createElement(\"input\");\n// input.setAttribute('type', 'text'); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvY3JlYXRlLXRhc2suanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvY3JlYXRlLXRhc2suanM/MzgyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY3JlYXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1wbHVzJyk7XG5sZXQgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xubGV0IG4gPSAwO1xuXG5sZXQgY3JlYXRlVGFzayA9ICgpID0+IHtcbiAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bn1gKVxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIG4rKztcbiAgfSk7XG59XG4gICAgbGV0IGNvdW50ZXIgPSAoKSA9PntcbiAgICAgIG4gPSAwO1xuICAgIH1cblxuZXhwb3J0IHsgY3JlYXRlVGFzaywgY291bnRlciB9XG5cblxuLy8gdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuLy8gaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTsgIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/create-task.js\n");

/***/ }),

/***/ "./src/partials/delete-project.js":
/*!****************************************!*\
  !*** ./src/partials/delete-project.js ***!
  \****************************************/
/*! exports provided: deleteProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProject\", function() { return deleteProject; });\n\nlet deleteProject = () => {\n  window.addEventListener('click', (e) => {\n    if (e.target.innerHTML == '' && e.target.getElementsByClassName !== 'fa-plus'){\n      console.log('delete')\n    }\n  \n  })\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvZGVsZXRlLXByb2plY3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFydGlhbHMvZGVsZXRlLXByb2plY3QuanM/YWVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBkZWxldGVQcm9qZWN0ID0gKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pbm5lckhUTUwgPT0gJycgJiYgZS50YXJnZXQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAhPT0gJ2ZhLXBsdXMnKXtcbiAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUnKVxuICAgIH1cbiAgXG4gIH0pXG59XG5cbmV4cG9ydCB7ZGVsZXRlUHJvamVjdH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/delete-project.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showProjects\", function() { return showProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storedProjects\", function() { return storedProjects; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/partials/storage.js\");\n\nlet projects = document.querySelector('.projects');\nlet allProjects = [];\n\nlet showProjects = () => {\n  allProjects = _storage__WEBPACK_IMPORTED_MODULE_0__[\"DataBase\"].getProjects();\n\n  if(allProjects === null){\n    allProjects = [];\n  }else{\n    allProjects.forEach(element => {\n      let toDoList = '';\n      for (let i = 0; i < element.task.length; i++) {\n        toDoList += `<li>${element.task[i].task}</li>`\n      }\n      projects.innerHTML += `<div class=\"project\">\n      <h3>${element.title}</h3>\n      <p>${element.description}</p>\n      <ul>\n        ${toDoList}\n      </ul>\n      <p>Due Date: 12/12/2019</p>\n      <i class=\"fas fa-trash\"></i>\n    </div>`;\n    });\n  }\n}\n\nlet storedProjects = () => {\n  allProjects = _storage__WEBPACK_IMPORTED_MODULE_0__[\"DataBase\"].getProjects();\n  allProjects[-1]\n  projects.innerHTML += `${allProjects[allProjects.length-1].title}`;\n}\n\n\n\n// // Variables globales\n// ​\n// const formularioUI = document.querySelector('#formulario');\n// const listaActividadesUI = document.getElementById('listaActividades');\n// let arrayActividades = [];\n// ​\n// ​\n// // Funciones\n// ​\n// const CrearItem = (actividad) => {\n// ​\n//   let item = {\n//     actividad: actividad,\n//     estado: false\n//   }\n// ​\n//   arrayActividades.push(item);\n// ​\n//   return item;\n// ​\n// }\n// ​\n// const GuardarDB = () => {\n// ​\n//   localStorage.setItem('rutina', JSON.stringify(arrayActividades));\n// ​\n//   PintarDB();\n// ​\n// }\n// ​\n// const PintarDB = () => {\n// ​\n//   listaActividadesUI.innerHTML = '';\n// ​\n//   arrayActividades = JSON.parse(localStorage.getItem('rutina'));\n  \n//   if(arrayActividades === null){\n//     arrayActividades = [];\n//   }else{\n// ​\n//     arrayActividades.forEach(element => {\n// ​\n//       if(element.estado){\n//         listaActividadesUI.innerHTML += `<div class=\"alert alert-success\" role=\"alert\"><i class=\"material-icons float-left mr-2\">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class=\"float-right\"><i class=\"material-icons\">done</i><i class=\"material-icons\">delete</i></span></div>`\n//       }else{\n//         listaActividadesUI.innerHTML += `<div class=\"alert alert-danger\" role=\"alert\"><i class=\"material-icons float-left mr-2\">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class=\"float-right\"><i class=\"material-icons\">done</i><i class=\"material-icons\">delete</i></span></div>`\n//       }\n//     });\n// ​\n//   }\n// }\n// ​\n// const EliminarDB = (actividad) => {\n//   let indexArray;\n//   arrayActividades.forEach((elemento, index) => {\n    \n//     if(elemento.actividad === actividad){\n//       indexArray = index;\n//     }\n    \n//   });\n// ​\n//   arrayActividades.splice(indexArray,1);\n//   GuardarDB();\n// ​\n// }\n// ​\n// const EditarDB = (actividad) => {\n// ​\n//   let indexArray = arrayActividades.findIndex((elemento)=>elemento.actividad === actividad);\n// ​\n//   arrayActividades[indexArray].estado = true;\n// ​\n//   GuardarDB();\n// ​\n// }\n// ​\n// ​\n// ​\n// ​\n// // EventListener\n// ​\n// formularioUI.addEventListener('submit', (e) => {\n// ​\n//   e.preventDefault();\n//   let actividadUI = document.querySelector('#actividad').value;\n// ​\n//   CrearItem(actividadUI);\n//   GuardarDB();\n// ​\n//   formularioUI.reset();\n// ​\n// });\n// ​\n// document.addEventListener('DOMContentLoaded', PintarDB);\n// ​\n// listaActividadesUI.addEventListener('click', (e) => {\n// ​\n//   e.preventDefault();\n// ​\n//   if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){\n//     let texto = e.path[2].childNodes[1].innerHTML;\n//     if(e.target.innerHTML === 'delete'){\n//       // Accción de eliminar\n//       EliminarDB(texto);\n//     }\n//     if(e.target.innerHTML === 'done'){\n//       // Accción de editar\n//       EditarDB(texto);\n//     }\n//   }\n// ​\n// });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvc2hvdy1wcm9qZWN0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9zaG93LXByb2plY3RzLmpzPzgzODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhQmFzZX0gZnJvbSAnLi9zdG9yYWdlJ1xubGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5sZXQgYWxsUHJvamVjdHMgPSBbXTtcblxubGV0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcbiAgYWxsUHJvamVjdHMgPSBEYXRhQmFzZS5nZXRQcm9qZWN0cygpO1xuXG4gIGlmKGFsbFByb2plY3RzID09PSBudWxsKXtcbiAgICBhbGxQcm9qZWN0cyA9IFtdO1xuICB9ZWxzZXtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgbGV0IHRvRG9MaXN0ID0gJyc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQudGFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICB0b0RvTGlzdCArPSBgPGxpPiR7ZWxlbWVudC50YXNrW2ldLnRhc2t9PC9saT5gXG4gICAgICB9XG4gICAgICBwcm9qZWN0cy5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJwcm9qZWN0XCI+XG4gICAgICA8aDM+JHtlbGVtZW50LnRpdGxlfTwvaDM+XG4gICAgICA8cD4ke2VsZW1lbnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPHVsPlxuICAgICAgICAke3RvRG9MaXN0fVxuICAgICAgPC91bD5cbiAgICAgIDxwPkR1ZSBEYXRlOiAxMi8xMi8yMDE5PC9wPlxuICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+XG4gICAgPC9kaXY+YDtcbiAgICB9KTtcbiAgfVxufVxuXG5sZXQgc3RvcmVkUHJvamVjdHMgPSAoKSA9PiB7XG4gIGFsbFByb2plY3RzID0gRGF0YUJhc2UuZ2V0UHJvamVjdHMoKTtcbiAgYWxsUHJvamVjdHNbLTFdXG4gIHByb2plY3RzLmlubmVySFRNTCArPSBgJHthbGxQcm9qZWN0c1thbGxQcm9qZWN0cy5sZW5ndGgtMV0udGl0bGV9YDtcbn1cblxuZXhwb3J0IHtzaG93UHJvamVjdHMsIHN0b3JlZFByb2plY3RzfVxuXG4vLyAvLyBWYXJpYWJsZXMgZ2xvYmFsZXNcbi8vIOKAi1xuLy8gY29uc3QgZm9ybXVsYXJpb1VJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm11bGFyaW8nKTtcbi8vIGNvbnN0IGxpc3RhQWN0aXZpZGFkZXNVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0YUFjdGl2aWRhZGVzJyk7XG4vLyBsZXQgYXJyYXlBY3RpdmlkYWRlcyA9IFtdO1xuLy8g4oCLXG4vLyDigItcbi8vIC8vIEZ1bmNpb25lc1xuLy8g4oCLXG4vLyBjb25zdCBDcmVhckl0ZW0gPSAoYWN0aXZpZGFkKSA9PiB7XG4vLyDigItcbi8vICAgbGV0IGl0ZW0gPSB7XG4vLyAgICAgYWN0aXZpZGFkOiBhY3RpdmlkYWQsXG4vLyAgICAgZXN0YWRvOiBmYWxzZVxuLy8gICB9XG4vLyDigItcbi8vICAgYXJyYXlBY3RpdmlkYWRlcy5wdXNoKGl0ZW0pO1xuLy8g4oCLXG4vLyAgIHJldHVybiBpdGVtO1xuLy8g4oCLXG4vLyB9XG4vLyDigItcbi8vIGNvbnN0IEd1YXJkYXJEQiA9ICgpID0+IHtcbi8vIOKAi1xuLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncnV0aW5hJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlBY3RpdmlkYWRlcykpO1xuLy8g4oCLXG4vLyAgIFBpbnRhckRCKCk7XG4vLyDigItcbi8vIH1cbi8vIOKAi1xuLy8gY29uc3QgUGludGFyREIgPSAoKSA9PiB7XG4vLyDigItcbi8vICAgbGlzdGFBY3RpdmlkYWRlc1VJLmlubmVySFRNTCA9ICcnO1xuLy8g4oCLXG4vLyAgIGFycmF5QWN0aXZpZGFkZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdydXRpbmEnKSk7XG4gIFxuLy8gICBpZihhcnJheUFjdGl2aWRhZGVzID09PSBudWxsKXtcbi8vICAgICBhcnJheUFjdGl2aWRhZGVzID0gW107XG4vLyAgIH1lbHNle1xuLy8g4oCLXG4vLyAgICAgYXJyYXlBY3RpdmlkYWRlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuLy8g4oCLXG4vLyAgICAgICBpZihlbGVtZW50LmVzdGFkbyl7XG4vLyAgICAgICAgIGxpc3RhQWN0aXZpZGFkZXNVSS5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBmbG9hdC1sZWZ0IG1yLTJcIj5hY2Nlc3NpYmlsaXR5PC9pPjxiPiR7ZWxlbWVudC5hY3RpdmlkYWR9PC9iPiAtICR7ZWxlbWVudC5lc3RhZG99PHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kb25lPC9pPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGU8L2k+PC9zcGFuPjwvZGl2PmBcbi8vICAgICAgIH1lbHNle1xuLy8gICAgICAgICBsaXN0YUFjdGl2aWRhZGVzVUkuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBmbG9hdC1sZWZ0IG1yLTJcIj5hY2Nlc3NpYmlsaXR5PC9pPjxiPiR7ZWxlbWVudC5hY3RpdmlkYWR9PC9iPiAtICR7ZWxlbWVudC5lc3RhZG99PHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kb25lPC9pPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGU8L2k+PC9zcGFuPjwvZGl2PmBcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vIOKAi1xuLy8gICB9XG4vLyB9XG4vLyDigItcbi8vIGNvbnN0IEVsaW1pbmFyREIgPSAoYWN0aXZpZGFkKSA9PiB7XG4vLyAgIGxldCBpbmRleEFycmF5O1xuLy8gICBhcnJheUFjdGl2aWRhZGVzLmZvckVhY2goKGVsZW1lbnRvLCBpbmRleCkgPT4ge1xuICAgIFxuLy8gICAgIGlmKGVsZW1lbnRvLmFjdGl2aWRhZCA9PT0gYWN0aXZpZGFkKXtcbi8vICAgICAgIGluZGV4QXJyYXkgPSBpbmRleDtcbi8vICAgICB9XG4gICAgXG4vLyAgIH0pO1xuLy8g4oCLXG4vLyAgIGFycmF5QWN0aXZpZGFkZXMuc3BsaWNlKGluZGV4QXJyYXksMSk7XG4vLyAgIEd1YXJkYXJEQigpO1xuLy8g4oCLXG4vLyB9XG4vLyDigItcbi8vIGNvbnN0IEVkaXRhckRCID0gKGFjdGl2aWRhZCkgPT4ge1xuLy8g4oCLXG4vLyAgIGxldCBpbmRleEFycmF5ID0gYXJyYXlBY3RpdmlkYWRlcy5maW5kSW5kZXgoKGVsZW1lbnRvKT0+ZWxlbWVudG8uYWN0aXZpZGFkID09PSBhY3RpdmlkYWQpO1xuLy8g4oCLXG4vLyAgIGFycmF5QWN0aXZpZGFkZXNbaW5kZXhBcnJheV0uZXN0YWRvID0gdHJ1ZTtcbi8vIOKAi1xuLy8gICBHdWFyZGFyREIoKTtcbi8vIOKAi1xuLy8gfVxuLy8g4oCLXG4vLyDigItcbi8vIOKAi1xuLy8g4oCLXG4vLyAvLyBFdmVudExpc3RlbmVyXG4vLyDigItcbi8vIGZvcm11bGFyaW9VSS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuLy8g4oCLXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgbGV0IGFjdGl2aWRhZFVJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjdGl2aWRhZCcpLnZhbHVlO1xuLy8g4oCLXG4vLyAgIENyZWFySXRlbShhY3RpdmlkYWRVSSk7XG4vLyAgIEd1YXJkYXJEQigpO1xuLy8g4oCLXG4vLyAgIGZvcm11bGFyaW9VSS5yZXNldCgpO1xuLy8g4oCLXG4vLyB9KTtcbi8vIOKAi1xuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFBpbnRhckRCKTtcbi8vIOKAi1xuLy8gbGlzdGFBY3RpdmlkYWRlc1VJLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbi8vIOKAi1xuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyDigItcbi8vICAgaWYoZS50YXJnZXQuaW5uZXJIVE1MID09PSAnZG9uZScgfHwgZS50YXJnZXQuaW5uZXJIVE1MID09PSAnZGVsZXRlJyl7XG4vLyAgICAgbGV0IHRleHRvID0gZS5wYXRoWzJdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MO1xuLy8gICAgIGlmKGUudGFyZ2V0LmlubmVySFRNTCA9PT0gJ2RlbGV0ZScpe1xuLy8gICAgICAgLy8gQWNjY2nDs24gZGUgZWxpbWluYXJcbi8vICAgICAgIEVsaW1pbmFyREIodGV4dG8pO1xuLy8gICAgIH1cbi8vICAgICBpZihlLnRhcmdldC5pbm5lckhUTUwgPT09ICdkb25lJyl7XG4vLyAgICAgICAvLyBBY2NjacOzbiBkZSBlZGl0YXJcbi8vICAgICAgIEVkaXRhckRCKHRleHRvKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIOKAi1xuLy8gfSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/show-projects.js\n");

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