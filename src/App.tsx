import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import Producer from "./pages/Producer";
import Consumer from "./pages/Consumer";
import Transaction from "./pages/Transaction";
// import { main } from "./app";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  // const [mainFunctions, setMainFunctions] = useState({});

  useEffect(() => {
    // async function callMain() {
    //   const res = await main();
    //   setMainFunctions(res);
    // }
    // callMain();
  }, []);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const getPage = () => {
    switch (selectedKey) {
      case "1":
        return <Producer />;
      case "2":
        return <Consumer />;
      case "3":
        return <Transaction />;
    }
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={({ key }) => setSelectedKey(key)}
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Producer",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Consumer",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Transaction Log",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {getPage()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
