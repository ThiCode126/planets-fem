import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";
import { ReactSVG } from 'react-svg'

const Header = ({ size }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <div className="content-wrapper">
        <div className="in-header">

          <div className="title">
            <Link to="/">The Planets</Link>
          </div>

          {size.device === "mobile" ? (
            <div className="hamburger">
              <ReactSVG
                onClick={() => setIsOpen(!isOpen)}
                className="hamburger-svg"
                src="/assets/icon-hamburger.svg"
                wrapper="svg"
              />
            </div>
          ) : ""}

          <nav className={`${size.device} open-${isOpen}`}>
            <ul>
              <li id="li-0">

                <Link to="/0/Mercury">
                  <h4>
                    Mercury
                    {size.device === "mobile" ? (
                      <ReactSVG
                        className="chevron-svg"
                        src="/assets/icon-chevron.svg"
                        wrapper="svg"
                      />
                    ) : ""}
                  </h4>
                </Link>
              </li>
              <li id="li-1">
                <h4>
                  <Link to="/1/Venus">Venus
                    {size.device === "mobile" ? (
                      <ReactSVG
                        className="chevron-svg"
                        src="/assets/icon-chevron.svg"
                        wrapper="svg"
                      />
                    ) : ""}
                  </Link>
                </h4>
              </li>
              <li id="li-2">
                <h4>
                  <Link to="/2/Earth">Earth
                    {size.device === "mobile" ? (
                      <ReactSVG
                        className="chevron-svg"
                        src="/assets/icon-chevron.svg"
                        wrapper="svg"
                      />
                    ) : ""}
                  </Link>
                </h4>
              </li>
              <li id="li-3">
                <h4>
                  <Link to="/3/Mars">Mars
                    {size.device === "mobile" ? (
                      <ReactSVG
                        className="chevron-svg"
                        src="/assets/icon-chevron.svg"
                        wrapper="svg"
                      />
                    ) : ""}
                  </Link>
                </h4>
              </li>
              <li id="li-4">
                <h4>
                  <Link to="/4/Jupiter">Jupiter
                    {size.device === "mobile" ? (
                      <ReactSVG
                        className="chevron-svg"
                        src="/assets/icon-chevron.svg"
                        wrapper="svg"
                      />
                    ) : ""}
                  </Link>
                </h4>
              </li>
              <li id="li-5">
                <h4>
                  <Link to="/5/Saturn">Saturn
                    {size.device === "mobile" ? (
                      <ReactSVG
                        className="chevron-svg"
                        src="/assets/icon-chevron.svg"
                        wrapper="svg"
                      />
                    ) : ""}
                  </Link>
                </h4>
              </li>
              <li id="li-6">
                <h4>
                  <Link to="/6/Uranus">Uranus
                    {size.device === "mobile" ? (
                      <ReactSVG
                        className="chevron-svg"
                        src="/assets/icon-chevron.svg"
                        wrapper="svg"
                      />
                    ) : ""}
                  </Link>
                </h4>
              </li>
              <li id="li-7">
                <h4>
                  <Link to="/7/Neptune">Neptune
                    {size.device === "mobile" ? (
                      <ReactSVG
                        className="chevron-svg"
                        src="/assets/icon-chevron.svg"
                        wrapper="svg"
                      />
                    ) : ""}
                  </Link>
                </h4>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </header>
  )
}

export default Header