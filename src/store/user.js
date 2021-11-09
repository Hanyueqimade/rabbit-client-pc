const user = {
  namespaced: true,
  state() {
    return {
      profile: {
        // 用户id
        id: "",
        // 用户头像
        avatar: "",
        // 用户昵称
        nickname: "",
        // 用户账号
        account: "",
        // 用户手机号
        mobile: "",
        // 用户登录凭证
        token: "",
      },
    };
  },
  mutations: {
    setUser(state, payload) {
      if (Object.keys(payload).length !== 0) {
        // 非空
        state.profile = {
          ...state.profile,
          ...payload,
        };
      } else {
        // 用户为空
        state.profile = {};
      }
    },
  },
};

export default user;
