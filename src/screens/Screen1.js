import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { Colors } from '../styles/StyleGuide';
import { FontSize, hp } from '../utils/Dimension';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cardsearch from '../components/Cardsearch';
import { SearchSource } from 'jest';


const Screen1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerchild}>

                <Feather style={styles.icon} name={'menu'} color={Colors.darkgray} size={40} />
                <Text style={styles.heading}>Search Vehicle</Text>
                <View style={styles.profile}>
                    <Ionicons name={'notifications'} color={'purple'} size={40} />
                </View>
            </View>
            <View style={styles.content}>
                <ScrollView>

                <View style={styles.cardcontainer}>
                    <View style={styles.cardbox}>
                        <Cardsearch
                            backgroundColor={Colors.cardgrey}
                            text='Arm Roller'
                            text2='WRN-276'
                            image={require('../assets/Image/truck.png')}
                            image2={require('../assets/Image/star.png')} />

                    </View>
                </View>

                <View style={styles.cardcontainer}>
                    <View style={styles.cardbox}>
                        <Cardsearch
                            backgroundColor={Colors.cardgrey}
                            text='Arm Roller'
                            text2='WRN-276'
                            image={require('../assets/Image/truck.png')}
                            image2={require('../assets/Image/star.png')} />

                    </View>
                </View>

                <View style={styles.cardcontainer}>
                    <View style={styles.cardbox}>
                        <Cardsearch
                            backgroundColor={Colors.cardgrey}
                            text='Arm Roller'
                            text2='WRN-276'
                            image={require('../assets/Image/truck.png')}
                            image2={require('../assets/Image/star.png')} />

                    </View>
                </View>

                <View style={styles.cardcontainer}>
                    <View style={styles.cardbox}>
                        <Cardsearch
                             backgroundColor={Colors.cardgrey}
                            text='Arm Roller'
                            text2='WRN-276'
                            image={require('../assets/Image/truck.png')}
                            image2={require('../assets/Image/star.png')} />

                    </View>
                </View>

                <View style={styles.cardcontainer}>
                    <View style={styles.cardbox}>
                        <Cardsearch
                            backgroundColor={Colors.cardgrey}
                            text='Arm Roller'
                            text2='WRN-276'
                            image={require('../assets/Image/truck.png')}
                            image2={require('../assets/Image/star.png')} />

                    </View>
                </View>

                
                </ScrollView>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey12
    },

    headerchild: {
        height: hp(10),
        width: '100%',
        backgroundColor: Colors.grey12,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        padding: 10
        //   marginTop:'2%'
    },
    profile: {
        height: hp(6),
        width: '13%',
        backgroundColor:Colors.grey12,
        marginLeft: '19%',
        //   padding:10
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1%'

    },



    img: {
        height: 50,
        width: '80%',
        // marginTop:'10%'

    },

    heading: {
        marginLeft: '13%',
        textAlign: 'center',
        fontSize: FontSize(18),
        fontWeight: 'bold',
        marginTop: '2%'
    },
    content: {
        flex: 1,
        width: '100%',
      //  backgroundColor: 'skyblue'
    },
    cardcontainer: {
        flex:1,
        width: '100%',
      //  backgroundColor: 'orange',
        alignItems: 'center',

    },

    cardbox: {
        height: hp(10),
        width: "90%",
        backgroundColor: Colors.pastelpurple,
        borderRadius: 10,
        elevation: 10,
        marginTop: '10%',

    },




})

export default Screen1;
