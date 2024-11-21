"use client";

import { atom, useAtom } from "jotai";
import { MenuItemsType } from "@/layouts/sidebar/sidebar-fixed-menu-items";

const LOCAL_STORAGE_KEY = "iso-sidebar-left-expanded";

const SidebarLeftExpandedAtom = atom(
  typeof window !== "undefined" ? localStorage.getItem(LOCAL_STORAGE_KEY) : true
);

const SidebarLeftExpandedAtomWithPersistence = atom(
  (get) => get(SidebarLeftExpandedAtom),
  (get, set, newStorage: any) => {
    set(SidebarLeftExpandedAtom, newStorage);
    localStorage.setItem(LOCAL_STORAGE_KEY, newStorage);
  }
);

export function useSidebar() {
  const [expandedLeft, setExpandedLeft] = useAtom(SidebarLeftExpandedAtomWithPersistence);

  return {
    expandedLeft: !!(expandedLeft === null ? true : JSON.parse(expandedLeft as string)),
    setExpandedLeft,
  };
}

export function getActiveMainMenuIndex(pathname: string, menuItems: MenuItemsType[]) {
  let activeIndex = 0;
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    for (let j = 0; j < menuItem.menuItems.length; j++) {
      const items = menuItem.menuItems[j];
      if (items.href === pathname) {
        activeIndex = i;
        break;
      } else {
        if (items.subMenuItems) {
          for (let k = 0; k < items.subMenuItems.length; k++) {
            const subMenuItem = items.subMenuItems[k];
            if (subMenuItem.href === pathname) {
              activeIndex = i;
              break;
            }
          }
        }
      }
    }
  }
  return activeIndex;
}

export function removeFirstLetters(length: number, str: string) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.slice(length);
}
