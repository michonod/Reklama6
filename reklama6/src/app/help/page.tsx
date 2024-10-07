import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

const helpTypes = [
  { icon: <UserOutlined />, title: "Регистрирај се", link: "/" },
  { icon: <UserOutlined />, title: "Регистрирај се", link: "/" },
  { icon: <UserOutlined />, title: "Регистрирај се", link: "/" },
  { icon: <UserOutlined />, title: "Регистрирај се", link: "/" },
  { icon: <UserOutlined />, title: "Регистрирај се", link: "/" },
  { icon: <UserOutlined />, title: "Регистрирај се", link: "/" },
  { icon: <UserOutlined />, title: "Регистрирај се", link: "/" },
  { icon: <UserOutlined />, title: "Регистрирај се", link: "/" },
  { icon: <UserOutlined />, title: "Регистрирај се", link: "/" },
  { icon: <UserOutlined />, title: "Регистрирај се", link: "/" },
  { icon: <UserOutlined />, title: "Регистрирај се", link: "/" },
];

const Help = () => {
  return (
    <div>
      <h1>Помош/FAQ</h1>
      {helpTypes.map((item) => {
        return (
          <Link href={item.link}>
            <div>{item.icon}</div>
            <p>{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Help;
