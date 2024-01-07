import React from "react";
import HomeComponent from "../../components/HomeComponent";
import NotificationsComponent from "../../components/NotificationsComponent";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import defaultStyles from "../config/defaultStyles";
import PushNotificationComponent from "../../components/PushNotificationComponent";

const AppNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: defaultStyles.Header.backgroundColor,
            },
            headerTitleStyle: {
                fontSize: defaultStyles.Header.fontSize
            }
        }}>
            <Tab.Screen name="Home" component={HomeComponent} />
            <Tab.Screen name="Notifications" component={NotificationsComponent} options={{ headerTitle: "Taylor\'s Notifications"}} />
            <Tab.Screen name="Push Notificaiton" component={PushNotificationComponent} />
        </Tab.Navigator>
    )
}

export default AppNavigator;