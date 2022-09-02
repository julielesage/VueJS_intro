<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Salut Julie"></HelloWorld>
  <HomeVue></HomeVue>
  <hr>
  <FormV3></FormV3>
  <hr>
  <h2>Login Form Vue2</h2>
  <FormV2 />
  <hr>
  <h2>Slots</h2>
  <SlotV2 name="le nom en props" :customed="false"><h1>ceci est le content en slot</h1></SlotV2>
  <SlotV2 name="default si vide" :customed="false"></SlotV2>
  <SlotV2 name="multi-slot"><p>first sentence slot</p><p>second sentence slot</p></SlotV2> 
  <SlotV2 name="multi-slot-customed naming slots" :customed="true">
	<template v-slot:header ><p>header slot customed template</p></template>
	<p>second sentence slot</p>
  </SlotV2>
  <hr>
  <DynamicTabComponent />
  <hr>
  <LifeCycleMethods />
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue';
	import HomeVue from './components/HomeVue.vue';
	import FormV3 from './components/FormV3.vue';
	import FormV2 from './components/FormV2.vue';
	import SlotV2 from './components/SlotV2.vue';
	import DynamicTabComponent from './components/DynamicTabComponent.vue';
	import LifeCycleMethods from './components/LifeCycleMethods.vue';

	export default {
		name: 'App',
		components: {
    HelloWorld,
    HomeVue,
    FormV3,
    FormV2,
	SlotV2,
	DynamicTabComponent,
	LifeCycleMethods
}
	}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
