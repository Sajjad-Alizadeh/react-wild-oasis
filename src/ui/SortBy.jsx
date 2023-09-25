import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSort = searchParams.get("sortBy") || ""

  function handleOnChange(e) {
    searchParams.set("sortBy", e.target.value);
    
    if (searchParams.get("page")) {
      searchParams.set("page", 1);
    }

    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      onChange={handleOnChange}
      type="white"
      value={currentSort}
    />
  );
}
