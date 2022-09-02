<template>
	<h1>LifeCycle Methods</h1>
	<h2>BeforeCreated</h2>
	
	<h2>Created</h2>
	<p>component name, methods, data is created</p>
	<h2>BeforeMount</h2>
	<p>call API</p>
	<h2>Mounted</h2>
	<p>html is ready</p>
	<h2>BeforeUpdate</h2>
	<p>before html is updated (data already updated)</p>
	<h2>Updated</h2>
	<p>html updated</p>
	<h2>BeforeUnmount</h2>
	<p>before this component disappear</p>
	<h2>Unmounted</h2>
	<p>component html is not accessible anymore</p>
	<button @click="hide">HIDE</button>
	<TabCC1 />
</template>

<script>
	import TabCC1 from './subs/TabCC1.vue';
	export default {
		name : "LifeCycleMethods",
		data(){
			console.warn("data is created");
			return;
		},
		methods: {

		},
		components: {
			TabCC1
		},
		beforeCreate() {
			alert("before create");
		},
		created(){
			alert("created");
		},
		beforeMount(){

		},
		mounted(){

		},
		beforeUpdate(){

		},
		updated(){

		},

	}
</script>

<style lang="scss" scoped>

</style>