import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Typography } from "antd";
import { useCountryContext } from "../../context/CountryContext";

const RegionFilter = () => {
  const { countries, loading, error, setRegionFilter } = useCountryContext();

  setRegionFilter("Default");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Get unique regions sorted alphabetically
  const uniqueRegions = [...new Set(countries.map((country) => country.region))].sort((a, b) =>
    a.localeCompare(b)
  );

  // Define items for the dropdown
  const items: MenuProps["items"] = [
    {
      key: 'default',
      label: 'Default'
    },
    ...uniqueRegions.map((each_region) => ({
      key: each_region.toLowerCase(),
      label: each_region
    }))
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    // Find the selected item based on key
    const selectedItem = items.find((item) => item?.key === e.key) as {
      key: string,
      label: string
    };

    if (selectedItem) {
      const selectedLabel = selectedItem.label;
      console.log("Selected Region Key:", e.key);
      console.log("Selected Region Label:", selectedLabel);
      setRegionFilter(selectedLabel);
    }
  };

  return (
    <Dropdown
      className="!bg-white !text-text_light_very_dark_blue !py-[18px] !px-5"
      menu={{
        items,
        className: "text-text_light_very_dark_blue",
        selectable: true,
        defaultSelectedKeys: ["default"], // Set the default selected key
        onClick: handleMenuClick
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
