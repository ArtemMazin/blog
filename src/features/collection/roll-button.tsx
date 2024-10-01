import { IconButton } from "@chakra-ui/react";
import { Dices } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";

interface RollButtonProps {
  handleRollCharacter: () => void;
  isRolling: boolean;
  remainingRolls: number | null;
}

export function RollButton({
  handleRollCharacter,
  isRolling,
  remainingRolls,
}: RollButtonProps) {
  const colors = useColors();

  return (
    <IconButton
      aria-label="Бросить кубик"
      icon={<Dices size={24} />}
      onClick={handleRollCharacter}
      isLoading={isRolling}
      size="md"
      isDisabled={remainingRolls === 0}
      _hover={{ bg: colors.secondaryColor }}
    />
  );
}
