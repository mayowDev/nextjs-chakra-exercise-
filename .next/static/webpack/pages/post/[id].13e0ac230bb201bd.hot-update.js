"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[id]",{

/***/ "./pages/post/[id].jsx":
/*!*****************************!*\
  !*** ./pages/post/[id].jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _styles_Input_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Input.module.css */ \"./styles/Input.module.css\");\n/* harmony import */ var _styles_Input_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Input_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst users = \"https://jsonplaceholder.typicode.com/users\";\nconst getUser = (id)=>\"\".concat(users, \"/\").concat(id);\nconst Post = (param)=>{\n    let { post: { id , title , body  } , user  } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [newTitle, setNewTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(title);\n    const [newDescription, setNewDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(body);\n    const handleEditPost = (id)=>{\n        const localPosts1 = JSON.parse(localStorage.getItem(\"posts\"));\n        const newPost = {\n            id,\n            title: newTitle,\n            body: newDescription,\n            userId: user.id\n        };\n        for(var i in localPosts1){\n            if (localPosts1[i].id == id) {\n                localPosts1[i] = newPost;\n                break;\n            }\n        }\n        localStorage.setItem(\"posts\", JSON.stringify(localPosts1));\n        router.push(\"/posts\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/\",\n                children: \"Back to home\"\n            }, void 0, false, {\n                fileName: \"/Users/mayow/Desktop/interview prep/nextjs-chakra/pages/post/[id].jsx\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Edit Post \",\n                    id,\n                    \" - \",\n                    title\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mayow/Desktop/interview prep/nextjs-chakra/pages/post/[id].jsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Title:\"\n            }, void 0, false, {\n                fileName: \"/Users/mayow/Desktop/interview prep/nextjs-chakra/pages/post/[id].jsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_styles_Input_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                onChange: (e)=>setNewTitle(e.target.value),\n                value: newTitle,\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/Users/mayow/Desktop/interview prep/nextjs-chakra/pages/post/[id].jsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Description:\"\n            }, void 0, false, {\n                fileName: \"/Users/mayow/Desktop/interview prep/nextjs-chakra/pages/post/[id].jsx\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_styles_Input_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                onChange: (e)=>setNewDescription(e.target.value),\n                value: newDescription,\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/Users/mayow/Desktop/interview prep/nextjs-chakra/pages/post/[id].jsx\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/mayow/Desktop/interview prep/nextjs-chakra/pages/post/[id].jsx\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, undefined),\n            \" \",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                onClick: ()=>handleEditPost(id),\n                flex: \"1\",\n                leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.CheckCircleIcon, {}, void 0, false, void 0, void 0),\n                colorScheme: \"blue\",\n                children: \"Save Changes\"\n            }, void 0, false, {\n                fileName: \"/Users/mayow/Desktop/interview prep/nextjs-chakra/pages/post/[id].jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mayow/Desktop/interview prep/nextjs-chakra/pages/post/[id].jsx\",\n        lineNumber: 40,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Post, \"D9n0dBM5R5/y9KlCYOaDPg3MPq0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Post;\nPost.getInitialProps = async (ctx)=>{\n    const { id  } = ctx.query;\n    const posts = JSON.parse(localStorage.getItem(\"posts\"));\n    let post;\n    for(var i in localPosts){\n        if (localPosts[i].id == id) {\n            post = localPosts[i];\n            break;\n        }\n    }\n    console.log(\"post\", post);\n    const userResponse = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(getUser(post.userId));\n    const user = await userResponse.json();\n    return {\n        post,\n        user\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUEsK0RBQWVKLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9baWRdLmpzeD9lMWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgQ2hlY2tDaXJjbGVJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcbmltcG9ydCBpbnB1dG5TdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0lucHV0Lm1vZHVsZS5jc3MnXG5cblxuY29uc3QgdXNlcnMgPSBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzYDtcbmNvbnN0IGdldFVzZXIgPSBpZCA9PiBgJHt1c2Vyc30vJHtpZH1gO1xuXG5jb25zdCBQb3N0ID0gKHtwb3N0OiB7IGlkLCB0aXRsZSwgYm9keSB9LCB1c2VyfSkgPT57XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtuZXdUaXRsZSwgc2V0TmV3VGl0bGVdID0gdXNlU3RhdGUodGl0bGUpXG4gIGNvbnN0IFtuZXdEZXNjcmlwdGlvbiwgc2V0TmV3RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoYm9keSlcblxuICBjb25zdCBoYW5kbGVFZGl0UG9zdCA9IChpZCk9PiB7XG4gICAgY29uc3QgbG9jYWxQb3N0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwb3N0c1wiKSkgOyAgIFxuXG4gICAgY29uc3QgbmV3UG9zdCA9IHtcbiAgICAgIGlkLFxuICAgICAgdGl0bGU6IG5ld1RpdGxlLFxuICAgICAgYm9keTogbmV3RGVzY3JpcHRpb24sXG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgfVxuICAgIGZvciAodmFyIGkgaW4gbG9jYWxQb3N0cykge1xuICAgICAgaWYgKGxvY2FsUG9zdHNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgIGxvY2FsUG9zdHNbaV0gPSBuZXdQb3N0O1xuICAgICAgICAgYnJlYWs7IFxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBvc3RzXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsUG9zdHMpICk7XG4gICAgcm91dGVyLnB1c2goJy9wb3N0cycpOyBcblxuICB9XG4gICByZXR1cm4gKFxuICA8ZGl2PlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+QmFjayB0byBob21lPC9MaW5rPlxuICAgIDxoMT5FZGl0IFBvc3Qge2lkfSAtIHt0aXRsZX08L2gxPlxuICAgIDxwPlRpdGxlOjwvcD4gXG5cbiAgICA8aW5wdXQgIFxuICAgICAgY2xhc3NOYW1lPXtpbnB1dG5TdHlsZXMuaW5wdXR9XG4gICAgICBvbkNoYW5nZT17ZT0+c2V0TmV3VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgdmFsdWU9e25ld1RpdGxlfSBcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIC8+XG4gICAgXG4gICAgPHA+RGVzY3JpcHRpb246PC9wPiBcbiAgICA8aW5wdXQgXG4gICAgICBjbGFzc05hbWU9e2lucHV0blN0eWxlcy5pbnB1dH1cbiAgICAgIG9uQ2hhbmdlPXtlPT5zZXROZXdEZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICB2YWx1ZT17bmV3RGVzY3JpcHRpb259ICAgICAgIFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgIC8+XG4gICAgPGJyLz4ge1wiIFwifVxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+aGFuZGxlRWRpdFBvc3QoaWQpfSBmbGV4PScxJ2xlZnRJY29uPXs8Q2hlY2tDaXJjbGVJY29uIC8+fSBjb2xvclNjaGVtZT0nYmx1ZSc+XG4gICAgICBTYXZlIENoYW5nZXNcbiAgICAgIDwvQnV0dG9uPlxuXG5cbiAgPC9kaXY+XG5cbilcbn1cblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xuICBjb25zdCB7IGlkIH0gPSBjdHgucXVlcnk7XG4gIGNvbnN0IHBvc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBvc3RzXCIpKSA7ICAgXG5cbiAgbGV0IHBvc3QgXG5cbiAgZm9yICh2YXIgaSBpbiBsb2NhbFBvc3RzKSB7XG4gICAgaWYgKGxvY2FsUG9zdHNbaV0uaWQgPT0gaWQpIHtcbiAgICAgIHBvc3QgPSBsb2NhbFBvc3RzW2ldIDtcbiAgICAgICBicmVhazsgXG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKCdwb3N0JywgcG9zdClcblxuXG4gIGNvbnN0IHVzZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKGdldFVzZXIocG9zdC51c2VySWQpKTtcbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHsgcG9zdCwgdXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiZmV0Y2giLCJMaW5rIiwiQnV0dG9uIiwiQ2hlY2tDaXJjbGVJY29uIiwiaW5wdXRuU3R5bGVzIiwidXNlcnMiLCJnZXRVc2VyIiwiaWQiLCJQb3N0IiwicG9zdCIsInRpdGxlIiwiYm9keSIsInVzZXIiLCJyb3V0ZXIiLCJuZXdUaXRsZSIsInNldE5ld1RpdGxlIiwibmV3RGVzY3JpcHRpb24iLCJzZXROZXdEZXNjcmlwdGlvbiIsImhhbmRsZUVkaXRQb3N0IiwibG9jYWxQb3N0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJuZXdQb3N0IiwidXNlcklkIiwiaSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwdXNoIiwiZGl2IiwiaHJlZiIsImgxIiwicCIsImlucHV0IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiYnIiLCJvbkNsaWNrIiwiZmxleCIsImxlZnRJY29uIiwiY29sb3JTY2hlbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsInVzZXJSZXNwb25zZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[id].jsx\n"));

/***/ })

});