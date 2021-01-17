import React from "react";
import HeroCardBlock from "./HeroCardBlock";
import AbilityBlock from "./AbilityBlock";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const Index = () => {
  // const { path } = useRouteMatch();
  // console.log(useRouteMatch());
  return (
    <BrowserRouter>
      <ChakraProvider>
        {/* <Route path={`${path}`} exact> */}
        <HeroCardBlock />
        {/* </Route> */}
        <Switch>
          {/* <Route path={`${path}/:heroId`}> */}
          <AbilityBlock />
          {/* </Route> */}
        </Switch>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default Index;
