<template>
	<v-dialog v-model="value" width="500" persistent>
		<v-card>
			<v-card-title class="primary white--text"> Delete Contact </v-card-title>

			<v-card-text class="pa-0">
				<v-container>
					<v-row>
						<v-col>
							<v-container>
								<v-row>
									<v-col>
										<p>
											Are you sure you want to delete this contact named "
											{{ newContact.name }}
											"?
										</p>
									</v-col>
								</v-row>
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
					@click="removeContact"
					outlined
					large
					:loading="isDeleting"
				>
					Delete
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
	export default {
		name: 'ContactDeleteDialog',
		props: { value: Boolean, contact: Object },
		mounted() {
			this.newContact = { ...this.contact };
		},
		data() {
			return {
				isDeleting: false,
				newContact: {},
			};
		},
		methods: {
			...mapActions('contact', ['fetchContacts']),
			...mapActions('contact', ['deleteContact']),

			async removeContact() {
				this.isDeleting = true;
				try {
					await this.deleteContact({
						id: this.newContact.id,
					});

					await this.fetchContacts();
					this.close();
				} catch {
					this.isDeleting = false;
				}
				this.isDeleting = false;
			},

			close() {
				this.$emit('input', false);
			},
		},
	};
</script>
