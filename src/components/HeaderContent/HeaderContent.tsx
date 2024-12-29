import { MoonFilled, MoonOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useState } from "react";

const { Title } = Typography;

const HeaderContent = () => {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  return (
    <>
      <Row justify="space-between" align="middle">
        <Col>
          <Title className="heading-style !text-base" level={1}>
            Where in the world?
          </Title>
        </Col>
        <Col>
          <Button
            className="text-xs"
            size="small"
            onClick={() => {
              if (document.startViewTransition) {
                document.startViewTransition(() =>
                  setIsLightMode(!isLightMode)
                );
              } else {
                setIsLightMode(!isLightMode);
              }
            }}
            icon={isLightMode ? <MoonFilled /> : <MoonOutlined />}
          >
            {isLightMode ? "Light" : "Dark"} Mode
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default HeaderContent;
