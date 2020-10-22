export interface CardTreeProps {
    merchantName: string;
    orgId: string;
}

export interface CardTreeItemProps {
    name: string;
    id: string;
}

export interface CardTreeLevelProps {
    levelName: string;
    levelItems: CardTreeItemProps[];
}

export interface CardTreeLevelProps2 {
    levelName: string;
    levelItems: CardTreeItemProps[];
    levelNumber: number;
    showNextLevel?: any;
}
  
export interface CardTreeItemProps2 {
    name: string;
    id: string;
}

