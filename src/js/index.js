import { rgba } from 'polished';
import { add as addGoogleFont } from 'google-fonts';
import { NeoComponents } from 'mnet-icons';
import { css } from 'styled-components';
import { deepFreeze } from 'grommet/utils/object';
import { normalizeColor } from 'grommet/utils/colors';
import { parseMetricToNum } from 'grommet/utils/mixins';
import { FormNext } from 'grommet-icons/icons/FormNext';
import { FormPrevious } from 'grommet-icons/icons/FormPrevious';

const {
  Close,
  Down,
  Error,
  LongArrowDown,
  TickCircle,
  Tick,
  Up,
  LongArrowUp,
  Left,
  Right,
} = NeoComponents;
Tick.notSvg = true;

addGoogleFont({
  'Open Sans': ['400', '600', '700'],
});

const brandColor = 'accent-3';
const accentColors = [
  '#38C18B',
  '#8F94A6',
  '#739FFC',
  '#439ADC',
  '#FC564F',
  '#FFF2F1',
  '#70A67F',
  '#F2F5FC',
  '#f5f5f5',
];
const neutralColors = ['#519bff', '#99742E', '#00739D', '#A2423D'];
const statusColors = {
  critical: '#e35e59',
  error: '#FFECEC',
  warning: '#AB7113',
  ok: '#DFFFF2',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC',
  active: '#38C18B',
  stopped: '#FC564E',
  notStarted: '#9DA2AD',
};

const darkColors = [
  '#29313D',
  '#2F3A4A',
  '#575F7D',
  '#898EA2',
  '#BABDCA',
  '#DEDEDE',
  '#333333',
];
const lightColors = [
  '#fbfbfb',
  '#f5f6f8',
  '#E7EAF1',
  '#e1e3ef',
  '#dfdfdf',
  '#DADADA',
  '#F5F7FD',
  '#F4F6F8',
  '#D9DBE5',
  '#E8E7E7',
  '#F5F6FA',
  '#CCCCCC',
  '#E0E4ED',
  '#edfff2',
  '#EDF6FF',
];
const chartColors = [
  '#FC564F',
  '#719CF7',
  '#36C18B',
  '#FC90C9',
  '#F5B473',
  '#7371D9',
  '#98DB98',
  '#FC805A',
  '#3165B0',
  '#5DD8EB',
  '#FCD743',
  '#C94F78',
  '#AFA392',
  '#F5938C',
  '#6A3A27',
  '#DB2001',
  '#3C9678',
  '#575F7D',
  '#650B7C',
  '#9F7D56',
];
const focusColor = '#B1C2FE';

const colors = {
  active: '#FFFDE3',
  'background-back': {
    dark: '#33333308',
    light: '#F8FAFE',
  },
  'background-front': {
    dark: '#444444',
    light: '#FFFFFF',
  },
  'background-contrast': {
    dark: '#33333308',
    light: '#EEEEEE',
  },
  'active-background': 'background-contrast',
  'active-text': 'text-strong',
  black: '#000000',
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: '#DEDEDE',
  },
  brand: brandColor,
  control: {
    dark: 'accent-3',
    light: 'accent-3',
  },
  focus: focusColor,
  'graph-0': 'accent-1',
  'graph-1': 'neutral-1',
  'graph-2': 'neutral-2',
  'graph-3': 'neutral-3',
  'graph-4': 'neutral-4',
  placeholder: 'dark-4',
  selected: 'light-7',
  text: {
    dark: '#f8f8f8',
    light: '#898EA2',
  },
  'text-strong': {
    dark: '#FFFFFF',
    light: '#575F7D',
  },
  'text-weak': {
    dark: '#CCCCCC',
    light: '#898EA2',
  },
  'text-xweak': {
    dark: '#BBBBBB',
    light: '#BABDCA',
  },
  icon: {
    dark: '#f8f8f8',
    light: '#8F94A6',
  },
  'selected-background': 'brand',
  'selected-text': 'text-strong',
  white: '#FFFFFF',
  error: '#E15151',
  'chart-grid': '#e6e6e6',
};

const colorArray = (array, prefix) => array.forEach((color, index) => {
  colors[`${prefix}-${index + 1}`] = color;
});

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
colorArray(chartColors, 'chart');
Object.keys(statusColors).forEach(color => {
  colors[`status-${color}`] = statusColors[color];
});

