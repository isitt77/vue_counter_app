const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ""
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num
    },
    subtract(num) {
      this.counter = this.counter - num
    },
    nameInput(event) {
      this.name = event.target.value
    }
  },
});

app.mount('#events');
