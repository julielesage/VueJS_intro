<template>
  <section class="signup-view">
    <form @submit.prevent class="ui form">
      <NameField v-model="user.name" />
      <EmailField v-model="user.email" />
      <PhoneField v-model="user.phone" />
      <PasswordField v-model="user.password" />

      <button class="ui button red fluid big" @click="signUpButtonPressed" :disabled="isSignupButtonDisabled">
        SIGN UP
      </button>
    </form>
  </section>
</template>
<script>
import NameField from './NameField.vue';
import EmailField from './EmailField.vue';
import PhoneField from './PhoneField.vue';
import PasswordField from './PasswordField.vue';
import { reactive } from 'vue';
import useFormValidation from "@/modules/useFormValidation";
import useSubmitButtonState from "@/modules/useSubmitButtonState";

export default {
  name: "SignUpForm",
  components: {
    NameField,
    EmailField,
    PhoneField,
    PasswordField
  },
  setup() {
    let user = reactive({
      name: "",
      email: "",
      phone: "",
      password: "",
    });

    const signUpButtonPressed = () => {
      console.log(user);
    };

    const { errors } = useFormValidation();
    const { isSignupButtonDisabled } = useSubmitButtonState(user, errors);
    return { user, isSignupButtonDisabled, signUpButtonPressed }
  },
};
</script>
<style scoped>
.signup-view {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 450px;
}
</style>

<style>
.label {
  font-size: 11px;
}

.red {
  color: red;
}
</style>
