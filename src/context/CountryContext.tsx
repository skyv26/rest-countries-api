import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Country, CountryContextType } from "../types/RestCountriesTypes";

// Create the context
const CountryContext = createContext<CountryContextType | undefined>(undefined);

// Provider component
export const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<string>("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Country[] = await response.json();
        setCountries(data);
      } catch (err: unknown) {
        setError((err as Error).message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Effect to filter countries based on search term and region filter
  useEffect(() => {
    let filtered = countries;

    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (regionFilter) {
      filtered = filtered.filter((country) => country.region === regionFilter);
    }

    setFilteredCountries(filtered);
  }, [countries, searchTerm, regionFilter]);

  return (
    <CountryContext.Provider
      value={{
        countries,
        filteredCountries,
        loading,
        error,
        searchTerm,
        regionFilter,
        setSearchTerm,
        setRegionFilter,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

// Custom hook for using the context
export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountryContext must be used within a CountryProvider");
  }
  return context;
};
