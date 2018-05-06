<template>
<v-container>
<v-layout>
  <v-flex xs3>
    <NavigationDrawer>
    </NavigationDrawer>
  </v-flex>
</v-layout>
    <v-dialog v-model="dialog3" max-width="500">
      <v-card>
        <v-card-title>
          <v-flex ml-3>
            <span class="headline">Новая категория</span>
          </v-flex>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field prepend-icon = "picture_in_picture" label="Наименование" v-model="category.name"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout wrap>
              <v-flex xs3>
                <v-subheader class="position_sub">Фотография</v-subheader>
              </v-flex>
              <v-flex xs9>
                <v-btn round color="blue"
                dark
                @click="onPickFile"
                @change="onFilePicked">Загрузить...</v-btn>
                <input type="file" style="display: none" ref="fileInput">
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Отменить</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  <v-container fluid>
    <v-layout>
      <v-flex xs3 offset-xs2 mt-5>
        <h1 class="space">Категории</h1>
      </v-flex>
    </v-layout>
    <v-layout justify-space-between mt-2>
      <v-flex xs10 offset-xs1>
        <v-text-field
          prepend-icon="search"
          label="Найти"
          class="space_search">
        </v-text-field>
      </v-flex>
      <v-flex xs2 offset-xs7 @click.stop="dialog3 = true">
        <v-btn color="primary">Создать</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 offset-xs2>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex lg4 v-for="card in cards " :key="card.name">
              <v-card color="cyan darken-2">
                <v-card-media src="imageUrl" height="200px">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">{{card.name}}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
              </v-card>
             </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</v-container>
</template>

<script>
import NavigationDrawer from '@/components/App/NavigationDrawer'
import CategoryService from '@/services/CategoryService'
export default {
  components: {
    NavigationDrawer
  },
  data () {
    return {
      dialog3: false,
      cards: [],
      editedIndex: -1,
      category: {
        name: '',
        imageUrl: this.imageUrl,
        image: null
      }
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Добавьте файл правильного разрешения')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    async save () {
      if (this.editedIndex > -1) {
        Object.assign(this.cards[this.editedIndex], this.category)
      } else {
        this.cards.push(this.category)
      }
      const id = this.$store.state.user._id
      try {
        await CategoryService.put(this.category, id)
      } catch (err) {
        console.log(err)
      }
      this.close()
    },
    close () {
      this.dialog3 = false
      setTimeout(() => {
        this.category = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  },
  async mounted () {
    const id = this.$store.state.user._id
    this.cards = (await CategoryService.show(id)).data
  }
}
</script>

<style lang="stylus">
.position_sub {
  padding-left: 1px !important
}
.space {
  margin-left: 10px
}
.space_search {
  margin-left: 100px
}
$spacer := 12px
.mt-5
  margin-top: ($spacer * 5) !important
</style>
