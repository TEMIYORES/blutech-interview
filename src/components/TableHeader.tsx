/**
 * TableHeader component for the table header row.
 *
 * This component displays the header row for the table, including column titles
 * for the image, SKU, name, title, description, brand, cost price, quantity, and size.
 *
 * @returns {JSX.Element} The rendered table header component.
 */

import { useApiContext } from "../context/ApiContext";

const TableHeader = (): JSX.Element => {
  const { selectAll, setSelectAll } = useApiContext();

  return (
    <div className="bg-tableheaderbg rounded-md">
      <div className="p-2">
        <div className="grid grid-cols-12 gap-2 items-center text-xs font-bold text-headercolor">
          <div className="flex gap-2 text-sm font-normal">
            <input
              type="checkbox"
              className="flex gap-1"
              checked={selectAll}
              onChange={(e) => {
                setSelectAll(e.target.checked);
              }}
            />
            <p>S/N</p>
          </div>
          <p>Image</p>
          <p>SKU</p>
          <p>Name</p>
          <p className="col-span-2">Title</p>
          <p className="col-span-2">Description</p>
          <p>Brand</p>
          <p>Cost Price</p>
          <p>Quantity</p>
          <p>Size</p>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
