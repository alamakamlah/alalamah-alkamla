import {combineReducers} from 'redux'
import posts from './posts'
import auth from './auth'
import store from './store'
import requests from './requests'
import users from './users'
import lessons from './lessons'
import library from './library'
import courses from './courses'
import tests from './tests'
import ads from './ads'

export default combineReducers({
    requests,
    posts,
    auth,
    store,
    users,
    lessons,
    library,
    tests,
    courses,
    ads
})