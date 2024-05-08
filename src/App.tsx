import { Layout } from 'antd';
import './App.css';
import HeaderContent from './components/HeaderContent/HeaderContent';
import FilterContainer from './components/FilterContainer/FilterContainer';

const { Header, Footer, Content } = Layout;

const App = () => {
  
  return (
    <>
      <Header className='bg-transparent !py-0 p-2 !m-0'>
        <HeaderContent />
      </Header>
        <Content>
            <FilterContainer />
        </Content>
      <Footer></Footer>
    </>
  )
}

export default App