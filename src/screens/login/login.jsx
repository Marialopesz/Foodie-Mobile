import { View, Text } from "react-native";
import { styles } from "../../screens/login/login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { TouchableOpacity } from "react-native";

function Login(){
    return <View style={styles.container}>

        <Header texto ="Acesse a sua Conta"/>
        <View style={styles.formGroup}>
        <View style={styles.form}> 
                <TextBox label ="E-mail"/>
         </View>
        <View style={styles.form}> 
                <TextBox label ="Senha" isPassword={true} />
        </View>
        </View>
        <View style={styles.form}> 

                <Button texto="Acessar"/>
                
        </View>
        <View style={styles.footer}>
            <TouchableOpacity>
            <Text style={styles.footerText}> Criar minha conta</Text>
            </TouchableOpacity>
            
        </View>


        </View>
       
}

export default Login;