import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
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
          <View>
            <View>
              <Text style={styles.textStyle}> {laboratoryname} {product}</Text>
            </View>
            <Text style={styles.textBoldStyle}> {title}</Text>
          </View>
        </CardSection>
      </TouchableOpacity>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18
  },
  textBoldStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
}

const mapStateToProps = ({ laboratory }) => {
  const { laboratories } = laboratory;

  return { laboratories };
};

export default connect(mapStateToProps)(ListItem);
