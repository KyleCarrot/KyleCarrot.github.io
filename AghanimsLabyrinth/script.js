const imageBaseURL = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/'

function main() {
    addTableRows();
    addHeroImages();
}


function addTableRows() {
    let attributeLongest = 0;
    for (const attributeHeroes of Object.keys(heroes)) {
        let attributeLength = Object.keys(heroes[attributeHeroes]).length;
        if (attributeLength > attributeLongest) {
            attributeLongest = attributeLength;
        }
    }
    let tableRowsAmt = Math.ceil(attributeLongest / 2);
    let table = document.getElementById("hero-grid");
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
            let heroImageURL = imageBaseURL + 'heroes/' + heroName + '.png';
            let heroImage = document.createElement("img");
            heroCell = document.getElementById(cellID);
            heroCell.appendChild(heroImage);
            heroImage.src = heroImageURL;
            heroImage.classList.add("hero-image");
            
            
        }
    }
}




let heroes = {
    'strength': {
        'Centaur Warrunner': {
            nickname: 'centaur',
            abilities: ['hoof_stomp', 'double_edge', 'return', 'stampede'],
            bans: {
                'hoof_stomp': ['summon']
            },
            'sheetFunction': 'sheetCentaur'
        },
        'Clockwerk': {
            nickname: 'rattletrap'
        },
        'Dawnbreaker': {
            nickname: 'dawnbreaker'
        },
        'Dragon Knight': {
            nickname: 'dragon_knight'
        },
        'Huskar': {
            nickname: 'huskar'
        },
        'Kunkka': {
            nickname: 'kunkka'
        },
        'Magnus': {
            nickname: 'magnataur'
        },
        'Mars': {
            nickname: 'mars'
        },
        'Omniknight': {
            nickname: 'omniknight'
        },
        'Phoenix': {
            nickname: 'phoenix'
        },
        'Pudge': {
            nickname: 'pudge'
        },
        'Sand King': {
            nickname: 'sand_king'
        },
        'Snapfire': {
            nickname: 'snapfire'
        },
        'Spirit Breaker': {
            nickname: 'spirit_breaker'
        },
        'Sven': {
            nickname: 'sven'
        },
        'Tusk': {
            nickname: 'tusk'
        },
        'Undying': {
            nickname: 'undying'
        }
    },
    'agility': {
        'Anti-Mage': {
            nickname: 'antimage'
        },
        'Bounty Hunter': {
            nickname: 'bounty_hunter'
        },
        'Clinkz': {
            nickname: 'clinkz'
        },
        'Drow Ranger': {
            nickname: 'drow_ranger'
        },
        'Ember Spirit': {
            nickname: 'ember_spirit'
        },
        'Gyrocopter': {
            nickname: 'gyrocopter'
        },
        'Juggernaut': {
            nickname: 'juggernaut'
        },
        'Luna': {
            nickname: 'luna'
        },
        'Pangolier': {
            nickname: 'pangolier'
        },
        'Phantom Assassin': {
            nickname: 'phantom_assassin'
        },
        'Shadow Fiend': {
            nickname: 'nevermore'
        },
        'Slark': {
            nickname: 'slark'
        },
        'Sniper': {
            nickname: 'sniper'
        },
        'Spectre': {
            nickname: 'spectre'
        },
        'Templar Assassin': {
            nickname: 'templar_assassin'
        },
        'Ursa': {
            nickname: 'ursa'
        },
        'Venomancer': {
            nickname: 'venomancer'
        },
        'Viper': {
            nickname: 'viper'
        },
        'Weaver': {
            nickname: 'weaver'
        }
    },
    'intelligence': {
        'Bane': {
            nickname: 'bane'
        },
        'Crystal Maiden': {
            nickname: 'crystal_maiden'
        },
        'Disruptor': {
            nickname: 'disruptor'
        },
        'Lich': {
            nickname: 'lich'
        },
        'Lina': {
            nickname: 'lina'
        },
        'Lion': {
            nickname: 'lion'
        },
        'Necrophos': {
            nickname: 'necrolyte'
        },
        'Ogre Magi': {
            nickname: 'ogre_magi'
        },
        'Queen of Pain': {
            nickname: 'queenofpain'
        },
        'Storm Spirit': {
            nickname: 'storm_spirit'
        },
        'Techies': {
            nickname: 'techies'
        },
        'Void Spirit': {
            nickname: 'void_spirit'
        },
        'Warlock': {
            nickname: 'warlock'
        },
        'Winter Wyvern': {
            nickname: 'winter_wyvern'
        },
        'Witch Doctor': {
            nickname: 'witch_doctor'
        }
    }
}

main();
