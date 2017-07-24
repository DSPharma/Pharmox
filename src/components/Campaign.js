import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  CAMPAIGN_NOW,
  CAMPAIGN_FUTUR,
  CAMPAIGN_PAST
} from '../actions/types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, CardSection, Spinner } from './common';
import { laboratoriesFetch, campaignsFetch, campaignNow, campaignPast, campaignFutur } from '../actions';

class Campaign extends Component {
  componentWillMount() {
    console.log(this.props.user.email);
    this.props.laboratoriesFetch(this.props.user);
    this.props.campaignsFetch(this.props.user);
  }

  render() {
    const { sectionText, viewStyle } = styles;

    if (this.props.loading || this.props.loadinglab) {
      return <Spinner size="large" />;
    }
    return (
      <View style={viewStyle}>
        <Card>
          <TouchableOpacity
              onPress={() => {
                this.props.campaignNow();
                Actions.campaignsList();
              }
            }
          >
            <CardSection>
              <Text style={{ fontWeight: 'bold' }}>En cour</Text>
            </CardSection>
            <CardSection style={sectionText}>
              <Text style={{ fontSize: 24 }}>{this.props.campaigns.now_nbr}</Text><Text> campagnes à effectuer</Text>
            </CardSection>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity
              onPress={() => {
                this.props.campaignFutur();
                Actions.campaignsList();
              }
            }
          >
            <CardSection>
              <Text style={{ fontWeight: 'bold' }}>À venir</Text>
            </CardSection>
            <CardSection style={sectionText}>
              <Text style={{ fontSize: 24 }}>{this.props.campaigns.futur_nbr}</Text><Text>campagnes à venir</Text>
            </CardSection>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity
              onPress={() => {
                this.props.campaignPast();
                Actions.campaignsList();
              }
            }
          >
            <CardSection>
              <Text style={{ fontWeight: 'bold' }}>Déjà validées</Text>
            </CardSection>
            <CardSection style={sectionText}>
              <Text style={{ fontSize: 24 }}>{this.props.campaigns.past_nbr}</Text><Text>campagnes déjà réalisées</Text>
            </CardSection>
        </TouchableOpacity>
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

const mapStateToProps = ({ auth, campaign, laboratory }) => {
  const { user } = auth;
  const { campaigns, loading } = campaign;
  const { loadinglab } = laboratory;

  return { user, campaigns, loading, loadinglab };
};

export default connect(mapStateToProps, { laboratoriesFetch, campaignsFetch, campaignNow, campaignPast, campaignFutur })(Campaign);
