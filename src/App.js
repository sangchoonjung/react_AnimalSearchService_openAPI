import Loading from './component/etc/loadging';
import React, { useState, useEffect } from 'react';
import './App.css';
import Detail from './component/detail/detail';
import List from './component/list/list';
import Search from './component/search/search';


function App() {
  document.title = "유기동물 조회서비스";
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const key = process.env.REACT_APP_API_KEY;

    fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30`)
      .then(response => response.json())  // 외울것
      .then((json) => {
        setPets(json.response.body.items.item);
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
      });

  }, []);


  const handleSearch = (bgnde, endde, upr_cd = "6290000") => {
    const key = process.env.REACT_APP_API_KEY;

    fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=32&bgnde=${bgnde}&endde=${endde}&upr_cd=${upr_cd}`)
      .then(response => response.json())  // 외울것
      .then((json) => {
        setPets(json.response.body.items.item)
        setSelected(null);
      })
      .catch((e) => {
        console.log(e)
      })
  }



  const handleSelected = (data) => {
    setSelected(data);

  }
  const unSelected = (data) => {
    setSelected(null);

  }


  return (
    <div className='container'>
      {loading ? <Loading /> : null}
      <Search onSearch={handleSearch} onBack={unSelected} />
      <div className='app'>
        {selected ? <Detail target={selected} /> : <></>}
        <List pets={pets} onSelected={handleSelected} />
      </div>
    </div>
  );
};

export default App;
