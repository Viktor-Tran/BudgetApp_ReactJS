import React from 'react';
import Item from './Item';

const ListIncomes = ({ listData }) => {
    return (
        <div className="income">
            <h2 className="icome__title">Income</h2>
            <div className="income__list">
                {
                    listData.map(item => <Item key={item.id} dataItem={item} />)
                }
            </div>
        </div>

    );
}

export default ListIncomes;
