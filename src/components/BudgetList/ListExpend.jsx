import React from 'react';
import Item from './Item';

const ListExpend = ({ listData, total }) => {
    return (
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            <div className="expenses__list">
                {
                    listData.map(item => <Item key={item.id} dataItem={item} total={total} />)
                }
            </div>
        </div>

    );
}

export default ListExpend;
