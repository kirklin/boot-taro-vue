import { Button, Icon, Toast } from "@nutui/nutui-taro";
import type { App } from "vue";
const setNutUi = (app: App) => {
  app.use(Icon).use(Button).use(Toast);
};
export default setNutUi;
