import { ChakraProvider, Flex } from "@chakra-ui/react";
import { theme } from "./theme";
import { PillarLogo } from "./components/PillarLogo";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        h="100vh"
        w="100vw"
        align="center"
        justify="center"
        backgroundColor="white"
      >
        <Flex bgColor="gray.100" p="lg" borderRadius="3xl">
          <Flex w="600px" align="center" justify="space-evenly">
            <PillarLogo
              size={256}
              loader
              altColors
              withBackground
              loopDuration={1}
              loopDelay={0}
            />

            <PillarLogo
              size={256}
              loader
              withBackground
              loopDuration={1}
              loopDelay={0}
            />
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
