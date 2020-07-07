
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Appegg');
require('./assets/scripts/AudioManager');
require('./assets/scripts/AutoFilled');
require('./assets/scripts/AutoGravityPatrol');
require('./assets/scripts/AutoMove');
require('./assets/scripts/AutoPatrol');
require('./assets/scripts/AutoRotation');
require('./assets/scripts/AutoScale');
require('./assets/scripts/Deadline');
require('./assets/scripts/GameData');
require('./assets/scripts/GameManager');
require('./assets/scripts/Jump');
require('./assets/scripts/Moon');
require('./assets/scripts/PrivacySetup');
require('./assets/scripts/RandomSpawner');
require('./assets/scripts/RandomSprite');
require('./assets/scripts/Sensor');
require('./assets/scripts/SpawnTrigger');
require('./assets/scripts/Touch');
require('./assets/scripts/UIAudioButton');
require('./assets/scripts/UICloneText');
require('./assets/scripts/UILoadScene');
require('./assets/scripts/UIShowNode');
require('./assets/scripts/WebViewObject');
require('./assets/scripts/bug');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();