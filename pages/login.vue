<template>
  <div>
    <h2>Login</h2>

    <form action="#" @submit.prevent="hanleSubmit">
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="email" type="email" v-model="form.email" solo
          >Email</v-text-field
        >
        <v-text-field label="password" v-model="form.password" solo
          >Password</v-text-field
        >
        <v-btn depressed color="primary" type="submit"> enviar </v-btn>
      </v-col>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    async hanleSubmit() {
      try {
        this.loading = true;
        this.$auth.loginWith("local", { data: this.form });
        alert("logeado con exito");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
