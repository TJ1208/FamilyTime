import React from "react"
import { Button, Text } from "@rneui/base";
import { StatusBar, View } from "react-native";
import defaultStyles from "../app/config/defaultStyles";

const HomeComponent = ({ navigation }: any) => {
    return (
        <>
            <View style={defaultStyles.container}>
                <Text style={defaultStyles.text}>Home Component</Text>
                <Button title="View Notifications" onPress={() => navigation.navigate('Notifications')} />
            </View>
        </>
    )


}

export default HomeComponent;