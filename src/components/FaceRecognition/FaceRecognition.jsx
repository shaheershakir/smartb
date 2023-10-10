import "./FaceRecognition.css";
function FaceRecognition({ imageURL, box, faceData }) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          src={imageURL}
          alt=""
          width="500px"
          height="auto"
        />
        {/* {faceData.map((region, index) => (
          <div
            key={index}
            className="bounding-box"
            style={{
              top: region.region_info.bounding_box.top_row * 100 + "%",
              right:
                (1 - region.region_info.bounding_box.right_col) * 100 + "%",
              bottom:
                (1 - region.region_info.bounding_box.bottom_row) * 100 + "%",
              left: region.region_info.bounding_box.left_col * 100 + "%",
            }}
          ></div>
        ))} */}
        <div
          className="bounding-box"
          style={
            {
              // top: box.top,
              // right: box.right,
              // bottom: box.bottom,
              // left: box.left,
            }
          }
        ></div>
      </div>
    </div>
  );
}

export default FaceRecognition;
