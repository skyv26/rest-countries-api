import { Button, Image } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useCountryContext } from "../context/CountryContext";

const Detail: React.FC = () => {
  const location = useLocation();
  const { countries } = useCountryContext();
  const navigate = useNavigate();
  const [isContentVisible, setContentVisible] = useState(false); // For controlling fade-in

  // Extract the country query parameter
  const searchParams = new URLSearchParams(location.search);
  const countryName = searchParams.get("country");

  // Find the country object
  const country = countries.find(
    (c) => c.name.toLowerCase() === countryName?.toLowerCase()
  );

  // Handle fade-in effect
  useEffect(() => {
    const timeout = setTimeout(() => setContentVisible(true), 300); // Delay to allow fade-in
    return () => clearTimeout(timeout);
  }, []);

  if (!country) {
    return <div>Country not found.</div>;
  }

  const borderCountries = countries.filter((eachCountry) =>
    country.borders?.includes(eachCountry.alpha3Code)
  );

  return (
    <div
      className={`detail-container ${
        isContentVisible ? "fade-in" : "fade-hidden"
      }`} // Dynamic classes for transition
    >
      <Button
        icon={<ArrowLeftOutlined />}
        className="max-w-max"
        onClick={() => {
          if (document.startViewTransition) {
            document.startViewTransition(() => navigate("/"));
          } else {
            navigate("/");
          }
        }}
      >
        Back
      </Button>
      <div className="flex justify-start items-center mt-4">
        <div>
          {country.flag && (
            <Image
              alt={country.name}
              src={country.flag}
              preview={false}
              className="max-w-[560px] min-w-[320px] min-h-[229px] max-h-[400px] w-full !h-[160px] !object-cover"
            />
          )}
        </div>

        {/* Country Details */}
        <div className="ml-6">
          <h1 className="text-xl font-bold">{country.name}</h1>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Population:</strong> {country.population}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
          <p>
            <strong>Subregion:</strong> {country.subregion}
          </p>
          <p>
            <strong>Native Name:</strong> {country.nativeName}
          </p>
          <p>
            <strong>Calling Codes:</strong> {country.callingCodes.join(", ")}
          </p>

          {/* Border Countries */}
          {borderCountries.length > 0 && (
            <div className="flex gap-2 items-center justify-center mt-4">
              <p>Border Countries:</p>
              <ul className="flex gap-2">
                {borderCountries.map((borderCountry) => (
                  <li key={borderCountry.alpha3Code} className="p-1 border">
                    {borderCountry.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
