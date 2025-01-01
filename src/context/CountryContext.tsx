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
  const [regionFilter, setRegionFilter] = useState<string>("Default");

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
  
    // Apply search term filter if provided
    if (searchTerm) {
      filtered = filtered.filter((country) => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
  
        return (
          country.name?.toLowerCase().includes(lowercasedSearchTerm) ||
          country.region?.toLowerCase().includes(lowercasedSearchTerm) ||
          country.population?.toString().toLowerCase().includes(lowercasedSearchTerm) ||
          country.capital?.toLowerCase().includes(lowercasedSearchTerm) ||
          country.nativeName?.toLowerCase().includes(lowercasedSearchTerm) ||
          country.numericCode?.toString().toLowerCase().includes(lowercasedSearchTerm) ||
          country.subregion?.toLowerCase().includes(lowercasedSearchTerm) ||
          country.callingCodes?.toString().toLowerCase().includes(lowercasedSearchTerm)
        );
      });
    }
  
    // If region filter is provided and is not "Default", apply region filter
    if (regionFilter && regionFilter !== "Default") {
      filtered = filtered.filter((country) => country.region === regionFilter);
    }
  
    // If "Default" is selected, prioritize India
    if (regionFilter === "Default") {
      filtered = filtered.sort((a, b) => {
        const countryA = a.name?.toLowerCase();
        const countryB = b.name?.toLowerCase();
  
        // Check if India is in the list and prioritize it
        if (countryA === "india") return -1; // Move India to the top
        if (countryB === "india") return 1;  // Ensure India appears first
        return 0; // Otherwise, keep the order unchanged
      });
    }
  
    // Update filtered countries
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
// eslint-disable-next-line react-refresh/only-export-components
export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountryContext must be used within a CountryProvider");
  }
  return context;
};
