import React, { useState } from "react";
import { 
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    FlatList
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    return(
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Welcome, Zé!</Text>

            <TextInput
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill}/>

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <SkillCard skill={item}/>
                )}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        fontSize: 18,
        backgroundColor: '#1F1E25',
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
        color: '#FFF'
    }
})