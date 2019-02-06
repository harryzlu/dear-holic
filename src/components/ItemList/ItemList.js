/*
 * ItemList
 *
 * Renders a list of items
 */

import React from 'react';
import _ from 'lodash';
import './styles.scss';

export default (props) => (
    <div className="item-list">
        {props.items.map((item) => (
            <div key={item.id} className="item">
                <img src={_.get(item.fields, 'Images[0].thumbnails.large.url')}/>
                <p>{item.fields.Name}</p>
                <p>{item.fields.Brand}</p>
                <p>{item.fields.Collection}</p>
            </div>
        ))}
    </div>
);