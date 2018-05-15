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
      <v-flex xs12 class="dashed-box" mt-3>
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
    <v-layout mt-5>
      <v-flex xs12 sm12 md6 lg6 xl3 offset-xs2 offset-sm2 offset-md2 offset-lg1 offset-xl1>
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
      <v-flex xs12 sm12 md6 lg6 xl3 offset-xs2 offset-sm2 offset-md2 offset-lg1 offset-xl3>
        <img src="../assets/pictures/cafe.png" alt="cafe">
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm12 md6 lg6 xl6 offset-xs2 offset-sm2 offset-md2 offset-lg1 offset-xl1 mt-5>
        <img src="../assets/pictures/smartphone.png" alt="smartphone">
      </v-flex>
      <v-flex xs12 sm12 md6 lg6 xl6 offset-xs2 offset-sm2 offset-md2 offset-lg1 offset-xl3 mt-5>
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
      <v-flex xs12 sm12 md6 lg6 xl6 offset-xs2 offset-sm2 offset-md2 offset-lg1 offset-xl1 mt-5>
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
      <v-flex xs12 sm12 md6 lg6 xl6 offset-xs2 offset-sm2 offset-md2 offset-lg1 offset-xl3 mt-5 mb-5>
        <img src="../assets/pictures/tablet.png" alt="cafe">
      </v-flex>
    </v-layout>
  </container>
  <hr class="mb-5">
  <container>
    <v-layout>
      <v-flex xs4 offset-xs1>
        <v-card class="card_settings">
          <v-card-media src="/static/tablet_card.png" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0 blue_text">Просто для сотрудника</h3>
              <div>система проста в освоении и <br>быстра в использовании<br><span class="more_color">подробнее...</span></div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card class="card_settings">
          <v-card-media src="/static/pc_card.png" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0 purple_text">Удобно для руководителя</h3>
              <div>огромные возможности для<br> контроля и улучшение бизнеса<br>подробнее...</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card class="card_settings">
          <v-card-media src="/static/regis_card.png" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0 darkblue_text">Законно для ФНС</h3>
              <div>печать чеков<br>и соответствие 54-ФЗ<br>подробнее...</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex class="text-xs-center">
        <div class="display-3 purple_text mt-5">Подойдет всем</div>
      </v-flex>
    </v-layout>
    <v-layout mt-5 class="text-xs-center">
      <v-flex xs3>
        <div class="card_mini_settings">
          <img src="/static/cafe_mini_card.png" alt="">
          <h2 class="white--text display-2">Кофейня</h2>
        </div>
      </v-flex>
      <v-flex xs3>
        <div class="card_mini_settings">
          <img src="/static/track_mini_card.png" alt="">
          <h2 class="white--text display-2">Фудтрак</h2>
        </div>
      </v-flex>
      <v-flex xs3>
        <div class="card_mini_settings">
          <img src="/static/bakery_mini_card.png" alt="">
          <h2 class="white--text display-2">Пекарня</h2>
        </div>
      </v-flex>
      <v-flex xs3>
        <div class="card_mini_settings">
          <img src="/static/zone_mini_card.png" alt="">
          <h2 class="white--text display-2">Кафе</h2>
        </div>
      </v-flex>
    </v-layout>
    <v-layout mt-5>
      <v-jumbotron :gradient="gradient" dark height="300px">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-1">Попробуйте 14 дней бесплатно</h3>
            <v-layout row class="layout_options">
              <v-flex xs3 mr-3 ml-5>
                <v-text-field box label="Имя"></v-text-field>
              </v-flex>
              <v-flex xs3 mr-3 ml-3>
                <v-text-field box label="Телефон"></v-text-field>
              </v-flex>
              <v-flex xs3 ml-3>
                <v-text-field box label="Название компании"></v-text-field>
              </v-flex>
              <v-flex xs3 mt-3>
                <v-btn round color="primary" class="btn_settings">Начать</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    </v-layout>
    <v-layout mt-5>
      <v-flex xs6 offset-xs2>
        <div class="card_price">
          <div id="comment_bubble">
            <h3 class="display-3 text-xs-center pt-4 white--text">Lite</h3>
            <h3 class="title text-xs-center white--text">Навсегда</h3>
            <h3 class="title text-xs-center white--text pos">5000</h3>
          </div>
          <div>
            <ul class="dash mt-5">
              <li class="headline">Весь функционал в одном <br> устройстве</li>
              <li class="headline">Управление заказами</li>
              <li class="headline">Управление складом</li>
              <li class="headline">Просмотр аналитики и отчетов</li>
              <li class="headline">Печать чеков</li>
              <li class="headline">Совместимость с 54-ФЗ</li>
            </ul>
          </div>
          <v-flex class="text-xs-center btn_pos_lite">
            <v-btn outline color="indigo">Оформить</v-btn>
          </v-flex>
        </div>
      </v-flex>
      <v-flex xs6>
        <div class="card_price">
          <div id="blue_bubble">
            <h3 class="display-3 text-xs-center pt-4 white--text">Pro</h3>
            <h3 class="title text-xs-center white--text">в месяц</h3>
            <h3 class="title text-xs-center white--text pos">1000</h3>
          </div>
          <div>
            <ul class="dash_blue mt-5">
              <li class="headline">Все возможности тарифа lite</li>
              <li class="headline">Доступ к информации о предприятии с любого устройства</li>
              <li class="headline">Возможность подключить несколько заведений</li>
              <li class="headline">Возможность подключить несколько терминалов</li>
              <li class="headline">Отдельное приложение для руководителя</li>
            </ul>
          </div>
          <v-flex class="text-xs-center">
            <v-btn outline color="indigo">Оформить</v-btn>
          </v-flex>
        </div>
      </v-flex>
    </v-layout>
  </container>
  <v-layout>
    <v-flex mt-5>
      <Footer></Footer>
    </v-flex>
  </v-layout>
  </div>
