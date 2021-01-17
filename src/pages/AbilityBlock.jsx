import React, { useEffect, useState } from "react";
import AbilityButton from "../components/AbilityButton";
import { Flex, Box, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useHeroProps } from "../hook/useHeroProps";

const AbilityBlock = () => {
  const { Id } = useParams();
  console.log({ Id });
  const { heroProps, error } = useHeroProps(1);
  const [remainPoint, setRemainPoint] = useState(0);
  const [allotpoint, setAllotpoint] = useState(1);
  useEffect(() => {
    setAllotpoint(heroProps);
  }, [heroProps]);
  const handleEvent = (propName, eventName, point) => {
    if (eventName === "plus" && remainPoint > 0) {
      setRemainPoint((v) => v - 1);
      // console.log([propName]); array
      // console.log(typeof(propName)); string
      setAllotpoint({ ...allotpoint, [propName]: point + 1 });
    } else if (eventName === "minus" && point > 0) {
      setRemainPoint((v) => v + 1);
      // console.log(remainPoint);
      setAllotpoint({ ...allotpoint, [propName]: point - 1 });
    }
  };
  // console.log({ ...allotpoint, str: 1 });
  const AbilityList = allotpoint && Object.keys(allotpoint);
  // const abilityValue = allotpoint && Object.entries(allotpoint);

  return (
    <Flex ml="0" mx="auto">
      <Box mt="3%" w="550px">
        <Flex d="column">
          {/* {abilityValue &&
            abilityValue.map(([key, value]) => (
              <AbilityButton
                propName={`${key}:`}
                eventCaller={handleEvent}
                point={allotpoint && `${value}`}
              />
            ))} */}
          <AbilityButton
            propName={AbilityList && AbilityList[0]}
            eventCaller={handleEvent}
            point={allotpoint && allotpoint.str}
          />
          <AbilityButton
            propName={AbilityList && AbilityList[1]}
            eventCaller={handleEvent}
            point={allotpoint && allotpoint.int}
          />
          <AbilityButton
            propName={AbilityList && AbilityList[2]}
            eventCaller={handleEvent}
            point={allotpoint && allotpoint.agi}
          />
          <AbilityButton
            propName={AbilityList && AbilityList[3]}
            eventCaller={handleEvent}
            point={allotpoint && allotpoint.luk}
          />
        </Flex>
      </Box>
      <Box w="100px">
        <span>剩餘點數:</span>
        <span>{remainPoint}</span>
        <Button w="35px" h="35px">
          儲存
        </Button>
      </Box>
    </Flex>
  );
};
export default AbilityBlock;
