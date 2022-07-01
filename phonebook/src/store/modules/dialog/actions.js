export default {
  setError(context, payload) {
    context.commit("SET_ERROR", payload);
  },
  setInfo(context, payload) {
    context.commit("SET_INFO", payload);
  },
};
