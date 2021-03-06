var _templateObject, _templateObject2;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { rgba } from 'polished';
import { css } from 'styled-components';
import { add as addGoogleFont } from 'google-fonts';
import { NeoComponents } from 'mnet-icons';
import { deepFreeze } from 'mnet-ui-base/utils/object';
import { normalizeColor } from 'mnet-ui-base/utils/colors';
import { parseMetricToNum } from 'mnet-ui-base/utils/mixins';
var Up = NeoComponents.Up,
    Down = NeoComponents.Down,
    Close = NeoComponents.Close,
    LongArrowDown = NeoComponents.LongArrowDown,
    TickCircle = NeoComponents.TickCircle,
    Error = NeoComponents.Error;
addGoogleFont({
  'Open Sans': ['400', '600', '700']
});
var brandColor = '#E15151';
var accentColors = ['#38C18B', '#8F94A6', '#739FFC', '#439ADC'];
var neutralColors = ['#519bff', '#99742E', '#00739D', '#A2423D'];
var statusColors = {
  critical: '#e35e59',
  error: '#FFECEC',
  warning: '#AB7113',
  ok: '#DFFFF2',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC'
};
var darkColors = ['#29313D', '#2F3A4A', '#575F7D', '#898EA2', '#BABDCA', '#DEDEDE'];
var lightColors = ['#fbfbfb', '#f5f6f8', '#E7EAF1', '#e1e3ef', '#dfdfdf', '#DADADA', '#F5F7FD'];
var focusColor = '#B1C2FE';
var colors = {
  active: '#FFFDE3',
  'background-back': {
    dark: '#33333308',
    light: '#F8FAFE'
  },
  'background-front': {
    dark: '#444444',
    light: '#FFFFFF'
  },
  'background-contrast': {
    dark: '#33333308',
    light: '#EEEEEE'
  },
  'active-background': 'background-contrast',
  'active-text': 'text-strong',
  black: '#000000',
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: '#DEDEDE'
  },
  brand: brandColor,
  control: {
    dark: 'accent-3',
    light: 'accent-3'
  },
  focus: focusColor,
  'graph-0': 'accent-1',
  'graph-1': 'neutral-1',
  'graph-2': 'neutral-2',
  'graph-3': 'neutral-3',
  'graph-4': 'neutral-4',
  placeholder: 'dark-5',
  selected: 'light-7',
  text: {
    dark: '#f8f8f8',
    light: '#898EA2'
  },
  'text-strong': {
    dark: '#FFFFFF',
    light: '#575F7D'
  },
  'text-weak': {
    dark: '#CCCCCC',
    light: '#898EA2'
  },
  'text-xweak': {
    dark: '#BBBBBB',
    light: '#BABDCA'
  },
  icon: {
    dark: '#f8f8f8',
    light: '#8F94A6'
  },
  'selected-background': 'brand',
  'selected-text': 'text-strong',
  white: '#FFFFFF'
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors[prefix + "-" + (index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors["status-" + color] = statusColors[color];
});
export var generate = function generate(baseSpacing, scale) {
  if (baseSpacing === void 0) {
    baseSpacing = 24;
  }

  if (scale === void 0) {
    scale = 6;
  }

  // 24
  var baseFontSize = baseSpacing * 0.75; // 12

  var fontScale = baseSpacing / scale; // 16

  var fontSizing = function fontSizing(factor) {
    return {
      size: baseFontSize + factor * fontScale + "px",
      height: baseSpacing + factor * fontScale + "px",
      // maxWidth chosen to be ~50 characters wide
      // see: https://ux.stackexchange.com/a/34125
      maxWidth: baseSpacing * (baseFontSize + factor * fontScale) + "px"
    };
  };

  var borderWidth = 0;
  var controlBorderWidth = 1;
  var result = {
    global: {
      active: {
        background: {
          color: 'active',
          opacity: 'medium'
        },
        color: {
          dark: 'white',
          light: '#898EA2'
        }
      },
      animation: {
        duration: '1s',
        jiggle: {
          duration: '0.1s'
        }
      },
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: baseSpacing / 6 + "px",
        // 4
        large: baseSpacing / 2 + "px",
        // 12
        xlarge: baseSpacing + "px" // 24

      },
      breakpoints: {
        small: {
          value: baseSpacing * 32,
          // 768
          borderSize: {
            xsmall: '1px',
            small: '2px',
            medium: baseSpacing / 6 + "px",
            // 4
            large: baseSpacing / 4 + "px",
            // 6
            xlarge: baseSpacing / 2 + "px" // 12

          },
          edgeSize: {
            none: '0px',
            hair: '1px',
            // for Chart
            xxsmall: '2px',
            xsmall: baseSpacing / 8 + "px",
            // 3
            small: baseSpacing / 4 + "px",
            // 6
            medium: baseSpacing / 2 + "px",
            // 12
            large: baseSpacing + "px",
            // 24
            xlarge: baseSpacing * 2 + "px" // 48

          },
          size: {
            xxsmall: baseSpacing + "px",
            // 24
            xsmall: baseSpacing * 2 + "px",
            // 48
            small: baseSpacing * 4 + "px",
            // 96
            medium: baseSpacing * 8 + "px",
            // 192
            large: baseSpacing * 16 + "px",
            // 384
            xlarge: baseSpacing * 32 + "px",
            // 768
            full: '100%'
          }
        },
        medium: {
          value: baseSpacing * 64 // 1536

        },
        large: {} // anything above 'medium'

      },
      // Breakpoints used at Server Side Rendering for the initial rendering
      // These values correspond to the theme breakpoints
      deviceBreakpoints: {
        phone: 'small',
        tablet: 'medium',
        computer: 'large'
      },
      colors: colors,
      control: {
        border: {
          width: controlBorderWidth + "px",
          radius: '4px',
          color: 'border'
        },
        disabled: {
          opacity: 0.3
        }
      },
      // The time to wait after the user stopped typing, measured in ms.
      debounceDelay: 300,
      drop: {
        background: '#ffffff',
        border: {
          radius: '4px'
        },
        zIndex: '20',
        marginTop: '4px',
        extend: {
          'box-shadow': '0 1px 7px 3px rgba(0,0,0,0.15)' // bottom: `${1.5 * baseSpacing}px`,

        }
      },
      edgeSize: {
        none: '0px',
        hair: '1px',
        // for Chart
        xxsmall: baseSpacing / (1.618 * 8) + "px",
        // 3
        xsmall: baseSpacing / (1.618 * 4) + "px",
        // 6
        small: baseSpacing / (1.618 * 2) + "px",
        // 12
        medium: baseSpacing / 1.618 + "px",
        // 24
        large: baseSpacing + "px",
        // 48
        xlarge: baseSpacing * 1.618 + "px",
        // 96
        responsiveBreakpoint: 'small'
      },
      elevation: {
        light: {
          none: 'none',
          xsmall: '0px 1px 2px rgba(0, 0, 0, 0.02)',
          small: '0px 1px 5px 0px rgba(217,217,217,1)',
          medium: '0px 4px 8px rgba(0, 0, 0, 0.02)',
          large: '0px 8px 16px rgba(0, 0, 0, 0.02)',
          xlarge: '0px 12px 24px rgba(0, 0, 0, 0.02)'
        },
        dark: {
          none: 'none',
          xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
          small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
          medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
          large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
          xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)'
        }
      },
      focus: {
        // shadow or outline are required for accessibility
        border: {
          // remove to only have shadow
          color: 'focus'
        },
        // outline: { color: undefined, size: undefined },
        shadow: {
          color: 'focus',
          size: '1px'
        }
      },
      font: _extends({}, fontSizing(0), {
        // face: undefined,
        family: "'Open Sans', sans-serif"
      }),
      hover: {
        background: {
          color: 'active',
          opacity: 'medium'
        },
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      input: {
        padding: {
          horizontal: parseMetricToNum(baseSpacing / 2 + "px") - parseMetricToNum(controlBorderWidth + "px") + "px",
          vertical: parseMetricToNum(baseSpacing / 1.418 + "px") - parseMetricToNum(controlBorderWidth + "px") + "px"
        },
        font: {
          // size: undefined,
          // height: undefined,
          weight: 600
        } // deprecate in v3
        // weight: undefined,

      },
      opacity: {
        strong: 0.8,
        medium: 0.4,
        weak: 0.1
      },
      selected: {
        background: 'light-7',
        color: 'dark-3'
      },
      spacing: baseSpacing + "px",
      size: {
        xxsmall: baseSpacing * 2.2 + "px",
        // 48
        xsmall: baseSpacing * 4 + "px",
        // 96
        small: baseSpacing * 8 + "px",
        // 192
        medium: baseSpacing * 16 + "px",
        // 384
        large: baseSpacing * 32 + "px",
        // 768
        xlarge: baseSpacing * 48 + "px",
        // 1152
        xxlarge: baseSpacing * 64 + "px",
        // 1536
        full: '100%'
      }
    },
    accordion: {
      panel: {// border: {
        //   side: 'bottom',
        //   color: 'border',
        // },
      },
      border: {
        side: 'bottom',
        color: 'border'
      },
      heading: {
        level: '4' // level ranges from 1-6
        // margin: undefined

      },
      hover: {
        color: {
          dark: 'light-4',
          light: 'dark-3'
        },
        // deprecated
        heading: {
          color: {
            dark: 'light-4',
            light: 'dark-3'
          }
        }
      }
    },
    anchor: {
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: 'brand',
        light: 'brand'
      },
      hover: {
        textDecoration: 'underline' // fontWeight: undefined,
        // extend: undefined,

      } // extend: undefined,

    },
    avatar: {
      // extend: undefined,
      size: {
        xsmall: baseSpacing * 0.75 + "px",
        small: baseSpacing + "px",
        medium: baseSpacing * 2 + "px",
        // default 48
        large: baseSpacing * 3 + "px",
        xlarge: baseSpacing * 4 + "px"
      },
      text: {// fontWeight: undefined,
        // extend: undefined
      }
    },
    box: {
      responsiveBreakpoint: 'small' // when we switch rows to columns
      // extend: undefined,

    },
    button: {
      size: {
        small: {
          border: {
            radius: baseSpacing * 0.25 + "px" // 4px

          } // pad: {
          //   vertical: `${baseSpacing / (1.618 * 2) - borderWidth}px`, // 4px
          //   horizontal: `${baseSpacing - borderWidth * 2}px`, // 20px,
          // },

        },
        medium: {
          border: {
            radius: baseSpacing * 0.312 + "px" // 5px

          } // pad: {
          //   vertical: `${baseSpacing / 1.618 - borderWidth}px`,
          //   horizontal: `${baseSpacing - borderWidth * 1.4}px`,
          // },

        },
        large: {
          border: {
            radius: baseSpacing * 0.4 + "px" // 24px

          } // pad: {
          //   vertical: `${baseSpacing / (1.618 / 2) + borderWidth}px`, // 8px
          //   horizontal: `${baseSpacing * 2.8 - borderWidth}px`, // 32px,
          // },

        }
      },
      border: {
        // color: { dark: undefined, light: undefined }
        width: borderWidth + "px",
        radius: baseSpacing * 0.312 + "px"
      },
      color: {
        dark: undefined,
        light: undefined
      },
      "default": {
        background: 'transparent',
        border: 'none',
        // color: undefined,
        padding: {
          vertical: '0',
          horizontal: '0'
        } // extend: undefined,

      },
      primary: {
        background: 'accent-1',
        border: {
          color: {
            dark: 'accent-1',
            light: 'accent-1'
          }
        },
        color: 'white' // padding: {
        //   vertical: undefined,
        //   horizontal: undefined,
        // },
        // extend: undefined,

      },
      secondary: {
        background: 'accent-2',
        border: {
          color: {
            dark: 'accent-2',
            light: 'accent-2'
          }
        },
        color: 'white' // padding: {
        //   vertical: undefined,
        //   horizontal: undefined,
        // },
        // extend: undefined,

      },
      tertiary: {
        background: 'light-3',
        border: {
          color: {
            dark: 'light-3',
            light: 'light-3'
          }
        } // color: 'white',
        // padding: {
        //   vertical: undefined,
        //   horizontal: undefined,
        // },
        // extend: undefined,

      },
      active: {
        background: undefined,
        border: {
          color: {
            dark: 'accent-3',
            light: 'accent-3'
          },
          width: borderWidth + "px",
          radius: baseSpacing * 0.2 + "px"
        },
        color: undefined //   extend: undefined,
        //   default: {},
        //   primary: {},
        //   secondary: {},

      },
      disabled: {
        background: undefined,
        border: undefined,
        color: undefined,
        opacity: 0.6 //   extend: undefined,
        //   default: {},
        //   primary: {},
        //   secondary: {},

      },
      // hover: {
      //   background: undefined,
      //   border: undefined,
      //   color: undefined},
      //   extend: undefined,
      //   default: {},
      //   primary: {},
      //   secondary: {},
      // },
      padding: {
        vertical: baseSpacing / 1.618 - borderWidth + "px",
        horizontal: baseSpacing - borderWidth * 1.4 + "px"
      },
      transition: {
        timing: 'ease-in-out',
        duration: 0.1,
        properties: ['color', 'background-color', 'border-color', 'box-shadow']
      }
    },
    calendar: {
      // daySize must align with global.size
      small: {
        fontSize: baseFontSize - fontScale + "px",
        lineHeight: 1.375,
        daySize: baseSpacing * 8 / 7 + "px",
        slideDuration: '0.2s'
      },
      medium: {
        fontSize: baseFontSize + "px",
        lineHeight: 1.45,
        daySize: baseSpacing * 16 / 7 + "px",
        slideDuration: '0.5s'
      },
      large: {
        fontSize: baseFontSize + 3 * fontScale + "px",
        lineHeight: 1.11,
        daySize: baseSpacing * 32 / 7 + "px",
        slideDuration: '0.8s'
      },
      heading: {
        level: '4'
      } // level ranges from 1-6

    },
    carousel: {
      animation: {
        duration: 1000
      },
      disabled: {
        icons: {// color: { dark: undefined, light: undefined },
        }
      }
    },
    checkBox: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '2px'
      },
      check: {
        // extend: undefined,
        radius: '4px',
        thickness: '4px'
      },
      // color: { dark: undefined, light: undefined },
      // extend: undefined,
      // gap: undefined
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      icon: {// size: undefined,
        // extend: undefined,
      },
      icons: {// checked: undefined,
        // indeterminate: undefined,
      },
      size: baseSpacing + "px",
      toggle: {
        background: {
          light: 'accent-2'
        },
        size: baseSpacing * 2.3125 + "px",
        color: {
          dark: '#d9d9d9',
          light: 'white'
        },
        knob: {
          background: {
            light: 'white'
          },
          color: {
            light: 'white'
          },
          extend: {
            top: '2px',
            left: '2px',
            width: baseSpacing * 0.937 + "px",
            height: baseSpacing * 0.937 + "px",
            background: colors.white
          }
        },
        radius: baseSpacing + "px",
        extend: function extend(_ref) {
          var checked = _ref.checked;
          return {
            height: baseSpacing * 1.187 + "px",
            border: 'none',
            background: checked ? accentColors[0] : accentColors[1]
          };
        }
      }
    },
    clock: {
      analog: {
        // extend: undefined,
        hour: {
          color: {
            dark: 'light-2',
            light: 'dark-3'
          },
          width: baseSpacing / 3 + "px",
          size: baseSpacing + "px",
          shape: 'round'
        },
        minute: {
          color: {
            dark: 'light-4',
            light: 'dark-3'
          },
          width: baseSpacing / 6 + "px",
          size: Math.round(baseSpacing / 2) + "px",
          shape: 'round'
        },
        second: {
          color: {
            dark: 'accent-1',
            light: 'accent-1'
          },
          width: baseSpacing / 8 + "px",
          size: Math.round(baseSpacing / 2.666) + "px",
          shape: 'round'
        },
        size: {
          small: baseSpacing * 3 + "px",
          medium: baseSpacing * 4 + "px",
          large: baseSpacing * 6 + "px",
          xlarge: baseSpacing * 9 + "px",
          huge: baseSpacing * 12 + "px"
        }
      },
      digital: {
        text: {
          xsmall: {
            size: baseFontSize - 2 * fontScale + "px",
            height: 1.5
          },
          small: {
            size: baseFontSize - fontScale + "px",
            height: 1.43
          },
          medium: {
            size: baseFontSize + "px",
            height: 1.375
          },
          large: {
            size: baseFontSize + fontScale + "px",
            height: 1.167
          },
          xlarge: {
            size: baseFontSize + 2 * fontScale + "px",
            height: 1.1875
          },
          xxlarge: {
            size: baseFontSize + 4 * fontScale + "px",
            height: 1.125
          }
        }
      }
    },
    collapsible: {
      minSpeed: 200,
      baseline: 500
    },
    dataTable: {
      groupHeader: {
        background: {
          dark: 'dark-2',
          light: 'light-2'
        },
        border: {
          side: 'bottom',
          size: 'xsmall'
        },
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        }
      },
      groupEnd: {
        border: {
          side: 'bottom',
          size: 'xsmall'
        }
      },
      header: {},
      primary: {
        weight: 'bold'
      },
      resize: {
        border: {
          color: 'border',
          side: 'end'
        }
      }
    },
    diagram: {
      // extend: undefined,
      line: {
        color: 'graph-0'
      }
    },
    // drop: {
    //   extend: undefined,
    //   maxHeight: undefined,
    // },
    formField: {
      border: {
        color: 'border',
        error: {
          color: statusColors.critical
        },
        position: 'inner',
        side: 'all',
        size: 'xsmall'
      },
      content: {
        pad: 'small'
      },
      disabled: {
        background: {
          color: 'status-disabled',
          opacity: 'medium'
        } // border: {
        //   color: undefined,
        // },
        // label: {
        //   color: undefined,
        // },

      },
      // focus: {
      //   background: {
      //     color: undefined,
      //   },
      //   border: {
      //     color: undefined,
      //   },
      // },
      error: {
        color: 'status-critical',
        margin: {
          vertical: 'xsmall',
          horizontal: 'none'
        } // background: undefined,

      },
      // extend: undefined,
      help: {
        color: 'dark-3',
        margin: {
          start: 'small'
        }
      },
      info: {
        color: 'text-xweak',
        margin: {
          vertical: '0',
          left: 'medium'
        },
        extend: {
          position: 'relative',
          top: '3px'
        }
      },
      label: {
        margin: {
          vertical: 'large',
          horizontal: '0'
        }
      },
      margin: {
        bottom: 'small'
      },
      postfix: {
        color: 'white',
        background: 'background-contrast',
        justify: 'center',
        pad: {
          horizontal: 'medium',
          vertical: 'medium'
        }
      },
      prefix: {
        color: 'white',
        background: 'background-contrast',
        justify: 'center',
        pad: {
          horizontal: 'medium',
          vertical: 'medium'
        }
      },
      // round: undefined,
      extend: {
        button: {
          flex: 1,
          border: 'none'
        },
        input: {
          border: 'none'
        }
      },
      round: 'small'
    },
    mnet: {
      global: css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n        :focus {\n          outline: none;\n        }\n      "])))
    },
    heading: {
      font: {// family: undefined
      },
      level: {
        1: {
          font: {// family: undefined,
            // weight: undefined,
          },
          xsmall: _extends({}, fontSizing(2)),
          small: _extends({}, fontSizing(4)),
          medium: _extends({}, fontSizing(8)),
          large: _extends({}, fontSizing(16)),
          xlarge: _extends({}, fontSizing(24))
        },
        2: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(2)),
          medium: _extends({}, fontSizing(4)),
          large: _extends({}, fontSizing(8)),
          xlarge: _extends({}, fontSizing(12))
        },
        3: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(1)),
          medium: _extends({}, fontSizing(2)),
          large: _extends({}, fontSizing(4)),
          xlarge: _extends({}, fontSizing(6))
        },
        4: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(0)),
          medium: _extends({}, fontSizing(0)),
          large: _extends({}, fontSizing(0)),
          xlarge: _extends({}, fontSizing(0))
        },
        5: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(-0.5)),
          medium: _extends({}, fontSizing(-0.5)),
          large: _extends({}, fontSizing(-0.5)),
          xlarge: _extends({}, fontSizing(-0.5))
        },
        6: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(-1)),
          medium: _extends({}, fontSizing(-1)),
          large: _extends({}, fontSizing(-1)),
          xlarge: _extends({}, fontSizing(-1))
        }
      },
      responsiveBreakpoint: 'small',
      // when we scale the font size down
      weight: 700
    },
    layer: {
      background: 'white',
      border: {
        radius: '4px'
      },
      container: {
        zIndex: '15'
      },
      // extend: undefined,
      overlay: {
        background: 'rgba(0, 0, 0, 0.5)'
      },
      responsiveBreakpoint: 'small',
      // when Layer takes over the full screen
      zIndex: '10'
    },
    list: {
      item: {
        // background: undefined,
        border: 'horizontal',
        pad: {
          horizontal: 'medium',
          vertical: 'small'
        } // extend: undefined,

      } // extend: undefined,

    },
    maskedInput: {// extend: undefined,
      // disabled: { opacity: undefined },
    },
    menu: {// background: undefined,
      // extend: undefined,
    },
    meter: {
      color: 'graph-0' // colors: [] || colors: ['graph-0', 'graph-1', 'graph-2', 'graph-3'],
      // extend: undefined,

    },
    modalpopup: {
      container: {
        width: 'large'
      },
      title: {
        wrapper: {
          pad: 'large',
          border: {
            side: 'bottom',
            color: 'dark-6'
          }
        },
        text: {
          level: 3,
          size: 'small',
          color: 'dark-3'
        }
      },
      message: {
        wrapper: {
          pad: 'large'
        },
        text: {
          size: 'medium',
          color: 'dark-3',
          style: {
            lineHeight: baseSpacing * 1.25 + "px"
          }
        }
      },
      buttons: {
        wrapper: {
          pad: {
            horizontal: 'large',
            bottom: 'large',
            top: 'medium'
          },
          direction: 'row'
        },
        button: {
          margin: {
            right: 'medium'
          }
        }
      }
    },
    multiselect: {
      option: {
        width: 'full',
        direction: 'row',
        justify: 'between',
        pad: {
          horizontal: 'medium'
        }
      },
      checkbox: {
        type: 'check',
        showUnSelected: false,
        box: {
          margin: {
            right: 'medium' // extend: undefined,

          }
        },
        checkmark: {
          size: baseSpacing * 1.2 + "px",
          color: 'white'
        },
        check: {
          height: baseSpacing * 1.2 + "px",
          width: baseSpacing * 1.2 + "px",
          margin: 'auto',
          round: 'small',
          align: 'center',
          // background: 'white',
          background: 'inherit',
          border: {
            color: 'light-6'
          },
          extend: function extend(props) {
            var getBackground = function getBackground() {
              switch (props.isExcluded) {
                case null:
                  return accentColors[2];

                case false:
                  return '#38C18B';

                case true:
                  return '#FC564F';

                default:
                  return accentColors[2];
              }
            };

            return {
              background: props.active ? getBackground() : 'white',
              'border-color': props.active ? 'transparent' : lightColors[5]
            };
          }
        },
        include: {
          background: 'accent-1',
          color: 'white',
          check: 'check'
        },
        exclude: {
          background: 'red',
          color: 'white',
          check: 'close'
        }
      },
      chips: {
        wrapper: {
          pad: 'medium',
          direction: 'row',
          extend: function extend(props) {
            return {
              padding: props.twoColumnLayout ? 0 : baseSpacing / 1.618 + "px",
              'border-bottom': props.twoColumnLayout ? 'none' : '1px solid #D9DBE5'
            };
          }
        },
        option: {
          background: 'light-3',
          round: 'small',
          pad: {
            vertical: 'small',
            horizontal: 'medium'
          },
          margin: 'small',
          direction: 'row',
          align: 'center',
          extend: function extend(props) {
            return {
              width: props.twoColumnLayout ? '100%' : 'auto',
              margin: props.twoColumnLayout ? 0 : baseSpacing / (1.618 * 2) + "px",
              background: props.twoColumnLayout ? 'white' : lightColors[2],
              padding: props.twoColumnLayout ? baseSpacing / 1.618 + "px" : baseSpacing / (1.618 * 2) + "px " + baseSpacing / 1.618 + "px",
              'border-radius': props.twoColumnLayout ? 0 : baseSpacing / (1.618 * 2) + "px",
              'border-bottom': props.twoColumnLayout ? '1px solid #D9DBE5' : 'none',
              'justify-content': props.twoColumnLayout ? 'space-between' : 'flex-start'
            };
          }
        },
        label: {
          color: 'dark-3',
          size: 'medium',
          weight: 600,
          margin: {
            right: 'small'
          },
          extend: function extend(props) {
            var getTextColor = function getTextColor() {
              switch (props.isExcluded) {
                case false:
                  return '#38C18B';

                case true:
                  return '#FC564F';

                default:
                  return darkColors[2];
              }
            };

            return {
              color: getTextColor()
            };
          }
        },
        icon: {
          size: 'small',
          color: 'dark-3'
        },
        clear: {
          color: 'accent-2',
          size: 'small'
        }
      },
      labelWrap: {
        pad: {
          left: 'medium',
          vertical: 'small'
        }
      },
      controls: {
        label: {
          include: {
            color: 'accent-1'
          },
          exclude: {
            color: 'brand'
          }
        },
        wrapper: {
          pad: 'medium',
          direction: 'row',
          height: {
            min: 'auto'
          } // extend: undefined,

        },
        button: {
          margin: 'small'
        }
      },
      searchbox: {
        container: {
          height: {
            min: 'xxsmall',
            max: 'xxsmall'
          },
          direction: 'row',
          align: 'center',
          background: 'light-2',
          pad: {
            right: 'medium',
            vertical: 'small'
          },
          extend: function extend(props) {
            return {
              background: props.layout === 'double-column' ? 'white' : lightColors[1],
              'flex-direction': props.layout === 'double-column' ? 'row-reverse' : 'row',
              'padding-left': props.layout === 'double-column' ? baseSpacing / 1.618 + "px" : 0,
              'border-bottom': props.layout === 'double-column' ? '1px solid #D9DBE5' : 'none'
            };
          }
        },
        placeholder: {
          color: 'dark-4',
          weight: 600,
          size: 'medium'
        },
        icon: {
          size: 'small',
          color: 'dark-3'
        }
      },
      rightPanel: {
        border: '#D9DBE5',
        incExcHeader: {
          box: {
            direction: 'row',
            justify: 'between',
            pad: 'large',
            background: 'background-back',
            border: {
              side: 'bottom',
              color: '#D9DBE5'
            }
          },
          count: {
            margin: {
              left: 'small'
            },
            background: 'brand',
            round: 'medium',
            pad: {
              horizontal: 'medium'
            },
            justify: 'center'
          },
          text: {
            color: 'accent-2',
            size: 'medium',
            weight: 600
          }
        }
      },
      custom: {
        wrapper: {
          direction: 'row',
          width: 'large'
        },
        textAreaWrap: {
          border: {
            side: 'right'
          },
          pad: 'large',
          fill: true,
          extend: {
            textarea: {
              minHeight: '140px'
            }
          }
        },
        label: {
          weight: 600
        },
        textAreaContainer: {
          width: 'medium',
          height: 'medium',
          minHeight: '140px',
          margin: {
            vertical: 'medium'
          }
        },
        actions: {
          wrapper: {
            direction: 'row',
            height: {
              min: 'auto'
            },
            pad: 'small',
            margin: 'xsmall',
            gap: 'xxsmall'
          }
        }
      },
      icons: {
        include: {
          icon: false
        },
        exclude: {
          icon: false
        }
      },
      includeBtn: {
        primary: true,
        color: 'accent-1',
        showIcon: false
      },
      excludeBtn: {
        primary: true,
        color: 'brand',
        showIcon: false
      },
      container: {
        width: 'large'
      }
    },
    paragraph: {
      small: _extends({}, fontSizing(-1)),
      medium: _extends({}, fontSizing(0)),
      large: _extends({}, fontSizing(1)),
      xlarge: _extends({}, fontSizing(2)),
      xxlarge: _extends({}, fontSizing(4))
    },
    radioButton: {
      border: {
        color: {
          dark: 'dark-6',
          light: 'dark-6'
        },
        width: '3px'
      },
      check: {
        radius: '100%',
        color: {
          dark: 'accent-3',
          light: 'accent-3'
        } // extend: undefined,

      },
      hover: {
        border: {
          color: {
            dark: 'accent-3',
            light: 'accent-3'
          }
        }
      },
      icon: {
        // size: undefined,
        extend: {
          display: 'none'
        }
      },
      icons: {// circle: undefined,
      },
      gap: 'small',
      size: baseSpacing + "px",
      extend: {
        'margin-right': baseSpacing + "px"
      }
    },
    rangeInput: {
      track: {
        height: '4px',
        color: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n          ", ";\n        "])), function (props) {
          return rgba(normalizeColor('border', props.theme), 0.2);
        })
      },
      thumb: {// color: { dark: undefined, light: undefined },
      }
    },
    rangeSelector: {
      background: {
        invert: {
          color: 'light-4'
        }
      } // edge: {
      //   type: undefined,
      // },

    },
    select: {
      background: 'white',
      activeColor: lightColors[4],
      container: {
        extend: function extend(props) {
          return {
            borderColor: normalizeColor('border', props.theme)
          };
        }
      },
      control: {
        // open: undefined,
        extend: {
          border: '1px solid #DEDEDE'
        }
      },
      options: {
        container: {
          align: 'start',
          pad: 'small',
          round: 'false',
          border: {
            side: 'bottom',
            color: '#D9DBE5'
          }
        },
        text: {
          margin: 'small'
        }
      },
      icons: {
        color: 'icon',
        margin: 'none',
        pad: 'small',
        background: 'background-contrast' // extend: {},

      },
      // searchInput: undefined,
      step: 20
    },
    tab: {
      active: {
        color: 'dark-3',
        weight: 600 // background: undefined,

      },
      // background: undefined,
      border: {
        side: 'bottom',
        size: 'medium',
        color: {
          dark: 'brand',
          light: 'white'
        },
        active: {
          color: {
            dark: 'white',
            light: 'accent-3'
          }
        },
        hover: {
          color: {
            dark: 'white',
            light: 'white'
          } // extend: undefined,

        }
      },
      color: 'dark-4',
      // extend: undefined,
      hover: {
        // background: undefined,
        // extend: undefined,
        color: {
          dark: 'white',
          light: 'dark-3'
        }
      },
      margin: {
        top: 'large',
        horizontal: 'small',
        bottom: 'none'
      },
      pad: {
        bottom: 'large'
      }
    },
    tabs: {
      // background: undefined,
      // extend: undefined,
      gap: 'large',
      header: {
        // background: undefined,
        extend: {
          'padding-left': baseSpacing * 1.2 + "px",
          'border-bottom': '1px solid #E8E7E7 '
        }
      },
      panel: {
        extend: {}
      }
    },
    table: {
      header: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'bottom' // verticalAlign: undefined,
        // background: undefined,
        // extend: undefined,

      },
      body: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        } // background: undefined,
        // border: undefined,
        // extend: undefined,

      },
      // row: {
      //   hover: {
      //     background: undefined,
      //     color: undefined,
      //   },
      // },
      footer: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'top' // verticalAlign: undefined,
        // background: undefined,
        // extend: undefined,

      }
    },
    text: {
      xsmall: _extends({}, fontSizing(-1.5)),
      small: _extends({}, fontSizing(-1)),
      medium: _extends({}, fontSizing(0)),
      // 18px
      large: _extends({}, fontSizing(1)),
      // 22px
      xlarge: _extends({}, fontSizing(2)),
      xxlarge: _extends({}, fontSizing(4))
    },
    textArea: {
      extend: {
        border: 'none',
        'box-shadow': 'none'
      } // disabled: { opacity: undefined },

    },
    textInput: {
      // disabled: { opacity: undefined },
      extend: {
        // 'padding-left': `${baseSpacing}px`,
        'box-shadow': 'none'
      }
    },
    pagination: {
      background: 'white',
      round: 'small',
      border: {
        color: 'dark-6'
      },
      pad: 'xlarge',
      active: {
        color: '#e7eaf1'
      },
      icon: {
        bgColor: 'light-2',
        pad: 'xsmall'
      }
    },
    tooptip: {
      background: 'dark-1',
      color: 'white',
      tipSize: '5px',
      round: 'small',
      maxWidth: '20%',
      dropProps: {
        left: 'right'
      },
      pad: {
        horizontal: 'large',
        vertical: 'medium'
      }
    },
    notification: {
      toast: {
        closeIcon: Close,
        position: 'top-right',
        zIndex: 999,
        width: '60%',
        timeout: 2000,
        icon: {
          size: 'xlarge',
          "default": TickCircle,
          ok: TickCircle,
          error: Error
        },
        text: {
          "default": {
            weight: 600
          },
          ok: {
            color: '#38C18B',
            weight: 600,
            margin: {
              horizontal: 'small'
            }
          },
          error: {
            color: '#E9716C',
            weight: 600,
            margin: {
              horizontal: 'small'
            }
          }
        },
        "default": {
          background: 'dark-1',
          // border: {},
          size: 'medium',
          align: 'center',
          direction: 'row',
          gap: 'medium',
          justify: 'between',
          round: 'small',
          elevation: 'medium',
          pad: {
            vertical: 'medium',
            horizontal: 'medium'
          },
          margin: {
            vertical: 'small',
            horizontal: 'large'
          }
        },
        ok: {
          background: 'status-ok' // text: {},

        },
        critical: {
          background: 'status-critical' // text: {},

        },
        error: {
          background: 'status-error' // text: {},

        },
        warning: {
          background: 'status-warning' // text: {},

        }
      }
    },
    changelog: {
      colors: {
        primary: 'accent-3'
      },
      icons: {
        up: Up,
        down: Down,
        changeArrow: LongArrowDown,
        close: Close
      }
    }
  };
  return deepFreeze(result);
};
export var neo = generate(16);