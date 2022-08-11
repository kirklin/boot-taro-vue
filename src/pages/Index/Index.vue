<template>
  <view class="index pl-7.5 h-screen bg-[#b5b5b5]" :class="{ 'text-[50px]': true }">
    <text :class="['font-bold', 'text-[#ffffff]']">{{ msg }}</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "./index.css";
import { logLabeled } from "../../utils/logger";
logLabeled("I'm ready!  ⸜(๑'ᵕ'๑)⸝⋆*", "log", "", "color: #66ccff");

const msg = ref("Hello World");
</script>
