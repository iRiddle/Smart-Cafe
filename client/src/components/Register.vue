<template>
  <v-app>
  <v-container text-xs-center fluid px-0 py-0>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text class="blue white--text display-1" >SmartCafe</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 offset-xs4 mt-5>
        <v-card dark>
        <v-flex xs-12>
          <v-tabs fixed-tabs grow>
            <v-tab>
              Регистрация
            </v-tab>
            <v-tab>
              Вход
            </v-tab>
          </v-tabs>
        </v-flex>
          <v-flex xs12>
            <v-card-text class="headline mb-0">Создай аккаунт</v-card-text>
          </v-flex>
          <v-layout>
            <v-flex xs-6 mx-5>
              <v-text-field
                name="first_name"
                label="Имя*"
                id="first_name">
              </v-text-field>
            </v-flex>
            <v-flex xs-6 mx-5>
              <v-text-field
                name="second_name"
                label="Фамилия*"
                id="second_name">
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-flex xs-12 mx-5>
            <v-text-field
                name="email"
                label="E-mail*"
                id="email">
            </v-text-field>
          </v-flex>
          <v-layout>
            <v-flex xs-6 mx-5>
              <v-text-field
                name="first_name"
                label="Пароль*"
                type="password"
                id="first_name">
              </v-text-field>
            </v-flex>
            <v-flex xs-6 mx-5>
              <v-text-field
                name="second_name"
                label="Подтвердить пароль*"
                type="password"
                id="second_name">
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-flex xs-6 pb-3>
            <v-btn round class="blue white--text">Регистрация</v-btn>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      email: 'E-mail',
      password: 'password',
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
    selectEmail: function () {
      this.email = ''
    }
  }
}

</script>
<style scoped>
</style>
