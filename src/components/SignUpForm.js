import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import {
  emailChanged,
  passwordChanged,
  confirmPasswordChanged
} from '../actions';

class SignUpForm extends Component {
  state = { showModal: false };

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onConfirmPasswordChange(text) {
    this.props.confirmPasswordChanged(text);
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
        S'inscrire
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="exemple@exemple.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Mot de passe"
            placeholder="********"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Confirme"
            placeholder="********"
            onChangeText={this.onConfirmPasswordChange.bind(this)}
            value={this.props.confirmPassword}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          <Button onPress={() => Actions.code()}>
            Demander code de vérification
          </Button>
        </CardSection>

        {/*<CardSection>
          {this.renderButton()}
        </CardSection>*/}
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
  const { email, password, confirmPassword } = auth;

  return { email, password, confirmPassword };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  confirmPasswordChanged
})(SignUpForm);
