import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import { useCountryContext } from "../../context/CountryContext";
import { memo } from "react";

const Search = memo(() => {
  const { setSearchTerm } = useCountryContext();

  return (
    <div className="bg-white shadow-sm ">
        <Input onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(e.target.value)
        }} className="bg-transparent !py-3 !px-5 border-none flex gap-2 !text-base placeholder:!font-nunito !text-input_light_dark_gray" placeholder="Search for a country..." prefix={<SearchOutlined className="text-input_light_dark_gray" />} />
    </div>
  )
});

export default Search