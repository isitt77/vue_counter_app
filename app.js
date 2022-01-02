const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name
    },
    add(num) {
      this.counter = this.counter + num
    },
    subtract(num) {
      this.counter = this.counter - num
    },
    nameInput(event) {
      this.name = event.target.value
    },
    submitForm() {
      alert("Submitted!")
    }
  },
});

app.mount('#events');
