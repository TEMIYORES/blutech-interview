import Body from "./components/Body";
import Header from "./components/Header";
import CosmeticsContextProvider from "./context/CosmeticsContextProvider";

const App = () => {
  return (
    <div>
      <CosmeticsContextProvider>
        <Header />
        <Body />
      </CosmeticsContextProvider>
    </div>
  );
};

export default App;
