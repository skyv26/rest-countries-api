import { Layout } from 'antd';
import './App.css';
import HeaderContent from './components/HeaderContent/HeaderContent';

const { Header, Footer, Content } = Layout;


const App = () => {
  
  return (
    <>
      <Header className='bg-transparent !py-0 p-2 !m-0'>
        <HeaderContent />
      </Header>
        <Content>

        </Content>
      <Footer></Footer>
    </>
  )
}

export default App