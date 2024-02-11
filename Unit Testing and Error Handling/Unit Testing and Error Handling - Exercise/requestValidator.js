function requestValidator(obj) {

    let validMethod = ["GET", "POST", "DELETE", "CONNECT"];
    let uriPattern = /^[\w.]+$/g;
    let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let specialChar = ["<", ">", "\\", "&", `'`, `"`];

    if (!validMethod.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`)
    }

    if (!validVersion.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`)
    }

    if (!obj.uri || !obj.uri === "*" || !obj.uri.match(uriPattern)){
        throw new Error(`Invalid request header: Invalid URI`)
    }

    if (!obj.hasOwnProperty("message")) {
        throw new Error(`Invalid request header: Invalid Message`)
    }
    for (let char of obj.message) {
        if (specialChar.includes(char)) {
            throw new Error(`Invalid request header: Invalid Message`)
        }
    }

    return obj

}

    requestValidator({
        method: 'GET',
        uri: '',
        version: 'HTTP/1.1',
        message: '-recursive'
      })
