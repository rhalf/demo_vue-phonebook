import { phoneBookApi } from './config';

const contact = {
	fetchAll() {
		return phoneBookApi.get(`/api/v1/contacts`);
	},
	findById(payload) {
		return phoneBookApi.get(`/api/v1/contact/${payload.id}`);
	},
	save(payload) {
		return phoneBookApi.post(`/api/v1/contact`, payload.contact);
	},
	update(payload) {
		return phoneBookApi.put(`/api/v1/contact/${payload.id}`, payload.contact);
	},
	delete(payload) {
		return phoneBookApi.delete(`/api/v1/contact/${payload.id}`);
	},
};

export default { contact };
