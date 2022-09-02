<template>
	<!--div inside template is not mandatory anymore with vue 3-->
	<h1>Mon super compteur</h1>
	<p @click="increment">Vous avez cliqué {{ total }} fois.</p>
	<p>le total general de l'app est {{ totalGeneral }}</p>
	<p>Le double du total est de {{ doubleTotal }}</p>
</template>

<script>
export default {
	name: "HomeCounter",
	//data() initialize the component
	data() {
		return {
			total: 0
		}
	},
	computed: {
		totalGeneral() {
			return this.$store.state.totalCounter
		},
		doubleTotal() {
			return this.$store.getters.doubleTotal;
		}
	},
	methods: {
		increment() {
			this.total += 1;
			//commit do vuex mutations
			this.$store.commit('setTotal', this.totalGeneral += 1)
		}
	}
}
</script>

<!--scope means only for this component-->
<style scoped>
</style>