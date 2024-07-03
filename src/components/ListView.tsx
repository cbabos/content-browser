import React from 'react';
import { tList } from '../typedefs/ItemDescriptor';
import ListItem from './ListItem';

const ListView = ({content}: tList) => {
    const clickMore = (contentID: string) => {
        console.log(contentID);
    };

    return (
        <>
            <h1>Please find the latest below</h1>
            {content.map(item => <ListItem key={item.contentID} {...item} clickHandler={clickMore} />)} 
        </>
    );
};

export default React.memo(ListView);