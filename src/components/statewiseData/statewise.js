import React, { useState, useEffect } from "react";
import "./statewise.css";
//😀

const Statewise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold"> INDIA </span> covid-19 Dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <td>State</td>
                <td>Confirmed</td>
                <td>Recovered</td>
                <td>Deaths</td>
                <td>Active</td>
                <td>Updated</td>
              </tr>
            </thead>
            <tbody>
              {data.map((curElem, ind) => {
                return (
                  <tr key={ind}>
                    <td>{curElem.state}</td>
                    <td>{curElem.confirmed}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastUpdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Statewise;
