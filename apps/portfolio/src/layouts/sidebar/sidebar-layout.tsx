"use client";

import cn from "@core/utils/class-names";
import Header from "@/layouts/sidebar/sidebar-header";
import { useSidebar } from "@/layouts/sidebar/sidebar-utils";
import SidebarExpandable from "@/layouts/sidebar/sidebar-expanded";
import LeftSidebarFixed from "@/layouts/sidebar/left-sidebar-fixed";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const { expandedLeft } = useSidebar();

  return (
    <main className={cn("flex min-h-screen flex-grow")}>
      <LeftSidebarFixed />
      <SidebarExpandable />
      <div className="flex w-full flex-col ">
        <Header className="xl:ms-[88px]" />
        <div
          className={cn(
            "flex flex-grow flex-col gap-4 px-4 pb-6 duration-200 md:px-5 lg:pb-8  xl:pe-8 ",
            expandedLeft ? "xl:ps-[414px]" : "xl:ps-[110px]"
          )}
        >
          <div className="grow xl:mt-4">{children}</div>
        </div>
      </div>
    </main>
  );
}
