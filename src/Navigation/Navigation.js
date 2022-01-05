import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';
import Home from '../Screen/Home';
import AddCharacter from '../Screen/AddCharacter';
import MarketCharacter from '../Screen/MarketCharacter';
import Detailcharacter from '../Screen/Detailcharacter';
import Cart from '../Screen/Cart';
import {Block} from '../Components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Screens} from '../Utils/Screens';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...globalStyles.shadow,
    }}
    onPress={onPress}>
    <Block
      flex={false}
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#add8e6',
      }}>
      {children}
    </Block>
  </TouchableOpacity>
);

const IconTab = ({iconName, text, focused}) => {
  return (
    <Block flex={false} style={{top: 5}} center middle>
      <Ionicons name={iconName} size={25} color={focused ? 'red' : 'black'} />
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: focused ? 'red' : 'black',
        }}>
        {text}
      </Text>
    </Block>
  );
};

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: 'white',
          borderRadius: 15,
          height: 90,
          ...globalStyles.shadow,
        },
      }}>
      <Tab.Screen
        name={Screens.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <IconTab
              iconName="ios-people-outline"
              text={Screens.HOME}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.MARKET}
        component={MarketCharacter}
        options={{
          tabBarIcon: ({focused}) => (
            <IconTab iconName="cart-outline" text="Market" focused={focused} />
          ),
        }}
      />
      {/* <Tab.Screen
        name={Screens.CART}
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="cart-plus"
              size={30}
              color={'black'}
            />
          ),
          tabBarButton: props => <CustomBarButton {...props} />,
        }}
      /> */}
      <Tab.Screen
        name="add3"
        component={AddCharacter}
        options={{
          tabBarIcon: ({focused}) => (
            <IconTab
              iconName="ios-people-outline"
              text="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="add4"
        component={AddCharacter}
        options={{
          tabBarIcon: ({focused}) => (
            <IconTab
              iconName="ios-people-outline"
              text="Home"
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.LOGIN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Screens.LOGIN} component={Login} />
        <Stack.Screen name={Screens.SIGNUP} component={SignUp} />
        <Stack.Screen name={Screens.BOTTOMTAB} component={BottomTab} />
        <Stack.Screen name={Screens.DETAIL} component={Detailcharacter} />
        <Stack.Screen name={Screens.CART} component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

const globalStyles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
