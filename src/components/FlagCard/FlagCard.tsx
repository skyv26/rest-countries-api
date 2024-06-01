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
        className="card-custom !rounded-[5px] max-w-[255px] md:!max-w-[200px] lg:!max-w-[255px] xl:!max-w-[260px] overflow-hidden border-none shadow-sm dark:bg-element_dark_blue"
        cover={
          <>
            <div>
              <Image
                alt={country.name}
                src={country.flag}
                preview={false}
                className="min-w-[255px] !h-[155px] !object-cover md:min-w-[200px] lg:!min-w-[255px] xl:!min-w-[260px]"
              />
            </div>
          </>
        }
      >
        <Meta
          title={<span className="text-lg font-bold dark:text-white">{country.name}</span>}
          className="!p-0"
          description={
            <ul className="!mt-3 flex flex-col text-text_light_very_dark_blue gap-1 dark:text-white">
              <li className="max-w-[200px] !text-sm !font-semibold truncate">
                Population: <span className="!font-normal">{country.population.toLocaleString()}</span>
              </li>
              <li className="max-w-[200px] !text-sm !font-semibold truncate">
                Region: <span className="!font-normal">{country.region}</span>
              </li>
              <li className="max-w-[200px] !text-sm !font-semibold truncate">
                Capital: <span className="!font-normal">{country.capital}</span>
              </li>
            </ul>
          }
        />
      </Card>
    </div>
  );
};

export default FlagCard;
