import { mapActions } from "vuex";
import { phoneBookApi } from "../api/config";

export default {
  methods: {
    ...mapActions("dialog", ["setError"]),

    setRequestInterceptor() {
      phoneBookApi.interceptors.request.use(
        (request) => {
          return request;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },

    setResponseInterceptor() {
      phoneBookApi.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          let data = error.response.data;
          this.setError({
            visible: true,
            title: data.error,
            messages: [
              `Timestamp: ${new Date(data.timestamp).toLocaleString()}`,
              `Error: ${data.error}`,
              `Status: ${data.status}`,
              `Message: ${data.message}`,
              `Path: ${data.path}`
            ],
          });

          return Promise.reject(error);
        }
      );
    },
  },
};
