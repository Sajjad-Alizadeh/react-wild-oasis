import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

const options = [
  { label: "All", value: "all" },
  { label: "No discount", value: "no-discount" },
  { label: "With discount", value: "with-discount" },
];

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="discount" options={options} />
    </TableOperations>
  );
}
