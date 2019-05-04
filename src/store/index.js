// basically entry point to Vuex.
// where we combine all our modules.

import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

// use as plugin
Vue.use(Vuex);

// create store
export default new Vuex.Store({
    modules: {
        todos
    }
});