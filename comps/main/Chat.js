import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    Keyboard,
    TouchableOpacity,
    SafeAreaView,
    Pressable,
    FlatList,
    Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Audio } from "expo-av";
import { setPlay, setStop } from "../../redux/actions/audioActions";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { styles, vh, vw } from "../Styled";
const msgs = [
    {
        text: "holiwi",
        date: "00/00/00",
        audio: "",
        image: "",
        video: "",
        type: "sent",
    },
    {
        text:
            "orem ipsum dolor sit amet consectetur adipisicing elit Aperiam molestias voluptate nihil repellendus eligendi aliquid earum eveniet perspiciatis consectetur itaque eni",
        date: "00/00/01",
        audio: "",
        image: "",
        video: "",
        type: "got",
    },
    {
        text:
            "orem ipsum dolor sit amet consectetur adipisicing elit Aperiam molestias voluptate nihil repellendus eligendi aliquid earum eveniet perspiciatis consectetur itaque eni",
        date: "00/00/02",
        audio: "",
        image: "",
        video: "",
        type: "sent",
    },
    {
        text:
            "orem ipsum dolor sit amet consectetur adipisicing elit Aperiam molestias voluptate nihil repellendus eligendi aliquid earum eveniet perspiciatis consectetur itaque eni",
        date: "00/00/03",
        audio: "",
        image: "",
        video: "",
        type: "sent",
    },
    {
        text:
            "orem ipsum dolor sit amet consectetur adipisicing elit Aperiam molestias voluptate nihil repellendus eligendi aliquid earum eveniet perspiciatis consectetur itaque eni",
        date: "00/00/04",
        audio: "",
        image: "",
        video: "",
        type: "got",
    },
    {
        text:
            "orem ipsum dolor sit amet consectetur adipisicing elit Aperiam molestias voluptate nihil repellendus eligendi aliquid earum eveniet perspiciatis consectetur itaque eni",
        date: "00/00/05",
        audio: "",
        image: "",
        video: "",
        type: "sent",
    },
    {
        text:
            "orem ipsum dolor sit amet consectetur adipisicing elit Aperiam molestias voluptate nihil repellendus eligendi aliquid earum eveniet perspiciatis consectetur itaque eni",
        date: "00/00/06",
        audio: "",
        image: "",
        video: "",
        type: "got",
    },
    {
        text:
            "orem ipsum dolor sit amet consectetur adipisicing elit Aperiam molestias voluptate nihil repellendus eligendi aliquid earum eveniet perspiciatis consectetur itaque eni",
        date: "00/00/07",
        audio: "",
        image: "",
        video: "",
        type: "got",
    },
    {
        text:
            "orem ipsum dolor sit amet consectetur adipisicing elit Aperiam molestias voluptate nihil repellendus eligendi aliquid earum eveniet perspiciatis consectetur itaque eni",
        date: "00/00/08",
        audio: "",
        image: "",
        video: "",
        type: "sent",
    },
    {
        text:
            "orem ipsum dolor sit amet consectetur adipisicing elit Aperiam molestias voluptate nihil repellendus eligendi aliquid earum eveniet perspiciatis consectetur itaque eni",
        date: "00/00/09",
        audio: "",
        image: "",
        video: "",
        type: "got",
    },
];

