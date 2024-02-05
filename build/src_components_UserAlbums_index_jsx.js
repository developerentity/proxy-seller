"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproxy_seller"] = self["webpackChunkproxy_seller"] || []).push([["src_components_UserAlbums_index_jsx"],{

/***/ "./src/components/Header/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Header/styles.js\");\n\n\nconst Header = _ref => {\n  let {\n    title,\n    shouldBackButtonBeShown\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.HeaderContainer, null, shouldBackButtonBeShown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.BackButton, {\n    to: \"/\"\n  }, \"Back\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Title, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://proxy-seller/./src/components/Header/index.jsx?");

/***/ }),

/***/ "./src/components/Header/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Header/styles.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BackButton: () => (/* binding */ BackButton),\n/* harmony export */   HeaderContainer: () => (/* binding */ HeaderContainer),\n/* harmony export */   Title: () => (/* binding */ Title)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject, _templateObject2, _templateObject3;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nconst HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 10px 20px;\\n  margin: 20px 0;\\n  background: #fff;\\n  border-radius: 5px;\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\n\"])));\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  margin: 0;\\n  font-size: 1.5rem;\\n  color: #333;\\n\"])));\nconst BackButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  padding: 5px 10px;\\n  font-size: 1rem;\\n  color: #fff;\\n  background-color: #007bff;\\n  border: none;\\n  border-radius: 5px;\\n  cursor: pointer;\\n\\n  &:hover {\\n    background-color: #0056b3;\\n  }\\n\"])));\n\n//# sourceURL=webpack://proxy-seller/./src/components/Header/styles.js?");

/***/ }),

/***/ "./src/components/UserAlbums/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/UserAlbums/index.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _redux_slices_albumsSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/slices/albumsSlice */ \"./src/redux/slices/albumsSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/UserAlbums/styles.js\");\n/* harmony import */ var _styles_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Container */ \"./src/styles/Container.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ \"./src/components/Header/index.jsx\");\n/* harmony import */ var _utils_textFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/textFormatter */ \"./src/utils/textFormatter.js\");\n/* harmony import */ var _utils_defineUserName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/defineUserName */ \"./src/utils/defineUserName.js\");\n/* harmony import */ var _redux_slices_usersSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/slices/usersSlice */ \"./src/redux/slices/usersSlice.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Loading */ \"./src/components/Loading/index.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n\n\n\n\n\n\n\n\n\n\n\nconst UserAlbumsComponent = () => {\n  let {\n    userId\n  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)();\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();\n  const {\n    appLoading\n  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(store => store.loadingSlice);\n  const {\n    albums\n  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(store => store.albumSlice);\n  const {\n    users\n  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(store => store.userSlice);\n  const username = userId && users.length && (0,_utils_defineUserName__WEBPACK_IMPORTED_MODULE_6__.defineUserName)(users, userId);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    userId && dispatch((0,_redux_slices_albumsSlice__WEBPACK_IMPORTED_MODULE_0__.getAlbumsForCertainUserById)(userId));\n  }, [dispatch, userId]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    !users.length && dispatch((0,_redux_slices_usersSlice__WEBPACK_IMPORTED_MODULE_7__.getUsers)());\n  }, [dispatch, users]);\n  if (appLoading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Loading__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null);\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_styles_Container__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    shouldBackButtonBeShown: true,\n    title: \"\".concat(username, \"'s albums\")\n  }), albums.length ? albums.map(album => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.AlbumItem, {\n    key: album.id\n  }, (0,_utils_textFormatter__WEBPACK_IMPORTED_MODULE_5__.addPeriodAtEnd)((0,_utils_textFormatter__WEBPACK_IMPORTED_MODULE_5__.capitalizeFirstLetter)(album.title)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAlbumsComponent);\n\n//# sourceURL=webpack://proxy-seller/./src/components/UserAlbums/index.jsx?");

/***/ }),

/***/ "./src/components/UserAlbums/styles.js":
/*!*********************************************!*\
  !*** ./src/components/UserAlbums/styles.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AlbumItem: () => (/* binding */ AlbumItem)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nconst AlbumItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  margin-bottom: 15px;\\n  padding: 10px;\\n  background: #ffffff;\\n  border: 1px solid #ddd;\\n  border-radius: 5px;\\n\\n  &:hover {\\n    background: #f0f0f0;\\n  }\\n\"])));\n\n//# sourceURL=webpack://proxy-seller/./src/components/UserAlbums/styles.js?");

/***/ }),

/***/ "./src/styles/Container.js":
/*!*********************************!*\
  !*** ./src/styles/Container.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Container: () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  max-width: 1200px;\\n  margin: 0 auto;\\n  padding: 20px;\\n  overflow: hidden;\\n\\n  @media (max-width: 768px) {\\n    padding: 15px;\\n  }\\n\"])));\n\n//# sourceURL=webpack://proxy-seller/./src/styles/Container.js?");

/***/ }),

/***/ "./src/utils/defineUserName.js":
/*!*************************************!*\
  !*** ./src/utils/defineUserName.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defineUserName: () => (/* binding */ defineUserName)\n/* harmony export */ });\nconst defineUserName = (array, id) => {\n  const user = array.find(user => user.id === parseInt(id, 10));\n  return user === null || user === void 0 ? void 0 : user.username;\n};\n\n//# sourceURL=webpack://proxy-seller/./src/utils/defineUserName.js?");

/***/ }),

/***/ "./src/utils/textFormatter.js":
/*!************************************!*\
  !*** ./src/utils/textFormatter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPeriodAtEnd: () => (/* binding */ addPeriodAtEnd),\n/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter)\n/* harmony export */ });\nconst capitalizeFirstLetter = string => {\n  return string.charAt(0).toUpperCase() + string.slice(1);\n};\nconst addPeriodAtEnd = text => {\n  if (!text.endsWith(\".\")) {\n    return text + \".\";\n  }\n  return text;\n};\n\n//# sourceURL=webpack://proxy-seller/./src/utils/textFormatter.js?");

/***/ })

}]);