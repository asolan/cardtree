import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TreeContainer from '../components/TreeContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">H1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TreeContainer name="Hierarchy 1" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
