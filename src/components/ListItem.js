import React, { Component } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { id, title, product, laboratory_id } = this.props.campaign;
    var tmp_map = this.props.laboratories;
    console.log(tmp_map);
    var laboratoryname = tmp_map.map((laboratory) => {
      if (laboratory.id === laboratory_id) {
        return laboratory.name;
      }
    });
    console.log(laboratoryname);

    return (
      <TouchableOpacity onPress={() => Actions.photo()}>
        <CardSection style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 60, height: 45 }}
              source={require('../../appareilphoto.png')}
            />
            <Text> {laboratoryname}</Text>
            <Text> {title}</Text>
            <Text> {product}</Text>
        </CardSection>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = ({ laboratory }) => {
  const { laboratories } = laboratory;

  return { laboratories };
};

export default connect(mapStateToProps)(ListItem);
