<script setup lang="ts">
import { reactive, ref } from "vue";
import "./index.css";
import { logLabeled } from "@/utils/logger";
logLabeled("I'm ready!  ⸜(๑'ᵕ'๑)⸝⋆*", "log", "", "color: #66ccff");
const state = reactive({
  msg: "欢迎使用 NutUI3.0 开发小程序",
  msg2: "你成功了～",
  type: "text",
  show: false,
  cover: false,
});

const handleClick = (type, msg, cover = false) => {
  state.show = true;
  state.msg2 = msg;
  state.type = type;
  state.cover = cover;
};
const msg = ref("Hello World");
</script>

<template>
  <view
    class="index flex h-screen flex-col items-center bg-[#b5b5b5] text-[50px]"
  >
    <text class="font-bold text-[#ffffff]">
      {{ msg }}
    </text>
    <nut-button type="primary" @click="handleClick('text', msg, true)">
      点我
    </nut-button>
    <nut-toast
      v-model:visible="state.show"
      :msg="state.msg"
      :type="state.type"
      :cover="state.cover"
    />
  </view>
</template>
