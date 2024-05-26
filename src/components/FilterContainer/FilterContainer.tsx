import { Col, Row } from "antd";
import RegionFilter from "../RegionFilter/RegionFilter";
import Search from "../Search/Search";

const FilterContainer = () => {
  return (
    <div className="w-full">
      <Row justify="space-between" className="gap-9 md:px-14">
        <Col xs={24} md={12}>
          <Search />
        </Col>
        <Col xs={15} md={7}>
          <RegionFilter />
        </Col>
      </Row>
    </div>
  );
};

export default FilterContainer;
