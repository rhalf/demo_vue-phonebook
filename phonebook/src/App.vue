<template>
	<v-app>
		<layout-header />
		<v-main>
			<router-view />
		</v-main>
		<error-dialog />
		<info-dialog />
	</v-app>
</template>

<script>
	import LayoutHeader from './components/layout/LayoutHeader.vue';
	import ErrorDialog from './components/dialogs/ErrorDialog';
	import InfoDialog from './components/dialogs/InfoDialog';
	import ApiInterceptors from './mixins/ApiInterceptors';

	import { mapActions } from 'vuex';

	export default {
		name: 'App',
		mixins: [ApiInterceptors],
		components: { LayoutHeader, ErrorDialog, InfoDialog },
		mounted() {
			this.setRequestInterceptor();
			this.setResponseInterceptor();
		},
		methods: {
			...mapActions('dialog', ['setError']),
		},
	};
</script>
