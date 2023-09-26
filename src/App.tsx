import styled from 'styled-components';
import Tabs from './lib/Tabs';
import Tab from './lib/Tab';

function App() {
  return (
    <Tabs width={1000} responsive swiper $simpleTab>
      <Tab label="number1">
        <Wrapper>sadfsaf</Wrapper>
      </Tab>
      <Tab label="number2">content2</Tab>
      <Tab label="number3">content3</Tab>
      <Tab label="number3">content3</Tab>
      <Tab label="number3">content3</Tab>
      <Tab label="number3">content3</Tab>
      <Tab label="number3">content3</Tab>
      <Tab label="number3">content3</Tab>
      <Tab label="number3">content3</Tab>
    </Tabs>
  );
}

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;
  color: white;
`;

export default App;
