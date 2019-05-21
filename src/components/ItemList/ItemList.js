/*
 * ItemList
 *
 * Renders a list of items
 */

import React, { Component } from 'react';
import './styles.scss';
import EntryItem from './EntryItem';

export default class ItemList extends Component {
    componentDidMount() {
        this.props.loadItemsData();
    }

    render() {
        return (
            <div className="item-list">
                {this.props.items.map((item) => (
                    <EntryItem
                        key={item.id}
                        onClick={(e) => this.props.viewItem(item, e)}
                        {...item.fields} />
                ))}
            </div>
        )
    }
};