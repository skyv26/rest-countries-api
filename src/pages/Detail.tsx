import { Button, Image } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useCountryContext } from "../context/CountryContext";

const Detail: React.FC = () => {
  const location = useLocation();
  const { countries } = useCountryContext();
  const navigate = useNavigate();
  const [, setIsExiting] = useState(false); // To control fade-out effect

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

  const handleNavigation = (countryName: string) => {
    setIsExiting(true); // Trigger fade-out animation
    setTimeout(() => {
      if (document.startViewTransition) {
        // Use ViewTransition API for a smooth transition
        document.startViewTransition(() => navigate(`/detail?country=${countryName}`));
      } else {
        // Fallback navigation
        navigate(`/detail?country=${countryName}`);
      }
    }, 300); // Match with fade-out duration
  };

  const borderCountries = countries.filter((eachCountry) =>
    country.borders?.includes(eachCountry.alpha3Code)
  );

  console.log(country.languages);

  return (
    <div
      className={`detail-container ${
        isContentVisible ? "fade-in" : "fade-hidden"
      } lg:px-10 min-[1366px]:px-20`} // Dynamic classes for transition
    >
      <Button
        icon={<ArrowLeftOutlined />}
        className="max-w-max mt-[20px] ml-[4px] !rounded-[2px] dark:text-white dark:bg-element_dark_blue border-none hover:!text-white hover:!bg-bgdark_very_dark_blue !shadow-lg shadow-bgdark_very_dark_blue"
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
      <div className="flex flex-col justify-start items-start mt-16 md:flex-row md:gap-20 md:justify-between">
        <div>
          {country.flag && (
            <Image
              alt={country.name}
              src={country.flag}
              className="max-w-[560px] min-w-[200px] w-full rounded-md !object-cover"
            />
          )}
        </div>

        {/* Country Details */}
        <div className="mt-10 max-h-max md:mt-0 md:!my-auto max-w-[598px]">
          <h1 className="text-xl mb-4 min-[375px]:text-[22px] font-bold dark:text-white md:text-[32px]">
            {country.name}
          </h1>
          <div className="flex flex-col gap-5 dark:text-white md:flex-row md:gap-20 md:justify-between lg:mt-6">
            <ul className="flex flex-col gap-2">
              <li className="text-sm font-light">
                <span className="font-semibold">Native Name: </span>
                {country.nativeName}
              </li>
              <li className="text-sm font-light">
                <span className="font-semibold">Population: </span>
                {country.population.toLocaleString()}
              </li>
              <li className="text-sm font-light">
                <span className="font-semibold">Region: </span>
                {country.region}
              </li>
              <li className="text-sm font-light">
                <span className="font-semibold">Sub Region: </span>
                {country.subregion}
              </li>
              <li className="text-sm font-light">
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="text-sm font-light">
                <span className="font-semibold">Top Level Domain: </span>
                {country.topLevelDomain}
              </li>
              <li className="text-sm font-light">
                <span className="font-semibold">Currencies: </span>
                {country.currencies[0]["name"]}
              </li>
              <li className="text-sm font-light">
                <span className="font-semibold">Languages: </span>
                {country.languages.map((each) => each.name).join(",")}
              </li>
            </ul>
          </div>

          {/* Border Countries */}
          {borderCountries.length > 0 && (
            <div className="flex flex-col md:flex-row gap-4 items-start justify-start mt-4 dark:text-white md:mt-6 lg:mt-16">
              <p className="text-base font-semibold min-w-max">Border Countries:</p>
              <ul className="flex gap-[10px] flex-wrap">
                {borderCountries.map((borderCountry) => (
                  <li
                   onClick={() => handleNavigation(borderCountry.name)}
                    key={borderCountry.alpha3Code}
                    className="p-1  dark:bg-element_dark_blue px-5 py-1 rounded-[2px] shadow-sm shadow-bgdark_very_dark_blue text-xs font-light"
                  >
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
