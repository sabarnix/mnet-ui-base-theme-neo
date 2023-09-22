import { deepMerge } from 'grommet/utils';
import { neo as defaultNeo } from '.';
import HeaderLogoSrc from './assets/adtech/header-logo.svg';

const neo = deepMerge(defaultNeo, {
  title: 'Ad.Tech',
  header: {
    headerLogo: {
      logo: HeaderLogoSrc,
    },
  },
  userAccountMenu: {
    label: {
      initialCircle: {
        first: {
          background: {
            color: '#6566EF',
          },
        },
        second: {
          background: {
            color: '#9396f3',
          },
        },
      },
    },
    drop: {
      selectedAccountDetail: {
        initialCircle: {
          container: {
            background: {
              color: '#6566EF',
            },
          },
        },
      },
    },
  },
  sideBar: {
    navBar: {
      navItem: {
        border: {
          active: {
            color: '#6566EF',
          },
        },
        icons: {
          linkIcon: {
            active: {
              color: '#6566EF',
            },
          },
        },
      },
    },
  },
});

export default neo;
