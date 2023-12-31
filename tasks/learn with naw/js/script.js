const sections = [
    {
        id: 1,
        title: "this is section 1",
        desc: "this is section 1 descrption"
    },
    {
        id: 2,
        title: "this is section 2",
        desc: "this is section 2 descrption"
    },
    {
        id: 3,
        title: "this is section 3",
        desc: "this is section 3 descrption"
    },
    {
        id: 4,
        title: "this is section 4",
        desc: "this is section 4 descrption"
    }
]
const app = Vue.createApp({
    // data: function() {
        data() {
        return {
            title: 'simple project',
            desc: 'this is my first vue project',
            sections,
            link: {
                name: "yes, go to devmuhmed",
                url: "https://www.facebook.com/devmuhmed"
            },
            isDark: false,
            count: 0,
        }
    },
    methods: {
        switchMode(){
            this.isDark =! this.isDark
        },
        increment(){
            this.count += 1
        },
        decrement(){
            this.count -= 1;
        }
    }
})
app.component('page-header', {
    template: `
        <header id="myid" class="header">
            <h1 class="header-heading"> {{ title }} </h1>
            <p class="header-desc"> {{ desc }} </p>
        </header>
    `,
    props: ['title', 'desc'],
});

app.component('page-section',{
    template: `
        <section class="section">
            <h3>{{ title  }}</h3>
            <p>{{ desc }}</p>
        </section>
    `,
    props:['title', 'desc'],

})
app.mount('body');
