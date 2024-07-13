import React,{useState} from 'react';
import { ScrollView, StyleSheet,Text, Touchable, TouchableOpacity, View } from 'react-native';
import { FontSize, hp } from '../utils/Dimension';
import { Colors } from '../styles/StyleGuide';
import Menu from '../components/Menu';
import Cardsearch from '../components/Cardsearch';
import Cards3 from '../components/cards3';
import { inlineStyles } from 'react-native-svg';
import Status from '../components/Status';



const Last = () => {



    const handleTabChange2 = (tabName) => {
        setActiveTab2(tabName);
    };
    const [activeTab, setActiveTab] = useState('Home');
    const [showcards, setshowcards] = useState(false)

    const [showresolved, setshowresolved]=useState(false)
    const [activeTab2, setActiveTab2] = useState('');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
        setshowdata(tabName === 'Lodge Complain');
        setshowresolved(tabName === 'Resolved Complain');
      
          };

          const handleSee =()=>{
            setshowcards(!showcards)

          }

          const handleShowLess=()=>{
            setshowcards(false)
          }

    return (
        <View style={styles.container}>
             <Status backgroundColor="#561dc5" barStyle="light-content" />
           <View style={styles.header}>
           <Menu activeTab={activeTab} setActiveTab={handleTabChange} />
        </View>
        <View style={styles.content}>
            <ScrollView>
            <View style={styles.cardscontainer}>

             <Cards3 backgroundColor={Colors.white}
             image={require('../assets/Image/bell.png')}
             text='Electricy'
             text2='80 units'
             text3='Pay'
             text4='02'
             text5='days'
             />

<Cards3 backgroundColor={Colors.white}
             image={require('../assets/Image/bell.png')}
             text='Water'
             text2='80 units'
             text3='Pay'
             text4='04'
             text5='days'
             />

<Cards3 backgroundColor={Colors.white}
             image={require('../assets/Image/bell.png')}
             text='Rent'
             text2='80 units'
             text3='Pay'
             text4='08'
             text5='days'
             />

{!showcards && (
                        <TouchableOpacity onPress={handleSee}>
                            <Text style={styles.seemore}>See More</Text>
                        </TouchableOpacity>
                    )}

             </View>
{
    showcards && (
        <View style={styles.morecards}>
<Cards3 backgroundColor={Colors.white}
             image={require('../assets/Image/bell.png')}
             text='Internet'
             text2='80 units'
             text3='Pay'
             text4='02'
             text5='days'
             />

<Cards3 backgroundColor={Colors.white}
             image={require('../assets/Image/bell.png')}
             text='Grocery'
             text2='80 units'
             text3='Pay'
             text4='02'
             text5='days'
             />


             <Cards3 backgroundColor={Colors.white}
             image={require('../assets/Image/bell.png')}
             text='Meal'
             text2='80 units'
             text3='Pay'
             text4='02'
             text5='days'
             />
             <TouchableOpacity onPress={handleShowLess}>
                <Text style={styles.seemore}>Show Less</Text>
             </TouchableOpacity>

             <View style={styles.bottomview}></View>
             
             </View>

    )         
}


</ScrollView>
            </View>
            
        </View>
     
    );
}

const styles = StyleSheet.create({
    container:{flex:1},

    header:{
        height:hp(15),
        width:'100%',
        backgroundColor:'#561dc5'
    },
    content:{
        flex:1,
        width:'100%',
        backgroundColor:'#655DBB'
    },

    cardscontainer:{
        flex:1,
        width:'90%',
       // backgroundColor:'yellow',
        marginTop:'5%',
        alignSelf:'center'
    },

    seemore:{
        textAlign:'center',
        color:'black',
        fontSize:FontSize(15),
       // marginTop:'1%',
        
    },
    morecards:{
        flex:1,
        width:'90%',
      //  backgroundColor:'yellow',
        marginTop:'5%',
        alignSelf:'center'
    },
    bottomview:{
        height:hp(10),
        width:'100%'
        
    }

})

export default Last;
