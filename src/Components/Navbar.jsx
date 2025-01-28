import React from "react";
import navData from "../data/nav.json";
console.log(navData);
export default function Navbar() {
  return (
    <>
      <nav className="flex justify-center gap-10 items-center bg-white mt-2 mx-3 py-2 relative">
        {navData.sections.map((items) => (
          <div key={items.id} className="nav-section relative">
            <a href="" className="flex flex-col items-center">
              <div>
                <img src={items.image} alt="" />
              </div>
              <span className="font-semibold text-[14px]">{items.name}</span>
            </a>

            {items.hasDropdown && items.dropdown && (
              <div className="dropdown">
                {items.dropdown.map((dropdownItem, index) => (
                  <div key={index} className="dropdown-item">
                    <a href="" className="block px-4 py-2 hover:bg-gray-100">
                      <span className="font-semibold text-[14px]">
                        {dropdownItem.name}
                      </span>
                    </a>
                    {dropdownItem.subdropdown && (
                      <div className="subdropdown">
                        {dropdownItem.subdropdown.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href=""
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            <span className="font-semibold text-[14px]">
                              {subItem.name}
                            </span>
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
