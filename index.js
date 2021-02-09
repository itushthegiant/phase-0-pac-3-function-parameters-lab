function introduction(name = 'Etamar') {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name = 'Joe', language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}