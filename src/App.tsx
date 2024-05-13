import { Card, Col, Layout, Row } from "antd";
import "./App.css";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import { Route, Routes } from "react-router";
import Detail from "./pages/Detail";

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

const App = () => {
  return (
    <>
      <Header className="!py-0 p-2 !m-0 !bg-white shadow-sm">
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
                  className="!rounded-[5px]"
                    cover={
                      <img
                        alt="example"
                        className="w-[264px] h-[160px] object-fill object-top"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  >
                    {/* Additional Card Content */}
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
