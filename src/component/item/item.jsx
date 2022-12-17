import "./item.css";
function Item({ data, onSelected }) {
  return (
    <div className="item" onClick={() => onSelected(data)}>
      <img src={data.popfile} alt={"thumnail"} className="thumnail" />
      <div className="inform">
        <p className="petsNameInList">
          {data.kindCd} ({data.colorCd})
        </p>
        <p>
          {data.orgNm} {data.happenPlace}
        </p>
      </div>
    </div>
  );
}

export default Item;
