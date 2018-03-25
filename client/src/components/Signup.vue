<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3 mt-5>
        <v-card>
          <v-container>
            <v-layout row>
              <v-flex xs12>
                <v-card-text class="headline mb-0">Создай аккаунт</v-card-text>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs-12 mx-5>
                <v-text-field
                  name="fullName"
                  label="Имя*"
                  v-model="fullName"
                  :rules="[() => fullName.length > 0 || 'Это поле обязательно к заполнению']"
                  id="fullName">
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs-12 mx-5>
                <v-text-field
                    name="email"
                    label="E-mail*"
                    v-model = "email"
                    id="email"
                    :rules="[rules.required, rules.email]">
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs-12 mx-5>
                <v-text-field
                  name="password"
                  label="Пароль*"
                  v-model="password"
                  :rules="[() => password.length > 0 || 'Это поле обязательно к заполнению']"
                  type="password"
                  id="password">
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs-12 mx-5>
                <v-text-field
                  name="confirmPassword"
                  label="Подтвердить пароль*"
                  type="password"
                  v-model="confirmPassword"
                  :rules="[comparePasswords]"
                  id="confirmPassword">
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex mb-5>
                <v-btn @click="signup">Регистрация</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      tabs: null,
      rules: {
        required: (value) => !!value || 'Некорректный e-mail.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'E-mail некорректен.'
        }
      }
    }
  },
  methods: {
    async signup () {
      await AuthenticationService.signup({
        email: this.email,
        password: this.password
      })
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Пароль не совпадает' : ''
    }
  }
}
</script>
<style scoped>

</style>
