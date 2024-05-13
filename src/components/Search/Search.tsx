import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"

const Search = () => {
  return (
    <div className="bg-white shadow-sm ">
        <Input className="bg-transparent !py-3 !px-5 border-none flex gap-2 !text-base placeholder:!font-nunito !text-input_light_dark_gray" placeholder="Search for a country..." prefix={<SearchOutlined className="text-input_light_dark_gray" />} />
    </div>
  )
}

export default Search