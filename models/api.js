const fetch = require('node-fetch');
const baseURL = "https://www.dnd5eapi.co";

async function fetchData(endpoint, slug) {
    try {
        const apiURL = `${baseURL}${endpoint}`;
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
    getClasses
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

async function compileData() {
    const allData = {};
    allData.classes = await getClasses();
    allData.races = await getRaces();
    allData.backgrounds = await getBackgrounds();
    allData.alignments = await getAlignments();
    allData.feats = await getFeats();
    allData.skills = await getSkills();
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