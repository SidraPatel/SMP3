
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const BackgroundImage = ({ source, children }) => (
    <ImageBackground source={source} style={styles.background}>
        {children}
    </ImageBackground>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', 
        width: '100%',
        height: '100%',
    },
});

export default BackgroundImage;
