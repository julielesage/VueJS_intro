<template>
  <div class="field">
    <div class="ui left icon input big">
      <i class="user icon"></i>
      <input type="text" placeholder="Full Name" autocomplete="off" v-model="input" @keyup="validateInput"
        @blur="validateInput" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
    <div class="ui basic label pointing red" v-if="errors.name">
      {{ errors.name }}
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import useFormValidation from "@/modules/useFormValidation";

export default {
  name: "NameField",
  setup() {
    let input = ref(null)
    const { validateNameField, errors } = useFormValidation();
    const validateInput = () => {
      validateNameField("name", input.value);
    };

    return {
      input,
      errors,
      validateInput
    }
  },
};
</script>
