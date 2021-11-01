import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        marginVertical: 10
    }
})