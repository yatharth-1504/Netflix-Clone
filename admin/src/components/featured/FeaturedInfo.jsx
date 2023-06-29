import "./featuredInfo.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Newly Joined!</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">24</span>
          <span className="featuredMoneyRate">
            -11 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">New Media Added!</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">12</span>
          <span className="featuredMoneyRate">
            +3 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
