import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Free drinks are included in desired packages according to your choice",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Get a amazing hiking experince with our company and it is valid till your hotel booking",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "No need to worry about finding hotel and pick and drop service. our company provide free shuttle services.",
      },
      {
        icon: <FaBeer />,
        title: "storages beer",
        info:
          "Our resort have inbuilt bars and liquor containers to store your expensive drinks",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
