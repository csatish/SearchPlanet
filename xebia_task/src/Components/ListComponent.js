import React from 'react'
import BaseComponent from './BaseComponent'

export default class ListComponent extends BaseComponent {

    constructor(props) {
        super(props)

    }


    render() {
        let list  = []
        let listItems = this.props.listItems
        for(let i=0; i<listItems.length; i++) {
            if(!listItems.hasOwnProperty(i)) {
                continue
            }
            let item = listItems[i]
            list.push(
                <div className="listCell" key={i}>
                    <div className="listHeader">
                        {item.name}
                    </div>
                    <div className="listDesc">
                        Population:{item.population}
                    </div>
                    <div className="listDesc">
                        Climate:{item.climate}
                    </div>
                    <div className="listDesc">
                        Diameter:{item.diameter
                    }
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div>
                    {list}
                </div>
            </div>
        )
    }
}