"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ================= TYPES ================= */

interface MenuItem {
  id: number;
  title: string;
  url?: string;
  target?: string;
  icon?: {
    url: string;
  };
  children?: MenuItem[];
}


const LOCATION_MENU = {
  title: "CLINICS",
  items: [
    { id: 1, title: "Delhi", url: "/clinics/delhi" },
    { id: 2, title: "Mumbai", url: "/clinics/mumbai" },
    { id: 3, title: "Lucknow", url: "/clinics/lucknow" },
    { id: 4, title: "Noida", url: "/clinics/noida" },
    { id: 5, title: "Ghaziabad", url: "/clinics/ghaziabad" },
    { id: 6, title: "Faridabad", url: "/clinics/faridabad" },
    { id: 7, title: "Jaipur", url: "/clinics/jaipur" },
  ],
};


/* ================= HEADER ================= */

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://hclient.in/nivaan/wp-json/site/v1/menus/primary_menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.items || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const centerMenus = menu.filter(
    (item) =>
      item.title === "Conditions" ||
      item.title === "Our Specialists" ||
      item.title === "Pain Management"
  );
  if (loading) {
    return (
      <div className="absolute top-full left-0 mt-3 w-[720px] bg-[#EAF6FB] rounded-2xl shadow-xl p-6 flex gap-6">
        <div className="w-1/3 bg-white rounded-xl p-4 space-y-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-10 rounded-lg bg-orange-900 animate-pulse"
            />
          ))}
        </div>

        <div className="w-2/3 bg-white rounded-xl p-4 space-y-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-4 rounded bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-t from-[#EEF8FD]/0 font-sans to-white">
      <div className="xl:px-10 2xl:px-24 flex items-center justify-between py-4 px-4 lg:px-6">

        {/* LOGO */}
        <Link href="/">
          <img src="/images/logo.svg" alt="Nivaan Logo" className="h-10" />
        </Link>

        {/* CENTER NAV */}
        <nav className="hidden lg:flex items-center gap-6 py-2 text-xs xl:text-sm font-medium">
          <div className="bg-white flex items-center gap-2 font-normal rounded-full text-black shadow-lg px-3">

            {!loading &&
              centerMenus.map((item) => (
                <div
                  key={item.id}
                  className="relative uppercase"
                  onMouseEnter={() => setOpenMenu(item.title)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <div className="flex text- items-center gap-1 cursor-pointer hover:bg-[#EAF6FB] px-5 my-2 py-2 rounded-full transition">
                    {item.title}
                    {item.children && <ChevronDown size={16} />}
                  </div>

                  {/* CONDITIONS MEGA MENU */}
                  {item.title === "Conditions" &&
                    openMenu === "Conditions" &&
                    item.children && (
                      <ConditionsDropdown
                        data={item.children}
                        loading={loading}
                      />

                    )}

                  {/* PAIN MANAGEMENT & OUR SPECIALISTS */}
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

          {/* LOCATION */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {/* Button */}
            <div className="flex shadow-lg font-normal items-center gap-1 text-black bg-white px-6 py-4 rounded-full cursor-pointer hover:shadow-lg transition">
              <MapPin className="text-[#06A1DC]" size={16} />
              LOCATION
              <ChevronDown size={16} />
            </div>

            {/* Dropdown */}
            {open && (
              <PillGridDropdownLocation
                title={LOCATION_MENU.title}
                data={LOCATION_MENU.items}
              />
            )}
          </div>
        </nav>

        {/* CTA */}
        <button className="hidden lg:block bg-gradient-to-r from-[#EC6724] to-[#F05432] text-white font-semibold px-6 py-3 rounded-full shadow">
          BOOK APPOINTMENT
        </button>

        {/* MOBILE */}
        <button className="lg:hidden flex items-center gap-2 bg-white text-[#F05432] font-semibold px-8 py-3 rounded-full shadow">
          <Image src="/images/menu.svg" alt="menu" width={20} height={20} />
          MENU
        </button>
      </div>
    </header>
  );
}

/* ================= CONDITIONS DROPDOWN ================= */

function ConditionsDropdown({
  data,
  loading,
}: {
  data: MenuItem[];
  loading: boolean;
}) {
  const [active, setActive] = useState<MenuItem | null>(
    data?.length ? data[0] : null
  );

  /* ================= SKELETON ================= */

  if (!active) return null;

  /* ================= ACTUAL MENU ================= */
  return (
    <div className="absolute top-full left-0 pt-3 w-[750px]">
      <div className="bg-[#EAF6FB] border-white border rounded-2xl shadow-xl p-6 flex gap-6">
        {/* LEFT SIDE */}
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
                <Image className="bg-[#284599] p-2.5 rounded-2xl w-12 h-12" src={item.icon.url} alt="" width={50} height={50} />}
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

/* ================= GRID DROPDOWN (IMAGE STYLE) ================= */

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

          <div className="grid grid-cols-2 gap-x-10 gap-y-5 text-base">
            {data.map((item) => (
              <Link
                key={item.id}
                href={item.url || "#"}
                className="hover:text-[#06A1DC] font-normal transition"
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
            {data.map((item) => (
              <div className="text-black">
                {item.url &&
                  <Link
                    key={item.id}
                    href={item.url}
                    className="hover:text-[#06A1DC] font-sans font-normal text-black transition"
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