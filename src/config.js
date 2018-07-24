class Config {
    constructor(...keyValuePairs) {
        for (var key in keyValuePairs[0]) {
            this[key] = {"value":keyValuePairs[0][key], "function": null}
        }
    }

    set(key, value) {
        this[key].value = value;
        if (this[key].function) {
            this[key].function();
        }
    }

    get(key) {
        return this[key].value;
    }

    registerFunction(key, funct) {
        this[key].function = funct;
    }
}

// Below is all for demonstration purposes and can be removed:

var config = new Config({"bgColor":"#005500", "wireColor":"#C5A953", "hasStartNode":false,
            "hasEndNode":false, "hasStartModule":false, "hasEndModule":false,
            "isContinuous":false, "useStraightLines":false})

// Function changed
var functionToPass = function(){
    console.log("function to pass changed");
}

config.registerFunction("bgColor", functionToPass)
config.set("bgColor", "asdf")
