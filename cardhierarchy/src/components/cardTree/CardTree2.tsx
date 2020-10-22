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
  CardTreeLevelProps2,
  CardTreeItemProps2,
  CardTreeProps,
} from "./CardInterfaces";
import CardTreeLevel2 from "./CardTreeLevel2";

const CardTree2: React.FC<CardTreeProps> = ({ merchantName, orgId }) => {
  const [cardList, setCardList] = useState(Array<CardTreeLevelProps2>());

  useEffect(() => {
    let newCardData = Object.assign({}, sampleData);
    newCardData.levelName = `level1`;
    let newList = Array<CardTreeLevelProps2>();
    newList.push(newCardData);
    setCardList(newList);
    cardList.push();

  }, []);

  const addLevel = () => {};

  const sampleData: CardTreeLevelProps2 = {
    levelName: "level1",
    levelNumber: 1,
    levelItems: [
      { name: "fig1", id: "id1" },
      { name: "fig2", id: "id2" },
      { name: "fig3", id: "id3" },
      { name: "fig4", id: "id4" },
    ],
  };

//  for (let i = 0; i < 8; i++) {
//  }

  const showNextLevel = (levelNumber: number, a: CardTreeItemProps2) => {
    console.log(`showNextLevel-${a.name}-${levelNumber}`);
    let newLevel = Object.assign({}, sampleData);
    newLevel.levelName = `level${levelNumber}`;
    newLevel.levelNumber = levelNumber + 1;
    
    //TODO: Remove lower levels than this
//    cardList.splice(-levelNumber);
    console.log(newLevel);
    let updatedLevels = [...cardList];
    if(levelNumber < updatedLevels.length){
      updatedLevels.splice(-(updatedLevels.length+1-levelNumber));
    }
    updatedLevels.push(newLevel);
    setCardList(updatedLevels);
  }

  console.log(cardList);

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
        {cardList.map((a: any) => {
          return (
            <CardTreeLevel2 
              showNextLevel={showNextLevel} 
              levelNumber={a.levelNumber}
              levelName={a.levelName} 
              levelItems={a.levelItems} />
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

export default CardTree2;
