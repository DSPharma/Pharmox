import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Campaign from './components/Campaign';
import EnrollementForm from './components/EnrollementForm';
import FinishInscription from './components/FinishInscription';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Pharmox" initial />
        <Scene key="subscribe" component={SignUpForm} title="Créer un compte" />
        <Scene key="code" component={EnrollementForm} title="Demande d'enrollement code" />
        <Scene key="enrollement" component={FinishInscription} titl="Finalisation" />
      </Scene>

      <Scene key="main">
        <Scene
          key="campaigns"
          component={Campaign}
          title="Campagnes"
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
