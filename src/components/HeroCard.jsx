import React from "react";
import { Box, Image } from "@chakra-ui/react";

const HeroCard = (props) => {
  const { name, url, onFocus, onFocusing, id } = props;
  return (
    // <StyledHeroCard>
    <Box
      // className="card"
      onClick={() => onFocus && onFocus(id)}
      borderStyle={onFocusing === true ? "solid" : "none"}
      maxW="sm"
      mr={5}
      borderWidth="1px"
      borderColor="black"
    >
      <Box w="200px">
        <Image src={url} alt={"Loading"} />
      </Box>
      <Box
        w="200px"
        alignItems="center"
        justifyContent="space-around"
        color="black"
        alt={"Loading"}
      >
        {name}
      </Box>
    </Box>
    // </StyledHeroCard>
  );
};

export default HeroCard;
