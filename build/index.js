/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */




/**
 * Internal dependencies
 */

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

const setBackgroundControls = wp.compose.createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    function onSelectMedia(image) {
      let targetMediaUploadBox = document.querySelector('.tsbMediaUploadBox');
      let targetMediaImageBox = document.querySelector('.tsbMediaImageBox');
      targetMediaUploadBox.classList.add('tsbMediaIdSet');
      targetMediaUploadBox.classList.remove('tsbNoMediaIdSet');
      targetMediaImageBox.classList.add('tsbMediaIdSet');
      targetMediaImageBox.classList.remove('tsbNoMediaIdSet');
      props.setAttributes({
        tsbBackgroundMediaId: image.id,
        tsbBackgroundMediaUrl: image.url
      });
    }
    function deleteSelect() {
      props.setAttributes({
        tsbBackgroundMediaUrl: '',
        tsbBackgroundMediaId: ''
      });
    }
    function onChangeMedia() {
      let targetMediaUploadBox = document.querySelector('.tsbMediaUploadBox');
      let targetMediaImageBox = document.querySelector('.tsbMediaImageBox');
      let targetCancelButton = document.querySelector('.tsbButtonCancelChanging');
      targetMediaUploadBox.classList.remove('tsbMediaIdSet');
      targetMediaUploadBox.classList.add('tsbNoMediaIdSet');
      targetMediaImageBox.classList.remove('tsbMediaIdSet');
      targetMediaImageBox.classList.add('tsbNoMediaIdSet');
      targetCancelButton.classList.remove('tsbButtonCancelCahngingUnabalable');
      targetCancelButton.classList.add('tsbButtonCancelCahngingAbalable');
    }
    function onCancelChanging() {
      let targetMediaUploadBox = document.querySelector('.tsbMediaUploadBox');
      let targetMediaImageBox = document.querySelector('.tsbMediaImageBox');
      targetMediaUploadBox.classList.add('tsbMediaIdSet');
      targetMediaUploadBox.classList.remove('tsbNoMediaIdSet');
      targetMediaImageBox.classList.add('tsbMediaIdSet');
      targetMediaImageBox.classList.remove('tsbNoMediaIdSet');
    }
    function mediaPlaceHolderRender() {
      return wp.element.createElement('div', {
        className: props.attributes.tsbBackgroundMediaId ? 'tsbMediaIdSet tsbMediaUploadBox' : 'tsbNoMediaIdSet tsbMediaUploadBox'
      }, wp.element.createElement(wp.blockEditor.MediaPlaceholder, props.attributes.tsbBackgroundMediaId ? {
        value: props.attributes.tsbBackgroundMediaId,
        onSelect: onSelectMedia
      } : {
        onSelect: onSelectMedia
      }), wp.element.createElement(wp.components.ButtonGroup, {}), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel changing', 'tantive-set-background'),
        isSmall: true,
        className: 'tsbButtonCancelChanging tsbButtonCancelCahngingUnabalable',
        onClick: onCancelChanging
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel changing', 'tantive-set-background')));
    }
    function backgroundAttributeBackgroundImageRender() {
      return wp.element.createElement('div', {}, wp.element.createElement('img', {
        src: props.attributes.tsbBackgroundMediaUrl
      }), wp.element.createElement(wp.components.ButtonGroup, {}, wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change', 'tantive-set-background'),
        isSmall: true,
        onClick: onChangeMedia
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete', 'tantive-set-background'),
        isSmall: true,
        onClick: deleteSelect
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete', 'tantive-set-background'))));
    }
    function onClickBackgroundSetAttr(attr, value) {
      const dynamicAttribute = attr;
      const dynamicAttributes = {
        [attr]: value
      };
      props.setAttributes(dynamicAttributes);
    }
    function backgroundAttributeBackgroundRepeat() {
      return wp.element.createElement(wp.components.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('repeat', 'tantive-set-background'),
        initialOpen: false
      }, wp.element.createElement(wp.components.ButtonGroup, {}, wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('x-Direction', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundRepeat == 'repeat-x',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundRepeat', 'repeat-x')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('x-Direction', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('y-Direction', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundRepeat == 'repeat-y',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundRepeat', 'repeat-y')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('y-Direction', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('repeat', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundRepeat == 'repeat',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundRepeat', 'repeat')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('repeat', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('no repeat', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundRepeat == 'no-repeat',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundRepeat', 'no-repeat')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('no repeat', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('reset repeat', 'tantive-set-background'),
        isSmall: true,
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundRepeat', '')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('reset', 'tantive-set-background'))));
    }
    function backgroundAttributeBackgroundAttachment() {
      return wp.element.createElement(wp.components.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('attachment', 'tantive-set-background'),
        initialOpen: false
      }, wp.element.createElement(wp.components.ButtonGroup, {}, wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('scroll', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundAttachment == 'scroll',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundAttachment', 'scroll')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('scroll', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('fixed', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundAttachment == 'fixed',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundAttachment', 'fixed')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('fixed', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('local', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundAttachment == 'local',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundAttachment', 'local')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('local', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('reset', 'tantive-set-background'),
        isSmall: true,
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundAttachment', '')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('reset', 'tantive-set-background'))));
    }
    function backgruondAttributeBackgroundPositionX() {
      return wp.element.createElement(wp.components.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('position-x', 'tantive-set-background'),
        initialOpen: false
      }, wp.element.createElement(wp.components.ButtonGroup, {}, wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('positionXCenter', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundPositionX == 'center',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundPositionX', 'center')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('center', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('positionXLeft', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundPositionX == 'left',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundPositionX', 'left')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('left', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('positionXRight', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundPositionX == 'right',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundPositionX', 'right')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('right', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('reset', 'tantive-set-background'),
        isSmall: true,
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundPositionX', '')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('reset', 'tantive-set-background'))));
    }
    function backgroundAttributeBackgroundPositionY() {
      return wp.element.createElement(wp.components.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('position-y', 'tantive-set-background'),
        initialOpen: false
      }, wp.element.createElement(wp.components.ButtonGroup, {}, wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('positionYCenter', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundPositionY == 'center',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundPositionY', 'center')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('center', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('positionYTop', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundPositionY == 'top',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundPositionY', 'top')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('top', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('positionYbottom', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundPositionY == 'bottom',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundPositionY', 'bottom')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('bottom', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('reset', 'tantive-set-background'),
        isSmall: true,
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundPositionY', '')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('reset', 'tantive-set-background'))));
    }
    function backgroundAttributeBackgroundSize() {
      return wp.element.createElement(wp.components.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('backgroundSize', 'tantive-set-background'),
        initialOpen: false
      }, wp.element.createElement(wp.components.ButtonGroup, {}, wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('auto', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundSize == 'auto',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundSize', 'auto')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('auto', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('cover', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundSize == 'cover',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundSize', 'cover')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('cover', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('contain', 'tantive-set-background'),
        isSmall: true,
        isPressed: props.attributes.tsbBackgroundSize == 'contain',
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundSize', 'contain')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('contain', 'tantive-set-background')), wp.element.createElement(wp.components.Button, {
        value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('reset', 'tantive-set-background'),
        isSmall: true,
        onClick: () => onClickBackgroundSetAttr('tsbBackgroundSize', '')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('reset', 'tantive-set-background'))));
    }
    function backgroundAttributesRender() {
      return wp.element.createElement('div', {
        className: props.attributes.tsbBackgroundMediaId ? 'tsbMediaIdSet tsbMediaImageBox' : 'tsbNoMediaIdSet tsbMediaImageBox'
      }, backgroundAttributeBackgroundImageRender(), backgroundAttributeBackgroundRepeat(), backgroundAttributeBackgroundAttachment(), backgruondAttributeBackgroundPositionX(), backgroundAttributeBackgroundPositionY(), backgroundAttributeBackgroundSize());
    }
    function mediaUploadRender() {
      return wp.element.createElement('div', {}, mediaPlaceHolderRender(), backgroundAttributesRender());
    }
    const controlBox = wp.element.createElement(wp.components.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Setting background', 'tantive-set-background'),
      initialOpen: false
    }, wp.element.createElement(wp.blockEditor.MediaUpload, {
      type: 'image',
      value: props.attributes.tsbBackgroundMediaId,
      render: ({
        open
      }) => {
        return mediaUploadRender();
      }
    }));
    return wp.element.createElement(wp.element.Fragment, {}, wp.element.createElement(BlockEdit, props), wp.element.createElement(wp.blockEditor.InspectorControls, {
      initialOpen: false
    }, controlBox));
  };
}, 'setBackgroundControls');
wp.hooks.addFilter('editor.BlockEdit', 'tantive-set-background/add-background', setBackgroundControls);
function addAttribute(settings, name) {
  settings.attributes = {
    ...settings.attributes,
    tsbBackgroundMediaUrl: {
      type: 'string',
      default: ''
    },
    tsbBackgroundMediaId: {
      type: 'number',
      default: null
    },
    tsbBackgroundRepeat: {
      type: 'string',
      default: ''
    },
    tsbBackgroundAttachment: {
      type: 'string',
      default: ''
    },
    tsbBackgroundPositionX: {
      type: 'string',
      default: ''
    },
    tsbBackgroundPositionY: {
      type: 'string',
      default: ''
    },
    tsbBackgroundSize: {
      type: 'string',
      default: ''
    }
  };
  return settings;
}
wp.hooks.addFilter('blocks.registerBlockType', 'tantive-set-background/add-background', addAttribute);
function addBackgroundStyle(props, blockType, attributes) {
  if (attributes.tsbBackgroundMediaUrl != '') {
    let extraStyle = {
      'background-image': 'url(' + attributes.tsbBackgroundMediaUrl + ')'
    };
    Object.assign(props, {
      style: {
        ...props.style,
        ...extraStyle
      }
    });
    if (attributes.tsbBackgroundRepeat != '') {
      extraStyle = {
        'background-repeat': attributes.tsbBackgroundRepeat
      };
      Object.assign(props, {
        style: {
          ...props.style,
          ...extraStyle
        }
      });
    }
    if (attributes.tsbBackgroundAttachment != '') {
      extraStyle = {
        'background-attachment': attributes.tsbBackgroundAttachment
      };
      Object.assign(props, {
        style: {
          ...props.style,
          ...extraStyle
        }
      });
    }
    if (attributes.tsbBackgroundPositionX != '') {
      extraStyle = {
        'background-position-x': attributes.tsbBackgroundPositionX
      };
      Object.assign(props, {
        style: {
          ...props.style,
          ...extraStyle
        }
      });
    }
    if (attributes.tsbBackgroundPositionY != '') {
      extraStyle = {
        'background-position-y': attributes.tsbBackgroundPositionY
      };
      Object.assign(props, {
        style: {
          ...props.style,
          ...extraStyle
        }
      });
    }
    if (attributes.tsbBackgroundSize != '') {
      extraStyle = {
        'background-size': attributes.tsbBackgroundSize
      };
      Object.assign(props, {
        style: {
          ...props.style,
          ...extraStyle
        }
      });
    }
  }
  return props;
}
wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'tantive-set-background/add-background', addBackgroundStyle);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktantive_set_background"] = self["webpackChunktantive_set_background"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map