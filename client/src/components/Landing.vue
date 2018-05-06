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
  <container>
    <v-layout>
      <v-flex xs6 mt-5 offset-xs2>
        <div class="round">
          <img src="../assets/icons/house.png" alt="house" class="position_img">
        </div>
        <div class="display-1 text_description">
          Ориентировано <br>
          на малый бизнес
        </div>
        <p class="mt-3 subheading">
          Система создана <br>
          для малого бизнеса, <br>
          что значительно ускоряет и упрощает <br>
          работу с ней
        </p>
      </v-flex>
      <v-flex xs6 mt-5>
        <img src="../assets/pictures/cafe.png" alt="cafe">
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 mt-5 offset-xs2>
        <img src="../assets/pictures/smartphone.png" alt="smartphone">
      </v-flex>
      <v-flex xs6 mt-5>
        <div class="round">
          <img src="../assets/icons/cloud.png" alt="cloud" class="position_img">
        </div>
        <div class="display-1 text_description">
          Все данные в облаке
        </div>
        <p class="mt-3 subheading">
          Вы можете управлять вашим <br>
          бизнесом в любое время из любой, <br>
          точки мира
        </p>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 mt-5 offset-xs2>
        <div class="round">
          <img src="../assets/icons/bank.png" alt="bank" class="position_img">
        </div>
        <div class="display-1 text_description">
          Доступная цена
        </div>
        <p class="mt-3 subheading">
          Цена теперь не является преградой. <br>
          Заведения любых масштабов <br>
          сможет позволить себе SmartCafe
        </p>
      </v-flex>
      <v-flex xs6 mt-5 mb-5>
        <img src="../assets/pictures/tablet.png" alt="cafe">
      </v-flex>
    </v-layout>
  </container>
  <hr class="mb-5">
  <container>
    <v-layout>
      <v-flex offset-xs2>
        <v-card class="card_settings">
          <v-card-media src="/static/card_PC.png" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Просто для сотрудника</h3>
              <div>система проста в освоении и <br>быстра в использовании<br>подробнее...</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card class="card_settings">
          <v-card-media src="/static/card_PC.png" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Удобно для руководителя</h3>
              <div>огромные возможности для<br> контроля и улучшение бизнеса<br>подробнее...</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card class="card_settings">
          <v-card-media src="/static/card_PC.png" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Законно для ФНС</h3>
              <div>печать чеков<br>и соответствие 54-ФЗ<br>подробнее...</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
  </v-layout>
  </container>
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
  .text_description {
    margin-top: 50px;
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
  .round {
    display: inline-block;
    width: 74px;
    height: 74px;
    background-color: white;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    text-align: center;
    box-shadow: -8px 5px 30px -9px #000000;
  }
  .position_img {
    padding-top: 14px
  }
  .card_settings {
    border-radius: 22px;
    height: 320px;
    width: 310px
  }
</style>
