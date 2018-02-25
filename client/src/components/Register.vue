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