</template>
<script>
import Toolbar from '@/components/Toolbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  data () {
    return {
      gradient: '45deg, #CD37A2, #422A7E',
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
    Toolbar,
    Footer
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
    top: 43.8%;
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
    width: 354px
  }
  .card_mini_settings {
    height: 270px;
    position: relative;
    width: 100%
  }
  h2 {
    position: absolute;
    top: 135px;
    width: 100%
  }
  .blue_text {
    color: #3597DA
  }
  .purple_text {
    color: #942E88
  }
  .darkblue_text {
    color: #070F3F
  }
  .more_color {
    color: #102266
  }
  .gradient {
    background: linear-gradient(-45deg, #CD37A2, #422A7E);
  }
  .layout_options {
    color: white;
    margin-top: 38px;
    border-radius: 20px
  }
  .btn_settings {
    margin-top: 8px;
    height: 44px
  }
  ul {
  margin: 0;
  padding: 5px
  }
  ul.dash {
    list-style-type: none;
  }
  ul.dash > li:before {
    color: #CD37A2;
    content: "- ";
    text-indent: -5px;
  }
  ul.dash_blue {
    list-style-type: none;
  }
  ul.dash_blue > li:before {
    color: #007EC4;
    content: "- ";
    text-indent: -5px;
  }
  li {
    margin-bottom: 5px;
    padding: 5px 5px 15px 15px;
    color: #6B6B6B
  }
  #comment_bubble {
    width: 424px;
    height: 162px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: #6D2D88;
    z-index: 1;
    position: relative;
  }
  #comment_bubble:before {
    content: "";
    width: 0;
    height: 0;
    right: 160px;
    bottom: -75px;
    border-radius: 100px;
    position: absolute;
    border-top: 100px solid transparent;
    border-right: 100px solid #6D2D88;
  }
  .card_price {
    width: 424px;
    height: 777px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius: 20px
  }
  .pos {
    z-index: 9999;
    padding-top: 64px;
    padding-left: 5px;
  }
  .pos:after {
    content:" \20BD";
  }
  #blue_bubble {
    width: 424px;
    height: 162px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: #007EC4;
    z-index: 1;
    position: relative;
  }
  #blue_bubble:before {
    content: "";
    width: 0;
    height: 0;
    right: 160px;
    bottom: -75px;
    border-radius: 100px;
    position: absolute;
    border-top: 100px solid transparent;
    border-right: 100px solid #007EC4;
  }
  .btn_pos_lite {
    margin-top: 38px;
  }
</style>
