import { Col, Row } from "antd";
import FlagCard from "../FlagCard/FlagCard";
import { Country } from "../../types/RestCountriesTypes";
import { useCountryContext } from "../../context/CountryContext";

const FlagContainer = () => {
  const { filteredCountries, loading, error } = useCountryContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Row className="w-full py-8 gap-10 xl:gap-[40px] min-[1366px]:gap-[61px] min-[1440px]:gap-[85px]" justify="center">
      {filteredCountries.map((each: Country) => (
        <Col key={each.name}>
          <FlagCard country={each} />
        </Col>
      ))}
    </Row>
  );
};

export default FlagContainer;
