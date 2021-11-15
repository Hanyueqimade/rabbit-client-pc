import { getCategoriesApi } from "@/api/category";
import { topCategories } from "@/api/constants";

const category = {
  namespaced: true,
  state() {
    return {
      list: topCategories.map((categoryName) => ({ name: categoryName })),
    };
  },
  mutations: {
    // 设置分类数据
    setCategories(state, payload) {
      state.list = payload;
    },
    open(state, id) {
      const target = state.list.find((ele) => ele.id === id);
      target.open = true;
    },
    close(state, id) {
      const target = state.list.find((ele) => ele.id === id);
      target.open = false;
    },
  },
  actions: {
    // 获取分类数据
    getCategories({ commit }) {
      getCategoriesApi().then((data) => {
        data.result.forEach((ele) => (ele.open = false));
        commit("setCategories", data.result);
      });
    },
  },
};

export default category;
