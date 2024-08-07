import CopyToClipboard from "../reusable/Copy-to-clipboard";

const Photo = ({ item, handleImgClick }) => {
  return (
    <div className="img-div relative h-[250px]" onClick={handleImgClick}>
      <img
        src={item.webformatURL}
        alt=""
        className="preview-img size-full object-cover"
      />
      <div className="hoverlay w-full h-full bg-[rgba(0,0,0,0.2)] absolute top-0 left-0 p-2 hidden">
        <CopyToClipboard toCopy={item.webformatURL} />
      </div>
    </div>
  );
};

export default Photo;
