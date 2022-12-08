const heroesData = {
    'strength': {
        'Centaur Warrunner': {
            nickname: 'centaur',
            upgrades: {
                'hoof_stomp': {
                    "Raise the Hoof": "On active cast, Stomp grants Stampede buff, lasting for %dur_mul%x stun duration.",
                    "Centaur's Kick": "Stomp retaliates all affected enemies once.",
                    "Minion Warriors 🛑": "Centaur keeps %minions% minion warriors. Minions are not controllable, shares Centaur's ATK, Armor and %hp_pct%%%HP, and cast stomp together with Centaur. Minions' respawn time equals to Stomp's CD. Minions are sent away from the battlefield when Centaur is dead."
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
                    "Ricochet": "Each battery bounces once to another random target.",
                    "Bullet Hell": "Shrapnels now proc attack on hit, with %damage_reduction%%% attack damage reduction.",
                    "Auto-Killer No.3000": "Clockwerk has a %chance_atk%%%/%chance_spell%%% chance to trigger a Battery Assult with %pct%%% duration."
                },
                'power_cogs': {
                    "Epicyclic": "Casting Power Cogs creates an extra outer cogs ring.",
                    "Tesla MX": "Cogs' shocking charge now recovers every %interval% seconds, and also shocks all outer enemies within %range%.",
                    "Tactical Cogs": "Cogs now carries Batteries with %pct%%% amount."
                },
                'rocket_flare': {
                    "Cluster Rocket": "Each Rocket now splits into %clusters% clusters.",
                    "Energy Beacon": "Each Rocket lays a cog every %distance% units it travels.",
                    "Airdrop": "Rocket drops a breakable crate on explosion."
                },
                'hookshot': {
                    "Splatoon": "Clockwerk launches a rocket from both sides every %distance% units it travels during HookShot flying.",
                    "Gearbox": "New Ability: Gear Up. Comsume all cogs nearby to gain extra movement speed and attack damage for a short moment. The ATK bonus per cog is based on Hook's damage.",
                    "Rocket Man": "New Ability: Jetpack. Grant Clockwerk flying vision and movement but limit his turn rate. Clockwerk has no cast angle limit during the ride, and auto shoots rocket every second."
                }
            }
        },
        'Dawnbreaker': {
            nickname: 'dawnbreaker',
            upgrades: {
                'fire_wreath': {
                    "Stand Ablaze": "Starbreaker creates trails of your current level of Celestial Hammer fire when impacting an enemy.",
                    "Counter Orbital": "When attacked, Dawnbreaker has a 17% chance to counter attack with a swipe of Starbreaker. The normal charged-up attack of Luminosity has a 33% chance to be a Starbreaker smash.",
                    "Sun Crusher": "Starbreaker gains the ability to turn, movement speed equal to 25% of her current movement speed, and swings 35% faster. Dawnbreaker is magic immune for the duration"
                },
                'celestial_hammer': {
                    "Hammer Time": "Celestial Hammer gains 3 charges. Your Starbreaker smash is triggered when the Hammer lands, and Converge becomes point targeted, allowing you to choose which hammer to converge to.",
                    "Sun Forge": "Celestial Hammer now creates a moving trail of fire between it and Dawnbreaker until recalled, and lasts an additional 3 seconds in the world before automatically returning.",
                    "Haven": "While in the world, Celestial Hammer pulses at 50% of your current Solar Guardian radius and heal / damage."
                },
                'luminosity': {
                    "Solar Battery": "Dawnbreaker gains bonuses up to 25% movement speed and 75 attack speed while Luminosity has any active stacks, reaching the maximum when Luminosity is fully powered up.",
                    "Bright Foundry": "Dawnbreaker's attacks passively apply 1 second(s) of Celestial Hammer fire debuff. The charged up attack of Luminosity launches your current level of Celestial Hammer in Dawnbreaker's facing direction. This fire debuff stacks with other sources of Celestial Hammer fire.",
                    "Light Bringer": "Luminosity may be activated to fully charge for 5 seconds. Cooldown: 60, Mana Cost: 100."
                },
                'solar_guardian': {
                    "Sun Sentinel": "Upon landing, Dawnbreaker and all allies in Solar Guardian's radius gain 3 seconds of magic immunity and fully charged Luminosity attacks.",
                    "Death of a Star": "Whenever Solar Guardian is cast, all non-primary targets have 50% Solar Guardian pulses created around them until Dawnbreaker lands. When dying, Dawnbreaker automatically casts Solar Guardian on the lowest health ally (herself if no others alive).",
                    "Solar Flare": "Upon landing, all enemies inside Solar Guardian's area are knocked back and receive the current level of Celestial Hammer fire debuff for 6 seconds. This fire debuff stacks with other sources of Celestial Hammer fire."
                }
            }
        },
        'Dragon Knight': {
            nickname: 'dragon_knight',
            upgrades: {
                'breathe_fire': {
                    "Fire Blast": "Breathes fire in %fires% directions.",
                    "Scorching Flame": "Breathe Fire debuff now burns affected enemy, dealing %damage_percent%%% of fire's damage per second, with a interval of %interval% second.",
                    "Majestic Fire": "Breathe Fire now steals a percentage of the reduced attack damage from enemy. The stealing percentage is %creep_pct%%% on creeps and %captain_pct%%% on captains and bosses."
                },
                'dragon_tail': {
                    "Scorns of Ultimate Defeat": "Dragon Tail applies a debuff when stunning the victim. During the debuff, the victim receives %pct%%% more physical damage from Dragon Knight per BASE armor.",
                    "Captain Velociraptor": "Dragon Tail bounces up to %bounces% times with %bounce_range% search range. The projectile returns to Dragon Knight when bounce ends, and reduce the CD of Dragon Form equal to total bounce times multiplies stun duration.",
                    "Dragon's Gunfire": "Dragon Tail launches a fireball on hit, burning the ground and dealing damage to enemies in %radius% area. The burning ground lasts %duration% seconds, with %damage_pct%%% of Breathe Fire damage per second, and applies Breathe Fire debuff."
                },
                'dragon_blood': {
                    "The Melody of Awakening Dragon": "When Dragon Form is ready, Dragon Knight automatically casts Dragon Form if health goes under %thres%%%, and heal himself with amount %heal%x as Dragon Blood's health regen. Apply a strong dispel on triggered.",
                    "Boiling Veins": "Dragon's Blood continously burns enemies nearby. Dealing %regen_damage%x of Dragon Blood's health regen as magical damage per second. The damage radius is %extra_range% plus Dragon Knight's attack range. Also applies Dragon Breath debuffs if in Elder Dragon Form.",
                    "Reverse Scales": "Dragon's Armor now counters attackers with Dragon Tail. The trigger chance for attack is %chance_base%%% + %chance_armor%%% per armor bonus. Chance for spell is %chance_spell%%% of that. If attacker is %range_buffer% farther than Tail's cast range, counters will not happen."
                },
                'elder_dragon_form': {
                    "Dragon of Legends": "Elder Dragon Form now has the effect of the next level. If upgraded to LV3, it will be black ancient dragon who has stronger stats and can pass trough terrains.",
                    "Dragon's Family": "Elder Dragon Form now turns all allied heroes in %radius% into dragon if toggled autocast.",
                    "Ultimate Dragons": "Heroes in Elder Dragon Form has %attacks% multishot, extra attacks use procs but with damage reduced by %reduction%%%. Only Dragon Knight can multishoot the same target in Elder Dragon Form."
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
                    "Mana Transfer": "While breaking mana, Antimage transfer them to his health for %transfer_pct%%  of the amount",
                    "Mana Explosion": "Antimages have a %chance%%  chance to cast a Mana Void with %effect_pct%%  effect after each mana break",
                    "Imagine Breaker": "Mana Break also applies a stackable spell damage reduction debuff lasting %duration% secs, the reduction amount per stack is the same as Mana Breaker's max mana pct"
                },
                'blink': {
                    "Blinking Illusion": "Blink now leaves an uncontrollable illusion. This illusion replicate's Counterspell casting.",
                    "This illusion replicate's Counterspell casting.": "Blink and Fragment now trigger an addtional Counterspell when casted",
                    "Blink Fragment": "New ability: Antimage blinks an illusion to the target position. The new ability's cooldown/manacost and blink distance are bound to origin ability. blinked illusion replicate's Counterspell casting."
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
