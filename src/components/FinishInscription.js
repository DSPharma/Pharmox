import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { enrollementCodeChanged, registerUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class EnrollementForm extends Component {
  onEnrollementCodeChange(text) {
    this.props.enrollementCodeChanged(text);
  }

  onPressButton() {
    const { email, password, confirmPassword, enrollementCode } = this.props;

    this.props.registerUser({ email, password, confirmPassword, enrollementCode });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onPressButton.bind(this)}>
        Terminez l'inscription
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text>Un email a été envoyé à l'adresse suivante {this.props.emailsend}</Text>
        </CardSection>

        <CardSection>
          <Text>
            Afin de finalisé votre inscription veuillez rentrer votre code de vérification :
          </Text>
        </CardSection>

        <CardSection>
          <Input
            label="enrollement code"
            placeholder="exemple: 3en9o..."
            onChangeText={this.onEnrollementCodeChange.bind(this)}
            value={this.props.enrollementCode}
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
  const { email, password, emailsend, confirmPassword, enrollementCode, error, loading } = auth;

  return { email, password, emailsend, confirmPassword, enrollementCode, error, loading };
};

export default connect(mapStateToProps, { enrollementCodeChanged, registerUser })(EnrollementForm);
