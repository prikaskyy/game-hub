import React from "react";

import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let bgColor = score > 85 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      colorScheme={bgColor}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
