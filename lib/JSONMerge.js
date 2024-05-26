
function mergeJSON(mainjson, childjson) {
    var result = { ...mainjson, ...childjson };

    return result;
}

const json1 = {
    "firstname": "John",
    "lastname": "Doe",
    "city": "New York"
};

const json2 = {
    "firstname": "Smith",
    "address": "23rd Street",
    "country": "USA"
};

var json = mergeJSON(json1, json2);
console.log(json);  