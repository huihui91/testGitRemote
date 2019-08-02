import Vue from 'vue';
import App from "./App.vue";
import getData from './util.js'
import router from './router'
const vm = new Vue({
    router,
    render: h=>h(App),
    methods:{
        async fetchData(){
            const data = await getData();
            console.log(data)
        }
    },
    created(){
        this.fetchData()
    }
}).$mount('#app')