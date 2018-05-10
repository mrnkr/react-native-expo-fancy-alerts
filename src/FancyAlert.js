import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import { material, human, iOSUIKit } from 'react-native-typography';
import PropTypes from 'prop-types';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ALERT_WIDTH = SCREEN_WIDTH - (SCREEN_WIDTH / 4);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    width: ALERT_WIDTH,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  iconCircle: {
    height: 64,
    width: 64,
    borderRadius: 32,
    borderWidth: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFFFFF',
  },
  btnPrimary: {
    width: ALERT_WIDTH - 16,
    margin: 8,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
  },
});

const FancyAlert = ({
  visible, onRequestClose, icon, color, message, btnText,
}) => (
  <Modal visible={visible} animationType="fade" transparent onRequestClose={onRequestClose}>
    <View style={styles.container}>
      <View style={[styles.iconCircle, { top: 32, backgroundColor: color }]}>
        {icon}
      </View>

      <View style={styles.content}>
        <View style={[styles.iconCircle, { top: -32, backgroundColor: color }]}>
          {icon}
        </View>

        <Text style={[
            Platform.OS === 'ios' ? human.body : material.body1,
            { top: -16, textAlign: 'center' },
          ]}
        >
          {message}
        </Text>

        <TouchableOpacity onPress={onRequestClose}>
          <View style={[styles.btnPrimary, { backgroundColor: color }]}>
            <Text
              style={[
                Platform.OS === 'ios' ? iOSUIKit.bodyEmphasized : material.button,
                { color: '#FFFFFF', marginLeft: 8 },
              ]}
            >
              {btnText}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

FancyAlert.propTypes = {
  visible: PropTypes.bool.isRequired,
  icon: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func,
};

FancyAlert.defaultProps = {
  onRequestClose: () => null,
};

export default FancyAlert;
