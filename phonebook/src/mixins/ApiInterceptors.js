import { mapActions } from 'vuex';
import { phoneBookApi } from '../api/config';

export default {
	methods: {
		...mapActions('dialog', ['setError']),

		setRequestInterceptor() {
			phoneBookApi.interceptors.request.use(
				(request) => {
					return request;
				},
				(error) => {
					if (error.data) {
						let data = error.response.data;
						this.setError({
							visible: true,
							title: data.error,
							messages: [
								`Timestamp: ${new Date(data.timestamp).toLocaleString()}`,
								`Error: ${data.error}`,
								`Status: ${data.status}`,
								`Message: ${data.message}`,
								`Path: ${data.path}`,
							],
						});
					} else {
						let data = error.message;
						this.setError({
							visible: true,
							title: 'Error',
							messages: [data],
						});
					}
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
					if (error.response.data) {
						let data = error.response.data;
						this.setError({
							visible: true,
							title: data.error,
							messages: [
								`Timestamp: ${new Date(data.timestamp).toLocaleString()}`,
								`Error: ${data.error}`,
								`Status: ${data.status}`,
								`Message: ${data.message}`,
								`Path: ${data.path}`,
							],
						});
					} else {
						let data = error.message;
						this.setError({
							visible: true,
							title: 'Error',
							messages: [data],
						});
					}

					return Promise.reject(error);
				}
			);
		},
	},
};
