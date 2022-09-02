<template>
	<h1>Call API</h1>
	<ul v-for="user in list" :key="user.id">
		<li>{{user.first_name}}</li>
	</ul>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'NewView',
		data() {
			return {
				list : []
			}
		},
		async mounted(){
			let response = await axios.get("https://regres.in/api/users?page=1");
			console.log("response =>" , response.data);
			this.list = response.data.data;
		}
	}
</script>

<style scoped>
	ul {
		color:aqua;
	};
	li {
		font-size: large;
	}

</style>