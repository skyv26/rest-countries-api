import { Card, Image } from "antd";
import { Country } from "../../types/RestCountriesTypes";
import { useNavigate } from "react-router"; // Use navigate for programmatic routing
import { useState } from "react";

const { Meta } = Card;

const FlagCard = ({ country }: { country: Country }) => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false); // To control fade-out effect

  const handleNavigation = () => {
    setIsExiting(true); // Trigger fade-out animation
    setTimeout(() => {
      if (document.startViewTransition) {
        // Use ViewTransition API for a smooth transition
        document.startViewTransition(() => navigate(`/detail?country=${country.name}`));
      } else {
        // Fallback navigation
        navigate(`/detail?country=${country.name}`);
      }
    }, 300); // Match with fade-out duration
  };

  return (
    <div
      onClick={handleNavigation}
      className={`flag-card ${isExiting ? "fade-out" : ""}`} // Apply fade-out class conditionally
      style={{ cursor: "pointer" }}
    >
      <Card
        className="!rounded-[5px] max-w-[265px] overflow-hidden border-none shadow-sm"
        cover={
          <>
            <div>
              <Image
                alt={country.name}
                src={country.flag}
                preview={false}
                className="min-w-[265px] !h-[160px] !object-cover"
              />
            </div>
          </>
        }
      >
        <Meta
          title={country.name}
          description={
            <ul>
              <li className="max-w-[200px] truncate">
                Population: <span>{country.population}</span>
              </li>
              <li className="max-w-[200px] truncate">
                Region: <span>{country.region}</span>
              </li>
              <li className="max-w-[200px] truncate">
                Capital: <span>{country.capital}</span>
              </li>
            </ul>
          }
        />
      </Card>
    </div>
  );
};

export default FlagCard;
