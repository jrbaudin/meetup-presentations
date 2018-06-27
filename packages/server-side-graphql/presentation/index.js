// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane
} from "spectacle";
import ApolloLogo from "../assets/apollologo.jpg";
import GQLFilestructure from "../assets/gqlfilestructure.png";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How to run a GraphQL server using Apollo
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            a practical introduction
          </Text>
        </Slide>
        <Slide
          id="wait-what"
          bgColor="black"
          notes="You can even put notes on your slide. How awesome is that?"
        >
          <Image src={ApolloLogo} margin="0px auto 40px" />
          <Heading size={1} caps fit textColor="primary" textFont="primary">
            OK, hold on! What's Apollo?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Apollo Server is a set of community-driven Node GraphQL server libraries that empower you to talk to any backend.</Quote>
            <Cite>https://www.apollographql.com/server</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={1} caps fit textColor="secondary" textFont="primary">
            GraphQL API route /graphql (pretty standard)
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/graphqlroute.example")}
            margin="20px auto"
            overflow="overflow"
          />
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Note: this is from a Node.js Express server
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={1} caps fit textColor="secondary" textFont="primary">
            GraphiQL API route /graphiql (pretty standard as well)
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/graphiqlroute.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={3} caps fit textColor="secondary" textFont="primary">
            So where does the Schema come from?
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/import_schema.example")}
            margin="20px auto"
            overflow="overflow"
          />
          <Image src={GQLFilestructure} margin="0px auto 40px" />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={3} caps fit textColor="secondary" textFont="primary">
            A basic schema definition
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/basic_schema.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={3} caps fit textColor="secondary" textFont="primary">
            A basic resolver
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/basic_resolver.example")}
            margin="20px auto"
            overflow="overflow"
          />
          <Text margin="10px 0 0" textColor="primary" size={1} fit>
            The resolver need to match the schema definition
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={3} caps fit textColor="secondary" textFont="primary">
            The User GraphQL type
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/basic_schema_type.example")}
            margin="20px auto"
            overflow="overflow"
          />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/basic_nested_schema_type.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={3} caps fit textColor="secondary" textFont="primary">
            Fetch multiple users
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/user_connector_multi.example")}
            margin="20px auto"
            overflow="overflow"
          />
          <Text margin="10px 0 0" textColor="primary" size={1} fit>
          It's called a <strong>Connector</strong> but it's just a Database query
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="quarternary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={3} caps fit textColor="secondary" textFont="primary">
            Fetch a single user with id
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/user_connector_single.example")}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary">Any questions?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>DEMO</Heading>
        </Slide>
      </Deck>
    );
  }
}
