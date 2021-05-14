//import { useState } from 'react';
import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./Styled";
import { useSelector, useDispatch } from "react-redux";
import { pathToHome } from "../redux/actions/routeActions";

const Login = () => {
    const state = useSelector((state) => state.route.path);
    let dispatch = useDispatch();
    const toHome = () => {
        dispatch(pathToHome());
        console.log(state);
    };
    return (
        <View style={styles.login}>
            <Text style={styles.loginLabel}>User Name</Text>
            <TextInput
                textContentType='username'
                style={styles.loginInput}
                //className='login-input'
                //type='text'
                //placeholder='User Name'
                //id='username'
                //value={user}
                //onChange={(e)=>handleChange(e)}
            />

            <Text style={styles.loginLabel}>Password</Text>
            <TextInput
                textContentType='password'
                style={styles.loginInput}
                //className='login-input'
                //type='password'
                //id='password'
                //placeholder='Password'
                //value={pass}
                //onChange={(e)=>handleChange(e)}
            />
            <TouchableOpacity style={styles.loginSubmit} onPress={toHome}>
                <Text style={styles.loginSubmitText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
