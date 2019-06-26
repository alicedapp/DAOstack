import { createBottomTabNavigator } from 'react-navigation';
import Map from './Screens/Map'
import ExampleMaps from "./Screens/ExampleMaps";

export default createBottomTabNavigator({
  Map: Map,
  Examples: ExampleMaps,
});
