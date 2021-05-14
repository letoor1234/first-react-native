import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");
///
export const vw = width / 100;
export const vh = height / 100;
///
export const styles = StyleSheet.create({
    background: {
        position: "absolute",
        width,
        height,
        zIndex: -1,
    },
    header: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 3 * vw,
        paddingTop: 10 * vw,
        paddingHorizontal: 6 * vw,
        position: "relative",
    },
    title: {
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    headerTitle: {
        fontSize: 12 * vw,
        color: "rgba(255, 255, 255, 0.57)",
    },
    headerFocus: {
        fontSize: 12 * vw,
        color: "rgba(141, 117, 239, 0.57)",
    },
    navContainer: {
        width: (50 - 3) * vw,
        paddingTop: 2 * vw,
    },
    nav: {
        alignSelf: "flex-end",
        width: 30 * vw,
        flexDirection: "row",
        color: "rgba(141, 199, 253, 0.54)",
    },
    navSelector: {
        position: "absolute",
        width: 3 * vw,
        height: 3 * vw,
        borderRadius: 1.5 * vw,
        backgroundColor: "rgba(141, 117, 239, 1)",
        top: 6 * vw,
        left: 1.5 * vw,
    },
    navItem: {
        width: 20,
        height: 20,
        margin: 7,
    },
    login: {
        width: 75 * vw,
        justifyContent: "space-between",
        alignContent: "center",
        margin: 12.5 * vw,
        marginTop: width / 3,
    },
    loginLabel: {
        fontSize: 5 * vw,
        color: "rgba(255, 255, 255, 0.57)",
        textAlign: "center",
        margin: 2.8 * vw,
        marginBottom: 0,
    },
    loginInput: {
        backgroundColor: "#C4C4C4",
        borderRadius: 4,
        textAlign: "center",
    },
    loginSubmit: {
        backgroundColor: "#65A864",
        padding: 1.3 * vw,
        borderRadius: 4,
        marginTop: width / 40,
    },
    loginSubmitText: {
        fontSize: 5 * vw,
        color: "rgba(255, 255, 255, 0.919)",
        textAlign: "center",
    },
    mainContainer: {
        width: 100 * vw,
        height: 80 * vw,
        flexDirection: "row",
    },
    contactsContainer: {
        width: 22 * vw,
    },
    contact: {
        width: 22 * vw,
        height: 22 * vw,
    },
    contactSelector: {
        position: "absolute",
        marginHorizontal: 1 * vw,
        marginVertical: 1 * vw,
        backgroundColor: "#65A864",
        width: 0,
        height: 0,
        transform: [{ rotate: "45deg" }],
        borderRadius: 10 * vw,
    },
    selectorActive: {
        width: 21 * vw,
        height: 21 * vw,
        marginVertical: 0.5 * vw,
        marginHorizontal: 0.5 * vw,
    },
    contactImage: {
        width: 18 * vw,
        height: 18 * vw,
        borderRadius: 8, //9*vw,

        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 2 * vw, height: 2 * vw },
        marginHorizontal: 2 * vw,
        marginVertical: 2 * vw,
        //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    },
    imageActive: {
        borderRadius: 9 * vw,
        overflow: "hidden",
    },
    chatContainer: {
        width: 74 * vw,
        height: 80 * vh,
        marginHorizontal: 1.5 * vw,
        borderRadius: 8,
        backgroundColor: "rgba(207, 207, 207, 0.57)",
        zIndex: 3,
    },
    chatName: {
        fontSize: 5 * vw,
        margin: 0.1 * vw,
        color: "rgba(0, 0, 0, 0.55)",
        textAlign: "center",
    },
    chatMessage: {
        fontSize: 5 * vw,
        maxWidth: 60 * vw,
        marginVertical: 1 * vw,
        marginLeft: 2 * vw,
        marginRight: 5 * vw,
        paddingVertical: 1 * vw,
        paddingHorizontal: 2.5 * vw,
        borderRadius: 4,
    },
    gotMessage: {
        alignSelf: "flex-start",
        backgroundColor: "#BED3C3",
    },
    sentMessage: {
        alignSelf: "flex-end",
        backgroundColor: "#BEC0D3",
    },
    chatInput: {
        margin: 1 * vw,
        backgroundColor: "#C4C4C4",
        borderRadius: 4,
        paddingVertical: 1.5 * vw,
        paddingLeft: 2.5 * vw,
        paddingRight: 8.5 * vw,
        fontSize: 5 * vw,
        maxHeight: 35 * vh,
    },
    submitButton: {
        position: "absolute",
        width: 10 * vw,
        height: 10 * vw,
        bottom: 1.8 * vw,
        right: 0.7 * vw,
        borderLeftColor: "#418BB5",
        borderLeftWidth: 8 * vw,
        borderTopColor: "transparent",
        borderTopWidth: 5 * vw,
        borderBottomColor: "transparent",
        borderBottomWidth: 5 * vw,
    },
    audioRecorder: {
        width: 12 * vw,
        height: 10 * vw,
        backgroundColor: "#65A864",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 6 * vw,
    },
    audioRecorderActive: {
        width: 15 * vw,
        height: 15 * vw,
        borderRadius: 7.5 * vw,
    },
    audioIcon: {
        alignSelf: "center",
    },
    audioList: {
        position: "absolute",
        flexDirection: "column-reverse",
        right: 1 * vw,
        bottom: 14 * vw,
    },
    oneAudio: {
        width: 27 * vw,
        height: 12 * vw,
        backgroundColor: "rgba(141, 117, 239, 1)",
        alignSelf: "center",
        opacity: 1, //0.5,
        justifyContent: "space-around",
        borderRadius: 6 * vw,
        flexDirection: "row",
        marginVertical: 1 * vw,
        padding: 0.5 * vw,
    },
    audioButton: {
        alignSelf: "center",
    },
    /////_END
});
/*
export const ChatView=styled.main`
    .chat-view {
        overflow-y: scroll,
        display: flex,
        flex-direction: column,
        max-height: 83%,
    }
    
    .chat-form {
        position: absolute,
        bottom: .5em,
        left: 1em,
        right: 1em,
    }
    
    .chat-text {
        width: 100%,
        font-size: 1em,
        font-family: 'Ropa Sans', sans-serif,
        margin: .4em 0,
        padding: .5em 1.9em .5em 1em,
        background: #C4C4C4,
        border-radius: 4px,
        border-style: none,
        outline: none,
        position: relative,
    }
    
    .chat-submit {
        position: absolute,
        right: .5em,
        top: 50%,
        transform: translateY(-50%),
        border: none,
        background: transparent,
        width: 0,
        height: 0,
        border-top: solid .9em transparent,
        border-bottom: solid .9em transparent,
        border-left: solid 1.5em #418BB5,
    }
    
    .chat-msg {
        max-width: 80%,
        margin: .4em 0,
        padding: .5em 1em,
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        border-radius: 4px,
        position: relative,
    }
    
    .chat-msg.-sent {
        background: #BEC0D3,
        align-self: flex-end,
    }
    
    .chat-msg.-got {
        background: #BED3C3,
        align-self: flex-start,
    }
`*/
