import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Card } from './common';
import ListItem from './ListItem';
import { campaignTime } from '../actions';

class CampaignList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    if (this.props.time === 'now') {
      this.dataSource = ds.cloneWithRows(this.props.campaigns.now);
    } else if (this.props.time === 'past') {
      this.dataSource = ds.cloneWithRows(this.props.campaigns.past);
    } else if (this.props.time === 'futur') {
      this.dataSource = ds.cloneWithRows(this.props.campaigns.futur);
    }
    // this.props.campaignTime();
    console.log(this.dataSource);
  }

  renderRow(campaign) {
    return <ListItem campaign={campaign} />;
  }

  renderText() {
    if (this.props.time === 'now') {
      return <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Campagnes à réaliser</Text>;
    } else if (this.props.time === 'past') {
      return <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Campagnes déjà réalisé</Text>;
    } else if (this.props.time === 'futur') {
      return <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Campagnes futur</Text>;
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        {this.renderText()}
        <Card>
          <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </Card>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'center'
  }
};

const mapStateToProps = ({ campaign, auth }) => {
  const { user } = auth;
  const { campaigns, time } = campaign;

  return { user, campaigns, time };
};

export default connect(mapStateToProps, { campaignTime })(CampaignList);
