import { Col, Row } from "antd";
import FlagCard from "../FlagCard/FlagCard";
import { Country } from "../../types/RestCountriesTypes";
import { useCountryContext } from "../../context/CountryContext";

const FlagContainer = () => {
  const { filteredCountries, loading, error } = useCountryContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

//   const defaultCountriesAsPerDesign =
//     "india,united states of america,pakistan,Russian Federation,United Kingdom of Great Britain and Northern Ireland,japan,Sierra Leone";

//   const predefinedCountries = countries.filter((country: Country) =>
//     countries
//       .toLowerCase()
//       .includes(country.name.toLowerCase())
//   );

  return (
    <Row className="w-full py-8 gap-10" justify="center">
      {filteredCountries.map((each: Country) => (
        <Col key={each.name}>
          <FlagCard country={each} />
        </Col>
      ))}
    </Row>
  );
};

export default FlagContainer;
