const modules = {
  HomepageModules: require("./HomepageModules"),
  //Checkout: require("./Checkout"),
};

module.exports = {
  init: () => {
    const dataModules = document.querySelectorAll("[data-module]");
    for (dataModule of dataModules) {
      if (modules[dataModule.getAttribute("data-module")]) {
        new modules[dataModule.getAttribute("data-module")].default(dataModule);
      }
    }
  },
};
