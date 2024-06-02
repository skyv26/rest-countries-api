import { Button, Col, Layout, Row } from "antd";
import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import FlagContainer from "./components/FlagContainer/FlagContainer";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import Detail from "./pages/Detail";

const { Header, Footer, Content } = Layout;
const App = () => {
  return (
    <>
      <Header className="!p-0 h-auto !m-0 !bg-white relative shadow-md dark:!bg-element_dark_blue">
        <HeaderContent />
      </Header>
      <Content className="content bg-bglight_very_light_gray dark:bg-bgdark_very_dark_blue !p-2 !py-6 min-[375px]:!p-4 lg:!py-12">
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <Routes>
              <Route
                path="/countries"
                element={
                  <>
                    <FilterContainer />
                    <FlagContainer />
                  </>
                }
              />
              <Route path="/" element={<Navigate replace to="/rockets" />} />
              <Route path="/detail" element={<Detail />} />
            </Routes>
          </Col>
        </Row>
      </Content>
      <Footer className="bg-transparent text-center text-element_dark_blue dark:text-white">
        Made with ❤️ by{" "}
        <Button
          href="https://linkedin.com/in/skyv2022"
          className="px-0 text-element_dark_blue dark:text-blue-200"
          type="link"
        >
          Aakash Verma
        </Button>
      </Footer>
    </>
  );
};

export default App;
