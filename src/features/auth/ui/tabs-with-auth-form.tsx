import * as React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs, Box } from "@chakra-ui/react";
import { SignUpForm } from "./sign-up-form";
import { SignInForm } from "./sign-in-form";
import { LogIn, UserPlus } from "lucide-react";
import { useColors } from "@/shared/hooks/useColors";

export function TabsWithAuthForm({ onClose }: { onClose: () => void }) {
  const { bgColor, primaryColor, grayColor } = useColors();

  return (
    <Box bg={bgColor} borderRadius="md" p={6}>
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList mb={8} justifyContent="center">
          <Tab
            mr={4}
            _selected={{
              color: primaryColor,
              bg: grayColor,
            }}
          >
            <LogIn size={18} style={{ marginRight: "8px" }} />
            Вход
          </Tab>
          <Tab
            _selected={{
              color: primaryColor,
              bg: grayColor,
            }}
          >
            <UserPlus size={18} style={{ marginRight: "8px" }} />
            Регистрация
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <SignInForm onClose={onClose} />
          </TabPanel>
          <TabPanel p={0}>
            <SignUpForm onClose={onClose} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
