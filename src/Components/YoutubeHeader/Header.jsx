import React, { Component, Fragment } from "react";
import Search from "../SearchBar/Search";
import "./Header.css";
class YoutubeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <section id="HeaderBlock">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <span className="bars">
                <i class="fal fa-bars"></i>
              </span>
              <img src="/ylogo.png" alt="logo" className="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <section className="collapse navbar-collapse" id="navbarNav">
              <article className="customBlockHeader">
                <div className="searchBlock">
                  <Search onTermSubmit={this.props.onTermSubmit} />
                </div>
                <div className="menuBlock">
                  <div>
                    <i class="fas fa-video-plus"></i>
                  </div>
                  <div>
                    <img src="/icons8-circled-menu-100.png" alt="menulogo" />
                  </div>
                  <div>
                    <i class="fas fa-bell"></i>
                  </div>
                </div>
              </article>
            </section>
          </nav>
        </section>
      </Fragment>
    );
  }
}

export default YoutubeHeader;
