import { Button, ButtonGroup } from "@chakra-ui/react";
import { Users, User, UserPlus } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";
import { FilterType } from "./collection-content";

interface FilterButtonsProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export function FilterButtons({ filter, setFilter }: FilterButtonsProps) {
  return (
    <ButtonGroup isAttached variant="outline">
      <FilterButton
        onClick={() => setFilter("all")}
        isActive={filter === "all"}
        icon={<Users size={18} />}
        label="Все"
      />
      <FilterButton
        onClick={() => setFilter("collected")}
        isActive={filter === "collected"}
        icon={<User size={18} />}
        label="Полученные"
      />
      <FilterButton
        onClick={() => setFilter("missing")}
        isActive={filter === "missing"}
        icon={<UserPlus size={18} />}
        label="Отсутствующие"
      />
    </ButtonGroup>
  );
}

interface FilterButtonProps {
  onClick: () => void;
  isActive: boolean;
  icon: React.ReactElement;
  label: string;
}

function FilterButton({ onClick, isActive, icon, label }: FilterButtonProps) {
  const colors = useColors();
  return (
    <Button
      onClick={onClick}
      bg={isActive ? colors.primaryColor : "transparent"}
      leftIcon={icon}
      _hover={{ bg: colors.primaryColor }}
    >
      {label}
    </Button>
  );
}
