import React from 'react'

import { Layout, Menu, Breadcrumb, Button,Row, Col} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, Html5Outlined, AppleOutlined, MailOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/AntdIcon';
import LoginModal from './Login';

import LogoOrg from './Logo';
import RegisterModal from './Register';
import MenuItem from 'antd/lib/menu/MenuItem';



const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const IotLayout = () => {
  const [current, setCurrent] = React.useState('1');


  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <>
<Layout>
<Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Row justify='space-between' style={{width: '100%'}}>
        <Col style={{ display: 'flex'}}>
          <Menu.Item style={{background:'#001529'}}  className="headitem logo" key='0'>{<LogoOrg />} </Menu.Item>
          <Menu.Item style={{background:'#001529'}}   className="headitem"key="nav1"><a href='/'>nav 1</a></Menu.Item>
          <Menu.Item style={{background:'#001529'}}  className="headitem"  key="nav2">nav 2</Menu.Item>
          </Col>
        <Col  style={{ display: 'flex'}}>
          <Menu.Item className="login headitem" style={{background:'#001529'}} key="nav3"><LoginModal /></Menu.Item>
          <Menu.Item className="login headitem"  style={{background:'#001529'}} key="nav4"><RegisterModal /></Menu.Item>
        </Col>
        </Row>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider  className="site-layout-background" width={200}>
          <Menu
             mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
           
          >
            <SubMenu key="sub1"icon={<UserOutlined />} title="wml">
            <SubMenu key="suba"icon={<UserOutlined />} title="">
              <Menu.Item key="1">Project1</Menu.Item>
              <Menu.Item key="2">Project2</Menu.Item>
              </SubMenu>
              <Menu.Item key="3">Project3</Menu.Item>
              <Menu.Item key="4">Project4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="fervid">
              <Menu.Item key="5">Project5</Menu.Item>
              <Menu.Item key="6">Project6</Menu.Item>
              <Menu.Item key="7">Project7</Menu.Item>
              <Menu.Item key="8">Project8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" icon={<MailOutlined />} title="Navigation One"  onClick={handleClick}>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
        </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="akshara">
              <Menu.Item key="9">Project9</Menu.Item>
              <Menu.Item key="10">Project10</Menu.Item>
              <Menu.Item key="11">Project11</Menu.Item>
              <Menu.Item key="12">Project12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Iot@akshara</Footer>
  </Layout>
  
      
      </>
  )
}

export default IotLayout