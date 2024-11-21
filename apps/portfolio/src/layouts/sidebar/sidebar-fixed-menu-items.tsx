import { routes } from "@/config/routes";
import { IconType } from "react-icons/lib";
import { PiFolders, PiHouse } from "react-icons/pi";
import { atom } from "jotai";

export interface SubMenuItemType {
  name: string;
  description?: string;
  href: string;
  badge?: string;
}

export interface ItemType {
  name: string;
  icon: IconType;
  href?: string;
  description?: string;
  badge?: string;
  subMenuItems?: SubMenuItemType[];
}

export interface MenuItemsType {
  id: string;
  name: string;
  title: string;
  icon: IconType;
  menuItems: ItemType[];
}

export const menuItems: MenuItemsType[] = [
  {
    id: "1",
    name: "sidebar-menu-home",
    title: "sidebar-menu-overview",
    icon: PiHouse,
    menuItems: [
      {
        name: "sidebar-menu-file-manager",
        href: routes.home,
        icon: PiFolders,
      },
    ],
  },
];
export const menuItemAtom = atom(menuItems[0]);
