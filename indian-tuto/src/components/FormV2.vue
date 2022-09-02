<template>
	<form>
		<label>Email :</label>
		<input type="email" placeholder="enter your email" v-model="form.email" autocomplete="on"/>
		<label>Password :</label>
		<input type="password" placeholder="enter password" v-model="form.password"/>
		<br/>
		<button type="button" @click="login">LOGIN</button>
		<p>{{form}}</p>
		<p>{{count}}</p>
	</form>
</template>

<script>
	export default {
		name: "FormV2",
		data() {
			return {
				form : {
					email : '',
					password : ''
				},
				count : 0
			}
		},
		methods:{
			login() {
				console.warn(this.form.email);
				this.count += 1;

			}
		},
		computed: {
			email(){
				return this.form.email;
			}
		},
		watch: {
			// condition on nested object => need computed
			email(val){
				if (val === 'xiaowulai@msn.com') {
					alert("watched !");
				}
			},
			// any change on count
			count() {
				alert("count clicked !");
			}

		}
	}
</script>