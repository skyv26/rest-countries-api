import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useCountryContext } from "../../context/CountryContext";
import { memo, useCallback, useRef } from "react";

const Search = memo(() => {
  const { setSearchTerm } = useCountryContext();

  // Use a number type for the debounce timer reference
  const debounceTimer = useRef<number | null>(null);

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      // Clear the previous timer if it exists
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      // Set a new debounce timer
      debounceTimer.current = window.setTimeout(() => {
        if (document.startViewTransition) {
          // Use ViewTransition API for smooth appearance
          document.startViewTransition(() => {
            setSearchTerm(newValue); // Update the search term in context
          });
        } else {
          // Fallback for non-supporting browsers
          setSearchTerm(newValue);
        }
      }, 500); // 500ms delay
    },
    [setSearchTerm]
  );

  return (
    <div className="bg-white shadow-sm rounded-[5px] overflow-hidden">
      <Input
        onInput={handleInput}
        className="bg-transparent !py-4 !px-5 border-none flex gap-2 !text-xs placeholder:!font-nunito !text-input_light_dark_gray !w-full"
        placeholder="Search for a country..."
        prefix={<SearchOutlined className="text-input_light_dark_gray mr-4 text-base" />}
      />
    </div>
  );
});

export default Search;
