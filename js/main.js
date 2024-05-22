const { createApp } = Vue;

createApp({
  data() {
    return {
      newTodoText: "",
      toDo: [
        {
          text: "Preset: Learn Vue.js",
          done: false,
        },
        {
          text: "Preset: Build a to-do list",
          done: false,
        },
      ],
    };
  },
  methods: {
    addItem() {
      if (this.newTodoText.trim() !== "") {
        this.toDo.push({ text: this.newTodoText, done: false });
        this.newTodoText = "";
      }
    },

    removeItem(index) {
      this.toDo.splice(index, 1);
    },
  },
}).mount("#app");
