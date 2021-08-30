console.log("Vue:", Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: "#app",
    data:{
        user: {
                name: 'Sergio',
                avatar: '_io',
                },
        contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                },
                ],
    },
    methods: {},
})