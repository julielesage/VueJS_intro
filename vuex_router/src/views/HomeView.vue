<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App using VueX and Router" />
		<HomeCounter />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HomeCounter from '@/components/HomeCounter.vue';

export default {
	name: 'HomeView',
	components: {
		HelloWorld,
		HomeCounter
	}
}
</script>
