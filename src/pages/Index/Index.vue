<template>
  <view class="index pl-7.5 h-screen bg-[#b5b5b5]" :class="{ 'text-[50px]': true }">
    <text :class="['font-bold', 'text-[#ffffff]']">{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from "vue";
import "./index.css";

export default {
  setup() {
    const msg = ref("Hello World");
    return {
      msg,
    };
  },
};
</script>
