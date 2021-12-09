import { Badge, Box, VStack, Heading, Text, Image, HStack } from '@chakra-ui/react';
import WorkBadge, { WorkBadgeType } from '../atomic/WorkBadges';


export interface WorksCardProps {
  title: string;
  description: string;
  type: WorkBadgeType;
  imageSrc: string;
}

const WorksCard: React.FC<WorksCardProps> = (props: WorksCardProps) => {
  return (
    <Box
      position="relative"
      bg="gray.200"
      boxShadow="xl"
      rounded="xl"
      maxH="500px"
      maxW="400px"
      p={3}
    >
      <VStack spacing="2" w="100%">
        <Image src={props.imageSrc} 
          fit="cover" 
          h="270px"
          w="100%"
        />
        <Box w="100%" textAlign="center">
          <Heading as="h3" size="md" isTruncated py={3}>{props.title}</Heading>
          <HStack>
            <WorkBadge type={props.type} />
            <Text as="p" isTruncated color="gray.500">{props.description}</Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default WorksCard;