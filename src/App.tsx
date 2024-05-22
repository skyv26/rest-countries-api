import { Col, Layout, Row } from "antd";
import { Route, Routes } from "react-router";
import "./App.css";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import FlagContainer from "./components/FlagContainer/FlagContainer";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import Detail from "./pages/Detail";

const { Header, Footer, Content } = Layout;
// bglight_very_light_gray
const App = () => {
  return (
    <>
      <Header className="!p-0 h-auto !m-0 !bg-white !shadow-md">
        <HeaderContent />
      </Header>
      <Content className="content bg-gray-400  !p-2 !py-6 min-[375px]:!p-4">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FilterContainer />
                    <FlagContainer />
                  </>
                }
              />
              <Route path="/:country" element={<Detail />} />
            </Routes>
          </Col>
        </Row>
      </Content>
      <Footer></Footer>
    </>
  );
};

export default App;
