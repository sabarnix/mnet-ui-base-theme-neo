"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("grommet/utils");

var _ = require(".");

var _headerLogo = _interopRequireDefault(require("./assets/adtech/header-logo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var neo = (0, _utils.deepMerge)(_.neo, {
  title: "Ad.Tech",
  header: {
    headerLogo: {
      logo: _headerLogo["default"]
    }
  },
  userAccountMenu: {
    label: {
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
    drop: {
      selectedAccountDetail: {
        initialCircle: {
          container: {
            background: {
              color: "#6566EF"
            }
          }
        }
      }
    }
  },
  sideBar: {
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
  }
});
var _default = neo;
exports["default"] = _default;