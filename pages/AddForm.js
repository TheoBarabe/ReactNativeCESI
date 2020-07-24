import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

export default function AddForm({handleAdd}){

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
	const [actors, setActors] = useState('')

    function validateAndSend(){
        handleAdd(title, desc, actors);
    }

    return (
        <View style={{flex: 1, width: '100%', paddingHorizontal: 10}}>

            <Input
                value={title}
                onChangeText={(str) => setTitle(str)}
                placeholder='Titre de la note'
                leftIcon={
                    <Icon
                    name='font'
                    size={24}
                    color='black'
                    />
                }
            />

            <Input
                value={desc}
                onChangeText={(str) => setDesc(str)}
                placeholder='Description de la note'
                multiline={true}
            />
			
			<Input
                value={actors}
                onChangeText={(str) => setActors(str)}
                placeholder='Acteurs'
                multiline={true}
            />


            <Button
                title="Ajouter"
                type="outline"
                onPress={validateAndSend}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    
})