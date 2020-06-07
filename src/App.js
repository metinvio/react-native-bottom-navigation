import React, {useState} from 'react';
import {View, StatusBar, SafeAreaView, Text, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import theme from 'config/theme';
import TabBar from 'components/tabbar';
import OnBoarding from 'screens/onboarding';
import SearchScreen from 'screens/search';
import SearchItemDetailScreen from 'screens/more';
import MoreScreen from 'screens/more';
import Tab2 from 'screens/more';
import Tab3 from 'screens/more';

const OnBoardingStack = createStackNavigator();
const AppStack = createStackNavigator();
const TabStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const SearchStack = createStackNavigator();

const OnBoardingScreen = ({callback}) => (
  <OnBoardingStack.Navigator>
    <OnBoardingStack.Screen
      name="OnBoarding"
      component={OnBoarding}
      initialParams={{callback: () => callback()}}
      options={{headerShown: false}}
    />
  </OnBoardingStack.Navigator>
);

const AppScreen = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Main" component={TabScreen} />
    </AppStack.Navigator>
  );
};

const TabScreen = () => (
  <TabStack.Navigator>
    <TabStack.Screen
      name="RN_BOTNAV"
      component={TabNavigator}
      options={{
        headerTitle: (
          <Text style={{color: theme.colors.white}}>BotNavExample</Text>
        ),
        headerTitleAlign: 'center',
        headerTitleStyle: {
          ...Platform.select({android: {paddingTop: 10, height: 56}}),
        },
        headerStyle: {
          backgroundColor: theme.colors.black,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        cardStyle: {
          backgroundColor: 'red',
        },
      }}
    />
  </TabStack.Navigator>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Search'}
      tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name={'Search'} component={Search} />
      <Tab.Screen name={'Tab 2'} component={Tab2} />
      <Tab.Screen name={'Tab 3'} component={Tab3} />
      <Tab.Screen name={'More'} component={MoreScreen} />
    </Tab.Navigator>
  );
};

const Search = () => {
  return (
    <SearchStack.Navigator headerMode={'none'}>
      <SearchStack.Screen name={'search_main'} component={SearchScreen} />
      <SearchStack.Screen
        name={'search_details'}
        component={SearchItemDetailScreen}
      />
    </SearchStack.Navigator>
  );
};

const App = () => {
  const [onBoarding, setOnBoarding] = useState(true);

  if (onBoarding) {
    return (
      <View style={{flex: 1}} as={SafeAreaView}>
        <NavigationContainer>
          <OnBoardingScreen
            callback={() => {
              setOnBoarding(false);
            }}
          />
        </NavigationContainer>
      </View>
    );
  } else {
    return (
      <>
        <StatusBar backgroundColor={theme.colors.black} />
        <NavigationContainer>
          <AppScreen />
        </NavigationContainer>
      </>
    );
  }
};

export default App;
