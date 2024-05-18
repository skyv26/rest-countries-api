import { Card, Image } from "antd";
import { Country } from "../../types/RestCountriesTypes";
const { Meta } = Card;

const FlagCard = ({ country }: { country: Country }) => {
  return (
    <Card
      className="!rounded-[5px] max-w-[265px] overflow-hidden border-none shadow-sm"
      // className="w-full h-[160px] rounded-none"

      cover={
        <>
          {/* <div
            className="w-full h-[160px] rounded-none bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${country.flag})`, backgroundSize: "auto 100%", backgroundPosition: "center" }}
            
          /> */}
          <div>
            <Image
              alt={country.name}
              src={country.flag}
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
  );
};

export default FlagCard;
