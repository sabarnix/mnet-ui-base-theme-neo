import { deepMerge } from "grommet/utils";
import { neo as defaultNeo } from ".";
import HeaderLogoSrc from './assets/adtech/header-logo.svg';
var neo = deepMerge(defaultNeo, {
  title: "Ad.Tech",
  header: {
    logo: HeaderLogoSrc
  },
  userAccountMenu: {
    initialCircle: {
      first: {
        background: {
          color: "#6566EF"
        }
      },
      second: {
        background: {
          color: "#9396f3"
        }
      }
    }
  },
  navBar: {
    navItem: {
      border: {
        active: {
          color: "#6566EF"
        }
      },
      icons: {
        linkIcon: {
          active: {
            color: "#6566EF"
          }
        }
      }
    }
  }
});
export default neo;