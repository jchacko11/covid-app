import React from 'react'
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.js'
import 'uikit/dist/js/uikit-icons.js'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import firebase from "../firebase";
import CardContainer from './CardContainer'

UIkit.use(Icons);

class PageContent extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        search: "",
      }
      this.handleSearch = this.handleSearch.bind(this)
    }

  handleSearch(e) {
    const searchVal = e.target.value
    const target = e.target
    this.setState(
      {search: e.target.value},
    function() {target.click()}
    )
  }

  render(){
    const searchVal = this.state.search
    let searchFilter = searchVal == "" ? "" : 'group:search;filter:[data-text*=\'' + searchVal + '\'i]'

    return(
      <div class="uk-container">
        <h1 class="uk-margin-top">Title</h1>

        <div uk-filter="target: .js-filter">

          <form class="uk-search uk-search-large" onSubmit="">
              <span uk-search-icon></span>
              <input id="search" class="uk-search-input" type="search" placeholder="Search..."
                value={this.state.search}
                onChange={this.handleSearch}
                uk-filter-control={searchFilter}
                >
              </input>
          </form>

        <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">


          <div class="uk-width-expand uk-first-column">
            <button uk-filter-control="group:one;filter:[data-meta~='one']"
                    class="my-filter-control-one uk-button"
                    uk-toggle="target: .my-filter-control-one">Health
            </button>
            <button uk-filter-control="group:one;filter:"
                    class="my-filter-control-one uk-button uk-button-primary"
                    hidden uk-toggle="target: .my-filter-control-one">Health
            </button>
            <button uk-filter-control="filter:[data-meta~='two'];group:two"
                    class="my-filter-control-two uk-button"
                    uk-toggle="target: .my-filter-control-two">Tech
            </button>
            <button uk-filter-control="filter:;group:two"
                    class="my-filter-control-two uk-button uk-button-primary"
                    hidden uk-toggle="target: .my-filter-control-two">Tech
            </button>
            <button uk-filter-control="filter:[data-meta~='three'];group:three"
                    class="my-filter-control-three uk-button"
                    uk-toggle="target: .my-filter-control-three">Other
            </button>
            <button uk-filter-control="filter:;group:three"
                    class="my-filter-control-three uk-button uk-button-primary"
                    hidden uk-toggle="target: .my-filter-control-three">Other
            </button>
        </div>

          <div class="uk-width-auto uk-text-nowrap">
              <span class="uk-active" uk-filter-control="sort: data-name"><a class="uk-icon-link uk-icon" href="#" uk-icon="icon: arrow-down"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="arrow-down"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"></polygon><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"></line></svg></a></span>
              <span uk-filter-control="sort: data-name; order: desc"><a class="uk-icon-link uk-icon" href="#" uk-icon="icon: arrow-up"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="arrow-up"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"></polygon><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"></line></svg></a></span>
          </div>
      </div>

        <CardContainer search={this.state.search} />

        </div>
      </div>
    )
  }
}

export default PageContent
