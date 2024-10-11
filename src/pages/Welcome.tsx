import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent } from '@ionic/react';
import './Welcome.css';

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="welcome-content">
        <IonCard className="welcome-card">
          <IonCardContent>
            <IonLabel className="welcome-text">
              <h1 className="welcome-title">Welcome to the Recipe App!</h1>
              <p>
                Discover a variety of delicious recipes that you can try at home. 
                Whether you are looking for quick meals, healthy options, or indulgent treats, 
                this app has something for everyone. Let's start cooking!
              </p>
            </IonLabel>
            <IonButton expand="full" className="go-to-recipes-button" routerLink="/recipes">
              Go to Recipes
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
