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

2. Add this imports to your file

```javascript
// this needs to be added in root file
import { NavigationContainer } from '@react-navigation/native';

// this needs to be added when using stack navigation
import { createStackNavigator } from '@react-navigation/stack';

// this needs to be added when creating bottom tabs navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
```