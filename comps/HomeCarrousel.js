import React, { useState, useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import { styles, vw, vh } from "./Styled";
import { useSelector } from "react-redux";
import Main from "./Main";

const Home = () => {
    let [index] = useState(new Animated.Value(0));
    const route = useSelector((state) => state.route.path);

    useEffect(() => {
        console.log("effect called");
        if (route !== "/home") {
            if (route === "/notifications") {
                console.log("work");
                Animated.timing(index, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                }).start();
            } else if (route === "/search") {
                Animated.timing(index, {
                    toValue: 2,
                    duration: 500,
                    useNativeDriver: false,
                }).start();
            } else if (route === "/settings") {
                Animated.timing(index, {
                    toValue: 3,
                    duration: 500,
                    useNativeDriver: false,
                }).start();
            }
        } else {
            Animated.timing(index, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }).start();
        }
        console.log(index);
    }, [route]);
    return (
        <Animated.View
            style={{
                width: 300 * vw,
                flexDirection: "row",
                height: 100 * vh,
                transform: [
                    {
                        translateX: index.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, parseInt(-100 * vw)],
                        }),
                    },
                ],
            }}
        >
            <Main />

            <View style={{ width: 90 * vw, height: 80 * vh, margin: 5 * vw }}>
                <Text style={{ color: "#fff" }}>Uno</Text>
            </View>
            <View style={{ width: 90 * vw, height: 80 * vh, margin: 5 * vw }}>
                <Text style={{ color: "#fff" }}>Dos</Text>
            </View>
            <View style={{ width: 90 * vw, height: 80 * vh, margin: 5 * vw }}>
                <Text style={{ color: "#fff" }}>Tres</Text>
            </View>
        </Animated.View>
    );
};

export default Home;
