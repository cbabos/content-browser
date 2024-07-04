import React from 'react';
import { tPokeList, tPokeListItem } from '../typedefs/ItemDescriptor';
import ListItem from './ListItem';

const ListView = ({content}: tPokeList) => {

    return (
        <>
            <h1>PokeList</h1>
            {content.map((item: tPokeListItem) => <ListItem key={item.name} {...item} />)} 
        </>
    );
};

export default React.memo(ListView);