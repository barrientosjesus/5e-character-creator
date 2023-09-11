const fetch = require('node-fetch');
const baseURL = "https://www.dnd5eapi.co";

async function fetchData(endPoint, slug) {
    try {
        const apiURL = `${baseURL}${endPoint}`;
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        throw new Error(`API request failed: ${error.message}`);
    }
}

module.exports = {
    compileData,
    getClasses,
    getData
};

async function getClasses() {
    const endPoint = '/api/classes';
    return fetchDataAndMerge(endPoint);
}

async function getRaces() {
    const endPoint = '/api/races';
    return fetchDataAndMerge(endPoint);
}

async function getBackgrounds() {
    const endPoint = '/api/backgrounds';
    return fetchDataAndMerge(endPoint);
}

async function getAlignments() {
    const endPoint = '/api/alignments';
    return fetchDataAndMerge(endPoint);
}

async function getFeats() {
    const endPoint = '/api/feats';
    return fetchDataAndMerge(endPoint);
}

async function getSkills() {
    const endPoint = '/api/skills';
    return fetchDataAndMerge(endPoint);
}

async function getLanguages() {
    const endPoint = '/api/languages';
    return fetchDataAndMerge(endPoint);
}

async function getProficiencies() {
    const endPoint = '/api/proficiencies';
    return fetchDataAndMerge(endPoint);
}

async function getAbilityScores() {
    const endPoint = '/api/ability-scores';
    return fetchDataAndMerge(endPoint);
}

async function getData(name, cata) {
    name = convertNameToIndex(name);
    const endPoint = `/api${'/' + cata}${'/' + name}`;
    const data = await fetchData(endPoint);
    return data;
}

async function compileData() {
    const allData = {};
    allData.classes = await getClasses();
    allData.races = await getRaces();
    allData.backgrounds = await getBackgrounds();
    allData.alignments = await getAlignments();
    allData.feats = await getFeats();
    allData.skills = await getSkills();
    allData.languages = await getLanguages();
    allData.proficiencies = await getProficiencies();
    allData.abilityScores = await getAbilityScores();
    return allData;
}

async function fetchDataAndMerge(endPoint) {
    const data = await fetchData(endPoint);
    const results = data.results;
    const mergedResults = await Promise.all(results.map(mergeDataByIndex));
    return mergedResults;
}

async function mergeDataByIndex(obj) {
    let object1 = await obj;
    let object2 = await fetchData(object1.url);

    const mergedObjects = Object.assign({}, object1, object2);
    return mergedObjects;
}

function convertNameToIndex(name) {
    const index = name.toLowerCase().replace(/\s+/g, '-');
    return index;
}