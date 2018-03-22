<template>
  <div>
    <v-flex class="text-xs-center">
      <p class="white--text display-3 mt-5">
        Начните улучшать свой бизнес уже сегодня
      </p>
      <p class="white--text display-1 mt-4">
        SmartCafe - решение всех проблем малого бизнеса: <br>
        учет товаров, контроль сотрудников, отчетность перед <br>
        налоговой, аналитика вашего бизнеса
      </p>
    </v-flex>
    <v-flex xs8 offset-xs2 mt-4>
      <img src="" alt="">
    </v-flex>
    </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'Напас Лэндос',
      gradient: 'to top, #7B1FA2, #E1BEE7',
      sideNav: false,
      menuItems: [
        { title: 'Главная', link: '/main' },
        { title: 'Преимущества', link: '/advantages' },
        { title: 'Цены', link: '/price' },
        { title: 'Контакты', link: '/contacts' },
        { title: 'Войти', link: '/signin' }
      ],
      items: [
        {
          src: '/static/sm.png'
        },
        {
          src: '/static/sm.png'
        },
        {
          src: '/static/sm.png'
        },
        {
          src: '/static/sm.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .mt-5{
    margin-top: 120px !important
  }
  .height{
    height: 100vh;
  }
  .item{
    height: auto;
    max-width: 100%
  }
  .border{
    box-shadow: none !important
  }
</style>

<!-- <v-app>
  <v-toolbar app flat>
    <v-toolbar-title>SmartCafe</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>Главная</v-btn>
      <v-btn flat>Преимущества</v-btn>
      <v-btn flat>Цены</v-btn>
      <v-btn flat>Контакты</v-btn>
      <v-btn flat>Войти</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view>
      </router-view>
    </v-container>
  </v-content>
  <v-footer app>
  </v-footer>
</v-app> -->

<!--<v-jumbotron src="/static/back2.png" height="1172px">
  <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar flat>
      <v-toolbar-title class="white--text">SmartCafe</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
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
    <v-flex class="text-xs-center">
      <p class="white--text display-3 mt-5">
        Начните улучшать свой бизнес уже сегодня
      </p>
      <p class="white--text display-1 mt-4">
        SmartCafe - решение всех проблем малого бизнеса: <br>
        учет товаров, контроль сотрудников, отчетность перед <br>
        налоговой, аналитика вашего бизнеса
      </p>
    </v-flex>
    <v-flex xs8 offset-xs2>
      <v-carousel hide-controls hide-delimiters class="height border" value=0>
        <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i" class="height">
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-jumbotron>
  <p>dasdasds</p>
  <p>dasdasds</p>
  <p>dasdasds</p>
  <p>dasdasds</p>
  <p>dasdasds</p>
  <p>dasdasds</p>
  <p>dasdasds</p>
  <p>dasdasds</p>
  <p>dasdasds</p>-->
