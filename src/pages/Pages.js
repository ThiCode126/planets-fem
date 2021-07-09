import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import data from '../utils/data.json'

const Pages = () => {

  let { id = 2 } = useParams();

  const [dataPages, setDataPages] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setDataPages(data[id])
  }, [id])




  return (
    dataPages && (
      <section id="page" className={`${dataPages.name}`}>
        <div className="content-wrapper">
          <div className="in-section">
            {/* Grid Block */}
            <div className="grid-block">
              <div className="nav">
                <div id="overview" className={`btn ${activeTab === "overview" ? "active" : ""}`} onClick={() => setActiveTab("overview")}>
                  <h3><span className="number">01</span><span>overview</span></h3>
                </div>
                <div id="structure" className={`btn ${activeTab === "structure" ? "active" : ""}`} onClick={() => setActiveTab("structure")}>
                  <h3><span className="number">02</span><span>structure</span></h3>
                </div>
                <div id="geology" className={`btn ${activeTab === "geology" ? "active" : ""}`} onClick={() => setActiveTab("geology")}>
                  <h3><span className="number">01</span><span>surface</span></h3>
                </div>
              </div>
              <div className="planet">
                {activeTab === "overview" ? (
                  <img
                    className="planet-svg"
                    alt="planet-svg"
                    src={dataPages.images.planet}
                  />
                ) : ""}
                {activeTab === "structure" ? (
                  <img
                    className="structure-svg"
                    alt="structure-svg"
                    src={dataPages.images.internal}
                  />
                ) : ""}
                {activeTab === "geology" ? (
                  <>
                    <img
                      className="planet-svg"
                      alt="planet-svg"
                      src={dataPages.images.planet}
                    />
                    <img
                      className="geology-png"
                      src={dataPages.images.geology}
                      alt="geology structure"
                    />
                  </>
                ) : ""}
              </div>
              <div className="details">
                <h1>
                  {dataPages.name}
                </h1>
                <p className="text">
                  {dataPages[activeTab].content}
                </p>
                <h6 className="link">
                  Source : <a href={dataPages[activeTab].content} target="_blank" rel="noopener noreferrer">Wikipedia</a>
                  <img
                    className="source-svg"
                    alt="source-svg"
                    src="/assets/icon-source.svg"
                  />

                </h6>
              </div>
            </div>
            <div className="info-block">
              <div id="rotation">
                <h5>rotation time</h5>
                <h2>{dataPages.rotation}</h2>
              </div>
              <div id="revolution">
                <h5>revolution time</h5>
                <h2>{dataPages.revolution}</h2>
              </div>
              <div id="radius">
                <h5>radius</h5>
                <h2>{dataPages.radius}</h2>
              </div>
              <div id="temperature">
                <h5>average temp.</h5>
                <h2>{dataPages.temperature}</h2>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  )
}

export default Pages