import { defineConfig } from "windicss/helpers";

export default defineConfig({
  prefixer: false,
  extract: {
    exclude: ["node_modules", ".git", "dist"],
  },
  theme: {
    extend: {
      fontFamily: {
        "chinese": [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "Microsoft Yahei",
          "Hiragino Sans GB",
          "Heiti SC",
          "WenQuanYi Micro Hei",
          "sans-serif",
        ],
        // 黑体
        "blackFont": [
          "-apple-system",
          "Noto Sans",
          "Helvetica Neue",
          "Helvetica",
          "Nimbus Sans L",
          "Arial",
          "Liberation Sans",
          "PingFang SC",
          "Hiragino Sans GB",
          "Noto Sans CJK SC",
          "Source Han Sans SC",
          "Source Han Sans CN",
          "Microsoft YaHei",
          "Wenquanyi Micro Hei",
          "WenQuanYi Zen Hei",
          "ST Heiti",
          "SimHei",
          "WenQuanYi Zen Hei Sharp",
          "sans-serif",
        ],
        // 楷体
        "kai": [
          "Baskerville",
          "Georgia",
          "Liberation Serif",
          "Kaiti SC",
          "STKaiti",
          "AR PL UKai CN",
          "AR PL UKai HK",
          "AR PL UKai TW",
          "AR PL UKai TW MBE",
          "AR PL KaitiM GB",
          "KaiTi",
          "KaiTi_GB2312",
          "DFKai-SB",
          "TW-Kai",
          "serif",
        ],
        // 宋体
        "song": [
          "Georgia",
          "Nimbus Roman No9 L",
          "Songti SC",
          "Noto Serif CJK SC",
          "Source Han Serif SC",
          "Source Han Serif CN",
          "STSong",
          "AR PL New Sung",
          "AR PL SungtiL GB",
          "NSimSun",
          "SimSun",
          "TW-Sung",
          "WenQuanYi Bitmap Song",
          "AR PL UMing CN",
          "AR PL UMing HK",
          "AR PL UMing TW",
          "AR PL UMing TW MBE",
          "PMingLiU",
          "MingLiU",
          "serif",
        ],
        // 仿宋体
        "fang-song": [
          "Baskerville",
          "Times New Roman",
          "Liberation Serif",
          "STFangsong",
          "FangSong",
          "FangSong_GB2312",
          "CWTEX-F",
          "serif",
        ],
      },
      fontSize: {
        "xxxs": ["0.5rem", "0.5rem"], // 8px
        "xxs": ["0.625rem", "1rem"], // 10px
        "xs": ["0.75rem", "1rem"], // 12px
        "sm": ["0.875rem", "1.25rem"], // 14px
        "base": ["1rem", "1.5rem"], // 16px
        "lg": ["1.125rem", "1.75rem"], // 18px
        "xl": ["1.25rem", "1.75rem"], // 20px
        "2xl": ["1.75rem", "2.25rem"], // 28px
      },
      colors: {
        red: {
          DEFAULT: "#ED1B26",
          dark: "#94171D",
        },
        blue: "#276EF1",
        brown: "#99644C",
        green: {
          DEFAULT: "#219653",
          dark: "#21531C",
        },
        orange: "#FB6939",
        purple: "#7356BF",
        yellow: "#EEAB27",
        black: {
          DEFAULT: "#161616",
          light: "#363636",
          pure: "#000000",
        },
        gray: {
          DEFAULT: "#222222",
          pressed: "#2b2b2b",
          subtitle: "#757575",
          description: "#AFAFAF",
          skeleton: "#2c2c2c",
          indicator: "#353535",
        },
        white: "#FFFFFF",
        background: "#282828",
        border: "rgba(117, 117, 117, 0.1)",
      },
      spacing: {
        half: "50%",
        7.5: "1.875rem",
        22: "5.375rem",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
      },
    },
  },
  corePlugins: {
    container: false,
  },
});
