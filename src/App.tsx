import { Card, Layout } from "antd";
import "./App.css";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import HeaderContent from "./components/HeaderContent/HeaderContent";

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

const App = () => {
  return (
    <>
      <Header className="bg-transparent !py-0 p-2 !m-0">
        <HeaderContent />
      </Header>
      <Content>
        <FilterContainer />
        <Card
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
        </Card>
      </Content>
      <Footer></Footer>
    </>
  );
};

export default App;
