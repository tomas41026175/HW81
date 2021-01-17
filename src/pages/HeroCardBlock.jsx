import React, { useState } from "react";
import HeroCard from "../components/HeroCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { useHeroFiles } from "../hook/useHeroFlies";

const StyledHeroCardBlock = styled.div`
  .hero_list {
    display: flex;
  }
  /* .card {
    margin-right: 10px;
  } */
`;

const HeroCardBlock = () => {
  const [heroId, setHeroId] = useState();
  const { heroFile, error } = useHeroFiles();
  const handleFocus = (TargetHeroId) => {
    setHeroId(TargetHeroId);
  };
  return (
    <StyledHeroCardBlock>
      <div className="hero_list">
        <Flex ml="0" mx="auto">
          {heroFile &&
            heroFile.map((hero, index) => (
              <Link key={index} to={`/heros/${Number(index) + 1}`}>
                <HeroCard
                  name={hero.name}
                  url={hero.image}
                  id={hero.id}
                  onFocusing={hero.id === heroId}
                  onFocus={handleFocus}
                />
              </Link>
            ))}
        </Flex>
      </div>
    </StyledHeroCardBlock>
  );
};

export default HeroCardBlock;
