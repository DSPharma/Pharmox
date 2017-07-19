import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection } from './common';
import { campaignsFetch } from '../actions';

class Campaign extends Component {
  componentWillMount() {
    this.props.campaignsFetch(this.props.user);
  }

  render() {
    const { sectionText, viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <Card>
          <CardSection>
            <Text style={{ fontWeight: 'bold' }}>En cour</Text>
          </CardSection>
          <CardSection style={sectionText}>
            <Text style={{ fontSize: 24 }}>16 </Text><Text>campagnes à effectuer</Text>
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Text style={{ fontWeight: 'bold' }}>À venir</Text>
          </CardSection>
          <CardSection style={sectionText}>
            <Text style={{ fontSize: 24 }}>4 </Text><Text>campagnes à venir</Text>
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Text style={{ fontWeight: 'bold' }}>Déjà validées</Text>
          </CardSection>
          <CardSection style={sectionText}>
            <Text style={{ fontSize: 24 }}>24 </Text><Text>campagnes déjà réalisées</Text>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  sectionText: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
};

const mapStateToProps = ({ auth, campaign }) => {
  const { user } = auth;
  // const { campaigns } = campaign;

  return { user };
};

export default connect(mapStateToProps, { campaignsFetch })(Campaign);
