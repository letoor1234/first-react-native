import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles, vw } from "./Styled";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import {
    pathToNotif,
    pathToSearch,
    pathToSetts,
} from "../redux/actions/routeActions";

const Nav = () => {
    const route = useSelector((state) => state.route.path);
    let [opacity] = useState(new Animated.Value(0));
    let [translation] = useState(new Animated.Value(0));
    let [size] = useState(new Animated.Value(3));
    let dispatch = useDispatch();

    useEffect(() => {
        if (route !== "/") {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }).start();
        }
    }, []);
    useEffect(() => {
        if (route !== "/home") {
            if (route === "/notifications") {
                console.log("work");
                Animated.sequence([
                    Animated.timing(size, {
                        toValue: 0,
                        duration: 100,
                        useNativeDriver: false,
                    }),
                    Animated.timing(translation, {
                        toValue: 0.99,
                        duration: 200,
                        useNativeDriver: false,
                    }),
                    Animated.timing(size, {
                        toValue: 1,
                        duration: 200,
                        useNativeDriver: false,
                    }),
                ]).start();
            } else if (route === "/search") {
                Animated.sequence([
                    Animated.timing(size, {
                        toValue: 0,
                        duration: 100,
                        useNativeDriver: false,
                    }),
                    Animated.timing(translation, {
                        toValue: 1.65,
                        duration: 200,
                        useNativeDriver: false,
                    }),
                    Animated.timing(size, {
                        toValue: 1,
                        duration: 200,
                        useNativeDriver: false,
                    }),
                ]).start();
            } else if (route === "/settings") {
                Animated.sequence([
                    Animated.timing(size, {
                        toValue: 0,
                        duration: 100,
                        useNativeDriver: false,
                    }),
                    Animated.timing(translation, {
                        toValue: 2.31,
                        duration: 200,
                        useNativeDriver: false,
                    }),
                    Animated.timing(size, {
                        toValue: 1,
                        duration: 200,
                        useNativeDriver: false,
                    }),
                ]).start();
            }
        } else {
            Animated.sequence([
                Animated.timing(size, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: false,
                }),
                Animated.timing(translation, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }),
            ]).start();
        }
    }, [route]);
    const handleTouch = (i) => {
        if (i === 0) {
            dispatch(pathToNotif());
        } else if (i === 1) {
            dispatch(pathToSearch());
        } else if (i === 2) {
            dispatch(pathToSetts());
        }
    };
    return (
        <View style={styles.navContainer}>
            <Animated.View
                style={{
                    ...styles.navSelector,
                    left: translation.interpolate({
                        inputRange: [0, 3],
                        outputRange: [parseInt(1.5 * vw), parseInt(49.4 * vw)],
                    }),
                    opacity: opacity,
                    width: size.interpolate({
                        inputRange: [0, 1],
                        outputRange: [parseInt(3 * vw), parseInt(11 * vw)],
                    }),
                    height: size.interpolate({
                        inputRange: [0, 1],
                        outputRange: [parseInt(3 * vw), parseInt(11 * vw)],
                    }),
                    top: size.interpolate({
                        inputRange: [0, 1],
                        outputRange: [parseInt(6 * vw), parseInt(2.19 * vw)],
                    }),
                    borderRadius: size.interpolate({
                        inputRange: [0, 1],
                        outputRange: [parseInt(1.5 * vw), parseInt(5.5 * vw)],
                    }),
                }}
            />
            <View style={styles.nav}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => handleTouch(0)}
                >
                    <FontAwesome
                        name='bell'
                        size={20}
                        color={`${
                            route == "/notifications"
                                ? "#152432"
                                : "rgba(141, 199, 253, 0.54)"
                        }`}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => handleTouch(1)}
                >
                    <FontAwesome5
                        name='search'
                        size={20}
                        color={`${
                            route == "/search"
                                ? "#152432"
                                : "rgba(141, 199, 253, 0.54)"
                        }`}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => handleTouch(2)}
                >
                    <FontAwesome5
                        name='cog'
                        size={20}
                        color={`${
                            route == "/settings"
                                ? "#152432"
                                : "rgba(141, 199, 253, 0.54)"
                        }`}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Nav;
