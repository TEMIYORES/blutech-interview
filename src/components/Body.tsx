import BodyContainer from "./BodyContainer";
import Table from "./Table";

const Body = () => {
  return (
    <div>
      <BodyContainer>
        <h4 className="text-[#191635] text-lg ml-7">Department List</h4>
        <Table />
      </BodyContainer>
    </div>
  );
};

export default Body;
