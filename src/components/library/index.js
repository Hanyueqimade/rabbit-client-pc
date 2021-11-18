import lazy from "@/components/directive/lazy";

const importFn = require.context("./", false, /\.vue$/);
const keys = importFn.keys();

export default {
  install(app) {
    keys.forEach((key) => {
      const component = importFn(key).default;
      app.component(component.name, component);
    });
    app.directive("lazy", lazy);
  },
};
