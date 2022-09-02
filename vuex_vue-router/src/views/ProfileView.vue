<template>
	<div>
		my name is {{firstName}}
	</div>
</template>

<script>
	import {useRoute} from 'vue-router';
	export default {
		name : "ProfileView",
		data(){
			return {
				firstName : ''
			}
		},
		mounted(){
			const route = useRoute();
			this.firstName = route.params.name;
		}
	}
</script>

<style lang="scss" scoped>

</style>