import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Typography } from "antd";
import { useCountryContext } from "../../context/CountryContext";

const RegionFilter = () => {
  const { countries, loading, error } = useCountryContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const uniqueRegions = [...new Set(countries.map((country) => country.region))].sort((a, b) => a.localeCompare(b));

  const items: MenuProps["items"] = [
    {
      key: 'default',
      label: 'Default'
    },
    ...uniqueRegions.map((each_region) => ({
      key: each_region.toLowerCase(),
      label: each_region
    }))
  ] 

  return (
    <Dropdown
      className="!bg-white !text-text_light_very_dark_blue !py-[18px] !px-5"
      menu={{
        items,
        className: "text-text_light_very_dark_blue",
        selectable: true,
        defaultSelectedKeys: ["3"],
      }}
    >
      <Typography.Link>
        <Space>
          Filter by Region
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

export default RegionFilter;
