<template>
	<div>
		<h1>Dynamic "tab" component</h1>
	</div>
	<button @click="tab='TabCC1'">Load Tab1</button>
	<button @click="tab='TabCC2'">Load Tab2</button>
	<button @click="tab='TabCC3'">Load Tab3</button>
	<component :is="tab" />
</template>

<script>
	import TabCC1 from './subs/TabCC1.vue';
	import TabCC2 from './subs/TabCC2.vue';
	import TabCC3 from './subs/TabCC3.vue';
	export default {
		name: "DynamicTabComponent",
		components : {
			TabCC1,
			TabCC2,
			TabCC3
		},
		data() {
			return {
				tab: 'TabCC1'
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>