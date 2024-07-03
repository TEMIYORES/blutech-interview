type Props = {};

const TableHeader = (props: Props) => {
  return (
    <div className="bg-tableheaderbg rounded-md">
      <div className="p-2">
        <div className="grid grid-cols-12 gap-2 items-center text-xs font-bold text-headercolor">
          <div className="flex gap-2 text-sm font-normal">
            <input type="checkbox" className="flex gap-1" />
            <p className="">S/N</p>
          </div>
          <p className="">Image</p>
          <p className="">SKU</p>
          <p className="">Name</p>
          <p className="col-span-2">Title</p>
          <p className="col-span-2">Description</p>
          <p className="">Brand</p>
          <p className="">Cost Price</p>
          <p className="">Quantity</p>
          <p className="">Size</p>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
