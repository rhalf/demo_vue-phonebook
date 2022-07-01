<template>
	<v-dialog v-model="value" width="500" persistent>
		<v-card>
			<v-card-title class="primary white--text"> Edit Contact </v-card-title>

			<v-card-text class="pa-0">
				<v-container>
					<v-row>
						<v-col>
							<v-container>
								<v-form v-model="isValid" ref="form">
									<v-container>
										<v-text-field
											label="Name"
											:rules="validateName"
											v-model="newContact.name"
										/>
										<v-text-field
											label="Number"
											:rules="validatePhoneNumber"
											v-model="newContact.number"
										/>
										<v-text-field
											label="Email"
											:rules="validateEmail"
											v-model="newContact.email"
										/>
										<v-checkbox label="Enable" v-model="newContact.enable" />
									</v-container>
								</v-form>
							</v-container>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>

			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>

				<v-btn
					class="primary white--text ma-2"
					text
					@click="editContact"
					outlined
					large
					:loading="isUpdating"
				>
					Save
				</v-btn>
				<v-btn
					class="primary white--text ma-2"
					text
					@click="close"
					outlined
					large
				>
					Cancel
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	import { mapActions } from 'vuex';
	import validation from '../../mixins/Validation';
	export default {
		name: 'ContactEditDialog',
		mixins: [validation],
		props: { value: Boolean, contact: Object },
		mounted() {
			this.newContact = { ...this.contact };
		},
		data() {
			return {
				form: null,
				isValid: false,
				isUpdating: false,
				newContact: {},
			};
		},
		methods: {
			...mapActions('contact', ['fetchContacts']),
			...mapActions('contact', ['updateContact']),
			async editContact() {
				this.isSaving = true;
				this.$refs.form.validate();
				if (this.isValid) {
					try {
						await this.updateContact({
							id: this.newContact.id,
							contact: { ...this.newContact },
						});
						await this.fetchContacts();

						this.$refs.form.reset();
						this.close();
					} catch {
						this.isSaving = false;
					}
				}
				this.isSaving = false;
			},

			close() {
				this.$emit('input', false);
			},
		},
	};
</script>
