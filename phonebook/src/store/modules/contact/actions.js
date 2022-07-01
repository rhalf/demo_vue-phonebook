import api from '../../../api';

export default {
	async fetchContacts(context) {
		const response = await api.contact.fetchAll();
		const contacts = response.data.map((contact) => {
			contact.update = false;
			contact.delete = false;
			return contact;
		});
		context.commit('SET_CONTACTS', contacts);
		return response;
	},
	async findContact(context, payload) {
		const response = await api.contact.findById(payload);
		context.commit('SET_CONTACT', response.data);
		return response;
	},
	async saveContact(context, payload) {
		return await api.contact.save(payload);
	},
	async updateContact(context, payload) {
		return await api.contact.update(payload);
	},
	async deleteContact(context, payload) {
		return await api.contact.delete(payload);
	},
};
