# ReactNavigation

# Usage of react navigation

1. Add this to package.json (if you havn't got it yet)

```javascript
"dependencies": {
    "@react-native-community/masked-view": "^0.1.6",
    "@react-navigation/bottom-tabs": "^5.0.3",
    "@react-navigation/native": "^5.0.3",
    "@react-navigation/stack": "^5.0.3",
    "react-native-vector-icons": "^6.6.0",
    "react-native-gesture-handler": "^1.5.6",
    "react-native-reanimated": "^1.7.0",
    "react-native-safe-area-context": "^0.7.2",
    "react-native-screens": "^2.0.0-beta.2",
}
```

2. If you want to use `react-native-vector-icons` - Add this to `ios/Podfile` - for IOS

```ruby
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

3. If you want to use `react-native-vector-icons` - Add this to `ios/../Info.plist` - for IOS

```html
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>
```

4. If you want to use `react-native-vector-icons` - Add this to `android/build.gradle` - for ANDROID

```javascript
project.ext.vectoricons = [
    iconFontNames: [ 'Feather.ttf', 'Ionicons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

5. Add this imports to your file

```javascript
// this needs to be added in root file
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

// this needs to be added when using stack navigation
import {createStackNavigator} from '@react-navigation/stack';

// this needs to be added when creating bottom tabs navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
```

6. Create Stack navigator inside NavigatorContainer

```javascript
// TODO
```

7. Create Tab navigator inside NavigatorContainer

```javascript
import 'react-native-gesture-handler';
import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// create bottom tabs navigation
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={/* Component to render at Home route */}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Icon name="home" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={/* Component to render at Settings route */}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Icon name="settings" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
