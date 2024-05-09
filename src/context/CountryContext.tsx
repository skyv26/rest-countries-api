import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Country } from "../types/RestCountriesTypes";

// Define the shape of the context
interface CountryContextType {
  countries: Country[];
  loading: boolean;
  error: string | null;
}

// Create the context
const CountryContext = createContext<CountryContextType | undefined>(undefined);

// Provider component
export const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <CountryContext.Provider value={{ countries, loading, error }}>
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
