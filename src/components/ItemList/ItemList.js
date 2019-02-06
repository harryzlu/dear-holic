/*
 * ItemList
 *
 * Renders a list of items
 */

import React from 'react';
import './styles.scss';
import EntryItem from '../EntryItem';

export default (props) => (
    <div className="item-list">
        {props.items.map((item) => (
            <EntryItem key={item.id} {...item.fields} />
        ))}
    </div>
);