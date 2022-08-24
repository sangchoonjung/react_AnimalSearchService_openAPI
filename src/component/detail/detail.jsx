import "./detail.css"
function Detail({ target }) {

    return (
        <div className="detail">
            <h2>{target.kindCd} {target.colorCd}</h2>
            <h3>{target.noticeNo} __({target.processState})</h3>
            <img src={target.popfile} alt={"thumnail"} className="mainImg" />
            <table className="table">
                <tr>
                    <th>발생일</th>
                    <th>{target.happenDt}</th>
                </tr>
                <tr>
                    <td>발견장소</td>
                    <td>{target.orgNm} {target.happenPlace}</td>
                </tr>
                <tr>
                    <td>품종</td>
                    <td>{target.kindCd}</td>
                </tr>
                <tr>
                    <td>나이</td>
                    <td>{target.age}</td>
                </tr>
                <tr>
                    <td>몸무게</td>
                    <td>{target.weight}</td>
                </tr>
                <tr>
                    <td>기간</td>
                    <td>{target.noticeSdt} ~ {target.noticeEdt}</td>
                </tr>
                <tr>
                    <td>보호소 이름</td>
                    <td>{target.careNm}</td>
                </tr>
                <tr>
                    <td>보호소 전화번호</td>
                    <td>{target.careTel}</td>
                </tr>
            </table>
            

        </div>
    );
}

export default Detail;