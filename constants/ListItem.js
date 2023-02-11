import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";
import {ScreenType} from "./constants";

const ListItem = ({note}) => {
    return (
        <View>
            <Text>{note}</Text>
        </View>
    );
};

export default ListItem;
const styles = StyleSheet.create({});