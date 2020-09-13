import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faPlus, faSearch)
Vue.component('fa-icon', FontAwesomeIcon)