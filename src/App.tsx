import { Card, Layout } from "antd";
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
      <Content className="bg-bglight_very_light_gray !p-2 !py-6">
        <FilterContainer />
        <Routes>
          <Route path="/" element={<Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>} />
        <Route path="/:country" element={
          <Detail />
        } />
        </Routes>
        
      </Content>
      <Footer></Footer>
    </>
  );
};

export default App;
