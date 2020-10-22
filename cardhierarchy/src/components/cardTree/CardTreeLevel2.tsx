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
  CardTreeLevelProps2,
  CardTreeItemProps2,
  CardTreeProps,
} from "./CardInterfaces";
import { attachProps } from "@ionic/react/dist/types/components/utils";

const CardTreeLevel2: React.FC<CardTreeLevelProps2> = ({
  levelItems,
  levelName,
  showNextLevel,
  levelNumber
}) => {

  const [highlightNumber, setHighlightNumber] = useState(-1);

  // useEffect(() => {
  //   setButColor("primary");
  // }, []);

  return (
    <IonCol>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{levelName}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            {levelItems.map((i,c) => {
              return <IonItem key={i.id}>
                      <IonButton
                        onClick={() => {
                          setHighlightNumber(c);
                          showNextLevel(levelNumber, i);
                        }} 
                        color={(c === highlightNumber) ? "secondary" : "primary"}>
                        {i.name + ' ' + i.id}
                      </IonButton>
                    </IonItem>;
            })}
          </IonList>
          {/* <IonButton color="primary">Add Level</IonButton> */}
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
};

export default CardTreeLevel2;
