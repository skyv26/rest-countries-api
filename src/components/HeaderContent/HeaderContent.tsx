import { MoonFilled, MoonOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useEffect, useState } from "react";

const { Title } = Typography;

const HeaderContent = () => {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("dark");
      // localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      // localStorage.setItem("theme", "light");
    }
  }, [isLightMode]);
  
  return (
    <>
      <Row justify="space-between" align="middle" className="!py-[10px] !px-4 min-[375px]:!py-[8px] md:!px-9 lg:!px-20">
        <Col>
          <Title className="heading-style font-extrabold !text-text_light_very_dark_blue !text-[13.5px] dark:!text-bglight_very_light_gray md:!text-2xl" level={1}>
            Where in the world?
          </Title>
        </Col>
        <Col>
          <Button
            className="text-xs !p-0 !m-0 !text-text_light_very_dark_blue !bg-transparent dark:!text-bglight_very_light_gray border-none font-semibold md:!text-base"
            size="small"
            onClick={() => {
              setIsLightMode(!isLightMode);
              // if (document.startViewTransition) {
              //   document.startViewTransition(() =>
              //     setIsLightMode(!isLightMode)
              //   );
              // } else {
              // }
            }}
            icon={isLightMode ? <MoonFilled className="!text-text_light_very_dark_blue !text-sm dark:!text-bglight_very_light_gray md:!text-base" /> : <MoonOutlined className="!text-text_light_very_dark_blue !text-sm dark:!text-bglight_very_light_gray" />}
          >
            {isLightMode ? "Light" : "Dark"} Mode
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default HeaderContent;
