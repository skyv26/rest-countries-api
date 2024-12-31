import { Col, Row } from "antd";
import RegionFilter from "../RegionFilter/RegionFilter";
import Search from "../Search/Search";

const FilterContainer = () => {
  return (
    <div className="w-full">
      <Row
        justify="space-between"
        className="gap-9 md:px-7 lg:px-[74px] min-[1366px]:px-16 xl:px-14"
      >
        <Col className="w-full md:w-5/12 xl:max-w-[480px]">
          <Search />
        </Col>
        <Col className="min-w-[200px]">
          <RegionFilter />
        </Col>
      </Row>
    </div>
  );
};

export default FilterContainer;
