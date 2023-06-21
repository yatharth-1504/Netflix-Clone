import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./Featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://wallpaperaccess.com/full/329583.jpg" alt="" />
      <div className="info">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5fd7346-eed0-4416-8203-58b0d230afe3/dfeef8l-87ee2287-cbf9-45a2-bbd9-8b949688fddb.png/v1/fill/w_1280,h_515/avengers_infinity_war_logo_png___disney__variant_by_bats66_dfeef8l-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTE1IiwicGF0aCI6IlwvZlwvZTVmZDczNDYtZWVkMC00NDE2LTgyMDMtNThiMGQyMzBhZmUzXC9kZmVlZjhsLTg3ZWUyMjg3LWNiZjktNDVhMi1iYmQ5LThiOTQ5Njg4ZmRkYi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZlkHipHWQAzUCKT1EZNrbMq_0Co7ub6lk78uMlxtDTo"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
