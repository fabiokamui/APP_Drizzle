import { Button, TextInput, View, Text, TouchableOpacity } from "react-native-web";
import Resultado from "./Resultado";
import { useState } from "react";
import styles from "./Style";

export default function Form()
{
    const [height, setHeight] = useState(null);
    const [weight, setWeigth] = useState(null);
    const [mensagem, setMensagem] = useState('Preencha o peso e a altura');
    const [imc, setImc] = useState(null);
    const [buttonTitle, setButtonTitle] = useState('Calcular');

    function calcularImc()
    {
        return setImc((weight/(height*height)).toFixed(2));
    }

    function validarImc()
    {
        if (weight != null && height != null) {
            calcularImc();
            setHeight(null);
            setWeigth(null);
            setMensagem('Seu IMC é igual');
            setButtonTitle('Calcular Novamente');
            return;
        }

        setImc(null)
        setButtonTitle('Calcular');
        setMensagem('Preencha o peso e a altura');
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}> 
                <Text style={styles.form}>Altura:</Text>
                <TextInput 
                    placeholder="0,00" 
                    keyboardType="numeric"
                    onChangeText={setHeight}
                    value={height}
                    style={styles.formInput}
                />

                <Text style={styles.form}>Peso:</Text>
                <TextInput 
                    placeholder="00,0 (Kg)"    
                    keyboardType="numeric"
                    onChangeText={setWeigth}
                    value={weight}
                    style={styles.formInput}
                />

                <Button title={buttonTitle} onPress={() => validarImc()}/>

                <TouchableOpacity
                    title={buttonTitle}
                    style={styles.formButtom}
                    onPress={() => validarImc()}
                >
                    <Text style={styles.formButtomText}>{buttonTitle}</Text>
                </TouchableOpacity>

            </View>
        
        <Resultado mensagem={mensagem} imc={imc}></Resultado>
        </View>
    );
}