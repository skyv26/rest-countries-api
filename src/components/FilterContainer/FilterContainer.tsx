import { Col, Row } from "antd";
import RegionFilter from "../RegionFilter/RegionFilter";
import Search from "../Search/Search";

const FilterContainer = () => {
  return (
    <div className="w-full">
      <Row gutter={[36, 36]} className="md:px-14">
        <Col span={24}>
          <Search />
        </Col>
        <Col span={15}>
          <RegionFilter />
        </Col>
      </Row>
    </div>
  );
};

export default FilterContainer;
