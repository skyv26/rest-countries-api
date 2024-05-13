import { Col, Row } from "antd";
import RegionFilter from "../RegionFilter/RegionFilter";
import Search from "../Search/Search";

const FilterContainer = () => {
  return (
    <div className="w-full">
      <Row className="flex flex-col gap-10 items-start">
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
