import { NeoComponents } from 'mnet-icons';
import { normalizeColor } from 'mnet-ui-base/utils';

const {
  Info, Success, Block, Tick, Up, Down,
} = NeoComponents;
Tick.notSvg = true;

const baseSpacing = 16;
const darkColors = [];
darkColors[2] = '#575F7D';

export const themeOverride = {
  global: {
    focus: {
      shadow: 'none',
    },
    colors: {
      brand: 'accent-3',
      placeholder: 'dark-2',
    },
  },
  button: {
    size: {
      small: {
        pad: {
          vertical: `${baseSpacing / 2.285}px`,
          horizontal: `${baseSpacing / 1.6}px`,
        },
      },
    },
  },
  select: {
    control: {
      extend: {
        borderBottomWidth: '2px',
        input: {
          color: darkColors[2],
          fontWeight: 400,
          padding: `${baseSpacing / 1.68}px`,
        },
      },
    },
    icons: {
      background: 'transparent',
      pad: {
        vertical: `${baseSpacing / 2.67}px`,
        right: 'large',
      },
      size: 'large',
      color: 'dark-3',
      up: Up,
      down: Down,
    },
  },
  textArea: {
    extend: {
      color: darkColors[2],
      fontWeight: 400,
    },
  },
  multiselect: {
    container: {
      border: {
        color: 'light-3',
      },
      round: 'small',
    },
    includeBtn: {
      color: 'accent-1',
      primary: false,
      style: {
        background: 'white',
      },
      showIcon: true,
    },
    excludeBtn: {
      color: '#FC564F',
      primary: false,
      style: {
        background: 'white',
      },
      showIcon: true,
    },
    option: {
      align: 'center',
    },
    checkbox: {
      showUnSelected: undefined,
      include: {
        check: 'add',
      },
      exclude: {
        check: 'subtract',
      },
      check: {
        extend: props => ({
          background: props.checked && normalizeColor('accent-3', props.theme),
          border: props.checked && 'unset',
          boxShadow: 'unset',
          borderRadius: '2px',
          color: 'white',
        }),
        justify: 'center',
        background: 'white',
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
        extend: () => ({
          'border-bottom': 'none',
        }),
      },
      option: {
        pad: {
          vertical: 'medium',
        },
        extend: props => ({
          width: props.twoColumnLayout ? '100%' : 'auto',
          margin: props.twoColumnLayout ? 0 : `${baseSpacing / (1.618 * 2)}px`,
          background: props.twoColumnLayout ? 'white' : '#E0E0E0',
          'justify-content': props.twoColumnLayout
            ? 'space-between'
            : 'flex-start',
        }),
      },
      label: {
        color: 'dark-3',
        weight: 400,
        extend: {},
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
      icon: {
        size: `${baseSpacing / 1.78}px`,
      },
    },
    searchbox: {
      textWrapper: {
        flex: 'grow',
      },
      iconWrapper: {
        gap: 'medium',
        width: 'xxsmall',
        direction: 'row',
        justify: 'center',
      },
      container: {
        height: `${baseSpacing * 2.5}px`,
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
      },
      placeholder: {
        color: 'dark-4',
        weight: 400,
        size: 'medium',
      },
    },
    rightPanel: {
      border: 'light-3',
      incExcHeader: {
        box: {
          align: 'center',
          background: 'white',
          border: {
            color: 'light-3',
          },
        },
        text: {
          color: 'dark-3',
          size: 'medium',
          weight: '400',
        },
        count: {
          background: 'light-4',
          round: 'small',
          pad: {
            horizontal: 'small',
          },
        },
      },
    },
    custom: {
      wrapper: {
        border: {
          color: 'light-3',
        },
        round: 'small',
      },
      textAreaWrap: {
        border: {
          color: 'transparent',
        },
        pad: 'medium',
        height: '100%',
        extend: {
          '*': {
            border: 'none',
            height: '100%',
          },
        },
      },
      actions: {
        wrapper: {
          gap: '0',
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
        icon: Success,
        extend: {
          color: 'status-ok',
          size: 'large',
        },
      },
      exclude: {
        icon: Block,
        extend: {
          color: 'status-error',
          size: 'large',
        },
      },
    },
  },
  textInput: {
    container: {
      extend: () => `
          height: 100%;
        `,
    },
    extend: ({
      plain, focus, reverse, icon, theme, readOnly,
    }) => ({
      paddingTop: `${baseSpacing / 1.78}px`,
      paddingBottom: `${baseSpacing / 1.78}px`,
      boxShadow: 'none',
      height: '100%',
      borderBottomWidth: '2px',
      fontWeight: 400,
      color: `${normalizeColor('dark-3', theme)}`,
      paddingLeft: !reverse && icon && `${baseSpacing / 0.64}px`,
      borderColor: !plain && `${normalizeColor('dark-6', theme)}`,
      ...(focus
        ? {
          borderColor: 'transparent',
          borderBottom: `2px solid ${
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
    border: {
      color: 'dark-6',
      side: 'all',
    },
    placeholder: {
      extend: {
        paddingLeft: `${baseSpacing * 1.125}px`,
      },
    },
  },
  formField: {
    content: {
      plainOnFocus: true,
    },
    field: {
      focus: 'border-color: white;',
      default: {
        border: '1px solid transparent',
      },
    },
    error: {
      margin: { top: 'xsmall', bottom: 'small', horizontal: 'none' },
    },
    info: {
      margin: { vertical: 'xsmall', left: 'medium' },
    },
    labelWrap: {
      margin: 'none',
      width: 'xxsmall',
      direction: 'row',
    },
    label: {
      weight: 400,
      margin: {
        bottom: 'small',
        top: 'small',
        left: 'xxsmall',
      },
    },
    postfix: {
      background: 'dark-3',
    },
    prefix: {
      background: 'dark-3',
    },
    extend: {
      button: {
        border: undefined,
      },
      icon: Info,
      iconProps: {
        margin: { horizontal: 'small' },
        size: 'large',
      },
      input: {
        border: undefined,
      },
    },
    tooltip: {
      extend: {
        position: 'right-end',
        background: 'white',
      },
      icon: Info,
      iconProps: {
        margin: { horizontal: 'small' },
        size: 'large',
      },
    },
  },
};
