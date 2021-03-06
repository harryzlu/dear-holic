import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ItemList from '../../components/ItemList';
import './styles.scss';
import ItemModal from '../../components/ItemModal';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        const {
            view,
            changeItemsView,
        } = this.props;

        const viewTypes = [
            'wardrobe',
            'in transit',
            'sold',
            'wishlist',
            'all',
        ];

        return (
            <div>
                <Helmet>
                    <title>dear holic</title>
                    <meta name="description" content="A place to put your floof" />
                </Helmet>
                <div className="home-page">
                    <section className="centered">
                        <h2>dear holic</h2>
                        <p>A place to put your floof</p>
                    </section>
                    <section>
                        <div className="view-selector">
                            {viewTypes.map(viewType => (
                                <button
                                    key={`${viewType}-selector`}
                                    onClick={() => changeItemsView(viewType)}
                                    disabled={view === viewType}
                                >{viewType}</button>
                            ))}
                        </div>
                        <ItemList/>
                    </section>
                    <ItemModal></ItemModal>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    changeItemsView: PropTypes.func,
};