import { tAppliedSearch } from "../typedefs/InteractionDescriptor";
import { tPokeList, tPokeListItem } from "../typedefs/ItemDescriptor";
import ListView from "./ListView";

const findByText = (searchString: string) => (stringToFindIn: string) => {
    return stringToFindIn.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
}

const FilteredList = ({content, searchQuery}: tPokeList & tAppliedSearch) => {
    const findByTextInstance = findByText(searchQuery);
    const newContent = content.filter((item: tPokeListItem) => (findByTextInstance(item.name)));

    return (
        <>
            <ListView content={newContent} />
        </>
    )
};

export default FilteredList;