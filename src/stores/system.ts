import { defineStore } from "pinia";
import type Taro from "@tarojs/taro";

export interface Options {
  path: string
  scene: number
  query: object
  shareTicket: string
  referrerInfo: object
}

const useSystem = defineStore({
  id: "system",
  state: () => ({
    options: {} as Options,
    info: {} as Taro.getSystemInfoSync.Result,
  }),
  actions: {
    init(options: Options) {
      this.options = options;
    },
    setInfo(info: Taro.getSystemInfoSync.Result) {
      this.info = info;
    },
  },
});
export { useSystem };
