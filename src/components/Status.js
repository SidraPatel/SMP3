import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';

const Status = ({ backgroundColor, barStyle = 'default', ...props }) => {
    return (
        <View style={[styles.statusBar, { backgroundColor }]}>
            <StatusBar translucent backgroundColor={backgroundColor} barStyle={barStyle} {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    statusBar: {
        height: StatusBar.currentHeight,
    },
});

export default Status;
