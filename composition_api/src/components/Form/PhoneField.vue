<template>
  <div class="field">
    <div class="ui left icon input big">
      <i class="phone icon"></i>

      <input type="text" placeholder="Phone" autocomplete="off" v-model="input" @keyup="validateInput"
        @blur="validateInput" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
    <div class="ui basic label pointing red" v-if="errors.phone">
      {{ errors.phone }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useFormValidation from "@/modules/useFormValidation";
export default {
  name: "PhoneField",
  setup() {
    let input = ref("");
    const { validatePhoneField, errors } = useFormValidation();
    const validateInput = () => {
      validatePhoneField("phone", input.value);
    };
    return { input, errors, validateInput };
  },
};
</script>

<style scoped>
.label {
  font-size: 11px;
}

.red {
  color: red;
}
</style>
