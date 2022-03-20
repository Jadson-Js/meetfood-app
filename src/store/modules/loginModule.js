// EXPORTANDO MODULE
export default {
    // STATE = Guarda informações semelhante a um banco de dados
    state: () => ({ 
        isLogged: false,
        users: [{
            name: 'admin',
            password: 123
        }, {
            name: 'Jadson',
            password: 123
        }]
    }),

    // GETTERS = Requisita os dados do state podendo trata-los
    getters: {
        getIsLogged(state) {  
            /*  Parametros =
                state,       // will be module local state if defined in a module.
                getters,     // module local getters of the current module
                rootState,   // global state
                rootGetters  // all getters
            */
            return state.isLogged
        }
    },

    // MUTATIONS = São metodos diretos q editam elementos do 'state'
    mutations: {
        setLogin(state, data) { // Parametros = 'state' e argumentos se houverem
            const {name, password} = data // Desestruturando o argumento

            // Requisite o 'users' do 'state' | '.some' = vai retornar valores boleano caso encontre algum elemento q se enquadra nos requisitos
            const authentic = state.users.some((el) => el.name == name && el.password == password)

            if( authentic ) { // Se os dados forem autentico, log esse host
                state.isLogged = true
            }
        },

        setLogout(state) { // Desloge esse host
            state.isLogged = false
        }
    },

    // ACTION = Tem o controle dos 'mutations', que serão usado no objetivo
    actions: {
        changeLogin({ commit }, data) {
            /* Parametros
                state,      // same as `store.state`, or local state if in modules
                rootState,  // same as `store.state`, only in modules
                commit,     // same as `store.commit`
                dispatch,   // same as `store.dispatch`
                getters,    // same as `store.getters`, or local getters if in modules
                rootGetters // same as `store.getters`, only in modules
            */

            commit('setLogin', data.value)
        },

        changeLogout({ commit }) {
            commit('setLogout')
        }
    }
}