import "./editMedia.scss";

const EditMedia = () => {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Edit Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Image Small</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select name="type" id="type">
            <option value="movie">Movies</option>
            <option value="series">Series</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" id="file" />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
};

export default EditMedia;
