import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Typography } from "antd";
import { useCountryContext } from "../../context/CountryContext";

const RegionFilter = () => {
  const { countries, loading, error, setRegionFilter } = useCountryContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Get unique regions sorted alphabetically
  const uniqueRegions = [
    ...new Set(countries.map((country) => country.region)),
  ].sort((a, b) => a.localeCompare(b));

  // Define items for the dropdown
  const items: MenuProps["items"] = [
    {
      key: "default",
      label: "Default",
    },
    ...uniqueRegions.map((each_region) => ({
      key: each_region.toLowerCase(),
      label: each_region,
    })),
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    // Find the selected item based on key
    const selectedItem = items.find((item) => item?.key === e.key) as {
      key: string;
      label: string;
    };

    if (selectedItem) {
      const selectedLabel = selectedItem.label;
      setRegionFilter(selectedLabel);
    }
  };

  return (
    <Dropdown
      className="dropdown-menu !bg-white !text-text_light_very_dark_blue !py-[15px] !px-5 rounded-[5px] !shadow-sm md:!py-[18px] xl:!pl-7 xl:!text-sm"
      menu={{
        items,
        className: "text-text_light_very_dark_blue dark:bg-element_dark_blue dark:!text-white",
        selectable: true,
        defaultSelectedKeys: ["default"], // Set the default selected key
        onClick: handleMenuClick,
      }}
    >
      <Typography.Link className="flex justify-between text-xs items-center w-full dark:!bg-element_dark_blue dark:!text-white">
        <span>Filter by Region</span>
        <DownOutlined className="!text-[8px] items-end" />
      </Typography.Link>
    </Dropdown>
  );
};

export default RegionFilter;
