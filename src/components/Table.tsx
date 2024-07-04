import TableHeader from "./TableHeader";
import Lottie from "lottie-react";
import LoaderAnimation from "../assets/loader.json";
import { useApiContext } from "../context/ApiContext";
import { ChangeEvent, useState } from "react";

/**
 * Table component to display a list of cosmetics.
 *
 * This component fetches data from the API context and displays it in a table format.
 * It also shows a loading animation while the data is being fetched.
 *
 * @returns {JSX.Element} The rendered table component.
 */
const Table = (): JSX.Element => {
  const { data: cosmeticList, isLoading, selectAll } = useApiContext();
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  // Handle checkbox selection
  const handleCheck = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.checked) {
      setSelectedItemIndex(index);
    } else {
      setSelectedItemIndex(null);
    }
  };

  return (
    <div className="mt-5">
      <TableHeader />
      <div className="mt-4 bg-headerbg rounded-md">
        <div className="px-2 py-2">
          {isLoading ? (
            <div className="w-full flex justify-center">
              <Lottie
                animationData={LoaderAnimation}
                loop={true}
                style={{ width: "100px" }}
              />
            </div>
          ) : (
            cosmeticList &&
            cosmeticList.map((cosmeticItem, index) => (
              <div
                key={cosmeticItem.SKU}
                className="pt-5 pb-2 border-b border-[#eeeeee]"
              >
                <div className="grid grid-cols-12 gap-2 items-center text-xs font-medium text-textcolor">
                  <div className="flex pl-2 gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="flex gap-2"
                      checked={selectAll || selectedItemIndex === index}
                      onChange={(e) => handleCheck(e, index)}
                    />
                    <p>{index + 1}.</p>
                  </div>
                  <div className="overflow-hidden w-12">
                    <img src={cosmeticItem.Image_1} alt={cosmeticItem.Name} />
                  </div>
                  <p>{cosmeticItem.SKU}</p>
                  <p>{cosmeticItem.Name}</p>
                  <p className="col-span-2 line-clamp-2">
                    {cosmeticItem.Title}
                  </p>
                  <p className="col-span-2 line-clamp-2">
                    {cosmeticItem.Description}
                  </p>
                  <p>{cosmeticItem.Brand}</p>
                  <p>{cosmeticItem["Cost Price"]}</p>
                  <p>{cosmeticItem.Quantity}</p>
                  <p>{cosmeticItem.size}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
