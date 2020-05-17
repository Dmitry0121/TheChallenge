import React, {Component} from 'react';
import {createSelector} from 'reselect';
import './style.css';

class ItemTree extends Component{  

    renderUnsortedItems (itemList) {
        const items = itemList.map((item) => (
            <li key={item.id} className='item__li'>
                {item.label}
            </li>
        ));

        return (
            <ul> 
                {items}
            </ul>
        );
    };

    renderSortedItems (itemList) {
        const li = [];
        const tree = [{
            id: 0,
            children: []
        }];

        const sortItems = function (item, tree) {
            tree.forEach(function (parent) {
                if(item.parent_id === parent.id) {
                    item.children = [];
                    parent.children.push(item);
                } else {
                    sortItems(item, parent.children);
                }
            });

            return tree;
        };

        itemList.sort(function (a, b) {
            return a.parent_id > b.parent_id;
        });

        itemList.forEach(function (item) {
            sortItems(item, tree);
        });

        const renderItems = function (tree, margin) {
            const styles = {
                marginLeft: margin * 30 + 'px'
            };

            tree.forEach(function (item) {
                li.push(
                    <li key={item.id} className='item__li' style={styles}>
                        {item.label}
                    </li>
                );

                if (item.children.length > 0) {
                    renderItems(item.children, margin + 1);
                }
            });

            return (
                <ul> 
                    {li} 
                </ul>
            );
        };

        return renderItems(tree[0].children, 0);
    };

    render (){
        const {itemList, sort} = this.props;
        if(itemList.length === 0) {
            return(
                <div></div>
            );
        }

        const items = sort ? 
                    this.renderSortedItems(itemList) : 
                    this.renderUnsortedItems(itemList);

        return (
            <div> 
                {items}
            </div>
        );
    };
};

export default ItemTree;