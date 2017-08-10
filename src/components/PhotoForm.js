import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Camera from 'react-native-camera';
import { CardSection, Button } from './common';
import { openCamera, closeCamera } from '../actions';

class PhotoForm extends Component {
  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({ metadata: options })
      .then((data) => {
        this.props.closeCamera();
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  renderCamera() {
    if (this.props.device) {
      return (
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      );
    }
    return (
      <CardSection>
        <Button onPress={() => this.props.openCamera()}>
          Prendre une photo
        </Button>
      </CardSection>
    );
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        {this.renderCamera()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
};

const mapStateToProps = ({ camera }) => {
  const { device } = camera;

  return { device };
};

export default connect(mapStateToProps, { openCamera, closeCamera })(PhotoForm);
