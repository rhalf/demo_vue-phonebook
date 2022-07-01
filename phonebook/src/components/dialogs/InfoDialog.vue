<template>
	<v-dialog v-model="info.visible" width="500">
		<v-card>
			<v-card-title class="blue white--text"> {{ info.title }} </v-card-title>

			<v-card-text class="pa-0">
				<v-container>
					<v-row>
						<v-col>
							<v-container>
								<p
									class="body-1"
									v-for="(message, index) in info.messages"
									:key="index"
								>
									{{ message }}
								</p>
							</v-container>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>

			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					class="blue white--text"
					text
					@click="setInfo({ visible: false })"
					outlined
				>
					Ok
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	export default {
		name: 'InfoDialog',

		computed: {
			...mapGetters('dialog', ['info']),
		},
		methods: {
			...mapActions('dialog', ['setInfo']),
		},
	};
</script>
