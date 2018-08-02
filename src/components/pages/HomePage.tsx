import * as React from "react";
import { Card } from "antd";

class HomePage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <Card bordered title="What's New Notes" style={{ margin: "16px 16px"}}>
                <p>Welcome</p>
            </Card>
        );
    }
}

export default HomePage;
