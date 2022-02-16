const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: ""
    };
  },
  watch: {
    counter() {
      if (this.counter > 50) {
        this.counter = 0
      }
    }
    //   name(value) {
    //     if (value === "") {
    //       this.fullname = ""
    //     } else {
    //       this.fullname = value + " " + this.lastName
    //     }
    //   },
    //   lastName(value) {
    //     if (value === "") {
    //       this.fullname = ""
    //     } else {
    //       this.fullname = this.name + " " + value
    //     }
    //   }
  },
  computed: {
    fullName() {
      if (this.name || this.lastName !== "") {
        return this.name + " " + this.lastName
      }
    }
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
