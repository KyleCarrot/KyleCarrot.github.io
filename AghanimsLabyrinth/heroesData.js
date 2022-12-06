const heroesData = {
    'strength': {
        'Centaur Warrunner': {
            nickname: 'centaur',
            upgrades: {
                'hoof_stomp': {
                    "Raise the Hoof": "On active cast, Stomp grants Stampede buff, lasting for %dur_mul%x stun duration.",
                    "Centaur's Kick": "Stomp retaliates all affected enemies once.",
                    "🚫 Minion Warriors 🚫": "Centaur keeps %minions% minion warriors. Minions are not controllable, shares Centaur's ATK, Armor and %hp_pct%%%HP, and cast stomp together with Centaur. Minions' respawn time equals to Stomp's CD. Minions are sent away from the battlefield when Centaur is dead."
                },
                'double_edge': {
                    "Bloody Battle": "Double Edge gains STR stacks on hit. The STR per stack equals to Retaliate's damage per stack, the individual stack duration equals to Retaliate's, and the stack limits equals to %stacks_mul%x of Retaliate's. Every captain&boss strike respectively gains %str_captain% & %str_boss% stacks.",
                    "Infernal Menace": "Double Edge pierces spell imunity. Instead of dealing a magical damage instance, it issues a critical attack with bonus magical damage. The bonus damage equals to base damage and crit equals to strength bonus + 100%.",
                    "Cut in Two": "Double Edge becomes a ground target ability: Launch a shockwave travels up to %range% distance and damages all enemies hit."
                },
                'return': {
                    "Domineering": "When self-damaged, Retaliate strikes all enemies within %radius% radius.",
                    "Retaliate Fury": "Retaliate cleaves. Retaliate active buff also grants %damage_pct%%% attack cleave.",
                    "Retaliate Aura": "Retaliate becomes an aura with %radius% radius."
                },
                'stampede': {
                    "Hitch A Ride": "New abilities: Wargon, Pick Up. Toggle Wargon ON to summon a cart, then cast Pick Up to toss a unit into the cart.",
                    "Assault Rush": "Stampede grants %reduction%%% incoming damage reduction and free pathing. Stampede deals bonus damage equal to %ms_damage%%% movespeed multiplies STR multiplier.",
                    "War Stomp": "During Stampede, units stomp every %distance% distance moved with %mul%x power."
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
                    "Fire Blast": "Breathes fire in %fires% directions.",
                    "Scorching Flame": "Breathe Fire debuff now burns affected enemy, dealing %damage_percent%%% of fire's damage per second, with a interval of %interval% second.",
                    "": ""
                },
                'dragon_tail': {
                    "": "",
                    "": "",
                    "": ""
                },
                'dragon_blood': {
                    "": "",
                    "": "",
                    "": ""
                },
                'elder_dragon_form': {
                    "": "",
                    "": "",
                    "": ""
                }
            }
        },
        'Huskar': {
            nickname: 'huskar',
            upgrades: {
                'inner_fire': {
                    "": "",
                    "": "",
                    "": ""
                },
                'burning_spear': {
                    "": "",
                    "": "",
                    "": ""
                },
                'berserkers_blood': {
                    "": "",
                    "": "",
                    "": ""
                },
                'life_break': {
                    "": "",
                    "": "",
                    "": ""
                }
            }
        },
        'Kunkka': {
            nickname: 'kunkka',
            upgrades: {
                'torrent': {
                    "": "",
                    "": "",
                    "": ""
                },
                'tidebringer': {
                    "": "",
                    "": "",
                    "": ""
                },
                'x_marks_the_spot': {
                    "": "",
                    "": "",
                    "": ""
                },
                'ghostship': {
                    "": "",
                    "": "",
                    "": ""
                }
            }
        },
        'Magnus': {
            nickname: 'magnataur',
            upgrades: {
                'shockwave': {
                    "": "",
                    "": "",
                    "": ""
                },
                'empower': {
                    "": "",
                    "": "",
                    "": ""
                },
                'skewer': {
                    "": "",
                    "": "",
                    "": ""
                },
                'reverse_polarity': {
                    "": "",
                    "": "",
                    "": ""
                }
            }
        },
        'Mars': {
            nickname: 'mars',
            upgrades: {
                'spear': {
                    "": "",
                    "": "",
                    "": ""
                },
                'gods_rebuke': {
                    "": "",
                    "": "",
                    "": ""
                },
                'bulwark': {
                    "": "",
                    "": "",
                    "": ""
                },
                'arena_of_blood': {
                    "": "",
                    "": "",
                    "": ""
                }
            }
        },
        'Omniknight': {
            nickname: 'omniknight',
            upgrades: {
                'purification': {
                    "": "",
                    "": "",
                    "": ""
                },
                'martyr': {
                    "": "",
                    "": "",
                    "": ""
                },
                'hammer_of_purity': {
                    "": "",
                    "": "",
                    "": ""
                },
                'guardian_angel': {
                    "": "",
                    "": "",
                    "": ""
                }
            }
        },
        'Phoenix': {
            nickname: 'phoenix',
            upgrades: {
                'icarus_dive': {
                    "": "",
                    "": "",
                    "": ""
                },
                'fire_spirits': {
                    "": "",
                    "": "",
                    "": ""
                },
                'sun_ray': {
                    "": "",
                    "": "",
                    "": ""
                },
                'supernova': {
                    "": "",
                    "": "",
                    "": ""
                }
            }
        },
        'Pudge': {
            nickname: 'pudge',
            upgrades: {
                'meat_hook': {
                    "": "",
                    "": "",
                    "": ""
                },
                'rot': {
                    "": "",
                    "": "",
                    "": ""
                },
                'flesh_heap': {
                    "": "",
                    "": "",
                    "": ""
                },
                'dismember': {
                    "": "",
                    "": "",
                    "": ""
                }
            }
        },
        'Sand King': {
            nickname: 'sand_king',
            imageName: 'sandking',
            upgrades: {
                'burrowstrike': {
                    "": "",
                    "": "",
                    "": ""
                },
                'sand_storm': {
                    "": "",
                    "": "",
                    "": ""
                },
                'caustic_finale': {
                    "": "",
                    "": "",
                    "": ""
                },
                'epicenter': {
                    "": "",
                    "": "",
                    "": ""
                }
            }
        },
        'Snapfire': {
            nickname: 'snapfire',
            upgrades: {
                'scatterblast': {
                    "": "",
                    "": "",
                    "": ""
                },
                'firesnap_cookie': {
                    "": "",
                    "": "",
                    "": ""
                },
                'lil_shredder': {
                    "": "",
                    "": "",
                    "": ""
                },
                'mortimer_kisses': {
                    "": "",
                    "": "",
                    "": ""
                }
            }
        },
        'Spirit Breaker': {
            nickname: 'spirit_breaker',
            upgrades: {
                'charge_of_darkness': {
                    "": "",
                    "": "",
                    "": ""
                },
                'bulldoze': {
                    "": "",
                    "": "",
                    "": ""
                },
                'greater_bash': {
                    "": "",
                    "": "",
                    "": ""
                },
                'nether_strike': {
                    "": "",
                    "": "",
                    "": ""
                }
            }
        },
        'Sven': {
            nickname: 'sven',
            upgrades: {
                'storm_bolt': {
                    "": "",
                    "": "",
                    "": ""
                },
                'great_cleave': {
                    "": "",
                    "": "",
                    "": ""
                },
                'warcry': {
                    "": "",
                    "": "",
                    "": ""
                },
                'gods_strength': {
                    "": "",
                    "": "",
                    "": ""
                }
            }
        },
        'Tusk': {
            nickname: 'tusk',
            upgrades: {
                'ice_shards': {
                    "": "",
                    "": "",
                    "": ""
                },
                'snowball': {
                    "": "",
                    "": "",
                    "": ""
                },
                'tag_team': {
                    "": "",
                    "": "",
                    "": ""
                },
                'walrus_punch': {
                    "": "",
                    "": "",
                    "": ""
                }
            }
        },
        'Undying': {
            nickname: 'undying',
            upgrades: {
                'decay': {
                    "": "",
                    "": "",
                    "": ""
                },
                'soul_rip': {
                    "": "",
                    "": "",
                    "": ""
                },
                'tombstone': {
                    "": "",
                    "": "",
                    "": ""
                },
                'flesh_golem': {
                    "": "",
                    "": "",
                    "": ""
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
