/*
 * ItemList
 *
 * Renders a list of items
 */

import React from 'react';
import _ from 'lodash';
import './styles.scss';

export default (props) => (
    <div className="entry-item">
        <img src={_.get(props, 'Images[0].thumbnails.large.url')}/>
        <p>{props.Name}</p>
        <p>{props.Brand}</p>
        <p>{props.Collection}</p>
    </div>
)