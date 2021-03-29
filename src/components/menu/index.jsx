import React from "react";
import "./menu.scss";

import { Star,Copy,Columns,Grid,Send,Home } from "react-feather";
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const MenuComponent =()=>{

    return(<div>
        
        <Menu  mode="horizontal">
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Ant Design
          </a>
        </Menu.Item>
        <Menu.Item key="mail" icon={<MailOutlined />}>
          <Link to="/table">Table</Link>
        </Menu.Item>
        <Menu.Item key="app"  icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>

        {/* <header className="header">
           <ul>
               
            <li><Link to="/"><Home size={16} />Home</Link></li>              
            <li><Link to="/rate"><Star size={16} />Rate</Link></li>
            <li><Link to="/popup"><Copy size={16} />Popup</Link></li>
            <li><Link to="/tab"><Columns size={16} />Tab</Link></li>
            <li><Link to="/table"><Grid size={16} />Table</Link></li>
            <li><Link to="/message"><Send size={16} />Message</Link></li>

            </ul>
        </header> */}
    </div>)

}
export default MenuComponent;