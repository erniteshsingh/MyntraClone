import Header from "../component/Header";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../component/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpiner from "../component/LoadingSpiner";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>

      <FetchItems></FetchItems>

      {fetchStatus.currentlyFetching ? <LoadingSpiner /> : <Outlet />}
      <Footer></Footer>
    </>
  );
}

export default App;
