<template>
  <FormulateForm
  v-model="formValues"
>
  <FormulateInput
    name="name"
    label="What is your name?"
    validation="required"
  />
  <FormulateInput
    name="age"
    label="How old are you?"
    validation="required|number|max:120"
  />
  <FormulateInput
    type="submit"
    label="Sign up"
  />
</FormulateForm>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onClick() {
      fetch(process.env.VUE_APP_API_URL, {
        method: "POST",
      })
        .then((response) => response.text())
        .then((data) => {
          this.count = data;
        });
    },
  },
};
</script>

<style>
body,
html {
  height: 100vh;
  display: grid;
  place-items: center;
}
#root {
  margin: auto;
}
.App {
  text-align: center;
}
p {
  margin-top: 0;
  font-size: 20px;
}
button {
  font-size: 48px;
}
</style>
