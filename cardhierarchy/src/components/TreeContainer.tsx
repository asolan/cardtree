import React from "react";
//import "./ExploreContainer.css";
import CardTree from "./cardTree/CardTree";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <div>
        <CardTree merchantName="m1" orgId="o1" />
      </div>
    </div>
  );
};

export default ExploreContainer;
