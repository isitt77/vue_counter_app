const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      fullname: ""
    };
  },
  watch: {
    name(value) {
      if (value === "") {
        this.fullname = ""
      } else {
        this.fullname = value + " " + this.lastName
      }
    },
    lastName(value) {
      if (value === "") {
        this.fullname = ""
      } else {
        this.fullname = this.name + " " + value
      }
    }
  },
  // computed: {
  //   fullName() {
  //     if (this.name !== "") {
  //       return this.name + " Isitt"
  //     }
  //   }
  // },
  methods: {
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
    },
    resetInput() {
      this.name = ""
    },
    // outputFullName() {
    //   if (this.name !== "") {
    //     return this.name + " Isitt"
    //   }
    // }
  }
});

app.mount('#events');
