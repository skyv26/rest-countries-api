import { Col, Layout, Row } from "antd";
import { Route, Routes } from "react-router";
import "./App.css";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import Detail from "./pages/Detail";
import FlagContainer from "./components/FlagContainer/FlagContainer";

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <>
      <Header className="!p-0 h-auto !m-0 !bg-white shadow-sm">
        <HeaderContent />
      </Header>
      <Content className="content bg-[#bbb8b8] !p-2 !py-6">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <FilterContainer />
          </Col>
          <Col span={24}>
            <Routes>
              <Route path="/" element={<FlagContainer />} />
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
