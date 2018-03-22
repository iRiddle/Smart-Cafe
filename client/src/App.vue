<template>
  <v-app>
  <v-jumbotron src="/static/back2.png" height="1172px">
  <v-navigation-drawer clipped disable-resize-watcher app v-model="sideNav">
    <v-list>
      <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
        <v-list-tile-action>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar flat class="lend">
    <v-toolbar-side-icon app
      @click.native.stop="sideNav = !sideNav"
      class="hidden-sm-and-up white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
      <router-link to="/" tag="span" style="cursor: pointer">
        SmartCafe
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
        <v-btn
          class = "white--text"
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          {{ item.title }}
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <main>
    <router-view></router-view>
  </main>
  </v-jumbotron>
  <v-footer app></v-footer>
</v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: '/',
      menuItems: [
        { title: 'Главная', link: '/main' },
        { title: 'Преимущества', link: '/advantages' },
        { title: 'Цены', link: '/price' },
        { title: 'Регистрация', link: '/signup' },
        { title: 'Войти', link: '/signin' }
      ],
      sideNav: false
    }
  }
}
</script>

<style scoped>
  .lend{
    background: none !important
  }
</style>
