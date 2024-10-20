import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { RootSiblingParent } from 'react-native-root-siblings';


export default function App() {
  return (
    <Provider store={store}>
        <RootSiblingParent>
          <AppNavigator />
        </RootSiblingParent>
    </Provider>
  );
}
