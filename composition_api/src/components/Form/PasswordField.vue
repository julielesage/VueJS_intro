<template>
  <div class="field">
    <div class="ui left icon input big">
      <i class="lock icon"></i>

      <input type="password" placeholder="Password" autocomplete="off" v-model="input" @keyup="validateInput"
        @blur="validateInput" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
    <div class="ui basic label pointing red" v-if="errors.password">
      {{ errors.password }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useFormValidation from "@/modules/useFormValidation";
export default {
  name: "PasswordField",
  setup() {
    let input = ref("");
    const { validatePasswordField, errors } = useFormValidation();
    const validateInput = () => {
      validatePasswordField("password", input.value);
    };
    return { input, errors, validateInput };
  },
};
</script>
