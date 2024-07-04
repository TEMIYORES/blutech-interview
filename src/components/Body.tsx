import BodyContainer from "./BodyContainer";
import Table from "./Table";

/**
 * Body component that serves as the main content area.
 *
 * This component includes a heading and the Table component wrapped inside the BodyContainer.
 *
 * @returns {JSX.Element} The rendered body component.
 */
const Body = (): JSX.Element => {
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
