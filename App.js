//import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./comps/Styled";
import { LinearGradient } from "expo-linear-gradient";
//import LinearGradient from 'react-native-linear-gradient';
import { useFonts } from "expo-font";

import Login from "./comps/Login";
import Nav from "./comps/Nav";
import HomeCarrousel from "./comps/HomeCarrousel";

import AudioPlayer from "./comps/utils/AudioPlayer";

import storeFn from "./redux/store";
let store = storeFn();
import { pathToHome, pathToLogin } from "./redux/actions/routeActions";
const Chater = () => {
    const route = useSelector((state) => state.route.path);
    let dispatch = useDispatch();
    const [loaded] = useFonts({
        Rokkitt: require("./assets/Rokkitt.ttf"),
    });

    if (!loaded) {
        return null;
    }

    const toHome = () => {
        dispatch(pathToHome());
        console.log(route);
    };

    return (
        <View>
            <LinearGradient
                colors={["#000000", "rgba(6, 56, 101, 0.83)"]}
                style={styles.background}
            />
            <View style={styles.header}>
                <TouchableOpacity style={styles.title} onPress={toHome}>
                    <Text
                        style={{
                            fontFamily: "Rokkitt",
                            ...styles.headerTitle,
                        }}
                    >
                        chat
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Rokkitt",
                            ...styles.headerFocus,
                        }}
                    >
                        er
                    </Text>
                </TouchableOpacity>
                {/* DEV___ IN PROD, CHANGE == TO  !==   */}
                {route !== "/" ? <Nav /> : <View />}
            </View>
            {/* DEV___ IN PROD, CHANGE == TO  !==   */}
            {route !== "/" ? (
                <>
                    <HomeCarrousel />
                    <AudioPlayer />
                </>
            ) : (
                <Login />
            )}
        </View>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <Chater />
        </Provider>
    );
};

export default App;
