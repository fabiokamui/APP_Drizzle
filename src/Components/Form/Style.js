import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    formContext: {
        widht:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#fff",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30
    },
    form: {
        with:"100%",
        height:"auto",
        marginTop:30,
        padding:10 
    },
    formaLabel: {
        color:"#000000",
        fontSize:18,
        paddingLeft:20    
    },
    formInput: {
        widht:"90%",
        height:40,
        borderRadius:30,
        margin:12,
        paddingLeft:10
    },
    formButton: {
        borderRadius:30,
        alignItems:"center",
        justifyContente:"center",
        width:"90%",
        backgroundcolor:"#D62955",
        paddingBottom:14,
        paddingTop:14,
        marginLeft:12,
        marginRight:12,
        margin:30  
    },
    formButtomText: {
        fontSize:20,
        color:"#fff"
    },
})

export default styles
