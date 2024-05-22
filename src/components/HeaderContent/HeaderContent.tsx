import { MoonFilled, MoonOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useState } from "react";

const { Title } = Typography;

const HeaderContent = () => {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  return (
    <>
      <Row justify="space-between" align="middle" className="!py-[10px] !px-4 min-[375px]:!py-[8px]">
        <Col>
          <Title className="heading-style font-extrabold !text-text_light_very_dark_blue !text-[13.5px]" level={1}>
            Where in the world?
          </Title>
        </Col>
        <Col>
          <Button
            className="text-xs !p-0 !m-0 !text-text_light_very_dark_blue border-none font-semibold"
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
            icon={isLightMode ? <MoonFilled className="!text-text_light_very_dark_blue !text-sm" /> : <MoonOutlined className="!text-text_light_very_dark_blue !text-sm" />}
          >
            {isLightMode ? "Light" : "Dark"} Mode
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default HeaderContent;
