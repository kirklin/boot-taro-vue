import { Icon, Button, Toast } from "@nutui/nutui-taro";
import { App } from "vue";
const setNutUi = (app: App) => {
  app.use(Icon).use(Button).use(Toast);
};
export default setNutUi;
