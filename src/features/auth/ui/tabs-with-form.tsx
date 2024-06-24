import * as React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { SignUpForm } from "./sign-up-form";
import { SignInForm } from "./sign-in-form";

export interface ITabsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function TabsWithForm(props: ITabsProps) {
  return (
    <Tabs variant="unstyled" className="w-full">
      <TabList className="mb-8">
        <Tab>Вход</Tab>
        <Tab>Регистрация</Tab>
      </TabList>
      <TabPanels>
        <TabPanel p="0">
          <SignInForm />
        </TabPanel>
        <TabPanel p="0">
          <SignUpForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
