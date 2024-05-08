import { Col, Row } from "antd"
import Search from "../Search/Search"
import RegionFilter from "../RegionFilter/RegionFilter"

const FilterContainer = () => {
  return (
    <Row>
        <Col>
         <Search />
        </Col>
        <Col>
            <RegionFilter />
        </Col>
    </Row>
  )
}

export default FilterContainer;
