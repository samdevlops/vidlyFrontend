import _ from 'lodash';

export default function paginate(items, pageNumber, size){

    const startIndex = size * (pageNumber - 1);
    
    return _(items).slice(startIndex).take(size).value();

}