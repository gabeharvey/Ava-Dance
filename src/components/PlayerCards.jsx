/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, bio, flipSound }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
          borderColor="#8E4585"
          borderWidth="3px"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
        <Box
          bgColor="#4B4B4B"
          bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #38393d 50%, #000000 75%, transparent 75%, transparent)"
          bgSize="1px 1px;"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          borderColor="#8E4585"
          borderWidth="3px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transform="rotateY(180deg)"
          p={5}
        >
          {/* <Text fontSize="2xl" fontWeight="bold" color="#F28C28" fontFamily="'Dancing Script', cursive">
            {name}
          </Text> */}
          <Text mt={4} color="#F8F8F8" fontFamily="'Dancing Script', cursive" fontSize="xl" fontWeight="medium" textAlign="center">
          {bio}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');

  const players = [
    {
      frontImg: "ava-1.png",
      name: "Ava Castillo",
      bio: "Ava Castillo is a master of contemporary dance, known for her fluid movements and emotional expression on stage."
    },
    {
      frontImg: "ava-1.png",
      name: "Ava Castillo",
      bio: "Ava Castillo brings energy and creativity to hip-hop dance, captivating audiences with her freestyle skills."
    },
    {
      frontImg: "ava-1.png",
      name: "Ava Castillo",
      bio: "With exceptional ballet technique, Ava Castillo captivates audiences with her grace and precision in every routine."
    },
    {
      frontImg: "ava-1.png",
      name: "Ava Castillo",
      bio: "Ava Castillo thrives in the world of salsa, dazzling partners with her intricate footwork and rhythm on the dance floor."
    },
    {
      frontImg: "ava-1.png",
      name: "Ava Castillo",
      bio: "Known for her stunning jazz performances, Ava Castillo combines athleticism with artistry, leaving spectators in awe."
    },
    {
      frontImg: "ava-1.png",
      name: "Ava Castillo",
      bio: "Ava Castillo's expertise in breakdancing shines through in her impressive spins and acrobatic moves, making her a crowd favorite."
    },
    {
      frontImg: "ava-1.png",
      name: "Ava Castillo",
      bio: "Ava Castillo is a versatile dancer, effortlessly transitioning between styles like tap and contemporary, showcasing her diverse talent."
    },
    {
      frontImg: "ava-1.png",
      name: "Ava Castillo",
      bio: "With a background in ballroom dancing, Ava Castillo is known for her elegance and poise, captivating audiences at every gala."
    },
  ];
  

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }} 
      mb={{ base: 12, md: 16 }} 
    >
      <Text fontSize="4xl" fontWeight="medium" color="#8E4585" fontFamily="'Dancing Script', cursive">
        Player Cards    
      </Text>
      <Text fontSize="2xl" fontWeight="medium" color="#38393d" fontFamily="'Dancing Script', cursive">
        Click on card for more info
        </Text>

      <SimpleGrid
        columns={columns}
        spacing={{ base: 3, sm: 5 }} 
        justifyItems="center"
      >
        {players.map((player, index) => (
          <Card 
            key={index} 
            frontImg={player.frontImg} 
            name={player.name} 
            bio={player.bio}
            flipSound={flipSound} 
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;