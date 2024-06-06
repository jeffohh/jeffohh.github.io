import { SimpleGrid, Box, Image, AspectRatio } from "@chakra-ui/react";

const MediaGrid = ({ mediaItems }) => {
  return (
    <SimpleGrid columns={[1, 2]} spacing={4}>
      {mediaItems.map((item, index) => (
        <Box key={index} boxShadow="md" borderRadius="md" overflow="hidden">
          {item.type === "image" && (
            <AspectRatio ratio={4 / 3}>
              <Image src={item.src} alt={item.alt} objectFit="cover" />
            </AspectRatio>
          )}
          {item.type === "gif" && (
            <AspectRatio ratio={4 / 3}>
              <Image src={item.src} alt={item.alt} objectFit="cover" />
            </AspectRatio>
          )}
          {item.type === "video" && (
            <AspectRatio ratio={4 / 3}>
              <video controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </AspectRatio>
          )}
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MediaGrid;
