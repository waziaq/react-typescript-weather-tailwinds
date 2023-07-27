import SiteNavigation from "./components/SiteNavigation";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen font-roboto bg-gradient-to-br from-weather-primary to-weather-secondary">
        <SiteNavigation />
        <Routes />
      </div>
    </>
  );
};

export default App;
