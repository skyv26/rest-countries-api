import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"

const Search = () => {
  return (
    <div>
        <Input placeholder="default size" prefix={<SearchOutlined />} />
    </div>
  )
}

export default Search