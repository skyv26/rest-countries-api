import { Card, Col, Layout, Row } from "antd";
import { Route, Routes } from "react-router";
import "./App.css";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import Detail from "./pages/Detail";

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

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
              <Route
                path="/"
                element={
                  <Card
                  className="!rounded-[5px] max-w-[264px]"
                    cover={
                      <img
                        alt="example"
                        className="w-full h-[160px] object-fill object-top rounded-none"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  >
                    <Meta title="Germany" description={
                      <ul>
                        <li>Population: <span>81770900</span></li>
                        <li>Region: <span>Europe</span></li>
                        <li>Capital: <span>Berlin</span></li>
                      </ul>
                    } />
                  </Card>
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
