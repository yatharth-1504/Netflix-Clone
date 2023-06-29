import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featured/FeaturedInfo";
import "./home.scss";
import { userData } from "../../dummyData";
import RecentUsers from "../../components/recent/RecentUsers";
import RecentItems from "../../components/recent/RecentItems";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <RecentUsers />
        <RecentItems />
      </div>
    </div>
  );
};

export default Home;
