const app = Vue.createApp({
    data() {
        return {
            inputTask: '',
            tasks: [],
            isShow: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
        },
        showList() {
            this.isShow = !this.isShow;
        }
    }
});
app.mount('#assignment');