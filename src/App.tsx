import {IonApp, IonMenu, IonHeader, IonToolbar, IonContent,IonList, IonItem, IonLabel,
  IonRouterOutlet, IonMenuButton, setupIonicReact, } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Recipes from './pages/Recipes';
import ShoppingList from './pages/ShoppingList';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonLabel>Menu</IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/welcome">
            <IonLabel>Welcome</IonLabel>
          </IonItem>
          <IonItem routerLink="/recipes">
            <IonLabel>Recipes</IonLabel>
          </IonItem>
          <IonItem routerLink="/shopping-list">
            <IonLabel>Shopping List</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonReactRouter>
      <IonRouterOutlet id="main-content">
        <Route exact path="/" render={() => <Redirect to="/welcome" />} />
        <Route path="/welcome" component={Welcome} exact={true} />
        <Route path="/recipes" component={Recipes} exact={true} />
        <Route path="/shopping-list" component={ShoppingList} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
    <IonHeader>
      <IonToolbar>
        <IonMenuButton slot="start" />
        <IonLabel>My App</IonLabel>
      </IonToolbar>
    </IonHeader>
  </IonApp>
);

export default App;