export const generate = (baseSpacing = 24, scale = 6) => {
  // 24
  const baseFontSize = baseSpacing * 0.75; // 12
  const fontScale = baseSpacing / scale; // 16

  const fontSizing = factor => ({
    size: `${baseFontSize + factor * fontScale}px`,
    height: `${baseSpacing + factor * fontScale}px`,
    // maxWidth chosen to be ~50 characters wide
    // see: https://ux.stackexchange.com/a/34125
    maxWidth: `${baseSpacing * (baseFontSize + factor * fontScale)}px`,
  });

  const borderWidth = 0;
  const controlBorderWidth = 1;

  const result = {
    global: {
      active: {
        background: {
          color: 'active',
          opacity: 'medium',
        },
        color: {
          dark: 'white',
          light: '#898EA2',
        },
      },
      animation: {
        duration: '1s',
        jiggle: {
          duration: '0.1s',
        },
      },
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: `${baseSpacing / 6}px`, // 4
        large: `${baseSpacing / 2}px`, // 12
        xlarge: `${baseSpacing}px`, // 24
      },
      breakpoints: {
        small: {
          value: baseSpacing * 32, // 768
          borderSize: {
            xsmall: '1px',
            small: '2px',
            medium: `${baseSpacing / 6}px`, // 4
            large: `${baseSpacing / 4}px`, // 6
            xlarge: `${baseSpacing / 2}px`, // 12
          },
          edgeSize: {
            none: '0px',
            hair: '1px', // for Chart
            xxsmall: '2px',
            xsmall: `${baseSpacing / 8}px`, // 3
            small: `${baseSpacing / 4}px`, // 6
            medium: `${baseSpacing / 2}px`, // 12
            large: `${baseSpacing}px`, // 24
            xlarge: `${baseSpacing * 2}px`, // 48
          },
          size: {
            xxsmall: `${baseSpacing}px`, // 24
            xsmall: `${baseSpacing * 2}px`, // 48
            small: `${baseSpacing * 4}px`, // 96
            medium: `${baseSpacing * 8}px`, // 192
            large: `${baseSpacing * 16}px`, // 384
            xlarge: `${baseSpacing * 32}px`, // 768
            full: '100%',
          },
        },
        medium: {
          value: baseSpacing * 64, // 1536
        },
        large: {}, // anything above 'medium'
      },
      // Breakpoints used at Server Side Rendering for the initial rendering
      // These values correspond to the theme breakpoints
      deviceBreakpoints: {
        phone: 'small',
        tablet: 'medium',
        computer: 'large',
      },
      colors,
      control: {
        border: {
          width: `${controlBorderWidth}px`,
          radius: '4px',
          color: 'border',
        },
        disabled: {
          opacity: 0.3,
        },
      },
      // The time to wait after the user stopped typing, measured in ms.
      debounceDelay: 300,
      drop: {
        background: '#ffffff',
        border: {
          radius: '4px',
        },
        zIndex: '20',
        marginTop: '4px',
        extend: ({ isTooltip = false }) => ({
          'box-shadow': !isTooltip && '0 1px 7px 3px rgba(0,0,0,0.15)',
        }),
      },
      edgeSize: {
        none: '0px',
        hair: '1px', // for Chart
        xxsmall: `${baseSpacing / (1.618 * 8)}px`, // 3
        xsmall: `${baseSpacing / (1.618 * 4)}px`, // 6
        small: `${baseSpacing / (1.618 * 2)}px`, // 12
        medium: `${baseSpacing / 1.618}px`, // 24
        large: `${baseSpacing}px`, // 48
        xlarge: `${baseSpacing * 1.618}px`, // 96
        responsiveBreakpoint: 'small',
      },
      elevation: {
        light: {
          none: 'none',
          xsmall: '0px 1px 2px rgba(0, 0, 0, 0.02)',
          small: '0px 1px 5px 0px rgba(217,217,217,1)',
          medium: '0px 4px 8px rgba(0, 0, 0, 0.02)',
          large: '0px 8px 16px rgba(0, 0, 0, 0.02)',
          xlarge: '0px 12px 24px rgba(0, 0, 0, 0.02)',
        },
        dark: {
          none: 'none',
          xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
          small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
          medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
          large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
          xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)',
        },
      },
      focus: {
        // shadow or outline are required for accessibility
        border: {
          // remove to only have shadow
          color: 'transparent',
        },
        // outline: { color: undefined, size: undefined },
        shadow: 'none',
      },
      font: {
        ...fontSizing(0),
        // face: undefined,
        family: "'Open Sans', sans-serif",
      },
      hover: {
        background: {
          color: 'active',
          opacity: 'medium',
        },
        color: {
          dark: 'white',
          light: 'black',
        },
      },
      input: {
        padding: {
          horizontal: `${
            parseMetricToNum(`${baseSpacing / 2}px`)
            - parseMetricToNum(`${controlBorderWidth}px`)
          }px`,
          vertical: `${
            parseMetricToNum(`${baseSpacing / 1.418}px`)
            - parseMetricToNum(`${controlBorderWidth}px`)
          }px`,
        },
        font: {
          // size: undefined,
          // height: undefined,
          weight: 600,
        },
        // deprecate in v3
        // weight: undefined,
      },
      opacity: {
        strong: 0.8,
        medium: 0.4,
        weak: 0.1,
      },
      selected: {
        background: 'light-7',
        color: 'dark-3',
      },
      spacing: `${baseSpacing}px`,
      size: {
        xxsmall: `${baseSpacing * 2.2}px`, // 48
        xsmall: `${baseSpacing * 4}px`, // 96
        small: `${baseSpacing * 8}px`, // 192
        medium: `${baseSpacing * 16}px`, // 384
        large: `${baseSpacing * 32}px`, // 768
        xlarge: `${baseSpacing * 48}px`, // 1152
        xxlarge: `${baseSpacing * 64}px`, // 1536
        full: '100%',
      },
    },
    accordion: {
      panel: {
        // border: {
        //   side: 'bottom',
        //   color: 'border',
        // },
      },
      border: {
        side: 'bottom',
        color: 'border',
      },
      heading: {
        level: '4', // level ranges from 1-6
        // margin: undefined
      },
      hover: {
        color: { dark: 'light-4', light: 'dark-3' }, // deprecated
        heading: {
          color: { dark: 'light-4', light: 'dark-3' },
        },
      },
    },
    anchor: {
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: 'brand',
        light: 'brand',
      },
      hover: {
        textDecoration: 'underline',
        // fontWeight: undefined,
        // extend: undefined,
      },
      // extend: undefined,
    },
    avatar: {
      // extend: undefined,
      size: {
        xsmall: `${baseSpacing * 0.75}px`,
        small: `${baseSpacing}px`,
        medium: `${baseSpacing * 2}px`, // default 48
        large: `${baseSpacing * 3}px`,
        xlarge: `${baseSpacing * 4}px`,
      },
      text: {
        // fontWeight: undefined,
        // extend: undefined
      },
    },
    box: {
      responsiveBreakpoint: 'small', // when we switch rows to columns
    },
    scrollablebox: {
      box: {
        extend: ({ theme }) => ({
          '::-webkit-scrollbar': {
            width: `${baseSpacing * 0.25}px`,
          },
          '::-webkit-scrollbar-thumb': {
            background: normalizeColor('dark-6', theme),
            'border-radius': `${baseSpacing * 0.5}px`,
          },
        }),
      },
    },
    button: {
      size: {
        small: {
          border: {
            radius: `${baseSpacing * 0.25}px`, // 4px
          },
          pad: {
            vertical: `${baseSpacing / 2.285}px`,
            horizontal: `${baseSpacing / 1.6}px`,
          },
        },
        medium: {
          border: {
            radius: `${baseSpacing * 0.312}px`, // 5px
          },
          pad: {
            vertical: `${baseSpacing / 1.618 - borderWidth}px`,
            horizontal: `${baseSpacing - borderWidth * 1.4}px`,
          },
        },
        large: {
          border: {
            radius: `${baseSpacing * 0.4}px`, // 24px
          },
        },
      },
      border: {
        // color: { dark: undefined, light: undefined }
        width: `${borderWidth}px`,
        radius: `${baseSpacing * 0.312}px`,
      },
      color: { dark: undefined, light: undefined },
      default: {
        background: 'transparent',
        border: 'none',
        // color: undefined,
        padding: {
          vertical: '0',
          horizontal: '0',
        },
        // extend: undefined,
      },
      primary: {
        background: 'accent-1',
        border: {
          color: { dark: 'accent-1', light: 'accent-1' },
        },
        color: 'white',
        // padding: {
        //   vertical: undefined,
        //   horizontal: undefined,
        // },
        // extend: undefined,
      },
      secondary: {
        background: 'accent-2',
        border: {
          color: { dark: 'accent-2', light: 'accent-2' },
        },
        color: 'white',
        // padding: {
        //   vertical: undefined,
        //   horizontal: undefined,
        // },
        // extend: undefined,
      },
      tertiary: {
        background: 'light-3',
        border: {
          color: { dark: 'light-3', light: 'light-3' },
        },
        // color: 'white',
        // padding: {
        //   vertical: undefined,
        //   horizontal: undefined,
        // },
        // extend: undefined,
      },
      outline: {
        background: 'white',
        border: {
          color: { dark: 'accent-1', light: 'accent-1' },
          width: '1px',
        },
        color: 'accent-1',
        // padding: {
        //   vertical: undefined,
        //   horizontal: undefined,
        // },
        extend: {
          fontWeight: 600,
        },
      },
      active: {
        background: undefined,
        border: {
          color: { dark: 'accent-3', light: 'accent-3' },
          width: `${borderWidth}px`,
          radius: `${baseSpacing * 0.2}px`,
        },
        color: undefined,
        //   extend: undefined,
        //   default: {},
        //   primary: {},
        //   secondary: {},
      },
      disabled: {
        background: undefined,
        border: undefined,
        color: undefined,
        opacity: 0.6,
        //   extend: undefined,
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
        vertical: `${baseSpacing / 1.618 - borderWidth}px`,
        horizontal: `${baseSpacing - borderWidth * 1.4}px`,
      },
      transition: {
        timing: 'ease-in-out',
        duration: 0.1,
        properties: ['color', 'background-color', 'border-color', 'box-shadow'],
      },
    },
    calendar: {
      // daySize must align with global.size
      small: {
        fontSize: `${baseFontSize - fontScale}px`,
        lineHeight: 1.375,
        daySize: `${(baseSpacing * 8) / 7}px`,
        slideDuration: '0.2s',
      },
      medium: {
        fontSize: `${baseFontSize}px`,
        lineHeight: 1.45,
        daySize: `${(baseSpacing * 16) / 7}px`,
        slideDuration: '0.5s',
      },
      large: {
        fontSize: `${baseFontSize + 3 * fontScale}px`,
        lineHeight: 1.11,
        daySize: `${(baseSpacing * 32) / 7}px`,
        slideDuration: '0.8s',
      },
      heading: { level: '4' }, // level ranges from 1-6
    },
    carousel: {
      animation: {
        duration: 1000,
      },
      disabled: {
        icons: {
          // color: { dark: undefined, light: undefined },
        },
      },
    },
    checkBox: {
      border: {
        color: 'border',
        width: '1px',
      },
      check: {
        thickness: '2px',
        extend: ({ checked, theme }) => ({
          background: checked && normalizeColor('accent-3', theme),
          border: checked && 'unset',
          boxShadow: 'unset',
          borderRadius: '2px',
          color: normalizeColor('white', theme),
        }),
      },
      color: { dark: undefined, light: 'white' },
      // extend: undefined,
      // gap: undefined
      hover: {
        border: {
          color: 'border',
        },
      },
      icon: {
        size: `${baseSpacing}px`,
        // extend: undefined,
      },
      icons: {
        // checked: Tick,
        // indeterminate: undefined,
      },
      size: `${baseSpacing}px`,
      toggle: {
        background: { light: 'accent-2' },
        size: `${baseSpacing * 2.3125}px`,
        color: {
          dark: '#d9d9d9',
          light: 'white',
        },
        knob: {
          background: { light: 'white' },
          color: { light: 'white' },
          extend: {
            top: '2px',
            left: '2px',
            width: `${baseSpacing * 0.937}px`,
            height: `${baseSpacing * 0.937}px`,
            background: colors.white,
          },
        },
        radius: `${baseSpacing}px`,
        extend: ({ checked, theme }) => ({
          height: `${baseSpacing * 1.187}px`,
          border: 'none',
          background: normalizeColor(checked ? 'accent-1' : 'accent-2', theme),
        }),
      },
      extend: ({ theme }) => ({
        color: normalizeColor('dark-3', theme),
      }),
    },
    clock: {
      analog: {
        // extend: undefined,
        hour: {
          color: {
            dark: 'light-2',
            light: 'dark-3',
          },
          width: `${baseSpacing / 3}px`,
          size: `${baseSpacing}px`,
          shape: 'round',
        },
        minute: {
          color: {
            dark: 'light-4',
            light: 'dark-3',
          },
          width: `${baseSpacing / 6}px`,
          size: `${Math.round(baseSpacing / 2)}px`,
          shape: 'round',
        },
        second: {
          color: {
            dark: 'accent-1',
            light: 'accent-1',
          },
          width: `${baseSpacing / 8}px`,
          size: `${Math.round(baseSpacing / 2.666)}px`,
          shape: 'round',
        },
        size: {
          small: `${baseSpacing * 3}px`,
          medium: `${baseSpacing * 4}px`,
          large: `${baseSpacing * 6}px`,
          xlarge: `${baseSpacing * 9}px`,
          huge: `${baseSpacing * 12}px`,
        },
      },
      digital: {
        text: {
          xsmall: { size: `${baseFontSize - 2 * fontScale}px`, height: 1.5 },
          small: { size: `${baseFontSize - fontScale}px`, height: 1.43 },
          medium: { size: `${baseFontSize}px`, height: 1.375 },
          large: { size: `${baseFontSize + fontScale}px`, height: 1.167 },
          xlarge: { size: `${baseFontSize + 2 * fontScale}px`, height: 1.1875 },
          xxlarge: { size: `${baseFontSize + 4 * fontScale}px`, height: 1.125 },
        },
      },
    },
    collapsible: {
      minSpeed: 200,
      baseline: 500,
    },
    dataTable: {
      groupHeader: {
        background: {
          dark: 'dark-2',
          light: 'light-2',
        },
        border: { side: 'bottom', size: 'xsmall' },
        pad: { horizontal: 'small', vertical: 'xsmall' },
      },
      groupEnd: {
        border: { side: 'bottom', size: 'xsmall' },
      },
      header: {},
      primary: {
        weight: 'bold',
      },
      resize: {
        border: {
          color: 'border',
          side: 'end',
        },
      },
    },
    diagram: {
      // extend: undefined,
      line: {
        color: 'graph-0',
      },
    },
    // drop: {
    //   extend: undefined,
    //   maxHeight: undefined,
    // },
    formField: {
      field: {
        focus: 'border-color: white;',
        default: {
          border: '1px solid transparent',
        },
      },
      border: {
        color: 'white',
        error: {
          color: statusColors.critical,
        },
        position: 'inner',
        side: 'all',
        size: 'xsmall',
      },
      content: {
        pad: 'none',
        plainOnFocus: true,
      },
      disabled: {
        background: {
          color: 'status-disabled',
          opacity: 'medium',
        },
        // border: {
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
        margin: { top: 'xsmall', bottom: 'small', horizontal: 'none' },
        // background: undefined,
      },
      // extend: undefined,
      help: {
        color: 'dark-3',
        margin: {
          start: 'small',
        },
      },
      info: {
        color: 'text-xweak',
        margin: { vertical: 'xsmall', left: 'medium' },
        extend: {
          position: 'relative',
          top: '3px',
        },
      },
      label: {
        weight: 400,
        margin: {
          bottom: 'small',
          top: 'small',
          left: 'xxsmall',
        },
      },
      margin: { bottom: 'small' },
      postfix: {
        color: 'white',
        background: 'background-contrast',
        justify: 'center',
        pad: { horizontal: 'medium', vertical: 'medium' },
        border: [
          {
            side: 'horizontal',
            color: 'dark-6',
            size: 'xsmall',
          },
          {
            side: 'right',
            color: 'dark-6',
            size: 'xsmall',
          },
        ],
      },
      prefix: {
        color: 'white',
        background: 'background-contrast',
        justify: 'center',
        pad: { horizontal: 'medium', vertical: 'medium' },
        border: [
          {
            side: 'horizontal',
            color: 'dark-6',
            size: 'xsmall',
          },
          {
            side: 'left',
            color: 'dark-6',
            size: 'xsmall',
          },
        ],
      },
      round: 'small',
    },
    heading: {
      font: {
        // family: undefined
      },
      level: {
        1: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          xsmall: { ...fontSizing(2) },
          small: { ...fontSizing(4) },
          medium: { ...fontSizing(8) },
          large: { ...fontSizing(16) },
          xlarge: { ...fontSizing(24) },
        },
        2: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(2) },
          medium: { ...fontSizing(4) },
          large: { ...fontSizing(8) },
          xlarge: { ...fontSizing(12) },
        },
        3: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(1) },
          medium: { ...fontSizing(2) },
          large: { ...fontSizing(4) },
          xlarge: { ...fontSizing(6) },
        },
        4: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(0) },
          medium: { ...fontSizing(0) },
          large: { ...fontSizing(0) },
          xlarge: { ...fontSizing(0) },
        },
        5: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(-0.5) },
          medium: { ...fontSizing(-0.5) },
          large: { ...fontSizing(-0.5) },
          xlarge: { ...fontSizing(-0.5) },
        },
        6: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(-1) },
          medium: { ...fontSizing(-1) },
          large: { ...fontSizing(-1) },
          xlarge: { ...fontSizing(-1) },
        },
      },
      responsiveBreakpoint: 'small', // when we scale the font size down
      weight: 700,
    },
    layer: {
      background: 'white',
      border: {
        radius: '4px',
      },
      container: {
        zIndex: '15',
      },
      // extend: undefined,
      overlay: {
        background: 'rgba(0, 0, 0, 0.5)',
      },
      responsiveBreakpoint: 'small', // when Layer takes over the full screen
      zIndex: '101',
    },
    list: {
      item: {
        // background: undefined,
        border: 'horizontal',
        pad: { horizontal: 'medium', vertical: 'small' },
        // extend: undefined,
      },
      // extend: undefined,
    },
    maskedInput: {
      // extend: undefined,
      // disabled: { opacity: undefined },
    },
    menu: {
      // background: undefined,
      // extend: undefined,
    },
    meter: {
      color: 'graph-0',
      // colors: [] || colors: ['graph-0', 'graph-1', 'graph-2', 'graph-3'],
      // extend: undefined,
    },
    modalpopup: {
      container: {
        width: 'large',
      },
      title: {
        wrapper: {
          pad: 'large',
          border: {
            side: 'bottom',
            color: 'dark-6',
          },
        },
        text: {
          level: 3,
          size: 'small',
          color: 'dark-3',
          margin: '0',
        },
      },
      message: {
        wrapper: {
          pad: 'large',
        },
        text: {
          size: 'medium',
          color: 'dark-3',
          style: {
            lineHeight: `${baseSpacing * 1.25}px`,
          },
        },
      },
      buttons: {
        wrapper: {
          pad: {
            horizontal: 'large',
            bottom: 'large',
            top: 'medium',
          },
          direction: 'row',
        },
        button: {
          reverse: true,
          margin: {
            right: 'medium',
          },
        },
      },
    },
    multiselect: {
      option: {
        width: 'full',
        direction: 'row',
        justify: 'between',
        pad: { horizontal: 'medium' },
        align: 'center',
      },
      checkbox: {
        type: 'check',
        showUnSelected: undefined,
        box: {
          margin: {
            right: 'medium',
            // extend: undefined,
          },
        },
        checkmark: {
          size: `${baseSpacing * 1.2}px`,
          color: 'white',
        },
        check: {
          height: `${baseSpacing * 1.2}px`,
          width: `${baseSpacing * 1.2}px`,
          margin: 'auto',
          round: 'small',
          align: 'center',
          border: { color: 'light-6' },
          justify: 'center',
          background: 'white',
          extend: ({ checked, active, theme }) => ({
            background: checked && normalizeColor('accent-3', theme),
            borderColor: active ? 'transparent' : lightColors[5],
            border: checked && 'unset',
            boxShadow: 'unset',
            borderRadius: '2px',
            color: 'white',
          }),
        },
        include: {
          background: 'accent-1',
          color: 'white',
          check: 'add',
        },
        exclude: {
          background: 'red',
          color: 'white',
          check: 'subtract',
        },
        color: { dark: undefined, light: 'white' },
        label: {
          margin: {
            bottom: 'none',
          },
        },
      },
      chips: {
        wrapper: {
          pad: { vertical: 'medium', left: 'medium', right: 'small' },
          direction: 'row',
          extend: ({ twoColumnLayout }) => ({
            padding: twoColumnLayout ? 0 : `${baseSpacing / 1.618}px`,
            borderBottom: 'none',
          }),
        },
        option: {
          background: 'light-3',
          round: 'small',
          pad: {
            vertical: 'medium',
            horizontal: 'medium',
          },
          margin: 'small',
          direction: 'row',
          align: 'center',
          extend: ({ theme, twoColumnLayout }) => ({
            width: twoColumnLayout ? '100%' : 'auto',
            margin: twoColumnLayout
              ? 0
              : `${baseSpacing / (1.618 * 2)}px`,
            background: normalizeColor(twoColumnLayout ? 'white' : 'light-10', theme),
            padding: twoColumnLayout
              ? `${baseSpacing / 1.618}px`
              : `${baseSpacing / (1.618 * 2)}px ${baseSpacing / 1.618}px`,
            borderRadius: twoColumnLayout
              ? 0
              : `${baseSpacing / (1.618 * 2)}px`,
            borderBottom: twoColumnLayout
              ? `1px solid ${normalizeColor('light-9', theme)}`
              : 'none',
            justifyContent: twoColumnLayout
              ? 'space-between'
              : 'flex-start',
          }),
        },
        label: {
          color: 'dark-3',
          size: 'medium',
          weight: 400,
          margin: {
            right: 'small',
          },
          // extend: undefined,
        },
        icon: {
          size: `${baseSpacing / 1.78}px`,
          color: 'dark-3',
        },
        clear: {
          margin: 'medium',
          border: {
            side: 'top',
            color: 'light-3',
          },
          color: 'dark-3',
          size: 'medium',
          alignSelf: 'end',
          weight: '600',
          height: `${baseSpacing * 1.875}`,
        },
      },
      labelWrap: {
        pad: { vertical: 'small' },
      },
      controls: {
        label: {
          include: {
            color: 'accent-1',
          },
          exclude: {
            color: 'error',
          },
        },
        wrapper: {
          pad: 'medium',
          direction: 'row',
          height: {
            min: 'auto',
          },
          // extend: undefined,
        },
        button: {
          margin: 'small',
        },
      },
      searchbox: {
        container: {
          height: `${baseSpacing * 2.5}px`,
          direction: 'row',
          align: 'center',
          background: 'transparent',
          pad: 'none',
          border: {
            side: 'bottom',
            color: 'light-3',
          },
          style: {
            minHeight: `${baseSpacing * 2.5}px`,
            position: 'relative',
          },
          extend: ({ layout, theme }) => ({
            background:
              layout === 'double-column' ? 'white' : lightColors[1],
            flexDirection:
              layout === 'double-column' ? 'row-reverse' : 'row',
            paddingLeft:
              layout === 'double-column' ? `${baseSpacing / 1.618}px` : 0,
            borderBottom:
              layout === 'double-column' ? `1px solid ${normalizeColor('light-9', theme)}` : 'none',
          }),
        },
        placeholder: {
          color: 'dark-4',
          weight: 400,
          size: 'medium',
        },
        icon: {
          size: 'small',
          color: 'dark-3',
        },
        textWrapper: {
          flex: 'grow',
        },
        iconWrapper: {
          gap: 'medium',
          width: 'xxsmall',
          direction: 'row',
          justify: 'center',
        },
      },
      rightPanel: {
        border: 'light-3',
        incExcHeader: {
          box: {
            direction: 'row',
            justify: 'between',
            pad: 'large',
            background: 'white',
            border: {
              side: 'bottom',
              color: 'light-3',
            },
            align: 'center',
          },
          count: {
            margin: { left: 'small' },
            background: 'light-4',
            round: 'small',
            pad: {
              horizontal: 'small',
            },
            justify: 'center',
          },
          text: {
            color: 'dark-3',
            size: 'medium',
            weight: 400,
          },
        },
        container: {
          pad: { horizontal: 'large', vertical: 'medium' },
          extend: ({ isEmpty }) => ({
            padding: `${isEmpty ? `${baseSpacing / 1.6}` : '0'}px ${isEmpty ? `${baseSpacing}` : '0'}px`,
          }),
        },
      },
      custom: {
        wrapper: {
          direction: 'row',
          width: 'large',
          border: {
            color: 'light-3',
          },
          round: 'small',
        },
        textAreaWrap: {
          border: {
            color: 'transparent',
            side: 'right',
          },
          pad: 'medium',
          fill: true,
          extend: {
            '*': {
              height: 'auto',
              border: 'none',
            },
            textarea: {
              minHeight: `${baseSpacing * 11.56}px`,
            },
          },
          onKeyDown: e => {
            e.stopPropagation();
          },
          height: '100%',
        },
        label: {
          weight: 600,
        },
        textAreaContainer: {
          width: 'medium',
          height: 'medium',
          minHeight: `${baseSpacing * 8.75}px`,
          margin: { vertical: 'medium' },
        },
        actions: {
          wrapper: {
            direction: 'row',
            // gap: '0',
            margin: '0',
            justify: 'evenly',
            align: 'center',
            border: {
              side: 'top',
              color: 'light-3',
            },
            pad: 'none',
            height: {
              min: `${baseSpacing * 1.875}px`,
            },
          },
        },
      },
      icons: {
        include: {
          icon: TickCircle,
          extend: {
            color: 'accent-1',
            size: 'large',
          },
        },
        exclude: {
          icon: TickCircle,
          extend: {
            color: 'error',
            size: 'large',
          },
        },
      },
      includeBtn: {
        primary: false,
        style: {
          background: 'white',
        },
        showIcon: true,
        color: 'accent-1',
      },
      excludeBtn: {
        primary: false,
        style: {
          background: 'white',
        },
        showIcon: true,
        color: 'accent-5',
      },
      container: {
        width: 'large',
        border: {
          color: 'dark-6',
        },
        round: 'small',
      },
    },
    paragraph: {
      small: { ...fontSizing(-1) },
      medium: { ...fontSizing(0) },
      large: { ...fontSizing(1) },
      xlarge: { ...fontSizing(2) },
      xxlarge: { ...fontSizing(4) },
    },
    radioButton: {
      container: {
        extend: ({ theme }) => ({
          color: normalizeColor('dark-3', theme),
        }),
      },
      border: {
        color: {
          dark: 'dark-6',
          light: 'dark-6',
        },
        width: '5px',
      },
      check: {
        radius: '100%',
        color: {
          dark: 'accent-3',
          light: 'accent-3',
        },
      },
      hover: {
        border: {
          width: '5px',
          color: {
            dark: 'accent-3',
            light: 'accent-3',
          },
        },
      },
      icon: {
        // size: undefined,
        extend: {
          display: 'none',
        },
      },
      icons: {
        // circle: undefined,
      },
      gap: 'small',
      size: `${baseSpacing}px`,
      extend: {
        marginRight: `${baseSpacing / 2}px`,
        borderWidth: `${baseSpacing / 3.2}px`,
      },
    },
    rangeInput: {
      track: {
        color: 'dark-3',
        height: `${baseSpacing * 0.25}px`,
        extend: {
          borderRadius: `${baseSpacing * 0.625}px`,
        },
      },
    },
    rangeSelector: {
      background: {
        invert: {
          color: 'light-4',
        },
      },
      // edge: {
      //   type: undefined,
      // },
    },
    select: {
      background: 'transparent',
      activeColor: lightColors[4],
      container: {
        extend: props => ({
          borderColor: normalizeColor('border', props.theme),
        }),
      },
      control: {
        // open: undefined,
        extend: ({
          theme, disabled, callerPlain: plain,
        }) => ({
          border: !plain && `1px solid ${normalizeColor('dark-6', theme)}`,
          input: {
            color: normalizeColor('dark-4', theme),
            fontWeight: 400,
            padding: '0px',
          },
          padding: `${baseSpacing * 0.188}px ${baseSpacing * 0.625}px`,
          background: normalizeColor(disabled ? 'light-1' : 'white', theme),
          borderBottomWidth: !plain && theme.global.borderSize.small,
        }),
      },
      options: {
        container: {
          align: 'start',
          pad: 'small',
          round: 'false',
          border: {
            side: 'bottom',
            color: 'light-9',
          },
        },
        text: {
          margin: 'small',
        },
      },
      icons: {
        color: 'dark-3',
        margin: {
          vertical: 'small',
          right: 'small',
        },
        background: 'transparent',
        size: 'xlarge',
        up: Up,
        down: Down,
        // extend: undefined,
      },
      // searchInput: undefined,
      step: 20,
    },
    tab: {
      active: {
        color: 'dark-3',
        weight: 700,
        // background: undefined,
      },
      // background: undefined,
      border: {
        side: 'bottom',
        size: 'medium',
        color: {
          dark: 'brand',
          light: 'white',
        },
        active: {
          color: {
            dark: 'white',
            light: 'accent-3',
          },
        },
        hover: {
          color: {
            dark: 'white',
            light: 'white',
          },
          // extend: undefined,
        },
      },
      color: 'dark-4',
      // extend: undefined,
      hover: {
        // background: undefined,
        // extend: undefined,
        color: {
          dark: 'white',
          light: 'dark-3',
        },
      },
      margin: {
        top: 'large',
        horizontal: 'small',
        bottom: 'none',
      },
      pad: {
        bottom: 'large',
      },
    },
    tabs: {
      gap: 'xlarge',
      header: {
        border: {
          color: 'light-10',
          size: '1px',
          style: 'solid',
          side: 'bottom',
        },
        extend: {
          'padding-left': `${baseSpacing * 1.2}px`,
        },
      },
      panel: {
        extend: {},
      },
    },
    table: {
      header: {
        align: 'start',
        pad: {
          horizontal: `${baseSpacing * 1.25}px`,
          vertical: `${baseSpacing / 2}px`,
        },
        border: 'all',
        background: 'light-8', // extend: undefined,
        font: {
          weight: 400,
        },
        verticalAlign: 'middle',
      },
      body: {
        align: 'start',
        pad: {
          horizontal: `${baseSpacing * 1.25}px`,
          vertical: `${baseSpacing / 2}px`,
        },
        // background: undefined,
        border: 'all', // extend: undefined,
        extend: ({ theme }) => ({
          'font-weight': '600',
          color: normalizeColor('dark-3', theme),
          verticalAlign: 'middle',
        }),
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
          vertical: 'xsmall',
        },
        border: 'top', // verticalAlign: undefined,
        // background: undefined,
        // extend: undefined,

      },
      extend: ({ theme }) => ({
        position: 'relative',
        'border-spacing': 0,
        'border-collapse': 'separate',
        height: 'auto',
        overflow: 'hidden',
        tr: {
          'td, th': {
            'border-bottom': 0,
            'border-right': 0,
            '&:last-child': {
              'border-right': `1px solid ${normalizeColor('border', theme)}`,
            },
          },
        },
        thead: {
          th: {
            'text-transform': 'uppercase',
            '&:first-child': {
              'border-top-left-radius': `${baseSpacing / 3.5}px`,
            },
            '&:last-child': {
              'border-top-right-radius': `${baseSpacing / 3.5}px`,
            },
          },
        },
        tbody: {
          tr: {
            '&:last-child': {
              th: {
                'border-bottom': `1px solid ${normalizeColor('border', theme)}`,
                'border-bottom-left-radius': `${baseSpacing / 3.5}px`,
              },
              td: {
                'border-bottom': `1px solid ${normalizeColor('border', theme)}`,
                '&:last-child': {
                  'border-bottom-right-radius': `${baseSpacing / 3.5}px`,
                },
                '&:first-child': {
                  'border-bottom-left-radius': `${baseSpacing / 3.5}px`,
                },
              },
            },
          },
        },
      }),
    },
    text: {
      xsmall: { ...fontSizing(-1.5) },
      small: { ...fontSizing(-1) },
      medium: { ...fontSizing(0) }, // 18px
      large: { ...fontSizing(1) }, // 22px
      xlarge: { ...fontSizing(2) },
      xxlarge: { ...fontSizing(4) },
    },
    textArea: {
      extend: ({ theme }) => ({
        color: normalizeColor('dark-3', theme),
        fontWeight: 400,
      }),
    },
    textInput: {
      container: {
        extend: {
          height: '100%',
        },
      },
      border: {
        color: 'dark-6',
        side: 'all',
      },
      placeholder: {
        extend: {
          paddingLeft: `${baseSpacing * 1.125}px`,
        },
      },
      extend: ({
        plain, focus, reverse, icon, theme, readOnly, error,
      }) => ({
        paddingTop: `${baseSpacing / 1.78}px`,
        paddingBottom: `${baseSpacing / 1.78}px`,
        boxShadow: 'none',
        height: '100%',
        fontSize: theme.global.font.size,
        borderBottomWidth: theme.global.borderSize.small,
        fontWeight: 400,
        color: normalizeColor('dark-3', theme),
        paddingLeft: !reverse && icon && `${baseSpacing / 0.64}px`,
        borderColor: error ? 'transparent' : !plain && normalizeColor('dark-6', theme),
        ...(focus
          ? {
            borderColor: !readOnly && 'transparent',
            borderBottom: `${theme.global.borderSize.small} solid ${
              !readOnly && normalizeColor('accent-3', theme)
            }`,
            background: `${
              !readOnly && normalizeColor('background-back', theme)
            }`,
            borderBottomRightRadius: '0px',
            borderBottomLeftRadius: '0px',
          }
          : {}),
      }),
    },
    pagination: {
      control: {
        extend: props => css`
            border: 1px solid ${normalizeColor('light-4', props.theme)};
            border-right: none;
            button {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            &:first-child {
              border-radius: 4px 0 0 4px;
                        
            }
            &:last-child {
              border-radius: 0 4px 4px 0;
              border-right: 1px solid ${normalizeColor('light-4', props.theme)};
            }

        `,
      },
      button: {
        padding: 'none',
        active: {
          background: 'light-3',
          color: 'dark-3',
          border: {
            width: '1px',
            color: 'light-3',
            radius: '0px',
          },
        },
        disabled: {
          padding: 'none',
        },
        color: 'text-strong',
        size: {
          small: {
            border: {
              radius: `${baseSpacing / 8}px`,
              width: '2px',
            },
            pad: {
              vertical: '8px',
              horizontal: '8px',
            },
            font: { ...fontSizing(-1) },
            height: `${baseSpacing * 1.25}px`,
            width: `${baseSpacing * 1.25}px`,
          },
          medium: {
            border: {
              width: '2px',
              color: 'light-3',
              side: 'right',
            },
            pad: {
              vertical: '8px',
              horizontal: '8px',
            },
            font: { ...fontSizing(0) },
            height: `${baseSpacing * 2}px`,
            width: `${baseSpacing * 2}px`,
          },
          large: {
            border: {
              radius: `${baseSpacing / 4}px`,
              width: '2px',
            },
            pad: {
              vertical: '4px',
              horizontal: '4px',
            },
            font: { ...fontSizing(1) },
            height: `${baseSpacing * 2}px`,
            width: `${baseSpacing * 2}px`,
          },
        },
      },
      controls: {
        align: 'center',
        justify: 'center',
        direction: 'row',
        margin: 'none',
        pad: 'none',
        gap: 'none',
      },
      icons: {
        color: 'text-xweak',
        previous: FormPrevious,
        next: FormNext,
      },
    },
    tip: {
      wrapper: {
        contentWrap: {
          align: 'center',
          justify: 'center',
        },
        content: {
          background: 'dark-1',
          direction: 'row',
          pad: { horizontal: 'large', vertical: 'medium' },
          round: 'small',
          width: 'medium',
        },
      },
      drop: {
        isTooltip: true,
        shadow: 'none',
      },
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
          default: TickCircle,
          ok: TickCircle,
          error: Error,
        },
        text: {
          default: {
            weight: 600,
          },
          ok: {
            color: '#38C18B',
            weight: 600,
            margin: { horizontal: 'small' },
          },
          error: {
            color: '#E9716C',
            weight: 600,
            margin: { horizontal: 'small' },
          },
        },
        default: {
          background: 'dark-1',
          // border: {},
          size: 'medium',
          align: 'center',
          direction: 'row',
          gap: 'medium',
          justify: 'between',
          round: 'small',
          elevation: 'medium',
          pad: { vertical: 'medium', horizontal: 'medium' },
          margin: { vertical: 'small', horizontal: 'large' },
        },
        ok: {
          background: 'status-ok',
          // text: {},
        },
        critical: {
          background: 'status-critical',
          // text: {},
        },
        error: {
          background: 'status-error',
          // text: {},
        },
        warning: {
          background: 'status-warning',
          // text: {},
        },
      },
    },
    changelog: {
      colors: {
        primary: 'accent-3',
      },
      icons: {
        up: Up,
        down: Down,
        changeArrow: LongArrowDown,
        close: Close,
      },
    },
    upload: {
      loader: {
        props: {
          height: `${baseSpacing * 0.94}px`,
          width: `${baseSpacing * 0.94}px`,
          margin: 'none',
        },
      },
      form: {
        container: {
          border: {
            color: 'light-10',
            size: 'small',
          },
          round: 'medium',
          background: '#FCFDFF',
        },
        button: {
          submit: {
            kind: 'outline',
            background: 'white',
          },
          cancel: {
            plain: true,
          },
        },
      },
    },
    card: {
      container: {
        background: 'white',
        round: 'small',
      },
      header: {
        pad: {
          vertical: `${baseSpacing * 1.25}px`,
          horizontal: `${baseSpacing * 1.25}px`,
        },
        color: 'dark-3',
        font: { size: `${baseFontSize * 1.5}px` },
      },
      body: {
        pad: {
          top: `${baseSpacing * 1.25}px`,
          left: `${baseSpacing * 1.25}px`,
          right: `${baseSpacing * 1.25}px`,
          bottom: `${baseSpacing * 1.25}px`,
        },
      },
    },
    tag: {
      container: {
        background: 'accent-3',
        pad: { horizontal: 'small', vertical: 'xsmall' },
        font: { size: `${baseFontSize * 0.83}px` },
        color: 'white',
        // extend:
      },
      danger: {
        background: accentColors[4],
        // extend:
      },
      plain: {
        background: 'transparent',
        color: undefined,
      },
      icon: {
        cancel: Close,
        // extend:
      },
    },
    selectBtns: {
      background: 'white',
      font: {
        size: `${baseFontSize * 0.91}px`,
        weight: 'bold',
      },
      box: {
        border: {
          size: '1px',
          color: 'dark-6',
        },
        pad: {
          vertical: '6px',
          horizontal: 'large',
        },
        hover: undefined,
        active: {
          border: { color: 'accent-3' },
          color: 'white',
          weight: 600,
          background: 'accent-3',
        },
        extend: {
          'border-width': '1px 0px 1px 0px',
          '&:first-child': {
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px',
            borderWidth: '1px 0px 1px 1px',
          },
          '&:last-child': {
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px',
            borderWidth: '1px 1px 1px 0px',
          },
        },
      },
    },
    charts: {
      colors: chartColors,
      gridColor: colors['chart-grid'], // for all the grid lines except the axis one
      gridColorDark: 'lightgrey', // for grid line colors
      gridStyles: {
        strokeWidth: '1', // for grid stroke
      },
      svgLabelBig: {
        fontFamily: 'open_sansregular',
        fontSize: `${baseFontSize}px`,
        fill: accentColors[1],
      },
      svgLabelSmall: {
        fontFamily: 'open_sansregular',
        fontSize: `${baseFontSize}px`,
        fill: accentColors[1],
      },
      xAxisLineStyles: {
        strokeWidth: '1',
      },
      yAxisLineStyles: {
        strokeWidth: '1',
      },
    },
    datePicker: {
      tag: {
        cursor: 'pointer',
        margin: '0',
        height: 'auto',
        background: 'white',
        padding: {
          vertical: `${baseSpacing * 0.31}px`,
          horizontal: `${baseSpacing * 0.63}px`,
        },
        border: {
          hover: {
            width: '1px',
            color: darkColors[5],
          },
          width: '1px',
          color: darkColors[5],
        },
        text: {
          range: {
            weight: '400',
            color: 'dark-3',
          },
        },
      },
      navIcon: {
        icon: {
          left: Left,
          right: Right,
        },
        color: 'dark-3',
        size: 'large',
        weight: 'bold',
      },
      range: {
        icon: {
          name: LongArrowUp,
          size: `${baseFontSize * 1.33}px`,
        },
        text: {
          weight: '400',
          color: 'dark-3',
          extend: {
            fontWeight: '400',
          },
        },
      },
      week: {
        top: '50px',
        font: {
          size: '1.2em',
          color: 'dark-3',
          weight: '600',
        },
      },

      presets: {
        menu: {
          alignLeft: true,
        },
        item: {
          font: {
            color: 'dark-3',
            size: `${baseFontSize}px`,
          },
          active: {
            background: 'accent-3',
            color: 'white',
          },
        },
      },

      zIndex: 10,

      popup: {
        boxShadow: '0px 4px 17px 0 rgba(181,181,181,0.47)',
      },
      calendar: {
        day: {
          hover: {
            color: 'dark-3',
            background: lightColors[14],
          },
          selected: {
            color: 'white',
            background: 'accent-3',
          },
        },
      },

      confirmButton: {
        extend: {
          padding: '12px 30px',
          fontSize: `${baseFontSize * 1.166}px`,
          height: '40px',
          borderRadius: '4px',
          '&:hover': {
            boxShadow: '0 3px 10px 0 rgb(0 0 0 / 27%)',
          },
          fontWeight: '400',
          width: 'auto !important',
        },
      },
    },
  };

  return deepFreeze(result);
};

export const neo = generate(16);
