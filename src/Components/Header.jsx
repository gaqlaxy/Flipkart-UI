import React from "react";

export default function Header() {
  return (
    <>
      <header className="flex items-center  justify-evenly  py-4 relative">
        <div className="flex  gap-16 items-center">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg"
            alt="Flipkart Logo"
          />
        </div>

        {/* <button>
          <svg
            width="20"
            height="20"
            className="absolute left-[29.55rem] top-[25%] "
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Search Icon</title>
            <path
              d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
              stroke="#717478"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16 16L21 21"
              stroke="#717478"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button> */}
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search for products, brands and more"
          className=" pl-8 w-[40rem]  bg-stone-100 rounded border-stone-500 h-10"
        />

        <div className="flex gap-1 items-center profile relative hover:bg-stone-100 rounded border-stone-500 py-2 px-2">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg
"
            alt=""
            className="w-5"
          />
          <a href="">Profile</a>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"
            alt=""
            className="w-4 profile-arrow cursor-pointer"
          />

          <div className="profile-dropdown bg-stone-50 ">
            <ul>
              <a
                href=""
                className="flex gap-2 py-2 px-2 text-[14px] hover:bg-stone-100 transition-hover duration-300"
              >
                <li>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                    alt=""
                  />
                </li>
                My Profile
              </a>
              <a
                href=""
                className="flex  gap-2 py-2 px-2 text-[14px] hover:bg-stone-100 transition-hover duration-300"
              >
                <li>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/supercoin-ce8408.svg"
                    alt=""
                  />
                </li>
                SuperCoin Zone
              </a>
              <a
                href=""
                className="flex  gap-2 py-2 px-2 text-[14px] hover:bg-stone-100 transition-hover duration-300"
              >
                <li>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg"
                    alt=""
                  />
                </li>
                Flipkart Plus Zone
              </a>
              <a
                href=""
                className="flex  gap-2 py-2 px-2 text-[14px] hover:bg-stone-100 transition-hover duration-300"
              >
                <li>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg"
                    alt=""
                  />
                </li>
                Orders
              </a>
              <a
                href=""
                className="flex  gap-2 py-2 px-2 text-[14px] hover:bg-stone-100 transition-hover duration-300"
              >
                <li>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                    alt=""
                  />
                </li>
                Wishlist (1)
              </a>
              <a
                href=""
                className="flex  gap-2 py-2 px-2 text-[14px] hover:bg-stone-100 transition-hover duration-300"
              >
                <li>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/coupons-083172.svg"
                    alt=""
                  />
                </li>
                Coupons
              </a>
              <a
                href=""
                className="flex  gap-2 py-2 px-2 text-[14px] hover:bg-stone-100 transition-hover duration-300"
              >
                <li>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg"
                    alt=""
                  />
                </li>
                Gift Cards
              </a>
              <a
                href=""
                className="flex  gap-2 py-2 px-2 text-[14px] hover:bg-stone-100 transition-hover duration-300"
              >
                <li>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg"
                    alt=""
                  />
                </li>
                Notifications
              </a>
              <a
                href=""
                className="flex  gap-2 py-2  px-2 text-[14px] hover:bg-stone-100 transition-hover duration-300"
              >
                <li>
                  <img
                    src="
                https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logout-e63ddf.svg"
                    alt=""
                  />
                </li>
                Logout
              </a>
            </ul>
          </div>
        </div>
        <div className="flex gap-1">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg
"
            alt=""
            className="w-5"
          />
          <a href="">Cart</a>
        </div>
        <div className="flex gap-1">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg
"
            alt=""
            className="w-5"
          />
          <a href="">Become a seller</a>
        </div>
        <div className="cursor-pointer menu-header relative hover:bg-stone-100 rounded border-stone-500 px-2 py-2">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg
"
            alt="Menu"
          />

          <div className="menu-dropdown bg-stone-50 ">
            <ul>
              <a
                href=""
                className="flex gap-2 py-2 px-2 text-[14px] hover:bg-stone-100 transition-hover duration-300"
              >
                <li>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg"
                    alt=""
                  />
                </li>
                Notification Preferences
              </a>
              <a
                href=""
                className="flex  gap-2 py-2 px-2 text-[14px] hover:bg-stone-100 transition-hover duration-300"
              >
                <li>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg"
                    alt=""
                  />
                </li>
                24x7 Customer Care
              </a>
              <a
                href=""
                className="flex  gap-2 py-2 px-2 text-[14px] hover:bg-stone-100 transition-hover duration-300"
              >
                <li>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg"
                    alt=""
                  />
                </li>
                Advertise
              </a>
              <a
                href=""
                className="flex  gap-2 py-2 px-2 text-[14px] hover:bg-stone-100 transition-hover duration-300"
              >
                <li>
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg"
                    alt=""
                  />
                </li>
                Download App
              </a>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
