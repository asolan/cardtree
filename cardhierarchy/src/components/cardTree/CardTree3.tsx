import React, { useState, useEffect } from "react";
import "./CardTree.css";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import {
  CardTreeLevelProps,
  CardTreeItemProps,
  CardTreeProps,
} from "./CardInterfaces";
import CardTreeLevel from "./CardTreeLevel";

const CardTree3: React.FC<CardTreeProps> = ({ merchantName, orgId }) => {
  const [merchantTree, setMerchantTree] = useState([]);

  const addLevel = () => {};

  const cardData = {
    levelName: "level1",
    levelItems: [
      { name: "fig1", id: "id1" },
      { name: "fig2", id: "id2" },
      { name: "fig3", id: "id3" },
      { name: "fig4", id: "id4" },
    ],
  };

  const cardList = [];

  for (let i = 0; i < 12; i++) {
    let newCardData = Object.assign({}, cardData);
    newCardData.levelName = `level${i}`;
    cardList.push(newCardData);
  }

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>{merchantName}</IonCardSubtitle>
              <IonCardTitle>{orgId}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton color="primary">Add Level</IonButton>
            </IonCardContent>
          </IonCard>
        </IonCol>
        {cardList.map((a, b) => {
          return (
            <CardTreeLevel levelName={a.levelName} levelItems={a.levelItems} />
          );
        })}
      </IonRow>
    </IonGrid>
    // <div className="scroll">
    //   { cardList.map((a,b) => {
    //       return <CardTreeLevel levelName={a.levelName} levelItems={a.levelItems} />
    //     })
    //   }
    // </div>
  );
};

export default CardTree3;
