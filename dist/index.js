"use strict";

exports.__esModule = true;
exports.neo = void 0;

var _styledComponents = require("styled-components");

var isObject = function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};

var deepFreeze = function deepFreeze(obj) {
  Object.keys(obj).forEach(function (key) {
    return key && isObject(obj[key]) && Object.freeze(obj[key]);
  });
  return Object.freeze(obj);
};

var neo = deepFreeze({
  global: {
    colors: {
      background: '#ffffff',
      brand: '#0096D6',
      control: {
        dark: '#00A8F0',
        light: '#0096D6'
      },
      focus: '#99d5ef',
      'neutral-1': '#006996',
      'neutral-2': '#A65336',
      'neutral-3': '#A69136',
      'neutral-4': '#774677',
      'accent-1': '#E6734B',
      'accent-2': '#E6C84B',
      'accent-3': '#915591',
      'status-critical': '#F04B37',
      'status-warning': '#F0AA3C',
      'status-ok': '#509137',
      'status-unknown': '#848484',
      'status-disabled': '#848484',
      'dark-1': '#000001',
      'dark-2': '#676767',
      'light-1': '#F2F2F2',
      'light-2': '#E8E8E8',
      'light-3': '#CCCCCC'
    },
    font: {
      family: "'Open Sans', Arial, sans-serif",
      face: undefined
    }
  },
  anchor: {
    color: {
      dark: '#00A8F0',
      light: '#2883d7'
    }
  }
});
exports.neo = neo;