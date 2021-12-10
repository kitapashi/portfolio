import { Link, Box, VStack, Heading, Text, Image, HStack } from '@chakra-ui/react';
import WorkBadge, { WorkBadgeType } from '../atomic/WorkBadges';


export interface WorksCardProps {
  title: string;
  description: string;
  type: WorkBadgeType;
  imageSrc: string;
  path: string
}

const WorksCard: React.FC<WorksCardProps> = (props: WorksCardProps) => {
  return (
    <Link
    px={2}
    py={1}
    rounded={'md'}
    href={props.path}
    isExternal
    maxW="400px"
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200',
    }}
    >
      <Box
        position="relative"
        bg="gray.200"
        boxShadow="xl"
        rounded="xl"
        maxH="500px"
        maxW="100%"
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
    </Link>
  );
};

export default WorksCard;