import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Campaign from './components/Campaign';
import EnrollementForm from './components/EnrollementForm';
import FinishInscription from './components/FinishInscription';
import CampaignList from './components/CampaignList';
import PhotoForm from './components/PhotoForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene sceneStyle={{ paddingTop: 65 }} key="login" component={LoginForm} title="Pharmox" initial />
        <Scene sceneStyle={{ paddingTop: 65 }} key="subscribe" component={SignUpForm} title="Créer un compte" />
        <Scene sceneStyle={{ paddingTop: 65 }} key="code" component={EnrollementForm} title="Demande d'enrollement code" />
        <Scene sceneStyle={{ paddingTop: 65 }} key="enrollement" component={FinishInscription} titl="Finalisation" />
      </Scene>

      <Scene key="main">
        <Scene key="campaigns" component={Campaign} title="Campagnes" initial />
        <Scene key="campaignsList" component={CampaignList} title="Campagnes" />
        <Scene key="photo" component={PhotoForm} title="Prendre la photo" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
