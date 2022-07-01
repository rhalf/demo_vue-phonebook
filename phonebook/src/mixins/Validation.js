export default {
	data: () => ({
		validateName: [
			(v) => !!v || 'Name is required',
			(v) => {
				v = String(v);
				v = v.trim();
				return (v && v.length >= 5) || 'Name must be at least 5 characters';
			},
		],
		validateEmail: [
			(v) => !!v || 'Email is required',
			(v) => {
				v = String(v);
				v = v.trim();
				return /.+@.+\..+/.test(v) || 'Email must be valid';
			},
		],
		validatePassword: [
			(v) => !!v || 'Password is required',
			(v) => {
				v = String(v);
				v = v.trim();
				return (v && v.length >= 6) || 'Password must be atleast 6 characters';
			},
		],
		validatePhoneNumber: [
			(v) => !!v || 'Phone Number is required',
			(v) => {
				v = String(v);
				v = v.trim();
				return (
					v.match(/^[0-9]+$/) != null || 'Phone number must be numbers only'
				);
			},
			(v) => {
				v = String(v);
				v = v.trim();
				return (v && v.length == 11) || 'Phone number must be 11 characters';
			},
		],
	}),

	methods: {
		validate() {
			this.$refs.form.validate();
		},
		reset() {
			this.$refs.form.reset();
		},
		resetValidation() {
			this.$refs.form.resetValidation();
		},
	},
};
