<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <NavigationDrawer></NavigationDrawer>
      </v-flex>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <v-flex ml-3 mt-3>
                <span class="headline" pl-5>
                  <v-icon>face</v-icon>
                  Новый сотрудник</span>
              </v-flex>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field label="Логин" prepend-icon="perm_identity" v-model="editedItem.name"></v-text-field>
                    <v-text-field label="Пароль" prepend-icon="lock_outline" v-model="editedItem.password"></v-text-field>
                    <v-menu
                      ref="menu"
                      lazy
                      :close-on-content-click="false"
                      v-model="editedItem.menu"
                      transition="scale-transition"
                      offset-y
                      full-width
                      :nudge-right="40"
                      min-width="290px"
                      :return-value.sync="editedItem.date">
                      <v-text-field
                        slot="activator"
                        label="Дата"
                        v-model="editedItem.date"
                        prepend-icon="event"
                        readonly>
                        </v-text-field>
                      <v-date-picker v-model="editedItem.date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="editedItem.menu = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.menu.save(editedItem.date)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex xs12>
                    <v-checkbox
                      label="Редактирование меню"
                      v-model="editedItem.access_me">
                    </v-checkbox>
                    <v-checkbox
                      label="Аналитика"
                      v-model="editedItem.access_an">
                    </v-checkbox>
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
      <v-flex mt-5>
        <v-data-table
          :headers="headers"
          :items="items"
          hide-actions
          class="elevation-1">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-center">{{ props.item.password }}</td>
            <td class="text-xs-center">
              <v-checkbox primary hide-details v-on:click="false" v-model="props.item.access_me">
              </v-checkbox>
            </td>
            <td class="text-xs-center">
              <v-checkbox primary hide-details v-on:click="false" v-model="props.item.access_an">
              </v-checkbox>
            </td>
            <td class="text-xs-center">{{ props.item.date }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs10 offset-xs11 mt-3>
        <v-btn fab dark slot='activator' @click.stop="dialog = true" color="indigo">
          <v-icon dark>add</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NavigationDrawer from '@/components/App/NavigationDrawer'
import EmployersService from '@/services/EmployersService'
export default {
  components: {
    NavigationDrawer
  },
  data () {
    return {
      headers: [
        { text: 'Логин', value: 'name', align: 'left', sortable: false },
        { text: 'Пароль', value: 'password', align: 'center', sortable: false },
        { text: 'Редактирование меню', value: 'access_me', align: 'center', sortable: false },
        { text: 'Аналитика', value: 'access_an', align: 'center', sortable: false },
        { text: 'Дата', value: 'date', align: 'center', sortable: false }
      ],
      dialog: false,
      items: {},
      editedIndex: -1,
      editedItem: {
        name: '',
        password: '',
        access_me: false,
        access_an: false,
        date: null
      }
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    async save () {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
      }
      const id = this.$store.state.user._id
      try {
        await EmployersService.put(this.editedItem, id)
      } catch (err) {
        console.log(err)
      }
      this.close()
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  },
  async mounted () {
    const id = this.$store.state.user._id
    this.items = (await EmployersService.show(id)).data
  }
}
</script>

<style lang="stylus">
$spacer := 16px
.mt-5
  margin-top: ($spacer * 5) !important
</style>
