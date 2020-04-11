import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import Counter from "./src/screens/Counter";
import ColorGenerator from "./src/screens/ColorGenerator";
import ColorPicker from "./src/screens/ColorPicker";
import BoxScreen from "./src/screens/BoxScreen";
import TextScreen from "./src/screens/TextScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: Counter,
    ColorPicker: ColorPicker,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen,
    ColorGenerator: ColorGenerator,
  },
  {
    initialRouteName: "BoxScreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
