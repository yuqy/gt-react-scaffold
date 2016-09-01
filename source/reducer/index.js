/**
 * @since 2016-08-01 21:50
 * @author vivaxy
 */

import { combineReducers } from 'redux';

import button from './button';
import newsList from './newsList';
import toast from './toast';
import pagination from './pagination';

export default combineReducers({
    button,
    newsList,
    toast,
    pagination,
});
