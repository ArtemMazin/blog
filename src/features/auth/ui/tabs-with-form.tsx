import * as React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { SignUpForm } from "./sign-up-form";

export interface ITabsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function TabsWithForm(props: ITabsProps) {
  return (
    <Tabs variant="unstyled">
      <TabList>
        <Tab>Вход</Tab>
        <Tab>Регистрация</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>вход</TabPanel>
        <TabPanel>
          <SignUpForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
