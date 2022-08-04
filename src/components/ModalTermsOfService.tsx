// Lib
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View, Modal, TouchableOpacity, GestureResponderEvent } from 'react-native';

//Components
import AntDesignIcon from '../components/icons/AntDesignIcon';

const ModalTermsOfService = (
  isModalVisible: boolean | undefined,
  toggleModal: ((event: GestureResponderEvent) => void) | undefined,
) => {
  return (
    <Modal visible={isModalVisible} transparent={true}>
      <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
        <View
          style={{
            backgroundColor: '#ffffff',
            margin: 30,
            padding: 35,
            borderRadius: 10,
            marginTop: 50,
          }}
        >
          <View style={{ marginLeft: -25, marginTop: -20 }}>
            <TouchableOpacity onPress={toggleModal}>
              <AntDesignIcon name={'close'} size={24} color={'#C5CCD6'} />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <Text>
              <View>
                <Text style={{ marginBottom: 10 }}>
                  1.0. In these Rules, unless the text of the Rules expressly implies otherwise, the
                  following words and expressions will have the following meanings:
                </Text>
              </View>
              <View>
                <Text style={{ marginBottom: 10 }}>
                  1.1. Administration - the Republican public association "Let's defeat tuberculosis
                  together" represented by the Chairman of the Board Natalia Kryshtafovich, as well
                  as persons authorized by him to manage the Mobile Application, acting on behalf of
                  the owner of the Mobile Application.
                </Text>
              </View>
              <View>
                <Text style={{ marginBottom: 10 }}>
                  1.2. Information - any information posted (posted) by the User or the
                  Administration in the Mobile Application, including the User's personal data,
                  information about third parties posted by the User, links to other sites, any text
                  messages, photos (images) and other files.
                </Text>
              </View>
              <View>
                <Text style={{ marginBottom: 10 }}>
                  1.3. Personal profile - a personal section of the Mobile Application, to which the
                  User gains access after registration and authorization in the Mobile Application,
                  designed to store the User's personal data, view and manage the available
                  functionality of the Mobile Application, and receive notifications.
                </Text>
              </View>
              <View>
                <Text>
                  1.4. Mobile application - software (mobile application "ONEIMPACT BELARUS")
                  designed to work on smartphones, tablets and other mobile devices, developed for a
                  specific platform (iOS, Android, Windows Phone, etc.)
                </Text>
              </View>
            </Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ModalTermsOfService;
