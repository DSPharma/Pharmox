import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { cipChanged, askEmail } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class EnrollementForm extends Component {
  onCipChange(text) {
    this.props.cipChanged(text);
  }

  onPressButton() {
    const { cip } = this.props;

    this.props.askEmail({ cip });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onPressButton.bind(this)}>
        Recevoir le code de vérification
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="CIP"
            placeholder="exemple: 2013540"
            onChangeText={this.onCipChange.bind(this)}
            value={this.props.cip}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { cip, loading, error } = auth;

  return { cip, loading, error };
};

export default connect(mapStateToProps, { cipChanged, askEmail })(EnrollementForm);
