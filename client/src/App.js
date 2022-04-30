import React from "react";
import RecipEaseContainer from "./components/RecipEaseContainer";

const httpLink = createHttpLink({
    uri: '/graphql',
  });

const App = () => <RecipEaseContainer />;

export default App;

