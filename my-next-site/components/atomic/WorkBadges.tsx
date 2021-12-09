import { Badge } from "@chakra-ui/react";

export type WorkBadgeType = 'tech' | 'music' | 'other';

interface WorkBadgeProps {
  type: WorkBadgeType
}

const WorkBadge:React.FC<WorkBadgeProps> = (props: WorkBadgeProps) => {
  let colorScheme: string;
  let name: string;

  switch (props.type) {
    case "tech":
      colorScheme = "green"
      name = "Tech"
      break;
    case "music":
      colorScheme = "blue"
      name = "Music"
      break;
    case "other":
      colorScheme = "gray"
      name = "Other"
      break;
  
    default:
      break;
  }
  return (
    <Badge colorScheme={colorScheme} alignItems="flex-start">
      {name}
    </Badge>
  )
}

export default WorkBadge;