<template>
	<v-container class="mt-10">
		<v-row>
			<v-spacer></v-spacer>
			<v-col cols="8">
				<v-card>
					<v-container class="primary white--text pa-0">
						<v-row no-gutters>
							<v-col>
								<v-card-title> Contacts </v-card-title>
								<v-card-subtitle> List of all contact </v-card-subtitle>
							</v-col>
							<v-col
								cols="auto"
								class="d-flex justify-center align-center px-5"
							>
								<v-btn
									fab
									text
									dark
									:loading="loadingContacts"
									@click="contactAddDialogOpen = true"
								>
									<v-icon>mdi-plus</v-icon>
								</v-btn>
								<v-btn
									fab
									text
									dark
									:loading="loadingContacts"
									@click="fetchContacts"
								>
									<v-icon>mdi-reload</v-icon>
								</v-btn>
							</v-col>
						</v-row>
					</v-container>

					<v-card-text>
						<v-hover
							v-slot="{ hover }"
							v-for="contact in contacts"
							:key="contact.id"
						>
							<v-sheet
								:class="`${hover ? 'grey lighten-4' : ''} px-4 rounded-lg`"
							>
								<v-container>
									<v-row>
										<v-col cols="1" class="d-flex justify-left align-center">
											<label class="body-1"> {{ contact.id }} </label>
										</v-col>
										<v-col cols="3" class="d-flex justify-left align-center">
											<label
												:class="`${
													contact.enable ? '' : 'text-decoration-line-through'
												} body-1`"
											>
												{{ contact.name }}</label
											>
										</v-col>
										<v-col cols="3" class="d-flex justify-left align-center">
											<label
												:class="`${
													contact.enable ? '' : 'text-decoration-line-through'
												} body-1`"
											>
												{{ contact.number }}</label
											>
										</v-col>
										<v-col cols="4" class="d-flex justify-left align-center">
											<label
												:class="`${
													contact.enable ? '' : 'text-decoration-line-through'
												} body-1`"
											>
												{{ contact.email }}</label
											>
										</v-col>
										<v-col cols="1" class="d-flex justify-center align-center">
											<v-btn
												color="primary"
												small
												fab
												text
												@click="contact.update = true"
												><v-icon>mdi-pencil</v-icon></v-btn
											>
											<v-btn
												color="error"
												small
												fab
												text
												@click="contact.delete = true"
												><v-icon>mdi-trash-can</v-icon></v-btn
											>
											<contact-edit-dialog
												v-model="contact.update"
												:contact="contact"
											/>
											<contact-delete-dialog
												v-model="contact.delete"
												:contact="contact"
											/>
										</v-col>
									</v-row>
								</v-container>
							</v-sheet>
						</v-hover>
					</v-card-text>
				</v-card>
			</v-col>
			<v-spacer></v-spacer>
		</v-row>
		<contact-add-dialog v-model="contactAddDialogOpen" />
	</v-container>
</template>

<script>
	import ContactAddDialog from '../components/contacts/ContactAddDialog';
	import ContactEditDialog from '../components/contacts/ContactEditDialog';
	import ContactDeleteDialog from '../components/contacts/ContactDeleteDialog';

	import { mapActions, mapGetters } from 'vuex';

	export default {
		components: { ContactAddDialog, ContactEditDialog, ContactDeleteDialog },
		data() {
			return {
				contactAddDialogOpen: false,
				loadingContacts: false,
			};
		},
		async created() {
			try {
				this.loadingContacts = true;
				await this.fetchContacts();
			} catch {
				console.log('fetchContacts', 'Failed');
			} finally {
				this.loadingContacts = false;
			}
		},
		methods: {
			...mapActions('contact', ['fetchContacts']),
		},
		computed: {
			...mapGetters('contact', ['contacts']),
		},
	};
</script>

<style></style>
