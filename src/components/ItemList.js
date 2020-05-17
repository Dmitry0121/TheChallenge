import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import ItemTree from './ItemTree';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://5af1eee530f9490014ead8c4.mockapi.io/items');
    }
    
    render() {        
        const isLoaded = this.props.items.loaded;
        const isLoading = this.props.items.loading;
        const error = this.props.items.error;
        const items = this.props.items.value;
        
        return (
            isLoading ?
            <div>
                Loading...
            </div> :
            <div>
                {
                    isLoaded ?
                        <div>
                            <ItemTree itemList={items} />                
                            <ItemTree itemList={items} sort />               
                        </div> :
                        <div>
                            {
                                error
                            }
                        </div> 
                }
            </div>          
        );
    };
};

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);