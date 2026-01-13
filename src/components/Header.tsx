"use client";
import React, { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RequestCallbackModal from "@/components/RequestCallbackModal"
import MobileMenuDrawer from "./MobileMenuDrawer";
import { MenuItem } from "@/interfaces/hero";
import { LOCATION_MENU } from "@/data/footer";

interface HeaderProps {
  menu: MenuItem[];
}

export default function Header({ menu }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean | null>(null);

  const centerMenus = menu.filter(
    (item) =>
      item.title === "Conditions" ||
      item.title === "Our Specialists" ||
      item.title === "Pain Management"
  );

  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-gradient-to-t from-[#EEF8FD]/0 font-sans to-white">
      <div className="xl:px-10 2xl:px-24 flex items-center justify-between py-4 px-4">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Nivaan Logo" width={170} height={40} className="h-10" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 lg:gap-3 xl:gap-6 py-2 text-xs xl:text-sm font-medium">
          <div className="bg-white flex items-center gap-2 font-normal rounded-full text-black shadow-lg px-3">
            {centerMenus.map((item) => (
              <div
                key={item.id}
                className="relative uppercase"
                onMouseEnter={() => setOpenMenu(item.title)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <div className="flex text- items-center gap-1 cursor-pointer hover:bg-[#EAF6FB] px-5 lg:px-2 xl:px-5 my-2 py-2 rounded-full transition">
                  {item.title}
                  {item.children && <ChevronDown size={16} />}
                </div>
                {item.title === "Conditions" &&
                  openMenu === "Conditions" &&
                  item.children && (
                    <ConditionsDropdown
                      data={item.children}
                    />
                  )}
                {(item.title === "Pain Management" ||
                  item.title === "Our Specialists") &&
                  openMenu === item.title &&
                  item.children && (
                    <PillGridDropdown
                      title={item.title}
                      data={item.children}
                    />
                  )}
              </div>
            ))}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="flex shadow-lg font-normal items-center gap-1 text-black bg-white px-6 py-4 rounded-full cursor-pointer hover:shadow-lg transition">
              <MapPin className="text-[#06A1DC]" size={16} />
              LOCATION
              <ChevronDown size={16} />
            </div>
            {open && (
              <PillGridDropdownLocation
                title={LOCATION_MENU.title}
                data={LOCATION_MENU.items}
              />
            )}
          </div>
        </nav>
        <div className="hidden lg:block">
          <RequestCallbackModal buttonText="BOOK APPOINTMENT" id="home-book-appointment" />
        </div>
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden flex items-center gap-2 bg-white text-[#F05432] font-semibold px-8 py-3 rounded-full shadow"
        >
          <Image src="/images/menu.svg" alt="menu" width={20} height={20} />
          MENU
        </button>
        <MobileMenuDrawer
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          menu={centerMenus}
        />
      </div>
    </header>
  );
}

function ConditionsDropdown({
  data,
}: {
  data: MenuItem[];
}) {
  const [active, setActive] = useState<MenuItem | null>(
    data?.length ? data[0] : null
  );
  if (!active) return null;
  return (
    <div className="absolute top-full left-0 pt-4 w-[750px]">
      <div className="bg-[#EAF6FB] border-white border rounded-2xl shadow-xl p-6 flex gap-6">
        <div className="w-1/3 bg-white rounded-4xl p-3 space-y-1">
          {data.map((item) => (
            <Link
              key={item.id}
              href={item.url || "#"}
              onMouseEnter={() => setActive(item)}
              className={`flex items-center gap-2 px-3 py-2 rounded-3xl cursor-pointer transition font-medium
              ${active.id === item.id
                  ? "bg-[#EAF6FB] text-[#284599]"
                  : "hover:bg-gray-100"
                }`}
            >
              {item?.icon?.url &&
                <Image className="bg-[#284599] p-2.5 rounded-2xl w-12 h-12" src={item.icon.url} alt="" width={50} height={50} unoptimized/>}
              {item.title}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-2/3">
          <h4 className="text-sm font-normal text-[#06A1DC] uppercase mb-5">
            Condition
          </h4>

          <div className="grid grid-cols-2 gap-3 text-base space-y-2.5 capitalize">
            {active.children?.map((child) => (
              <Link
                key={child.id}
                href={child.url || "#"}
                className="hover:text-[#06A1DC] font-normal transition"
              >
                {child.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function PillGridDropdown({
  title,
  data,
}: {
  title: string;
  data: MenuItem[];
}) {
  return (
    <div className="absolute top-full left-0 pt-4">
      <div className="bg-white p-3 rounded-2xl shadow-xl">
        <div className="bg-[#EAF6FB] rounded-xl p-7 w-[550px]">

          <h4 className="text-sm font-semibold text-[#06A1DC] uppercase mb-5">
            {title}
          </h4>

          <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-base">
            {data.map((item, index) => (
              <Link
                key={index}
                href={item.url || "#"}
                className="hover:text-[#06A1DC] capitalize font-normal transition"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PillGridDropdownLocation({
  title,
  data,
}: {
  title: string;
  data: MenuItem[];
}) {
  return (
    <div className="absolute top-full left-0 pt-4 z-50">
      <div className="bg-white p-3 text-black rounded-2xl shadow-xl">
        <div className="bg-[#EAF6FB] rounded-xl p-5 w-[150px]">
          <h4 className="text-sm font-semibold text-[#06A1DC] uppercase mb-5">
            {title}
          </h4>
          <div className="space-y-4 text-black text-base">
            {data.map((item, index) => (
              <div key={index} className="text-black">
                {item.url &&
                  <Link
                    key={item.id}
                    href={item.url}
                    className="hover:text-[#06A1DC] capitalize font-sans font-normal text-black transition"
                  >
                    {item.title}
                  </Link>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}