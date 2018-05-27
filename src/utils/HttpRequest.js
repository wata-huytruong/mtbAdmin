import { METHOD_TYPES } from '../core/constants';
import CONFIG from '../core/config';
// import $ from 'jquery';

export function getHeader(curEmp) {
    let header = {}, access_token;
    if (curEmp) {
        access_token = curEmp.access_token;
    } else {
        access_token = localStorage.access_token || null;
    }
    header['Accept'] = 'application/json';
    header['Content-Type'] = 'application/json';
    header['media-type'] = 'application/json';

    if (access_token) {
        header['access_token'] = access_token;
    }
    return header;
}

function HttpRequest() { };

HttpRequest.get = function (url, callback) {
    return async(METHOD_TYPES.GET, url, {}, callback);
};

HttpRequest.post = function (url, data, callback) {
    return async(METHOD_TYPES.POST, url, data, callback);
};

HttpRequest.postFormData = function (url, data, callback) {
    return asyncFormData(METHOD_TYPES.POST, url, data, callback);
};

HttpRequest.put = function (url, data, callback) {
    return async(METHOD_TYPES.PUT, url, data, callback);
};

HttpRequest.delete = function (url, data, callback) {
    return async(METHOD_TYPES.DELETE, url, data, callback);
};

function getUrl(url) {
    return CONFIG.API_V4 + url;
}

function async(method, url, body, callback) {
    let apiUrl = getUrl(url);
    let headers = getHeader();
    console.log($)
    return $.ajax({
        method: method,
        contentType: 'text/json',
        url: apiUrl,
        data: method === METHOD_TYPES.GET ? null : JSON.stringify(body),
        headers: headers,
        success: function (result, status, xhr) {
            if (callback) {
                callback(null, result, status, xhr);
            }
        },
        error: function (err) {
            if (callback) {
                callback(err);
            }
        }
    });
}

function asyncFormData(method, url, body, callback) {
    let apiUrl = getUrl(url);
    let headers = getHeader();
    delete headers.Accept;
    delete headers['Content-Type'];
    return $.ajax({
        method: method,
        url: apiUrl,
        data: method === METHOD_TYPES.GET ? null : body,
        headers: headers,
        contentType: false,
        processData: false,
        success: function (result, status, xhr) {
            if (callback) {
                callback(null, result, status, xhr);
            }
        },
        error: function (err) {
            if (callback) {
                callback(err);
            }
        }
    });
}

export default HttpRequest;