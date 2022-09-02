<template>
	<div class="about">
		<h1>This is an about page</h1>
		<HomeCounter />
	</div>
</template>

<script>
import HomeCounter from '@/components/HomeCounter.vue';
export default {
	name: "AboutView",
	components: {
		HomeCounter
	}
}
</script>

<style>
</style>
