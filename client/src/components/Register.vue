<template>
  <v-container grid-list-md text-xs-center fluid pa-0>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-text class="display-1">Smart Cafe</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 offset-xs3 mt-5>
        <v-card>
          <v-card-text class="headline mb-0" pt-5>Создай аккаунт</v-card-text>
          <div class="">Здесь будет просто умопомрачительный текст о великолепной, неповторимой
            бесподобной и просто замечательной системе автоматизации предприятий малого бизнеса в сфере питания
          </div>
          <v-layout row mx-4 my-4>
            <v-text-field
              name="first_name"
              label="Имя"
              placeholder ="Введите ваше имя"
              id="first_name">
            </v-text-field>
            <v-text-field
              name="second_name"
              label="Фамилия"
              placeholder="Введите вашу фаилию"
              id="second_name">
            </v-text-field>
          </v-layout>
          <v-flex mx-4>
            <v-text-field
              label="E-mail"
              v-model="email"
              v-on:click="selectEmail()"
              :rules="[rules.required, rules.email]">
            </v-text-field>
          </v-flex>
          <v-layout row mx-4 my-4>
            <v-text-field
              name="password"
              type="password"
              label="Пароль"
              placeholder ="Введите пароль"
              id="password">
            </v-text-field>
            <v-text-field
              name="confirm_password"
              type="password"
              label="Подтвердите пароль"
              placeholder="Введите пароль еще раз"
              id="confirm_password">
            </v-text-field>
          </v-layout>
          <div class="text-xs-center">
            <v-btn round color="blue" class="white--text"> Регистрация</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
