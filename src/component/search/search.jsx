import { useEffect } from "react";
import { useRef } from "react";
import './search.css'

function Search({onSearch,onBack}) {
    
    const bgnde = useRef();
    const endde = useRef();
    const upr_cd = useRef();

    useEffect(() => {
        const today = new Date().toISOString().slice(0, 10);
        endde.current.value = today;
    },[])
    
    const searchHandle = (event) => {
        event.preventDefault();
        
        onSearch(bgnde.current.value.replaceAll("-", ""),
            endde.current.value.replaceAll("-", ""),
            upr_cd.current.value
        )
    };
     let region = [
            {
                "orgCd": "6110000",
                "orgdownNm": "서울특별시"
            },
            {
                "orgCd": "6260000",
                "orgdownNm": "부산광역시"
            },
            {
                "orgCd": "6270000",
                "orgdownNm": "대구광역시"
            },
            {
                "orgCd": "6280000",
                "orgdownNm": "인천광역시"
            },
            {
                "orgCd": "6290000",
                "orgdownNm": "광주광역시"
            },
            {
                "orgCd": "5690000",
                "orgdownNm": "세종특별자치시"
            },
            {
                "orgCd": "6300000",
                "orgdownNm": "대전광역시"
            },
            {
                "orgCd": "6310000",
                "orgdownNm": "울산광역시"
            },
            {
                "orgCd": "6410000",
                "orgdownNm": "경기도"
            },
            {
                "orgCd": "6420000",
                "orgdownNm": "강원도"
            },
            {
                "orgCd": "6430000",
                "orgdownNm": "충청북도"
            },
            {
                "orgCd": "6440000",
                "orgdownNm": "충청남도"
            },
            {
                "orgCd": "6450000",
                "orgdownNm": "전라북도"
            },
            {
                "orgCd": "6460000",
                "orgdownNm": "전라남도"
            },
            {
                "orgCd": "6470000",
                "orgdownNm": "경상북도"
            },
            {
                "orgCd": "6480000",
                "orgdownNm": "경상남도"
            },
            {
                "orgCd": "6500000",
                "orgdownNm": "제주특별자치도"
            }
    ];
    return (
        <div>
            <form onSubmit={searchHandle}>
                <b>유기 날짜 조회</b> <input type="date" ref={bgnde}/>
                <input type="date" ref={endde} />
                <select ref={upr_cd}>
                    {region.map((data) => {
                      return <option value={data.orgCd} key={data.orgCd}>{data.orgdownNm}</option>
                    })}
                </select>
                <button type="submit">검색</button>
                <button onClick={()=>{onBack()}}>뒤로가기</button>
            </form>

        </div>
    );
}

export default Search;