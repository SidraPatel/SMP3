import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import Header from '../components/Header';
import {FontSize, hp} from '../utils/Dimension';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Cards from '../components/Card';
import {Colors} from '../styles/StyleGuide';

const Home = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#102C57', '#071952']}
      start={{x: 0, y: 0}}
      end={{y: 0, x: 1}}
      locations={[0.5, 0.3]}
      useAngle={true}
      angleCenter={{x: 0.5, y: 0.5}}
      angle={60}>
      <Header>
        <View style={styles.headerchild}>
          <Feather
            style={styles.icon}
            name={'menu'}
            color={'white'}
            size={40}
          />
          <View style={styles.profile}>
            <Image
              style={styles.img}
              source={require('../assets/Image/pfimg.png')}
            />
          </View>
        </View>
        <View style={styles.headingbox}>
          <Text style={styles.heading}>Dashboard</Text>
          <Text style={styles.description}>Last scene at 12:00pm</Text>
        </View>
      </Header>
      <View style={styles.content}>
        <View style={styles.cardscontainer}>
          <View style={styles.Cardbox}>
            <View style={styles.card}>
              <Cards
                backgroundColor={Colors.white}
                image={require('../assets/Image/tech.png')}
                text="Technician Control Panel"
              />
            </View>
            <View style={styles.cardtxt}>
              <Text style={styles.cardtxtt}>Technician Control Panel</Text>
            </View>
          </View>

          <View style={styles.Cardbox}>
            <View style={styles.card}>
              <Cards
                backgroundColor={Colors.white}
                image={require('../assets/Image/car.png')}
              />
            </View>
            <View style={styles.cardtxt}>
              <Text style={styles.cardtxtt}>Vehicle Maintenance Log</Text>
            </View>
          </View>

          <View style={styles.Cardbox}>
            <View style={styles.card}>
              <Cards
                backgroundColor={Colors.white}
                image={require('../assets/Image/liveloc.png')}
                text="Live Location"
              />
            </View>
            <View style={styles.cardtxt}>
              <Text style={styles.cardtxtt}>Live Location</Text>
            </View>
          </View>

          <View style={styles.Cardbox}>
            <View style={styles.card}>
              <Cards
                backgroundColor={Colors.white}
                image={require('../assets/Image/replay.png')}
                text="Technician Control Panel"
              />
            </View>
            <View style={styles.cardtxt}>
              <Text style={styles.cardtxtt}>Replay</Text>
            </View>
          </View>

          <View style={styles.Cardbox}>
            <View style={styles.card}>
              <Cards
                backgroundColor={Colors.white}
                image={require('../assets/Image/help.png')}
                text="Technician Control Panel"
              />
            </View>
            <View style={styles.cardtxt}>
              <Text style={styles.cardtxtt}>Help</Text>
            </View>
          </View>

          <View style={styles.Cardbox}>
            <View style={styles.card}>
              <Cards
                backgroundColor={Colors.white}
                image={require('../assets/Image/sos.png')}
                text="Technician Control Panel"
              />
            </View>
            <View style={styles.cardtxt}>
              <Text style={styles.cardtxtt}>Sos</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102C57',
  },

  headerchild: {
    height: hp(10),
    width: '100%',
    //  backgroundColor:'yellow',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    padding: 10,
    //   marginTop:'2%'
  },
  profile: {
    height: hp(6),
    width: '13%',
    backgroundColor: 'white',
    marginLeft: '65%',
    //   padding:10
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
  },

  img: {
    height: 50,
    width: '80%',
    // marginTop:'10%'
  },

  headingbox: {
    height: hp(10),
    width: '100%',
    //  backgroundColor:'yellow',
    justifyContent: 'center',
    paddingHorizontal: 35,
    marginTop: '2%',
  },

  heading: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: FontSize(20),
  },
  description: {
    color: Colors.white,
    marginTop: '1%',
  },

  content: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.lightgrey,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
  },

  cardscontainer: {
    width: '100%',
    height: hp(70),
    backgroundColor: Colors.lightgrey,
    marginTop: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  Cardbox: {
    height: hp(20),
    width: '33%',
    backgroundColor: Colors.white,
    marginLeft: '11%',
    borderRadius: 15,
    elevation: 10,
    marginTop: '5%',
  },

  card: {
    height: hp(13),
    width: '100%',
    // backgroundColor:Colors.yellow
  },

  cardtxt: {
    flex: 1,
    width: '100%',
    // backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '3%',
  },

  cardtxtt: {
    color: Colors.grey,
    textAlign: 'center',
  },
});

export default Home;
