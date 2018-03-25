<template>
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
                name="email_enter"
                label="E-mail*"
                id="email_enter">
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 mx-5>
              <v-text-field
                name="password_enter"
                label="Пароль*"
                id="password_enter">
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
              <v-flex>
              </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 mx-5>
              <v-btn block>Войти</v-btn>
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
        </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default{
  data () {
    return {
      name: 'Erg'
    }
  }
}
</script>
<style scoped>
</style>
