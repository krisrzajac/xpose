'use strict';
module.exports = (sequelize, DataTypes) => {
    var monster_map = sequelize.define('monster_map', {
        id: {
            Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        com2us_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        leader_skill: {
            Sequelize.INTEGER,
        },
        skills: {
            Sequelize.INTEGER,
        },
        url: {
            Sequelize.TEXT,
            allowNull: false,
        },
        pk: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        name: {
            Sequelize.TEXT,
            allowNull: false,
        },
        image_filename: {
            Sequelize.TEXT,
            allowNull: false,
        },
        element: {
            Sequelize.TEXT,
            allowNull: false,
        },
        archetype: {
            Sequelize.TEXT,
            allowNull: false,
        },
        base_stars: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        obtainable: {
            Sequelize.BOOLEAN,
            allowNull: false,
        },
        can_awaken: {
            Sequelize.BOOLEAN,
            allowNull: false,
        },
        is_awakened: {
            Sequelize.BOOLEAN,
            allowNull: false,
        },
        awaken_bonus: {
            Sequelize.TEXT,
        },
        base_hp: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        base_attack: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        base_defense: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        speed: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        crit_rate: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        crit_damage: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        resistance: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        accuracy: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        max_lvl_hp: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        max_lvl_attack: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        max_lvl_defense: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awakens_from: {
            Sequelize.INTEGER,
        },
        awakens_to: {
            Sequelize.INTEGER,
        },
        awaken_mats_fire_low: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_fire_mid: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_fire_high: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_water_low: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_water_mid: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_water_high: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_wind_low: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_wind_mid: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_wind_high: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_light_low: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_light_mid: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_light_high: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_dark_low: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_dark_mid: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_dark_high: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_magic_low: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_magic_mid: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        awaken_mats_magic_high: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        fusion_food: {
            Sequelize.BOOLEAN,
            allowNull: false,
        },
        homunculus: {
            Sequelize.BOOLEAN,
            allowNull: false,
        },
    }, {});
    monster_map.associate = function (models) {
        // associations can be defined here
    };
    return monster_map;
};



'use strict';
module.exports = (sequelize, DataTypes) => {
    var leader_skill_map = sequelize.define('leader_skill_map', {
        id: {
            Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        attribute: {
            Sequelize.TEXT,
            allowNull: false,
        },
        amount: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        area: {
            Sequelize.TEXT,
            allowNull: false,
        },
        element: {
            Sequelize.TEXT,
        },
    }, {});
    monster_map.associate = function (models) {
        // associations can be defined here
    };
    return monster_map;
};



'use strict';
module.exports = (sequelize, DataTypes) => {
    var skills_map = sequelize.define('skills_map', {
        id: {
            Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        skill_effect: {
            Sequelize.TEXT,
        },
        com2us_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        pk: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        name: {
            Sequelize.TEXT,
            allowNull: false,
        },
        description: {
            Sequelize.TEXT,
            allowNull: false,
        },
        slot: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        cooltime: {
            Sequelize.INTEGER,
        },
        hits: {
            Sequelize.INTEGER,
        },
        passive: {
            Sequelize.BOOLEAN,
            allowNull: false,
        },
        max_level: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        level_progress_description: {
            Sequelize.TEXT,
        },
        multiplier_formula: {
            Sequelize.TEXT,
        },
        multiplier_formula_raw: {
            Sequelize.TEXT,
        },
        icon_filename: {
            Sequelize.TEXT,
        },
    }, {});
    monster_map.associate = function (models) {
        // associations can be defined here
    };
    return monster_map;
};



'use strict';
module.exports = (sequelize, DataTypes) => {
    var skill_effect_map = sequelize.define('skill_effect_map', {
        id: {
            Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            Sequelize.TEXT,
            allowNull: false,
        },
        is_buff: {
            Sequelize.BOOLEAN,
            allowNull: false,
        },
        description: {
            Sequelize.TEXT,
            allowNull: false,
        },
        icon_filename: {
            Sequelize.TEXT,
            allowNull: false,
        },
        effect_rate: {
            Sequelize.INTEGER,
        },
        target: {
            Sequelize.TEXT,
        },
    }, {});
    monster_map.associate = function (models) {
        // associations can be defined here
    };
    return monster_map;
};



'use strict';
module.exports = (sequelize, DataTypes) => {
    var battle_instance = sequelize.define('battle_instance', {
        id: {
            Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        user_instance_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        command: {
            Sequelize.TEXT,
            allowNull: false,
        },
        ts_val: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        tvalue: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        tvaluelocal: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        tzone: {
            Sequelize.TEXT,
            allowNull: false,
        },
    }, {});
    monster_map.associate = function (models) {
        // associations can be defined here
    };
    return monster_map;
};



'use strict';
module.exports = (sequelize, DataTypes) => {
    var user_instance = sequelize.define('user_instance', {
        id: {
            Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        battle_instance_id: {
            Sequelize.INTEGER,
        },
        wizard_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        wizard_name: {
            Sequelize.TEXT,
        },
    }, {});
    monster_map.associate = function (models) {
        // associations can be defined here
    };
    return monster_map;
};



'use strict';
module.exports = (sequelize, DataTypes) => {
    var unit_instance = sequelize.define('unit_instance', {
        id: {
            Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        pick_slot_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        skills: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        battle_instance_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        user_instance_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        unit_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        wizard_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        unit_master_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        unit_level: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        class: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        con: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        atk: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        def: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        spd: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        resist: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        accuracy: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        critical_rate: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        critical_damage: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        set_count: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        substats_total: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        complete_sets: {
            Sequelize.INTEGER,
        },
        group_sets: {
            Sequelize.INTEGER,
        },
    }, {});
    monster_map.associate = function (models) {
        // associations can be defined here
    };
    return monster_map;
};



'use strict';
module.exports = (sequelize, DataTypes) => {
    var rune_instance = sequelize.define('rune_instance', {
        id: {
            Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        unit_instance_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        battle_instance_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        user_instance_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        rune_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        wizard_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        occupied_type: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        occuppied_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        slot_no: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        rank: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        class: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        set_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        upgrade_limit: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        upgrade_curr: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        base_value: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        sell_value: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        pri_eff: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        prefix_eff: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        sec_eff: {
            Sequelize.INTEGER,
            allowNull: false,
        },
    }, {});
    monster_map.associate = function (models) {
        // associations can be defined here
    };
    return monster_map;
};



'use strict';
module.exports = (sequelize, DataTypes) => {
    var deco_list_instance = sequelize.define('deco_list_instance', {
        id: {
            Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        wizard_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        user_instance_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        master_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        level: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        deco_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
    }, {});
    monster_map.associate = function (models) {
        // associations can be defined here
    };
    return monster_map;
};



'use strict';
module.exports = (sequelize, DataTypes) => {
    var user_master = sequelize.define('user_master', {
        id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        wizard_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        wizard_name: {
            Sequelize.TEXT,
        },
    }, {});
    monster_map.associate = function (models) {
        // associations can be defined here
    };
    return monster_map;
};



'use strict';
module.exports = (sequelize, DataTypes) => {
    var unit_master = sequelize.define('unit_master', {
        id: {
            Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        skills: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        user_master_id: {
            Sequelize.INTEGER,
        },
        wizard_id: {
            Sequelize.INTEGER,
        },
        unit_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        unit_master_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        unit_level: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        class: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        con: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        atk: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        def: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        spd: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        resist: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        accuracy: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        critical_rate: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        critical_damage: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        set_count: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        substats_total: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        complete_sets: {
            Sequelize.INTEGER,
        },
        group_sets: {
            Sequelize.INTEGER,
        },
    }, {});
    monster_map.associate = function (models) {
        // associations can be defined here
    };
    return monster_map;
};



'use strict';
module.exports = (sequelize, DataTypes) => {
    var deco_list_master = sequelize.define('deco_list_master', {
        id: {
            Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        wizard_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        user_master_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        master_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        level: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        deco_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
    }, {});
    monster_map.associate = function (models) {
        // associations can be defined here
    };
    return monster_map;
};



'use strict';
module.exports = (sequelize, DataTypes) => {
    var rune_master = sequelize.define('rune_master', {
        id: {
            Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        wizard_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        occuppied_id: {
            Sequelize.INTEGER,
        },
        rune_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        occupied_type: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        slot_no: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        rank: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        class: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        set_id: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        upgrade_limit: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        upgrade_curr: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        base_value: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        sell_value: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        pri_eff: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        prefix_eff: {
            Sequelize.INTEGER,
            allowNull: false,
        },
        sec_eff: {
            Sequelize.INTEGER,
            allowNull: false,
        },
    }, {});
    monster_map.associate = function (models) {
        // associations can be defined here
    };
    return monster_map;
};



ALTER TABLE "monster_map"
ADD CONSTRAINT "monster_map_fk0"
FOREIGN KEY("leader_skill") REFERENCES "leader_skill_map" ("id");
ALTER TABLE "monster_map"
ADD CONSTRAINT "monster_map_fk1"
FOREIGN KEY("skills") REFERENCES "skills_map" ("com2us_id");
ALTER TABLE "monster_map"
ADD CONSTRAINT "monster_map_fk2"
FOREIGN KEY("awakens_from") REFERENCES "monster_map" ("pk");
ALTER TABLE "monster_map"
ADD CONSTRAINT "monster_map_fk3"
FOREIGN KEY("awakens_to") REFERENCES "monster_map" ("pk");


ALTER TABLE "skills_map"
ADD CONSTRAINT "skills_map_fk0"
FOREIGN KEY("skill_effect") REFERENCES "skill_effect_map" ("id");


ALTER TABLE "battle_instance"
ADD CONSTRAINT "battle_instance_fk0"
FOREIGN KEY("user_instance_id") REFERENCES "user_instance" ("id");

ALTER TABLE "user_instance"
ADD CONSTRAINT "user_instance_fk0"
FOREIGN KEY("battle_instance_id") REFERENCES "battle_instance" ("id");

ALTER TABLE "unit_instance"
ADD CONSTRAINT "unit_instance_fk0"
FOREIGN KEY("skills") REFERENCES "skills_map" ("com2us_id");
ALTER TABLE "unit_instance"
ADD CONSTRAINT "unit_instance_fk1"
FOREIGN KEY("battle_instance_id") REFERENCES "battle_instance" ("id");
ALTER TABLE "unit_instance"
ADD CONSTRAINT "unit_instance_fk2"
FOREIGN KEY("user_instance_id") REFERENCES "user_instance" ("id");

ALTER TABLE "rune_instance"
ADD CONSTRAINT "rune_instance_fk0"
FOREIGN KEY("unit_instance_id") REFERENCES "unit_instance" ("id");
ALTER TABLE "rune_instance"
ADD CONSTRAINT "rune_instance_fk1"
FOREIGN KEY("battle_instance_id") REFERENCES "battle_instance" ("id");
ALTER TABLE "rune_instance"
ADD CONSTRAINT "rune_instance_fk2"
FOREIGN KEY("user_instance_id") REFERENCES "user_instance" ("id");

ALTER TABLE "deco_list_instance"
ADD CONSTRAINT "deco_list_instance_fk0"
FOREIGN KEY("wizard_id") REFERENCES "user_instance" ("wizard_id");
ALTER TABLE "deco_list_instance"
ADD CONSTRAINT "deco_list_instance_fk1"
FOREIGN KEY("user_instance_id") REFERENCES "user_instance" ("id");


ALTER TABLE "unit_master"
ADD CONSTRAINT "unit_master_fk0"
FOREIGN KEY("skills") REFERENCES "skills_map" ("com2us_id");
ALTER TABLE "unit_master"
ADD CONSTRAINT "unit_master_fk1"
FOREIGN KEY("user_master_id") REFERENCES "user_master" ("id");
ALTER TABLE "unit_master"
ADD CONSTRAINT "unit_master_fk2"
FOREIGN KEY("wizard_id") REFERENCES "user_master" ("wizard_id");

ALTER TABLE "deco_list_master"
ADD CONSTRAINT "deco_list_master_fk0"
FOREIGN KEY("wizard_id") REFERENCES "user_master" ("wizard_id");
ALTER TABLE "deco_list_master"
ADD CONSTRAINT "deco_list_master_fk1"
FOREIGN KEY("user_master_id") REFERENCES "user_master" ("id");

ALTER TABLE "rune_master"
ADD CONSTRAINT "rune_master_fk0"
FOREIGN KEY("wizard_id") REFERENCES "user_master" ("wizard_id");
ALTER TABLE "rune_master"
ADD CONSTRAINT "rune_master_fk1"
FOREIGN KEY("occuppied_id") REFERENCES "unit_master" ("unit_id");