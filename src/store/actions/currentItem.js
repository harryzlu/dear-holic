import types from './types';

export function selectItem(itemData) {
    return {
        type: types.SELECT_ITEM,
        data: itemData
    };
}

export function clearItemView() {
    return {
        type: types.CLEAR_ITEM_VIEW,
    };
}