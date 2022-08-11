import { defineStore } from "pinia";

const useCounter = defineStore({
  id: "count",
  state: () => ({
    number: 0,
  }),
  actions: {
    increment() {
      this.number++;
    },
    add(number) {
      this.number += number;
    },
  },
});
export { useCounter };
