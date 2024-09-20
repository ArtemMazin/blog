import { Badge } from "@chakra-ui/react";
import { Star } from "lucide-react";

export default function PremiumBadge() {
  return (
    <Badge
      position="absolute"
      top={2}
      right={2}
      colorScheme="yellow"
      display="flex"
      alignItems="center"
      zIndex={1}
      px={2}
      py={1}
    >
      <Star size={14} style={{ marginRight: "4px" }} />
      Премиум
    </Badge>
  );
}
