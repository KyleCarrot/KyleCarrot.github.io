const heroes = heroesData;
const imageBaseURL = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/'
const heroPage = document.getElementById("hero-page");

function main() {
    addTableRows();
    addHeroImages();
}


function addTableRows() {
    let attributeLongest = 0;
    for (const attribute of Object.keys(heroes)) {
        let attributeLength = Object.keys(heroes[attribute]).length;
        if (attributeLength > attributeLongest) {
            attributeLongest = attributeLength;
        }
    }
    const tableRowsAmt = Math.ceil(attributeLongest / 2);
    const table = document.getElementById("hero-grid");
    let strCount = 0;
    let agiCount = 0;
    let intCount = 0;
    for (let i = 0; i < tableRowsAmt; i++) {
        let row = table.insertRow();
        row.classList.add("hero-row");

        let cell1 = row.insertCell()
        cell1.classList.add("hero-cell")
        cell1.setAttribute("id", "str-" + strCount);
        strCount++;
        let cell2 = row.insertCell()
        cell2.classList.add("hero-cell")
        cell2.setAttribute("id", "str-" + strCount);
        strCount++;

        let cell3 = row.insertCell()
        cell3.classList.add("hero-cell")
        cell3.setAttribute("id", "agi-" + agiCount);
        agiCount++;
        let cell4 = row.insertCell()
        cell4.classList.add("hero-cell")
        cell4.setAttribute("id", "agi-" + agiCount);
        agiCount++;

        let cell5 = row.insertCell()
        cell5.classList.add("hero-cell")
        cell5.setAttribute("id", "int-" + intCount);
        intCount++;
        let cell6 = row.insertCell()
        cell6.classList.add("hero-cell")
        cell6.setAttribute("id", "int-" + intCount);
        intCount++;
    }
}

function addHeroImages() {
    let strCount = 0;
    let agiCount = 0;
    let intCount = 0;
    let heroName = ''
    for (const [attribute, attributeHeroes] of Object.entries(heroes)) {
        let cellID = ''
        for (const hero of Object.keys(attributeHeroes)) {
            if (attribute === 'strength') {
                cellID = "str-" + String(strCount);
                strCount++;
            } else if (attribute === 'agility') {
                cellID = "agi-" + String(agiCount);
                agiCount++;
            } else {
                cellID = "int-" + String(intCount);
                intCount++;
            }
            heroName = heroes[attribute][hero]['nickname'];
            const heroImageURL = imageBaseURL + 'heroes/' + heroName + '.png';
            const heroImage = document.createElement("img");
            heroCell = document.getElementById(cellID);
            heroCell.appendChild(heroImage);
            heroImage.src = heroImageURL;
            heroImage.classList.add("hero-image");
            heroImage.dataset.hero = hero;
            heroImage.dataset.attribute = attribute;
            preloadAbilityImages(hero, attribute);
            heroImage.addEventListener('click', showAbilities);
        }
    }
}

function showAbilities(e) {
    const abilitiesUnderlay = document.createElement("div");
    abilitiesUnderlay.setAttribute("id", "abilities-underlay");
    abilitiesUnderlay.addEventListener('click', hideAbilities);
    const abilitiesOverlay = document.createElement("div");
    abilitiesOverlay.setAttribute("id", "abilities-overlay");
    heroPage.appendChild(abilitiesUnderlay);
    heroPage.appendChild(abilitiesOverlay);
    
    const hero = e.currentTarget.dataset.hero;
    const heroAttribute = e.currentTarget.dataset.attribute;
    const heroData = heroes[heroAttribute][hero];
    let abilityImageBaseURL = imageBaseURL + 'abilities/' + heroData['nickname'] + '_';
    if (heroData.hasOwnProperty('imageName')) {
        abilityImageBaseURL = imageBaseURL + 'abilities/' + heroData['imageName'] + '_';
    }
    for (const [ability, upgrades] of Object.entries(heroData['upgrades'])) {
        const abilityContainer = document.createElement("div");
        abilityContainer.classList.add("ability-container");
        const abilityImageURL = abilityImageBaseURL + ability + '.png';
        const abilityImage = document.createElement("img");
        abilityImage.src = abilityImageURL;
        abilityImage.classList.add("ability-image");
        const upgradesContainer = document.createElement("div");
        upgradesContainer.classList.add("upgrades-container");
        for (const [name, description] of Object.entries(upgrades)) {
            const upgradeName = document.createElement("div");
            upgradeName.classList.add("upgrade-name");
            const upgradeNameText = document.createTextNode(name);
            upgradeName.appendChild(upgradeNameText);
            const upgradeDescription = document.createElement("div");
            upgradeDescription.classList.add("upgrade-description");
            const upgradeDescriptionText = document.createTextNode(description);
            upgradeDescription.appendChild(upgradeDescriptionText);

            upgradesContainer.appendChild(upgradeName);
            upgradesContainer.appendChild(upgradeDescription);
        }
        abilityContainer.appendChild(abilityImage);
        abilityContainer.appendChild(upgradesContainer);
        abilitiesOverlay.appendChild(abilityContainer);
    }
}

function hideAbilities() {
    document.getElementById("abilities-overlay").remove();
    document.getElementById("abilities-underlay").remove();
}

function preloadAbilityImages(hero, attribute) {
    const heroData = heroes[attribute][hero];
    let abilityImageBaseURL = imageBaseURL + 'abilities/' + heroData['nickname'] + '_';
    if (heroData.hasOwnProperty('imageName')) {
        abilityImageBaseURL = imageBaseURL + 'abilities/' + heroData['imageName'] + '_';
    }
    for (const ability of Object.keys(heroData['upgrades'])) {
        const abilityImageURL = abilityImageBaseURL + ability + '.png';
        let img = new Image();
        img.src = abilityImageURL;
    }
}


main();
