import * as React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { SignUpForm } from "./sign-up-form";
import { SignInForm } from "./sign-in-form";

export function TabsWithAuthForm({ onClose }: { onClose: () => void }) {
  return (
    <Tabs variant="unstyled" className="w-full">
      <TabList className="mb-8">
        <Tab>Вход</Tab>
        <Tab>Регистрация</Tab>
      </TabList>
      <TabPanels>
        <TabPanel p="0">
          <SignInForm onClose={onClose} />
        </TabPanel>
        <TabPanel p="0">
          <SignUpForm onClose={onClose} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
