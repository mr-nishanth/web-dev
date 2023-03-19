import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Header>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultOpenKeys={["home"]}
          items={[
            {
              label: "Home",
              key: "home",
            },
            {
              label: "Profile",
              key: "profile",
            },
          ]}
        />
      </Header>
      <Layout className='h-[92vh]'>
        <Sider className='w-96' theme='light'>
          Sider
        </Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
