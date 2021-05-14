import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles } from "../Styled";
import imageStandar from "../../assets/favicon.png";

const contactList = [
    {
        user: "1234",
    },
    {
        user: "abcd",
    },
    {
        user: "otroUser",
    },
    {
        user: "aaaaaaaaaa",
    },
];

const Contacts = () => {
    const [contacts] = useState(contactList);
    let [currSelected, setCurrSelected] = useState("");

    const selectOne = (newSelected) => {
        setCurrSelected(newSelected);
        //Update Store to Chat Componentttt
        /**
         * Something like store.currentConver[]
         */
    };

    return (
        <ScrollView
            style={{
                ...styles.contactsContainer,
            }}
        >
            {contacts.map((user) => {
                let activeImage = {};
                let activeSelector = {};
                if (user.user === currSelected) {
                    activeSelector = {
                        ...styles.contactSelector,
                        ...styles.selectorActive,
                    };
                    activeImage = {
                        ...styles.contactImage,
                        ...styles.imageActive,
                    };
                } else {
                    activeImage = styles.contactImage;
                    activeSelector = styles.contactSelector;
                }
                return (
                    <View key={user.user} style={styles.contact}>
                        <View style={activeSelector} />
                        <TouchableOpacity
                            style={activeImage}
                            onPress={() => selectOne(user.user + "")}
                        >
                            <Image source={imageStandar} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                );
            })}
        </ScrollView>
    );
};

export default Contacts;
