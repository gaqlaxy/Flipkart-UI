import React from "react";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="flex gap-6 justify-between pt-6 pb-6 px-12 bg-black text-white border-b-2 border-gray-300">
        <div className="flex flex-col text-sm">
          <a href="" className="mb-4 text-gray-300 uppercase font-semibold">
            About
          </a>
          <a href="" className="text-xs">
            Contact Us
          </a>
          <a href="" className="text-xs">
            About Us
          </a>
          <a href="" className="text-xs">
            Careers
          </a>
          <a href="" className="text-xs">
            Flipkart Stories
          </a>
          <a href="" className="text-xs">
            Press
          </a>
          <a href="" className="text-xs">
            Corporate Information
          </a>
        </div>
        <div className="flex flex-col text-sm">
          <a href="" className="mb-4 text-gray-300 uppercase font-semibold">
            Group Companies
          </a>
          <a href="" className="text-xs">
            Myntra
          </a>
          <a href="" className="text-xs">
            Cleartrip
          </a>
          <a href="" className="text-xs">
            Shopsy
          </a>
        </div>
        <div className="flex flex-col text-sm">
          <a href="" className="mb-4 text-gray-300 uppercase font-semibold">
            Help
          </a>
          <a href="" className="text-xs">
            Payments
          </a>
          <a href="" className="text-xs">
            Shipping
          </a>
          <a href="" className="text-xs">
            Cancellation & Returns
          </a>
          <a href="" className="text-xs">
            FAQ
          </a>
        </div>
        <div className="flex flex-col text-sm">
          <a href="" className="mb-4 text-gray-300 uppercase font-semibold">
            Consumer Policy
          </a>
          <a href="" className="text-xs">
            Cancellation & Returns
          </a>
          <a href="" className="text-xs">
            Terms Of Use
          </a>
          <a href="" className="text-xs">
            Security
          </a>
          <a href="" className="text-xs">
            Privacy
          </a>
          <a href="" className="text-xs">
            Sitemap
          </a>
          <a href="" className="text-xs">
            Grievance Redressal
          </a>
          <a href="" className="text-xs">
            EPR Compliance
          </a>
        </div>

        <div className="flex flex-col text-sm border-l-2 border-gray-300 pl-8">
          <a href="" className="mb-4 text-gray-300 uppercase font-semibold">
            Mail Us:
          </a>
          <p className="text-xs">
            Flipkart Internet Private Limited, <br /> Buildings Alyssa, Begonia
            & <br /> Clove Embassy Tech Village, <br /> Outer Ring Road,
            Devarabeesanahalli Village, <br /> Bengaluru, 560103, <br />
            Karnataka, India
          </p>
          <div className="mt-4">
            <h1>Social:</h1>
            <div className="flex gap-4 mt-2">
              <FaFacebook />
              <FaXTwitter />
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-sm ">
          <a href="" className="mb-4 text-gray-300 uppercase font-semibold">
            Registered Office Address
          </a>
          <p className="text-xs">
            Flipkart Internet Private Limited, <br /> Buildings Alyssa, Begonia
            & <br /> Clove Embassy Tech Village, <br /> Outer Ring Road,
            Devarabeesanahalli Village, <br /> Bengaluru, 560103, <br />
            Karnataka, India <br />
            CIN : U51109KA2012PTC066107 <br />
            Telephone: 044-45614700
          </p>
        </div>
      </div>

      {/* second Foot */}
      <div className="flex gap-6 justify-between pt-6 pb-6 px-12 items-center bg-black text-white">
        <div className="flex gap-2">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
            alt=""
          />
          <a href="">Become a Seller</a>
        </div>
        <div className="flex gap-2">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
            alt=""
          />
          <a href="">Advertise</a>
        </div>
        <div className="flex gap-2">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
            alt=""
          />
          <a href="">Gift Cards</a>
        </div>
        <div className="flex gap-2">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
            alt=""
          />
          <a href="">Help Center</a>
        </div>
        <div>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
