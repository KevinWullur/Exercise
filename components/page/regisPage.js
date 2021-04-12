import React, { useState } from 'react';
import {
    Button,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import button from '../atoms/button'
import field from '../atoms/field'

const regisPage = ({setData, registerButtonHandler}) => {
    const inputs = [
        {
        inputName: "name",
        label: "Name",
        helperText: "Masukkan nama lengkap anda",
        stateHandler: useState("")
        },
        {
        inputName: "username",
        label: "Username",
        helperText: "Masukkan username anda",
        stateHandler: useState("")
        },
        {
        inputName: "email",
        label: "Email",
        helperText: "Masukkan email anda",
        stateHandler: useState("")
        },
        {
        inputName: "address",
        label: "Address",
        helperText: "Masukkan alamat anda",
        stateHandler: useState("")
        },
    ]

    const [phoneNumber, setPhoneNumber] = useState('')
    const setPhoneNumberHandler = (value) => {
        value = value.replace(/\D/g, '');   
        setPhoneNumber(value);
    }

    const regButtonHandler = () => {
        inputs.forEach(el => console.log(`${el.label} : ${el.stateHandler[0]}`))    
        registerButtonHandler() 
    }

    return (
        <SafeAreaView>
            <View style={{margin: 18, marginTop: 9}}>
                <Text style={{fontSize: 36, fontWeight: 'bold', marginBottom: 25}}>Registration</Text>
                {
                inputs.map((el, idx) => <field key={idx} label={el.label} helperText={el.helperText} stateHandler={el.stateHandler}/>)
                }
                <field label={"Phone Number"} helperText={"Masukkan Nomor Telepon Anda"} stateHandler={{'0': phoneNumber, '1': setPhoneNumberHandler}}/>
                <Button label="Register" handler={regButtonHandler}/>
            </View>
        </SafeAreaView>
    );
}

module.exports = regisPage