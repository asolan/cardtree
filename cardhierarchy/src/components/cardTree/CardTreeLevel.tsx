import React, { useState, useEffect } from "react";
import "./CardTreeLevel.css";
import {
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonButton,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import {
  CardTreeLevelProps,
  CardTreeItemProps,
  CardTreeProps,
} from "./CardInterfaces";

const CardTreeLevel: React.FC<CardTreeLevelProps> = ({
  levelItems,
  levelName,
}) => {

  return (
    <IonCol>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{levelName}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            {levelItems.map((i) => {
              return <IonItem key={i.id}>{i.name + ' ' + i.id}</IonItem>;
            })}
          </IonList>
          <IonButton color="primary">Add Level</IonButton>
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
};

export default CardTreeLevel;
