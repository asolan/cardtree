import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
//import TreeContainer from '../components/TreeContainer';
import CardTree2 from "../components/cardTree/CardTree2";
import './Tab2.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">H2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CardTree2 merchantName="m2" orgId="o2" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
