import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import {FontSize, hp} from '../utils/Dimension';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cardslocation from '../components/Cardslocation';
import {Colors} from '../styles/StyleGuide';

const Location = () => {
  return (
    <View style={styles.container}>
      <BackgroundImage source={require('../assets/Image/mapp.jpeg')}>
        <TouchableOpacity style={styles.locationBtn}>
          <View style={styles.iconbtn}>
            <FontAwesome6
              name={'location-crosshairs'}
              size={30}
              color={'white'}
            />
          </View>
          <View style={styles.txtbtn}>
            <Text style={styles.nearbytxt}>Nearby Location</Text>
          </View>
          <View style={styles.iconbtn}>
            <FontAwesome name={'plus'} size={30} color={'white'} />
          </View>
        </TouchableOpacity>

        <View style={styles.inventory}>
          <Text style={styles.inventorytxt}>Inventory</Text>
          <View style={styles.workplace}>
            <View style={styles.workheader}>
              <View style={styles.iconbtn}>
                <MaterialCommunityIcons
                  name={'microsoft-xbox-controller-menu'}
                  size={30}
                  color={'pink'}
                />
              </View>
              <View style={styles.txtbtn}>
                <Text style={styles.workplacetxt}>Workplace</Text>
              </View>
              <View style={styles.iconbtn}>
                <MaterialCommunityIcons
                  name={'menu-down'}
                  size={30}
                  color={'white'}
                />
              </View>
            </View>
            <View style={styles.cardscontainer}>
              <Cardslocation
                backgroundColor={Colors.white}
                image={require('../assets/Image/calender.png')}
                text="Technician Control Panel">
                <Text>Calender</Text>
              </Cardslocation>

              <Cardslocation
                backgroundColor={Colors.white}
                image={require('../assets/Image/clock.png')}
                text="Technician Control Panel">
                <Text>Clock</Text>
              </Cardslocation>

              <Cardslocation
                backgroundColor={Colors.white}
                image={require('../assets/Image/file.png')}
                text="Technician Control Panel">
                <Text>Report</Text>
              </Cardslocation>
            </View>
          </View>
        </View>
      </BackgroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  locationBtn: {
    height: hp(9),
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#059212',
    marginTop: '5%',
    borderRadius: 15,
    flexDirection: 'row',
  },

  iconbtn: {
    height: hp(9),
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'pink'
  },

  txtbtn: {
    height: hp(9),
    width: '60%',
    //backgroundColor:'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nearbytxt: {
    color: Colors.white,
    fontSize: FontSize(15),
  },
  workplacetxt: {
    color: Colors.black,
    fontSize: FontSize(15),
  },

  inventory: {
    height: hp(55),
    width: '100%',
    backgroundColor: '#FFB22C',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    alignItems: 'center',
  },
  inventorytxt: {
    marginTop: '5%',
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: FontSize(17),
  },

  workplace: {
    height: hp(43),
    width: '100%',
    backgroundColor: Colors.lightgrey,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    alignItems: 'center',
  },

  workheader: {
    height: hp(10),
    width: '100%',
    backgroundColor: Colors.lightgrey,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    flexDirection: 'row',
  },

  cardscontainer: {
    width: '100%',
    height: hp(20),
    backgroundColor: Colors.lightgrey,
    flexDirection: 'row',
    marginTop: '5%',
  },
});

export default Location;
