import algoliasearch from "algoliasearch/lite";
import React, { Component } from "react";
import Highlighter from "react-highlight-words";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Snippet,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from "react-instantsearch-dom";
import PropTypes from "prop-types";
import "./App.css";

const searchClient = algoliasearch(
  "RA46FT2Q5G",
  "69a1fff0143c7121bc2f35825680b272"
);

class App extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>Changecx Products</h1>
        <InstantSearch
          indexName="CTL_hermanmiller_products_data"
          searchClient={searchClient}
        >
          {/* <div className="left-panel">
            <ClearRefinements />
            <h2>name</h2>
            <RefinementList attribute="name.en" />
            <Configure hitsPerPage={8} />
          </div> */}
          <div className="right-panel">
            <SearchBox />
            {Hits.count}
            <Hits hitComponent={Hit} />
            <div className="pagination">
              <Pagination />
            </div>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  // console.log(props);
  return (
    <div>
      <img src={props.hit.images[0].url} align="left" alt={props.hit.name.en} />
      <div>
        {/* <Highlight attribute="name.en" hit={props.hit} /> */}
        {props.hit.name.en}
        {/* <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={["and", "or", "the"]}
          autoEscape={true}
          textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
        /> */}
      </div>
      {/* <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div> */}
      <div className="hit-price">${props.hit.price.centAmount / 100}.00</div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
