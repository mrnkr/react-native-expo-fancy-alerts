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
    flexDirection: 'column',
    alignItems: 'center',
    width: ALERT_WIDTH,
    paddingHorizontal: 8,
    borderRadius: 16,
  },
  iconCircle: {
    height: 64,
    width: 64,
    borderRadius: 32,
    borderWidth: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  visible, onRequestClose, icon, message, btnText, customize: { accentColor, backgroundColor, contentTextStyle, btnTextStyle }
}) => (
  <Modal visible={visible} animationType="fade" transparent onRequestClose={onRequestClose}>
    <View style={styles.container}>
      <View style={[styles.iconCircle, { top: 32, backgroundColor, borderColor: backgroundColor }]}>
        {icon}
      </View>

      <View style={[styles.content, { backgroundColor }]}>
        <View style={[styles.iconCircle, { top: -32, backgroundColor, borderColor: backgroundColor }]}>
          {icon}
        </View>

        <Text style={[contentTextStyle, { top: -16, textAlign: 'center' }]}>
          {message}
        </Text>

        <TouchableOpacity onPress={onRequestClose}>
          <View style={[styles.btnPrimary, { accentColor }]}>
            <Text style={btnTextStyle}>
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
  message: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  customize: PropTypes.shape({
    accentColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    contentTextStyle: PropTypes.object,
    btnTextStyle: PropTypes.object,
  }).isRequired,
  onRequestClose: PropTypes.func,
};

FancyAlert.defaultProps = {
  onRequestClose: () => null,
};

export default FancyAlert;
