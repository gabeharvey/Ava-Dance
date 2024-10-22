/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

function VideoCard({ videoSrc, title, description }) {
  return (
    <Box w="300px" h="400px" mb="10px">
      <Box
        w="100%"
        h="100%"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#8E4585"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        bgColor="#8E4585"
        bgImage="linear-gradient(-45deg, #8E4585 25%, transparent 25%, transparent 50%, #8E4585 50%, #8E4585 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" h="70%">
          <video
            src={videoSrc}
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box p={3} textAlign="center" bgColor="#F5F5F5" h="30%">
          <Text fontSize="2xl" fontWeight="semibold" color="#38393d" fontFamily="'Dancing Script', cursive">
            {title}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="bold" color="#38393d" fontFamily="'Roboto+Condensed', system-ui">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function DanceFilm() {
    const videos = [
        {
          videoSrc: "Ava-vid-1.MOV",
          title: "Ava's Stunning Contemporary Solo",
          description: "Emotional Depth",
        },
        {
          videoSrc: "Ava-vid-2.mov",
          title: "Ava's Hip-Hop Dance Training",
          description: "Intense Rehearsal and Freestyle Skills",
        },
        {
          videoSrc: "Ava-vid-3.MOV",
          title: "Ava's Graceful Ballet Performance",
          description: "Mastering Technique and Poise",
        },
        {
          videoSrc: "Ava-vid-4.MOV",
          title: "Ava's Salsa Showdown",
          description: "Dynamic Footwork and Rhythmic Flair",
        },
        {
          videoSrc: "Ava-vid-5.MOV",
          title: "Ava's Jazz Fusion Routine",
          description: "Energetic Moves and Creative Expression",
        },
        {
          videoSrc: "../video6.mp4",
          title: "Ava's Breakdancing Highlights",
          description: "Impressive Spins",
        },
        {
          videoSrc: "../video7.mp4",
          title: "Ava's Ballroom Dance Gala",
          description: "Elegance and Style on Display",
        },
        {
          videoSrc: "../video8.mp4",
          title: "Ava's Dance Competition Highlights",
          description: "Top Performances",
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
        Dance Film
      </Text>
      <SimpleGrid columns={columns} spacing={{ base: 3, sm: 5 }} justifyItems="center">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default DanceFilm;