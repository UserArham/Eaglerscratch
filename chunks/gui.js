var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["gui"],{

/***/ "./src/playground/index.jsx":
/*!**********************************!*\
  !*** ./src/playground/index.jsx ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

var appTarget = document.createElement('div');
appTarget.className = _index_css__WEBPACK_IMPORTED_MODULE_10___default.a.app;
document.body.appendChild(appTarget);

if (Object(_lib_supported_browser__WEBPACK_IMPORTED_MODULE_9__["default"])()) {
  __webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx")
    .default(appTarget);
} else {
  _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]
    .setAppElement(appTarget);

  var WrappedBrowserModalComponent =
    Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(
      _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__["default"],
      true
    );
}

});

/***/ }),

/***/ "./src/playground/render-gui.jsx":
/*!***************************************!*\
  !*** ./src/playground/render-gui.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

var onClickLogo = function onClickLogo() {
  window.location = 'https://scratch.mit.edu';
};

var handleTelemetryModalCancel = function handleTelemetryModalCancel() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
    'User canceled telemetry modal'
  );
};

var handleTelemetryModalOptIn = function handleTelemetryModalOptIn() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
    'User opted into telemetry'
  );
};

var handleTelemetryModalOptOut = function handleTelemetryModalOptOut() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
    'User opted out of telemetry'
  );
};

__webpack_exports__["default"] = (function(appTarget) {

  _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
    .setAppElement(appTarget);

  var WrappedGui = Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(
    _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__["default"],
    _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
  )(
    _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
  );

  var backpackHostMatches =
    window.location.href.match(/[?&]backpack_host=([^&]*)&?/);

  var backpackHost =
    backpackHostMatches ? backpackHostMatches[1] : null;

  var scratchDesktopMatches =
    window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);

  var simulateScratchDesktop;

  if (scratchDesktopMatches) {
    try {
      simulateScratchDesktop =
        JSON.parse(scratchDesktopMatches[1]);
    } catch (_unused) {
      simulateScratchDesktop =
        scratchDesktopMatches[1];
    }
  }

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(

    simulateScratchDesktop
      ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          WrappedGui,
          {
            canEditTitle: true,
            isScratchDesktop: true,
            showTelemetryModal: true,
            canSave: false,
            onTelemetryModalCancel:
              handleTelemetryModalCancel,
            onTelemetryModalOptIn:
              handleTelemetryModalOptIn,
            onTelemetryModalOptOut:
              handleTelemetryModalOptOut
          }
        )

      : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          WrappedGui,
          {
            canEditTitle: true,
            backpackVisible: true,
            showComingSoon: true,
            backpackHost: backpackHost,
            canSave: false,
            onClickLogo: onClickLogo
          }
        ),

    appTarget
  );
});

});

/***/ })

}]);
