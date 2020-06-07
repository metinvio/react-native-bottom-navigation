import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import theme from 'config/theme';

function TabBar({state, descriptors, navigation, liveRace}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 56,
        backgroundColor: theme.colors.black,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: isFocused ? '#ffffff' : '#757575'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
/* Color Theme Swatches in Hex */
