<template>
  <div>
  <v-jumbotron src="/static/back2.png" height="1172px">
  <Toolbar></Toolbar>
  <NavigationDrawer></NavigationDrawer>
  <container class="text-xs-center">
    <v-layout row wrap>
      <v-flex>
        <p class="white--text display-3 mt-5">
          Начните улучшать свой бизнес уже сегодня
        </p>
        <p class="white--text display-1 mt-4">
          SmartCafe - решение всех проблем малого бизнеса: <br>
          учет товаров, контроль сотрудников, отчетность перед <br>
          налоговой, аналитика вашего бизнеса
        </p>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 class="dashed-box">
        <img src="/static/frame.png" class="pos" alt="">
        <v-carousel hide-controls hide-delimiters class="border height green-box">
          <v-carousel-item>
            <img src="/static/data.png" alt="">
          </v-carousel-item>
          <v-carousel-item>
            <img src="/static/data.png" alt="">
          </v-carousel-item>
          <v-carousel-item>
            <img src="/static/data.png" alt="">
          </v-carousel-item>
          <v-carousel-item>
            <img src="/static/data.png" alt="">
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </container>
  </v-jumbotron>
  </div>
</template>
<script>
import Toolbar from '@/components/Toolbar.vue'
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        { title: 'Главная', link: '/main' },
        { title: 'Преимущества', link: '/advantages' },
        { title: 'Цены', link: '/price' },
        { title: 'Регистрация', link: '/signup' },
        { title: 'Войти', link: '/signin' }
      ],
      items: [
        {
          src: '/static/data.png'
        },
        {
          src: '/static/data.png'
        },
        {
          src: '/static/data.png'
        },
        {
          src: '/static/data.png'
        }
      ]
    }
  },
  components: {
    Toolbar
  }
}
</script>

<style scoped>
  .lend{
    background: none !important
  }
  .dashed-box {
    z-index: 1;
  }
  .green-box {
    position: absolute;
    z-index: 2;
    top: 38.5%;
    left: -0.75%;
    height: auto;
    max-width: 100%;
  }
  .pos{
    position: absolute;
    max-width: 100%;
    height: auto;
    z-index: 3;
  }
  .mt-5{
    margin-top: 120px !important
  }
  .border{
    box-shadow: none !important
  }
  .pos{
    position: relative;
  }
  @media screen and (max-width: 1124px){
    .green-box{
      /* position: absolute;
      z-index: 2;
      top: 50%;
      left: -0.75%;
      height: auto;
      max-width: 100%; */
      top: 43.5%;
      left: -0.9%;
    }
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
