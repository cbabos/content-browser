import { tAppliedSearch } from "../typedefs/InteractionDescriptor";
import { tList } from "../typedefs/ItemDescriptor";
import ListView from "./ListView";

const findByText = (searchString: string) => (stringToFindIn: string) => {
    return stringToFindIn.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
}

const FilteredList = ({content, searchQuery}: tList & tAppliedSearch) => {
    const findByTextInstance = findByText(searchQuery);
    const newContent = content.filter(item => (findByTextInstance(item.title) || findByTextInstance(item.description)));

    return (
        <>
            <ListView content={newContent} />
        </>
    )
};

export default FilteredList;