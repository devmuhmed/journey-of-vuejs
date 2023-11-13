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
            title: 'my beautiful project 2',
            desc: 'this is my first vue project',
            sections,
            link: {
                name: "yes, go to devmuhmed",
                url: "https://www.facebook.com/devmuhmed"
            }
        }
    }
})

app.mount('body');
