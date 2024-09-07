import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { useColors } from "@/shared/hooks/useColors";

interface ArticleTabsProps {
  children: [React.ReactNode, React.ReactNode];
}

export function ArticleTabs({ children }: ArticleTabsProps) {
  const { primaryColor, contentColor } = useColors();

  return (
    <Tabs variant="unstyled">
      <TabList justifyContent="center">
        <Tab
          w={160}
          fontSize={20}
          _selected={{ color: primaryColor, borderColor: primaryColor }}
          color={contentColor}
        >
          Персонажи
        </Tab>
        <Tab
          w={160}
          fontSize={20}
          _selected={{ color: primaryColor, borderColor: primaryColor }}
          color={contentColor}
        >
          Расы
        </Tab>
      </TabList>
      <TabIndicator height="2px" bg={primaryColor} borderRadius="1px" />
      <TabPanels mt={10}>
        <TabPanel p={0}>{children[0]}</TabPanel>
        <TabPanel p={0}>{children[1]}</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
