import React from "react"
import { View, Text } from "react-native";
import defaultStyles from "../app/config/defaultStyles";
import { Button } from "@rneui/base";

const NotificationsComponent = ({navigation}: any) => {
    return(
        <>
            <View style={defaultStyles.container}>
                <Text style={defaultStyles.text}>Notifications Component</Text>
                <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
            </View>
        </>
    )
}

export default NotificationsComponent;