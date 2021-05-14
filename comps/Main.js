import React from "react";
import { View } from "react-native";
import Contacts from "./main/Contacts";
import Chat from "./main/Chat";
import { styles, vh } from "./Styled";

const Main = () => {
    return (
        <View style={styles.mainContainer}>
            <View
                style={{
                    height: 80 * vh,
                }}
            >
                <Contacts />
            </View>

            <Chat />
        </View>
    );
};

export default Main;
