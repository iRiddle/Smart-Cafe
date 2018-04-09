<template>
<div>
  <v-jumbotron src="/static/back2.png" height="1172px">
  <Toolbar></Toolbar>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3 mt-5>
        <v-card>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <v-card-text class="headline mb-0">Логин</v-card-text>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 mx-5>
              <v-text-field
                name="email"
                label="E-mail*"
                v-model="email"
                id="email"
                prepend-icon="email">
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 mx-5>
              <v-text-field
                name="password"
                label="Пароль*"
                type="password"
                v-model="password"
                id="password"
                prepend-icon="lock">
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
              <v-flex>
              </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 mx-5>
              <v-btn block @click="login"
              :disabled = "email.length === 0 || password.length === 0"
              >Войти</v-btn>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex mt-3 xs12>
              Нет аккаунта?
              <router-link to="/signup" tag="span" style="cursor: pointer" class="blue--text">
                Регистрируйся
              </router-link>
            </v-flex>
          </v-layout>
        <v-progress-circular v-if="isClicked" indeterminate color="primary"></v-progress-circular>
        </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-jumbotron>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Toolbar from '@/components/Toolbar.vue'
export default{
  data () {
    return {
      email: '',
      password: '',
      error: null,
      sideNav: false,
      isClicked: false
    }
  },
  components: {
    Toolbar
  },
  methods: {
    async login () {
      try {
        this.isClicked = true
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'analytics'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
</style>
