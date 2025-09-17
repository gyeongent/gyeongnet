import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../logo.svg";

import { MdDarkMode } from "react-icons/md";
import { BiSupport, BiNews, BiDownload } from "react-icons/bi";
import { FaCompactDisc } from "react-icons/fa";
import Announcement from "./announcement";

import CardNav from "../blocks/CardNav/CardNav";

import "./css/header.css";
import "./css/announcement.css";

function Header() {
  const items = [
    {
      label: "GYEONG Studio",
      bgColor: "#1a1a1a",
      textColor: "#f5f5f5",
      links: [
        { label: "포트폴리오", href: "/portfolio", ariaLabel: "포트폴리오" },
        { label: "디스코그래피", ariaLabel: "도전기", href: "/discography" },
        { label: "뉴스", ariaLabel: "느끼는 감정들", href: "/news" },
        { label: "지원", ariaLabel: "도전기", href: "/support" },
      ],
    },
    {
      label: "GUMMY",
      bgColor: "#f27cbd",
      textColor: "#000",
      links: [
        { label: "소개", ariaLabel: "브랜드 소개" },
        { label: "둘러보기", ariaLabel: "굿즈 둘러보기" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <>
      <CardNav
        logo={logo}
        items={items}
        baseColor="rgba(255, 255, 255, 0.14)"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    </>
  );
}

export default Header;
