import React from 'react'
import BaseComponent from './BaseComponent'
import {searchPlanet, searchOtherPlanets} from '../Networking/helper'
import ListComponent from './ListComponent'


export default class SearchComponent extends BaseComponent {
    constructor (props) {
        super(props)

        this._bind('onSearchChange','onPlanetSearch', 'onNextPageSearch', 'onPreviousPageSearch')
        this.state = {searchList:[], next:null, previous:null}
    }

    render () {
       return (
           <div className="container">
               <div className="searchField">
                   <input className="inputText" type="text" placeholder="Search Planet" onChange={this.onSearchChange}/>
                   {
                       this.state.searchList.length ? (<ListComponent listItems={this.state.searchList} />): null
                   }
                   <div id="searchFooter">
                       {this.state.previous !== null  ? (<button style={{float:"left"}} onClick={this.onPreviousPageSearch}>{"Previous"}</button>): null}
                       {this.state.next !== null ? (<button style={{float:"right"}} onClick={this.onNextPageSearch}>{"Next"}</button>):null}
                   </div>
               </div>

           </div>
       )
    }

    onNextPageSearch () {

        searchOtherPlanets(this.state.next, this.onPlanetSearch)

    }

    onPreviousPageSearch () {

        searchOtherPlanets(this.state.previous, this.onPlanetSearch)

    }


    onPlanetSearch(error, response) {
        if(!error) {
            if(response) {
                let results = response.results
                let next = response.next
                let previous = response.previous
                this.setState({searchList:results, next:next, previous:previous})
            }
            else {
                this.setState({searchList:[],  next:null, previous:null})
            }
        }
    }

    onSearchChange (e) {
        let searchText = e.target.value
        if(searchText.length) {
            searchPlanet(searchText, this.onPlanetSearch)
        }
        else {
            this.setState({searchList:[],  next:null, previous:null})
        }
    }

}

