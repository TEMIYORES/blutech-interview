import TableHeader from "./TableHeader";
import tableImage from "../assets/img/tableimage.png";
type Props = {};

const Table = (props: Props) => {
  return (
    <div className="mt-5">
      <TableHeader />
      <div className="mt-4 bg-headerbg rounded-md">
        <div className="px-2 py-2">
          <div className="pt-5 pb-2 border-b border-[#eeeeee]">
            <div className="grid grid-cols-12 gap-2 items-center text-xs font-medium text-textcolor">
              <div className="flex pl-2 gap-2 text-sm">
                <input type="checkbox" className="flex gap-2" />
                <p className="">1.</p>
              </div>
              <div className="overflow-hidden w-10">
                <img src={tableImage} />
              </div>
              <p className="">MG234567</p>
              <p className="">Glass</p>
              <p className=" col-span-2">Beauty and glamour</p>
              <p className=" col-span-2">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="">18.00</p>
              <p className="">38.00</p>
              <p className="">1800</p>
              <p className="">1,800</p>
            </div>
          </div>
          <div className="pt-5 pb-2 border-b border-[#eeeeee]">
            <div className="grid grid-cols-12 gap-2 items-center text-xs font-medium text-textcolor">
              <div className="flex pl-2 gap-2 text-sm">
                <input type="checkbox" className="flex gap-2" />
                <p className="">1.</p>
              </div>
              <div className="overflow-hidden w-10">
                <img src={tableImage} />
              </div>
              <p className="">MG234567</p>
              <p className="">Glass</p>
              <p className=" col-span-2">Beauty and glamour</p>
              <p className=" col-span-2">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="">18.00</p>
              <p className="">38.00</p>
              <p className="">1800</p>
              <p className="">1,800</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
