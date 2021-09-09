import "./widgetLg.css";
import { useState, useEffect } from 'react';
import {axiosInstance} from '../../config';


export default function WidgetLg() {
  const [newContents, setNewContents] = useState([]);


  useEffect(() => {
    const getNewContents = async () => {
      try{
        const res = await axiosInstance.get('/movies?new=true', {
          headers: { 
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, 
        },
        });

        setNewContents(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getNewContents();
  }, [])


  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Contents</h3>
      <div className="widgetLgTable">
        <div>
        <ul className="widgetLgTr">
          <li className="widgetLgUser widgetLgTr-title">Title</li>
          <li className="widgetLgDate widgetLgTr-title">Genre</li>
          <li className="widgetLgAmount widgetLgTr-title">Type</li>
        </ul>
        {newContents.map((content) => (
        <ul className="widgetLgTr widgetLgTr-content">
        <li className="widgetLgUser">
          <img
            src={content.imgSm}
            alt="smallPic"
            className="widgetLgImg"
          />
          <span className="widgetLgName">{content.title}</span>
        </li>
        <li className="widgetLgDate widgetLgDate-content">{content.genre}</li>
        <li className="widgetLgAmount widgetLgAmount-content">{content.isSeries == "false" ? "Movie" : "Series"}</li>
      </ul>
        ))}
        </div>
      </div>
    </div>
  );
}
