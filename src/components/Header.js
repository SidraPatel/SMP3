import React from 'react';
import { StyleSheet, View } from 'react-native';
import { hp } from '../utils/Dimension';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({children, style, ...props}) => {
    return (
        <View style={[styles.container, style]}>
             <LinearGradient
              colors={['#102C57', '#071952']}
              style={styles.header}
          start={{x:0, y:0}}
          end={{y:0,x:1}}
          locations={[0.5,0.3]}
          useAngle={true}
          angleCenter={{x:0.5,y:0.5}}
          angle={60}
          {...props}
          >
{children}
            </LinearGradient>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%'
    },
    header:{
        height:hp(25),
        width:'100%',

    },
})

export default Header;
