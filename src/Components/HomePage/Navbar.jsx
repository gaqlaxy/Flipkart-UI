import React, { useState } from "react";
import navData from "../../data/nav.json";
export default function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <nav className="flex justify-center gap-10 items-center bg-white mt-2 mx-3 py-2 relative">
        {navData.sections.map((items) => (
          <div
            key={items.id}
            className="nav-section relative group"
            onMouseEnter={() => setActiveSection(items.id)}
            onMouseLeave={() => {
              setActiveSection(null);
              setActiveDropdown(null);
            }}
          >
            {/* Main Navigation  */}
            <a href="#" className="flex flex-col items-center">
              <img src={items.image} alt="" className="w-10 h-10" />
              <span className="font-semibold text-[14px]">{items.name}</span>
            </a>

            {/* Dropdown */}
            {items.hasDropdown && activeSection === items.id && (
              <div className="absolute top-full left-0 bg-white shadow-lg w-[220px] p-4 z-50">
                {items.dropdown?.map((dropdownItem) => (
                  <div
                    key={dropdownItem.id}
                    className="relative p-2"
                    onMouseEnter={() => setActiveDropdown(dropdownItem.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a href="#" className="font-normal hover:text-blue-600">
                      {dropdownItem.name}
                    </a>

                    {/* Subdropdown */}
                    {dropdownItem.subdropdown &&
                      activeDropdown === dropdownItem.id && (
                        <div className="absolute left-full top-0 ml-1 bg-white shadow-lg min-w-[200px] p-2 z-50">
                          {/* <div className="absolute left-[203px] top-[-8px] bg-white shadow-lg min-w-[200px] p-2 z-50"> */}
                          {dropdownItem.subdropdown.map((subItem) => (
                            <a
                              key={subItem.id}
                              href="#"
                              className="block p-2 hover:bg-gray-100 text-sm"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
