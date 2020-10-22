import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
//import TreeContainer from '../components/TreeContainer';
import CardTree3 from "../components/cardTree/CardTree3";
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
            <IonTitle size="large">H3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CardTree3 merchantName="m3" orgId="o3" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
