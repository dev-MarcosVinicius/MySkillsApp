import React from "react";
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            {...rest}
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
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        borderRadius: 7,
        padding: 12,
        alignItems: 'center',
        marginVertical: 5
    }
})