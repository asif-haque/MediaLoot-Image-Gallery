import { Button, Col } from "react-bootstrap";
import { useShow } from "../contexts/Show";
import { useTappedImg } from "../contexts/TappedImg";

function VisualGridElement({ item, video }) {
  const { show, setShow } = useShow();
  const { setImgData } = useTappedImg();
  const tags = item.tags.split(`, `); //String => Array

  const handleImgClick = () => {
    setShow(true);
    setImgData(item);
  };

  return (
    <Col sm={12} md={6} lg={4} className="mb-3">
      <div
        className="p-3 shadow grid-element"
        style={{
          height: "100%",
          width: "95%",
          margin: "auto",
        }}
      >
        {video ? (
          <video controls>
            <source src={item.videos.small.url} type="video/mp4" />
          </video>
        ) : (
          <img
            src={item.webformatURL}
            alt=""
            onClick={handleImgClick}
            className="preview-img"
          />
        )}

        <div className="flex img-description mt-3">
          <ul className="p-0 mb-4">
            <li>
              <strong>Views: </strong>
              {item.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {item.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {item.likes}
            </li>
          </ul>
          <a href={item.pageURL} target="_blank">
            <Button variant="outline-dark" size="sm" className="mt-2">
              <span className="material-symbols-outlined ">download</span>
            </Button>
          </a>
        </div>
        <div className="">
          {tags.map((tag, index) => (
            <span
              className="bg-gray-200 rounded-lg m-1 mr-3 px-2 py-1 text-sm"
              key={index}
            >
              #{tag}
            </span>
          ))}{" "}
        </div>
      </div>
    </Col>
  );
}

export default VisualGridElement;
