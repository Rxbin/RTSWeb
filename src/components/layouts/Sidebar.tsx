import * as React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import "./Sidebar.less";

interface SidebarState {
    collapsed: boolean;
    mode: "vertical" | "inline" | "horizontal" | undefined;
}

class Sidebar extends React.Component<{}, SidebarState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            collapsed: false,
            mode: "inline",
        };
    }

    public render(): JSX.Element {
        return (
            <Layout.Sider collapsible collapsed={this.state.collapsed} onCollapse={this.toggle}>
                <div className="ant-layout-logo" />
                <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1">
                        <Link to="/home">
                            <Icon type="home" />
                            <span className="nav-text">Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/users">
                            <Icon type="user" />
                            <span className="nav-text">Users</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/managers">
                            <Icon type="filter" />
                            <span className="nav-text">Managers</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/projectmanagers">
                            <Icon type="notification" />
                            <span className="nav-text">Project Managers</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/projectcontrols">
                            <Icon type="star-o" />
                            <span className="nav-text">Project Controls</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to="/reports">
                            <Icon type="file-text" />
                            <span className="nav-text">Reports</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link to="/about">
                            <Icon type="rocket" />
                            <span className="nav-text">About</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link to="/todo">
                            <Icon type="check-square-o" />
                            <span className="nav-text">To Do</span>
                        </Link>
                    </Menu.Item>
                </Menu>
                <div className="sider-trigger">
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                    onClick={this.toggle}/>
                </div>
            </Layout.Sider>
        );
    }

    private toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            mode: !this.state.collapsed ? "vertical" : "inline",
        });
    }
}

export default Sidebar;
