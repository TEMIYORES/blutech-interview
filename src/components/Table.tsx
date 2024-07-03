import TableHeader from "./TableHeader";
import Lottie from "lottie-react";
import Loader from "../assets/loader.json";
import { useCosmeticsContext } from "../context/CosmeticsContext";

const Table = () => {
  const { data: cosmeticsList, isLoading } = useCosmeticsContext();
  return (
    <div className="mt-5">
      <TableHeader />
      <div className="mt-4 bg-headerbg rounded-md">
        <div className="px-2 py-2">
          {isLoading ? (
            <div className="w-full flex justify-center">
              <Lottie
                animationData={Loader}
                loop={true}
                style={{ width: "100px" }}
              />
            </div>
          ) : null}
          {cosmeticsList &&
            cosmeticsList?.map((cosmeticListItem, index) => (
              <div
                key={cosmeticListItem.SKU}
                className="pt-5 pb-2 border-b border-[#eeeeee]"
              >
                <div className="grid grid-cols-12 gap-2 items-center text-xs font-medium text-textcolor">
                  <div className="flex pl-2 gap-2 text-sm">
                    <input type="checkbox" className="flex gap-2" />
                    <p className="">{index + 1}.</p>
                  </div>
                  <div className="overflow-hidden w-12">
                    <img src={cosmeticListItem.Image_1} />
                  </div>
                  <p className="">{cosmeticListItem.SKU}</p>
                  <p className="">{cosmeticListItem.Name}</p>
                  <p className=" col-span-2 line-clamp-2">
                    {cosmeticListItem.Title}
                  </p>
                  <p className=" col-span-2 line-clamp-2">
                    {cosmeticListItem.Description}
                  </p>
                  <p className="">{cosmeticListItem.Brand}</p>
                  <p className="">{cosmeticListItem["Cost Price"]}</p>
                  <p className="">{cosmeticListItem.Quantity}</p>
                  <p className="">{cosmeticListItem.size}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
