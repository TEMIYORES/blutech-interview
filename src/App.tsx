import Body from "./components/Body";
import Header from "./components/Header";
import DataContextProvider from "./context/ApiContextProvider";

const App = () => {
  return (
    <div>
      <DataContextProvider>
        <Header />
        <Body />
      </DataContextProvider>
    </div>
  );
};

export default App;
