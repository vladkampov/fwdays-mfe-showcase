import { Menu, MenuProps } from "antd";
import { useState } from "react";

const items: MenuProps["items"] = [
  {
    label: "Just",
    key: "mail",
  },
  {
    label: "A",
    key: "a",
  },
  {
    label: "Dummy",
    key: "dummy",
  },
  {
    label: "Menu",
    key: "menu",
  },
];

export default function Root(props) {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    // eslint-disable-next-line no-console
    console.log("Did you subscribed to the Подкаст ЖеПеТе? ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
