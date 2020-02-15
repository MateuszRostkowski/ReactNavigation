# ReactNavigation

# Usage of react navigation

1. Add this to package.json (if you havn't got it yet)

```javascript
"dependencies": {
    "@react-native-community/masked-view": "^0.1.6",
    "@react-navigation/bottom-tabs": "^5.0.3",
    "@react-navigation/native": "^5.0.3",
    "@react-navigation/stack": "^5.0.3",
    "react-native-gesture-handler": "^1.5.6",
    "react-native-reanimated": "^1.7.0",
    "react-native-safe-area-context": "^0.7.2",
    "react-native-screens": "^2.0.0-beta.2",
}
```

2. Add this to `Podfile`

```ruby
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

3. Add this to `Info.plist`

```Plist
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

4. Add this imports to your file

```javascript
// this needs to be added in root file
import {NavigationContainer} from '@react-navigation/native';

// this needs to be added when using stack navigation
import {createStackNavigator} from '@react-navigation/stack';

// this needs to be added when creating bottom tabs navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
```
