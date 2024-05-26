
function mergeJSON(mainjson, childjson) {
    var result = { ...mainjson, ...childjson };

    return result;
}

const json1 = {
    "firstname": "John",
    "lastname": "Doe",
    "city": "New York",
    "CBConfig": {
        "CBConfig1": "CBConfig1",
        "CBConfig2": "CBConfig2",
        "CBConfig3": "CBConfig3"
    }
};

const json2 = {
    "firstname": "Smith",
    "address": "23rd Street",
    "country": "USA",
    "CBConfig": {
        "CBConfig1": "CBConfig1",
        "CBConfig2": "NewCBConfig2",
    }
};

var json = mergeJSON(json1, json2);
console.log(json);  