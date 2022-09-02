<template>
	<div>
		<!-- interpolation in html ? use {{}} -->
		<p @mousemove="writeConsole">Home component {{"Hello".length}}</p>
		<p>email : {{email}}</p>
		<p>name : {{getName()}}}</p>
		<button @click="getCount">click me</button>
		<p>button clicked {{count}} times</p>
		<!-- v-html includes html tags -->
		<div v-html="htmlBinding + tag" />
		<br>
		<div :class="{bgGreen: colorfull}">class binding, colorfull is {{colorfull}}</div>
		<button @click="toggleColorfull" >make it green</button>
		<div :class="ajustStyle">too many class to ajust</div>
		<button @click="addError">add error</button>
	</div>

	<teleport to="#footer">	<TeleportFooter /></teleport>
</template>

<script>
	import {ref, computed} from 'vue';
	import TeleportFooter from './TeleportFooter.vue';
export default {
	name: "HomeVue",
	components : {
		TeleportFooter
	},
	setup () {
		const email = "bla@bla.com";
		const count = ref(0);
		const htmlBinding = "<h2>HTML binding</h2>";
		const tag = "<p>second binding tag</p>";
		let colorfull = ref(false);
		let error = ref(false);
		let ajustStyle = computed(function() {
			return {
				bgGreen : colorfull.value,
				error : error.value
			}
		});

		function getName() {
			return "Anil Sidhu"
		}
		function getCount() {
			count.value+=1;
		}
		function writeConsole(){
			console.log("mouse moved");
		}
		function toggleColorfull() {
			colorfull.value = !colorfull.value;
		}
		function addError() {
			error.value = !error.value;
		}

		return {email, getName, getCount, writeConsole, count, error,
			htmlBinding, tag, colorfull, toggleColorfull, ajustStyle, addError
		}
	}
}
</script>

<style scoped>
	.bgGreen {
		background-color: green;
	}
	.error {
		color : red;
	}
</style>