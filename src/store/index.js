import { createStore } from "vuex";
//持久化插件
// import createPersistedState from "vuex-persistedstate";
import user from "@/store/user";
import cart from "@/store/cart";
import category from "@/store/category";

const store = createStore({
  modules: {
    user,
    cart,
    category,
  },
  plugins: [
    // createPersistedState({
    //   paths: ["user", "cart"],
    //   key: "rabbit-client-pc",
    // }),
  ],
});

export default store;
