import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MenuScreen from './containers/menu/index';
import MyScreen from './containers/MyScreen';

const MainApp = createBottomTabNavigator(
    {
        Menu: MenuScreen,
        My: MyScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const { routeName } = navigation.state;
              if (routeName === "Menu") {
                return (
                  <Image
                    source={ require('./assets/1.png') }
                    style={{ width: 20, height: 20, }} />
                );
              } else {
                return (
                  <Image
                    source={ require('./assets/1.png') }
                    style={{ width: 20, height: 20 }} />
                );
              }
            },
          }),
          tabBarOptions: {
            activeTintColor: '#FF6F00',
            inactiveTintColor: '#263238',
          },
    }
);

export default createAppContainer(MainApp);
