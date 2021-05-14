import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setStop } from "../../redux/actions/audioActions";
import { Audio } from "expo-av";

const AudioPlayer = () => {
    const onPlay = useSelector((state) => state.audio.onPlay);
    const audioUri = useSelector((state) => state.audio.uri);
    const [thisAudioSound, setThisAudioSound] = useState(new Audio.Sound());
    const dispatch = useDispatch();

    useEffect(() => {
        if (onPlay && audioUri !== "") {
            playThisAudio();
        } else if (!onPlay && audioUri !== "") {
            stopThisAudio();
        }
    }, [onPlay]);

    const playThisAudio = async () => {
        //Unload current
        await thisAudioSound.unloadAsync();

        //Load current
        await thisAudioSound.loadAsync({
            uri: audioUri,
        });
        //Play current
        await thisAudioSound.playAsync();
        thisAudioSound.setOnPlaybackStatusUpdate((status) => {
            if (!status.isPlaying) {
                dispatch(setStop());
            }
        });
        return;
    };
    const stopThisAudio = async () => {
        await thisAudioSound.stopAsync();
        await thisAudioSound.unloadAsync();
        setThisAudioSound(new Audio.Sound());
        dispatch(setStop());
        return;
    };
    return <View />;
};

export default AudioPlayer;
