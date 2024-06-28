"use client";

import React, { createContext, useState } from "react";

interface SidebarContextValue {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextValue>({
  isOpen: false,
  setIsOpen: () => {},
});

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const value: SidebarContextValue = {
    isOpen,
    setIsOpen,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
