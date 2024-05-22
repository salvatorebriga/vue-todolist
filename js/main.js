const { createApp } = Vue;

createApp({
  data() {
    return {
      toDo: [
        {
          text: "Learn Vue.js",
          done: false,
        },
        {
          text: "Build a to-do list",
          done: false,
        },
      ],
    };
  },
  methods: {},
}).mount("#app");
