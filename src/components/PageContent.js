import React from 'react'
import '../theme.scss'
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
      <div className="uk-container">

        <div uk-filter="target: .js-filter">

          <form className="uk-search uk-search-large uk-light" onSubmit={function(){}}>
              <input id="search" className="uk-search-input uk-margin-top" autocomplete="off" type="search" placeholder="Search..."
                value={this.state.search}
                onChange={this.handleSearch}
                uk-filter-control={searchFilter}
                >
              </input>
          </form>

        <div className="uk-grid-small" uk-grid="">
          <div className="uk-width-expand uk-first-column">
            <button uk-filter-control="group:one;filter:[data-tags~='Health']"
                    className="my-filter-control-one uk-button uk-button-secondary"
                    uk-toggle="target: .my-filter-control-one">Health
            </button>
            <button uk-filter-control="group:one;filter:"
                    className="my-filter-control-one uk-button uk-button-primary"
                    hidden uk-toggle="target: .my-filter-control-one">Health
            </button>
            <button uk-filter-control="filter:[data-tags~='Tech'];group:two"
                    className="my-filter-control-two uk-button uk-button-secondary"
                    uk-toggle="target: .my-filter-control-two">Tech
            </button>
            <button uk-filter-control="filter:;group:two"
                    className="my-filter-control-two uk-button uk-button-primary"
                    hidden uk-toggle="target: .my-filter-control-two">Tech
            </button>
            <button uk-filter-control="filter:[data-tags~='Other'];group:three"
                    className="my-filter-control-three uk-button uk-button-secondary"
                    uk-toggle="target: .my-filter-control-three">Other
            </button>
            <button uk-filter-control="filter:;group:three"
                    className="my-filter-control-three uk-button uk-button-primary"
                    hidden uk-toggle="target: .my-filter-control-three">Other
            </button>
        </div>
      </div>


        <CardContainer search={this.state.search} />

        </div>
      </div>
    )
  }
}

export default PageContent
