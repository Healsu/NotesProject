import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import ListItem from "../constants/ListItem";

const AllNotesScreen = ({notes}) => {
    const renderItem = (itemData)=>{
      return  <ListItem note={itemData.item.note}/>
    }
    return (
        <View style={styles.container}>
            <FlatList data={notes} renderItem={renderItem} />
        </View>
    );
};

export default AllNotesScreen;
const styles = StyleSheet.create({});