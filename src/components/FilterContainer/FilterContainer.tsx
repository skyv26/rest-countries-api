import { Col, Row } from "antd";
import RegionFilter from "../RegionFilter/RegionFilter";
import Search from "../Search/Search";

const FilterContainer = () => {
  return (
    <div className="!w-full">

    <Row justify="start">
      <Col>
        <Search />
      </Col>
      <Col>
        <RegionFilter />
      </Col>
    </Row>
    </div>
  );
};

export default FilterContainer;
