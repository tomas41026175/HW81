import React from "react";
import { Button, Text, Flex } from "@chakra-ui/react";

const AbilityButton = (props) => {
  const { point, propName, eventCaller } = props;

  const onCallEvent = (e) => {
    const eventName = e.target.dataset.type;
    eventCaller && eventCaller(propName, eventName, point);
  };
  return (
    <Flex>
      <Text fontSize={22} m="0" mr="2%">
        {propName}
      </Text>
      <Button
        colorScheme="blue"
        onClick={onCallEvent}
        data-type="plus"
        w="35px"
        h="35px"
        // borderStyle="none"
      >
        +
      </Button>
      <Text fontSize={22} mt="0" mx="2%">
        {point}
      </Text>
      <Button
        colorScheme="blue"
        onClick={onCallEvent}
        data-type="minus"
        w="35px"
        h="35px"
        // borderStyle="none"
      >
        -
      </Button>
    </Flex>
  );
};

export default AbilityButton;
