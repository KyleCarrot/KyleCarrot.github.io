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


let heroes = {
    'strength': {
        'Centaur Warrunner': {
            nickname: 'centaur',
            upgrades: {
                'hoof_stomp': {
                    '🚫 Upgrade name 🚫': 'Adsfn adjkfn jkaf njdkdajkn dfjnkajknajndsfn akjdsjnf akjnsdf kjnasdkjdnf asjnkd fjnkads jkndfjdaknsjknafd jnkdjkn',
                    'Upgrade name 2': 'Adsfkjn anjksd fjknad kjnf adsjkn kjnfdask jnfkjnadskjn jfnad jnjfna kdsjn fajn kjndakfjn kjnd akjnd jknfdaskj najkn jadnkf jknadsjk dfjkan jknadf jknad jkndjkn jakn jnkfdsajkn jkdnsa'
                },
                'double_edge': {

                },
                'return': {

                },
                'stampede': {

                }
            }
        },
        'Clockwerk': {
            nickname: 'rattletrap',
            upgrades: {
                'battery_assault': {

                },
                'power_cogs': {

                },
                'rocket_flare': {

                },
                'hookshot': {

                }
            }
        },
        'Dawnbreaker': {
            nickname: 'dawnbreaker',
            upgrades: {
                'fire_wreath': {

                },
                'celestial_hammer': {

                },
                'luminosity': {

                },
                'solar_guardian': {

                }
            }
        },
        'Dragon Knight': {
            nickname: 'dragon_knight',
            upgrades: {
                'breathe_fire': {

                },
                'dragon_tail': {

                },
                'dragon_blood': {

                },
                'elder_dragon_form': {

                }
            }
        },
        'Huskar': {
            nickname: 'huskar',
            upgrades: {
                'inner_fire': {

                },
                'burning_spear': {

                },
                'berserkers_blood': {

                },
                'life_break': {

                }
            }
        },
        'Kunkka': {
            nickname: 'kunkka',
            upgrades: {
                'torrent': {

                },
                'tidebringer': {

                },
                'x_marks_the_spot': {

                },
                'ghostship': {

                }
            }
        },
        'Magnus': {
            nickname: 'magnataur',
            upgrades: {
                'shockwave': {

                },
                'empower': {

                },
                'skewer': {

                },
                'reverse_polarity': {

                }
            }
        },
        'Mars': {
            nickname: 'mars',
            upgrades: {
                'spear': {

                },
                'gods_rebuke': {

                },
                'bulwark': {

                },
                'arena_of_blood': {

                }
            }
        },
        'Omniknight': {
            nickname: 'omniknight',
            upgrades: {
                'purification': {

                },
                'martyr': {

                },
                'hammer_of_purity': {

                },
                'guardian_angel': {

                }
            }
        },
        'Phoenix': {
            nickname: 'phoenix',
            upgrades: {
                'icarus_dive': {

                },
                'fire_spirits': {

                },
                'sun_ray': {

                },
                'supernova': {

                }
            }
        },
        'Pudge': {
            nickname: 'pudge',
            upgrades: {
                'meat_hook': {

                },
                'rot': {

                },
                'flesh_heap': {

                },
                'dismember': {

                }
            }
        },
        'Sand King': {
            nickname: 'sand_king',
            imageName: 'sandking',
            upgrades: {
                'burrowstrike': {

                },
                'sand_storm': {

                },
                'caustic_finale': {

                },
                'epicenter': {

                }
            }
        },
        'Snapfire': {
            nickname: 'snapfire',
            upgrades: {
                'scatterblast': {

                },
                'firesnap_cookie': {

                },
                'lil_shredder': {

                },
                'mortimer_kisses': {

                }
            }
        },
        'Spirit Breaker': {
            nickname: 'spirit_breaker',
            upgrades: {
                'charge_of_darkness': {

                },
                'bulldoze': {

                },
                'greater_bash': {

                },
                'nether_strike': {

                }
            }
        },
        'Sven': {
            nickname: 'sven',
            upgrades: {
                'storm_bolt': {

                },
                'great_cleave': {

                },
                'warcry': {

                },
                'gods_strength': {

                }
            }
        },
        'Tusk': {
            nickname: 'tusk',
            upgrades: {
                'ice_shards': {

                },
                'snowball': {

                },
                'tag_team': {

                },
                'walrus_punch': {
                    
                }
            }
        },
        'Undying': {
            nickname: 'undying',
            upgrades: {
                'decay': {

                },
                'soul_rip': {

                },
                'tombstone': {

                },
                'flesh_golem': {
                    
                }
            }
        }
    },
    'agility': {
        'Anti-Mage': {
            nickname: 'antimage',
            upgrades: {
                'mana_break': {

                },
                'blink': {

                },
                'counterspell': {

                },
                'mana_void': {
                    
                }
            }
        },
        'Bounty Hunter': {
            nickname: 'bounty_hunter',
            upgrades: {
                'shuriken_toss': {

                },
                'jinada': {

                },
                'wind_walk': {

                },
                'track': {
                    
                }
            }
        },
        'Clinkz': {
            nickname: 'clinkz',
            upgrades: {
                'strafe': {

                },
                'searing_arrows': {

                },
                'wind_walk': {

                },
                'death_pact': {
                    
                }
            }
        },
        'Drow Ranger': {
            nickname: 'drow_ranger',
            upgrades: {
                'frost_arrows': {

                },
                'wave_of_silence': {

                },
                'multishot': {

                },
                'marksmanship': {
                    
                }
            }
        },
        'Ember Spirit': {
            nickname: 'ember_spirit',
            upgrades: {
                'searing_chains': {

                },
                'sleight_of_fist': {

                },
                'flame_guard': {

                },
                'fire_remnant': {
                    
                }
            }
        },
        'Gyrocopter': {
            nickname: 'gyrocopter',
            upgrades: {
                'rocket_barrage': {

                },
                'homing_missile': {

                },
                'flak_cannon': {

                },
                'call_down': {
                    
                }
            }
        },
        'Juggernaut': {
            nickname: 'juggernaut',
            upgrades: {
                'blade_fury': {

                },
                'healing_ward': {

                },
                'blade_dance': {

                },
                'omni_slash': {
                    
                }
            }
        },
        'Luna': {
            nickname: 'luna',
            upgrades: {
                'lucent_beam': {

                },
                'moon_glaive': {

                },
                'lunar_blessing': {

                },
                'eclipse': {
                    
                }
            }
        },
        'Pangolier': {
            nickname: 'pangolier',
            upgrades: {
                'swashbuckle': {

                },
                'shield_crash': {

                },
                'lucky_shot': {

                },
                'gyroshell': {
                    
                }
            }
        },
        'Phantom Assassin': {
            nickname: 'phantom_assassin',
            upgrades: {
                'stifling_dagger': {

                },
                'phantom_strike': {

                },
                'blur': {

                },
                'coup_de_grace': {
                    
                }
            }
        },
        'Shadow Fiend': {
            nickname: 'nevermore',
            upgrades: {
                'shadowraze1': {

                },
                'necromastery': {

                },
                'dark_lord': {

                },
                'requiem': {
                    
                }
            }
        },
        'Slark': {
            nickname: 'slark',
            upgrades: {
                'dark_pact': {

                },
                'pounce': {

                },
                'essence_shift': {

                },
                'shadow_dance': {
                    
                }
            }
        },
        'Sniper': {
            nickname: 'sniper',
            upgrades: {
                'shrapnel': {

                },
                'headshot': {

                },
                'take_aim': {

                },
                'assassinate': {
                    
                }
            }
        },
        'Spectre': {
            nickname: 'spectre',
            upgrades: {
                'spectral_dagger': {

                },
                'desolate': {

                },
                'dispersion': {

                },
                'haunt': {
                    
                }
            }
        },
        'Templar Assassin': {
            nickname: 'templar_assassin',
            upgrades: {
                'refraction': {

                },
                'meld': {

                },
                'psi_blades': {

                },
                'psionic_trap': {
                    
                }
            }
        },
        'Ursa': {
            nickname: 'ursa',
            upgrades: {
                'earthshock': {

                },
                'overpower': {

                },
                'fury_swipes': {

                },
                'enrage': {
                    
                }
            }
        },
        'Venomancer': {
            nickname: 'venomancer',
            upgrades: {
                'venomous_gale': {

                },
                'poison_sting': {

                },
                'plague_ward': {

                },
                'poison_nova': {
                    
                }
            }
        },
        'Viper': {
            nickname: 'viper',
            upgrades: {
                'poison_attack': {

                },
                'nethertoxin': {

                },
                'corrosive_skin': {

                },
                'viper_strike': {
                    
                }
            }
        },
        'Weaver': {
            nickname: 'weaver',
            upgrades: {
                'the_swarm': {

                },
                'shukuchi': {

                },
                'geminate_attack': {

                },
                'time_lapse': {
                    
                }
            }
        }
    },
    'intelligence': {
        'Bane': {
            nickname: 'bane',
            upgrades: {
                'enfeeble': {

                },
                'brain_sap': {

                },
                'nightmare': {

                },
                'fiends_grip': {
                    
                }
            }
        },
        'Crystal Maiden': {
            nickname: 'crystal_maiden',
            upgrades: {
                'crystal_nova': {

                },
                'frostbite': {

                },
                'brilliance_aura': {

                },
                'freezing_field': {
                    
                }
            }
        },
        'Disruptor': {
            nickname: 'disruptor',
            upgrades: {
                'thunder_strike': {

                },
                'glimpse': {

                },
                'kinetic_field': {

                },
                'static_storm': {
                    
                }
            }
        },
        'Lich': {
            nickname: 'lich',
            upgrades: {
                'frost_nova': {

                },
                'frost_shield': {

                },
                'sinister_gaze': {

                },
                'chain_frost': {
                    
                }
            }
        },
        'Lina': {
            nickname: 'lina',
            upgrades: {
                'dragon_slave': {

                },
                'light_strike_array': {

                },
                'fiery_soul': {

                },
                'laguna_blade': {
                    
                }
            }
        },
        'Lion': {
            nickname: 'lion',
            upgrades: {
                'impale': {

                },
                'voodoo': {

                },
                'mana_drain': {

                },
                'finger_of_death': {
                    
                }
            }
        },
        'Necrophos': {
            nickname: 'necrolyte',
            upgrades: {
                'death_pulse': {

                },
                'sadist': {

                },
                'heartstopper_aura': {

                },
                'reapers_scythe': {
                    
                }
            }
        },
        'Ogre Magi': {
            nickname: 'ogre_magi',
            upgrades: {
                'fireblast': {

                },
                'ignite': {

                },
                'bloodlust': {

                },
                'multicast': {
                    
                }
            }
        },
        'Queen of Pain': {
            nickname: 'queenofpain',
            upgrades: {
                'shadow_strike': {

                },
                'blink': {

                },
                'scream_of_pain': {

                },
                'sonic_wave': {
                    
                }
            }
        },
        'Storm Spirit': {
            nickname: 'storm_spirit',
            upgrades: {
                'static_remnant': {

                },
                'electric_vortex': {

                },
                'overload': {

                },
                'ball_lightning': {
                    
                }
            }
        },
        'Techies': {
            nickname: 'techies',
            upgrades: {
                'sticky_bomb': {

                },
                'reactive_tazer': {

                },
                'suicide': {

                },
                'land_mines': {
                    
                }
            }
        },
        'Void Spirit': {
            nickname: 'void_spirit',
            upgrades: {
                'aether_remnant': {

                },
                'dissimilate': {

                },
                'resonant_pulse': {

                },
                'astral_step': {
                    
                }
            }
        },
        'Warlock': {
            nickname: 'warlock',
            upgrades: {
                'fatal_bonds': {

                },
                'shadow_word': {

                },
                'upheaval': {

                },
                'rain_of_chaos': {
                    
                }
            }
        },
        'Winter Wyvern': {
            nickname: 'winter_wyvern',
            upgrades: {
                'arctic_burn': {

                },
                'splinter_blast': {

                },
                'cold_embrace': {

                },
                'winters_curse': {
                    
                }
            }
        },
        'Witch Doctor': {
            nickname: 'witch_doctor',
            upgrades: {
                'paralyzing_cask': {

                },
                'voodoo_restoration': {

                },
                'maledict': {

                },
                'death_ward': {
                    
                }
            }
        }
    }
}

main();
