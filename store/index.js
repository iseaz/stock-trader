import Vuex from 'vuex'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
import * as actions from './actions'

const store = () => new Vuex.Store({
	modules: {
		stocks,
		portfolio
	},
	actions
})

export default store