import axios from 'axios';

const state = {
    todos: []
};

// to get the state(data) into the component to display.
const getters = {
    allTodos: state => state.todos
};

// make action: call a request to get a response. & then call mutation
const actions = {
    async fetchTodos({ commit }) {
        // TODO: GET the todos.
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data)
    },
    // TODO: POST create the todo.
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
        commit('newTodo', response.data)
    },
    // TODO: DELETE todo.
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },

    async filterTodos({ commit }, e) {
        // Get Selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', response.data)
    }
};

// mutate a state. CHANGE it
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) =>
        state.todos = state.todos.filter(todo => todo.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
}