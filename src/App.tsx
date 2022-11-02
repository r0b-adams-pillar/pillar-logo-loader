import {
  Box,
  ChakraProvider,
  Flex,
  FormLabel,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Switch,
  useBoolean,
} from "@chakra-ui/react";
import { theme } from "./theme";
import { PillarLogo } from "./components/PillarLogo";
import { useState } from "react";

const App = () => {
  const [size, setSize] = useState(256);
  const [loader, setLoader] = useBoolean(false);
  const [altColors, setAltColors] = useBoolean(false);
  const [withBackground, setWithBackground] = useBoolean(true);
  const [loopDuration, setLoopDuration] = useState(1);
  const [loopDelay, setLoopDelay] = useState(0);

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
          <Box h="400" w="400" px="xl">
            <FormLabel>animated</FormLabel>
            <Switch size="lg" isChecked={loader} onChange={setLoader.toggle} />

            <FormLabel>use background</FormLabel>
            <Switch
              size="lg"
              isChecked={withBackground}
              onChange={setWithBackground.toggle}
            />

            <FormLabel>alternate colors</FormLabel>
            <Switch
              size="lg"
              isChecked={altColors}
              onChange={setAltColors.toggle}
            />

            <FormLabel>logo size</FormLabel>
            <Slider
              value={size}
              min={48}
              max={256}
              onChangeEnd={val => setSize(val)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>

            <FormLabel>loop duration</FormLabel>
            <Slider
              value={loopDuration}
              min={0.5}
              max={5}
              step={0.5}
              onChange={val => setLoopDuration(val)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>

            <FormLabel>loop delay</FormLabel>
            <Slider
              value={loopDelay}
              min={0}
              max={5}
              step={0.25}
              onChange={val => setLoopDelay(val)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Flex w="300px" align="center" justify="center">
            <PillarLogo
              size={size}
              loader={loader}
              altColors={altColors}
              withBackground={withBackground}
              loopDuration={loopDuration}
              loopDelay={loopDelay}
            />
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
