<template>
<h1>Form Vue3</h1>
<form :class="form">
    <div v-if="errors.length > 0">
        <p v-for="error in errors" :key="error" :class="'red'">{{error}} must be filled</p>
    </div>
    <input type="email" placeholder="enter email" v-model="form.email" autocomplete="on" />
    <input type="password" placeholder="enter password" v-model="form.password" autocomplete="on" />
    <h3>Technology chosen</h3>
    <label for="java">Java</label>
    <input type="checkbox" v-model="form.technology" value="java" id="java" />
    <label for="typescript">Typescript</label>
    <input type="checkbox" v-model="form.technology" value="typescript" id="typescript" />
    <label for="python">Python</label>
    <input type="checkbox" v-model="form.technology" value="python" id="python" />
    <br />
    <label for="student">Student</label>
    <!-- if input radio same name => can not choose both -->
    <input type="radio" v-model="form.profession" value="student" id="student" name="profession" />
    <label for="developer">Developer</label>
    <input type="radio" v-model="form.profession" value="developer" id="developer" name="profession" />
    <br />
    <select v-model="form.country">
        <option>USA</option>
        <option>India</option>
    </select> 
    <button type="button" @click="getData">GET DATA & FOCUS REF</button>
</form>
<p>Technologies : <strong>
        <span v-for="techno in form.technology" :key="techno">{{ techno }} , </span>
    </strong></p>
<p>I am a {{form.profession}}</p>
<h4>REF</h4>
<input type="text" ref="myinput" />
</template>

<script>
import {ref, watch} from "vue";
export default {
    name: "FormV3",
    setup() {
        const form = ref({
            email: '',
            password: '',
            technology: [],
            profession: '',
            country: ''
        })
        let errors = ref([]);
        // inputs automatically fill technology[] with v-model, no need to push !
        let myinput = ref(null);

        function getData() {
			errors.value = [];
            for (const item in form.value) {
                console.log("item =>", item.value);
                if (item.value === undefined) {
                    errors.value.push(item);
					console.warn(errors);
                }
            }
            // console.log(form.value);
            myinput.value.focus();
            myinput.value = "automatically filled !";
            // console.warn("INPUT VALUE", myinput.value);
            // = this.$refs.myinput.focus() in vue2
            // this.$refs.myinput.style.color = "red";
        }

		// if reactive state : 
		// watch(()=>state.form.email, (newVal, oldVal) => {
		// 	console.log('service changed');
		// }, { deep: true });

		watch(()=> form, function(newVal){
			console.log("watching email value changing:", newVal.value.email);
		}, {deep: true});

        return {
            getData,
            myinput,
            form,
            errors
        };
    },
};
</script>

<style scoped>
.form {
    display: flex;
    justify-content: center;
    width: "100%";
}
.red {
	color : red;
}
</style>
