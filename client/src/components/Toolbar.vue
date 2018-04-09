<template>
<div>
  <v-navigation-drawer app temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
  </v-navigation-drawer>
  <v-toolbar flat class="lend">
    <v-toolbar-side-icon
      @click.stop="sideNav = !sideNav"
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
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
         <v-btn color="white" flat @click="setLayout('app-layout')">App</v-btn>
        <v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          <v-icon left>exit_to_app</v-icon>
            Выход
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</div>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { icon: 'face', title: 'Главная', link: '/main' },
        { icon: 'face', title: 'Преимущества', link: '/advantages' },
        { icon: 'face', title: 'Цены', link: '/price' },
        { icon: 'face', title: 'Регистрация', link: '/register' },
        { icon: 'face', title: 'Войти', link: '/login' }
      ]
      return menuItems
    }
  }
}
</script>

<style>
.lend{
  background: none !important
}
</style>
