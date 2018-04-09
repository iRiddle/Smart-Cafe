<template>
<div>
  <v-navigation-drawer fixed v-model="sideNav">
    <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                <span class="orange--text">{{fullName}}</span>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
       <v-divider></v-divider>
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
        <v-divider></v-divider>
      </v-list>
  </v-navigation-drawer>
  <v-toolbar fixed class="lend">
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
        <v-btn class = "white--text" flat @click="logout">Выйти</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</div>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      userName: ''
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { icon: 'face', title: 'Статистика', link: '/main' },
        { icon: 'account_box', title: 'Сотрудники', link: '/advantages' },
        { icon: 'restaurant_menu', title: 'Меню', link: '/price' },
        { icon: 'store', title: 'Склад', link: '/register' },
        { icon: 'credit_card', title: 'Товары', link: '/login' },
        { icon: 'book', title: 'Заказы', link: '/login' }
      ]
      return menuItems
    },
    fullName: {
      get: function () {
        return this.$store.state.user.name
      },
      set: function (newValue) {
        this.userName = this.$state.state.user.name
      }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'landing'
      })
    }
  }
}
</script>

<style scoped>
.lend{
  background: none !important
}
</style>
