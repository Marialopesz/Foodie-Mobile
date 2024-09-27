import { colors, font_size } from "../../constants/Theme"

export const styles= {
    container:{
        flex: 1,
        padding: 40,
        justifyContent:"center",
        alignItems: "center"
    },
    form:{
        width:"100%",
        marginBottom: 25,

    },
    formGroup:{
        width: "100%",
        marginTop: 50

    },
    footer:{
        width: "100%",
        position: "absolute",
        bottom:0,
        marginBottom:40,
         
    },
    footerText:{
        textAlign:"center",
        color: colors.dark_gray,
        fontSize:font_size.md
    }

}