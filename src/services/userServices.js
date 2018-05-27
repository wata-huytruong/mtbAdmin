import HttpRequest from '../utils/HttpRequest';
import * as routesUtils from '../utils/RoutesUtils';
import { API } from '../core/app.routes';

export function login(email, password, callback) {
    let path = routesUtils.getApiPath(API.LOGIN);
    return HttpRequest.post(path, { email, password }, callback);
}