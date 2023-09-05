import { deepMerge } from "grommet/utils";
import { neo as defaultNeo } from ".";

const neo = deepMerge(defaultNeo, {
  title: "Ad.Tech",
  userAccountMenu: {
    initialCircle: {
      first: {
        background: {
          color: "#6566EF",
        },
      },
      second: {
        background: {
          color: "#9396f3",
        },
      },
    },
  },
  navBar: {
    navItem: {
      border: {
        active: {
          color: "#6566EF",
        },
      },
      icons: {
        linkIcon: {
          active: {
            color: "#6566EF",
          },
        },
      },
    },
  },
});

export default neo;
