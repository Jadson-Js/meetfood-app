// IMPORTS TO SETUP OF STORE
import { createStore } from 'vuex'

// IMPORT OF MODULES
import loginModule from './modules/loginModule'

// CREATE THE STORE
export default createStore({ 
  modules: { // Modules of store
    loginModule
  }
})