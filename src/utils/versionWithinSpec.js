function versionWithinSpec(version, spec) {
    const numVersion = parseFloat(version)
    const splitSpec = spec.split(",")
    let constraints = []
    let isCriteriaMet = specFalse


    for(const spec of splitSpec){
        const operandsRegex = /(<=|>=|>|<)/
        const versionRegex = /([0-9]+\.[0-9]+|[0-9]+)/g
        let specOperand = spec.match(operandsRegex) ? spec.match(operandsRegex)[0] : null
        let specNum = spec.match(versionRegex) ? spec.match(versionRegex)[0] : null
        constraints.push({specNum, specOperand})
    }

    for(const spec of constraints) {
        const {specOperand, specNum} = spec
        if(!specNum)return unrecognizedSpecVersion
        if(!specOperand)return unrecognizedOperand
        if (specOperand === ">=") {
            isCriteriaMet = numVersion >= specNum ? specTrue : specFalse
        } else if (specOperand === "<=") {
            isCriteriaMet = numVersion <= specNum ? specTrue : specFalse
        } else if (specOperand === ">") {
            isCriteriaMet = numVersion > specNum ? specTrue : specFalse
        } else if (specOperand === "<") {
            isCriteriaMet = numVersion < specNum ? specTrue : specFalse
        }
        if(isCriteriaMet === specFalse) return specFalse
    }
    return isCriteriaMet
}
const specTrue = "The version provided meets the spec constraints"
const specFalse = "The version provided does not meet the spec constraints"
const unrecognizedOperand = "unrecognized operand, please choose one of: >=, <=, >, <"
const unrecognizedSpecVersion = "unrecognized constraint version of null or NaN"
const tests = [
    {version: "1", spec: ">=1", expected: specTrue},
    {version: "1", spec: "<=1", expected: specTrue},
    {version: "1", spec: "<2", expected: specTrue},
    {version: "1.45", spec: "<3", expected: specTrue},
    {version: "1.45", spec: ">1.3,<=2", expected: specTrue},
    {version: "1.5", spec: "<=2,>1.3", expected: specTrue},
    {version: "1", spec: ">3", expected: specFalse},
    {version: "1.35", spec: ">3", expected: specFalse},
    {version: "2.5", spec: "<=2,>1.3", expected: specFalse},
    {version: "2.5", spec: "=2,>1.3", expected: unrecognizedOperand},
    {version: "2.5", spec: "???12", expected: unrecognizedOperand},
    {version: "2.5", spec: ">", expected: unrecognizedSpecVersion},
];

tests.forEach((test) => {
    const result = versionWithinSpec(test.version, test.spec);

    if (result !== test.expected) {
        console.log();
        console.log("TEST CASE FAILED: " + JSON.stringify(test.version) + ", " + JSON.stringify(test.spec));
        console.log("Expected: " + JSON.stringify(test.expected));
        console.log("Actual: " + JSON.stringify(result));
        console.log();
    }
});

export default versionWithinSpec