import Chart from "../../components/chart/Chart";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react";
import {axiosInstance} from "../../config";

export default function Home() {
  const MONTHS = useMemo( () => [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], []);

  const [ userStats, setUserStats] = useState([]);

  useEffect( () => {
    const getStats = async () => {
     try{
      const res = await axiosInstance.get("/users/stats", {
        headers: {
          token: 
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmM2ODdlNzVhNDY5ZjA1OWI1YzY2ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDM4ODI0NiwiZXhwIjoxNjMwODIwMjQ2fQ.GJm-KT0Ouun3z5geLaJY3V1zU1qOj_V2IgVVowzjFkI"
        },
      });
      const statsList = res.data.sort( (a, b) => { return a._id - b._id })
      statsList.map(item => setUserStats(prev => [...prev, {name:MONTHS[item._id -1], "New User" : item.total },])
      );
  } catch (err){
    console.log(err);
  }}

  getStats();

  }, [MONTHS]);
  return (
    <div className="home">
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