const AudioInMessage = (uri) => {
    const [onPlay, setOnPlay] = useState(false);
    const [renderCount, setRenderCount] = useState(0);
    const uriFromRedux = useSelector((state) => state.audio.uri);
    const onPlayFromRedux = useSelector((state) => state.audio.onPlay);
    const dispatch = useDispatch();
    useEffect(() => {
        setRenderCount(1);
    }, []);

    useEffect(() => {
        ///LA UI RESPONDE BIEN PERO EL AUDIO P¨LAYER NI AHI
        if (renderCount !== 0) {
            if (onPlayFromRedux) {
                if (uriFromRedux !== uri.uri) {
                    setOnPlay(false);
                } else {
                    setOnPlay(true);
                }
            } else {
                setOnPlay(false);
            }
        }
    }, [uriFromRedux, onPlayFromRedux]);

    const playThisAudio = async () => {
        dispatch(setPlay({ uri: uri.uri }));
    };
    const stopThisAudio = async () => {
        dispatch(setStop());
    };
    return (
        <View style={styles.oneAudio}>
            {!onPlay ? (
                <TouchableOpacity
                    onPress={playThisAudio}
                    style={styles.audioButton}
                >
                    <FontAwesome5
                        name='play'
                        size={20}
                        color='white'
                        style={styles.audioIcon}
                    />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    onPress={stopThisAudio}
                    style={styles.audioButton}
                >
                    <FontAwesome5
                        name='pause'
                        size={20}
                        color='white'
                        style={styles.audioIcon}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};
const Item = (message) => {
    const { type, text, date, audio, image, video } = message.message.item;

    let typeStyles = {};
    if (type === "got") {
        typeStyles = {
            ...styles.chatMessage,
            ...styles.gotMessage,
            transform: [{ scaleY: -1 }],
        };
    } else {
        typeStyles = {
            ...styles.chatMessage,
            ...styles.sentMessage,
            transform: [{ scaleY: -1 }],
        };
    }
    return (
        <View style={typeStyles}>
            <Text>{text}</Text>
            {audio !== "" ? <AudioInMessage uri={audio} /> : <View />}
        </View>
    );
};
const Chat = () => {
    const [messages, setMessages] = useState(msgs);
    const [input, setInput] = useState("");
    const [chatStyle, setChatStyle] = useState({ ...styles.chatContainer });
    const [recording, setRecording] = React.useState();
    const [audioRecordStyle, setAudioRecordStyle] = useState({
        ...styles.audioRecorder,
    });
    const [currentAudioUri, setCurrentAudioURI] = useState();
    const [currentAudioSound, setCurrentAudioSound] = useState(
        new Audio.Sound()
    );
    const [isLoaded, setIsLoaded] = useState(false);
    const [playable, setPlayable] = useState(true);
    const [onPlay, setOnPlay] = useState(false);
    const onPlayFromRedux = useSelector((state) => state.audio.onPlay);
    const dispatch = useDispatch();
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", selectInput);
        Keyboard.addListener("keyboardDidHide", unselectInput);
        return () => {
            Keyboard.removeListener("keyboardDidShow", selectInput);
            Keyboard.removeListener("keyboardDidHide", unselectInput);
        };
    }, []);
    const selectInput = () => {
        setChatStyle({
            ...styles.chatContainer,
            height: 45 * vh,
        });
    };
    const unselectInput = () => {
        setChatStyle({
            ...styles.chatContainer,
        });
    };
    const renderItemComponent = (message) => <Item message={message} />;

    const startRecord = async () => {
        try {
            //PERMISSION
            const permission = await Audio.requestPermissionsAsync();

            if (permission.granted) {
                setAudioRecordStyle({
                    ...styles.audioRecorder,
                    ...styles.audioRecorderActive,
                });
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    playsInSilentModeIOS: true,
                });
                //RECORD
                const recording = new Audio.Recording();
                await recording.prepareToRecordAsync(
                    Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
                );
                await recording.startAsync();
                setRecording(recording);
            } else {
                Alert.alert(
                    "Permission needed",
                    "You need to provide the request permission to access to microphone"
                );
            }
        } catch (err) {
            console.error("Failed to start recording", err);
            return;
        }
    };
    const stopRecord = async () => {
        if (recording) {
            setAudioRecordStyle({
                ...styles.audioRecorder,
            });
            await recording.stopAndUnloadAsync();
            const uri = recording.getURI();
            setRecording({});
            setCurrentAudioURI(uri);

            return;
        } else {
            return;
        }
    };

    const playMyAudio = async () => {
        if (onPlayFromRedux) {
            dispatch(setStop());
        }
        setOnPlay(true);
        if (!isLoaded) {
            await currentAudioSound.loadAsync({
                uri: currentAudioUri,
            });
            setIsLoaded(true);
        }

        await currentAudioSound.playAsync();
        currentAudioSound.setOnPlaybackStatusUpdate((status) => {
            if (status.isPlaying) {
                console.log("playing");
            } else {
                setOnPlay(false);
            }
        });
        return;
    };
    const stopMyAudio = async () => {
        console.log("stoping");
        await currentAudioSound.stopAsync();

        setOnPlay(false);
        return;
    };

    const deleteMyAudio = async () => {
        console.log("deletingggg");
        await currentAudioSound.unloadAsync();
        setCurrentAudioSound(new Audio.Sound());
        setOnPlay(false);
        setIsLoaded(false);
        setCurrentAudioURI("");
    };
    const sendMessage = () => {
        console.log("message");
        console.log(input);
        const newMessage = {
            text: input,
            date: Date.now().toString(),
            audio: currentAudioUri ? currentAudioUri : "",
            image: "",
            video: "",
            type: "sent",
        };
        console.log(newMessage);
        const newList = [newMessage, ...messages];
        setMessages(newList);
        setInput("");
        deleteMyAudio();
    };
    return (
        <View style={chatStyle}>
            <Text style={styles.chatName}>user 123</Text>
            <FlatList
                data={messages}
                renderItem={(item) => renderItemComponent(item)}
                keyExtractor={(item, index) => index.toString()}
                style={{ transform: [{ scaleY: -1 }] }}
            />
            <View style={styles.audioList}>
                {currentAudioUri ? (
                    <View style={styles.oneAudio}>
                        {!onPlay ? (
                            <TouchableOpacity
                                onPress={playMyAudio}
                                style={styles.audioButton}
                            >
                                <FontAwesome5
                                    name='play'
                                    size={20}
                                    color='white'
                                    style={styles.audioIcon}
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={stopMyAudio}
                                style={styles.audioButton}
                            >
                                <FontAwesome5
                                    name='pause'
                                    size={20}
                                    color='white'
                                    style={styles.audioIcon}
                                />
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity
                            onPress={deleteMyAudio}
                            style={styles.audioButton}
                        >
                            <FontAwesome5
                                name='trash'
                                size={20}
                                color='white'
                                style={styles.audioIcon}
                            />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View />
                )}
            </View>
            <Pressable
                onPressIn={startRecord}
                onPressOut={stopRecord}
                style={audioRecordStyle}
            >
                <MaterialIcons
                    style={styles.audioIcon}
                    name='keyboard-voice'
                    size={24}
                    color='white'
                />
            </Pressable>
            <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                multiline={true}
                style={styles.chatInput}
            />
            <TouchableOpacity
                onPress={sendMessage}
                style={styles.submitButton}
            />
        </View>
    );
};

export default Chat;
