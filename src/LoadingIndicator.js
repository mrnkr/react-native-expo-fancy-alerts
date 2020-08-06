import React from 'react';
import { ActivityIndicator, View, Modal, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 64,
    paddingVertical: 32,
    borderRadius: 16,
  },
});

const LoadingIndicator = ({ visible }) => (
  <Modal visible={visible} animationType="fade" transparent>
    <View style={styles.container}>
      <View style={styles.content}>
        <ActivityIndicator color="#95A5A6" size="large" />
      </View>
    </View>
  </Modal>
);

LoadingIndicator.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default LoadingIndicator;
