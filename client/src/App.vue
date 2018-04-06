<template>
<div id = "app">
    <v-app>
      <main>
        <v-jumbotron src="/static/back2.png" height="1172px">
          <v-container fluid>
              <router-view></router-view>
          </v-container>
        </v-jumbotron>
      </main>
    </v-app>
</div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
</style>
