const App = {
    data() {
        return{
            count: Math.floor(Math.random()*100),
            title: 'count',
            subTitle: '',
            isVisible: true,
            char: 'a',
            students: [
                {name: 'John', age: 20},
                {name: 'Jane', age: 21},
                {name: 'Jack', age: 22},
            ],
            person: {
                name: 'John',
                age: 26,
                job: 'teacher'
            },
            textValue: '',

            // HW
            btnTitle: 'Кнопку нажали',
            btnCount: 0,
            items: [
                { id: "id1", message: "Mike" },
                { id: "id2", message: "15 years old" },
                { id: "id3", message: "Danny" },
                { id: "id4", message: "25 years old" },
            ],
        }
    },
    computed: {
        counter: function(){
            return this.textValue.length
        }
    },
    watch:{
        textValue: function(){
            console.log(this.textValue)
        }
        // Тоже самое, что и 
        // textValue: function(value) {
        //      console.log(value)
        // }
    },
    methods: {
        saySmtg(event) {
            this.subTitle = event.target.value
        },
        addCount(num, str, event) {
            this.count += num
            this.title = str
            if (num === 5) {
                event.target.style.color = 'green'
            } else if (num === -5) {
                event.target.style.color = 'red'
            }
        },

        // HW
        say(choice){
            if (choice === 1) {
                alert('Hello')
            } else if (choice === 2) {
                alert('What had happened?')
            }
        },
    }
}

Vue.createApp(App).mount('#app')