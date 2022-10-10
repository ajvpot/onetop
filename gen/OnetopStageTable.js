// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.OnetopStageTable = factory(root.KaitaiStream);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream) {
var OnetopStageTable = (function() {
  OnetopStageTable.SensorType = Object.freeze({
    ON_BOARD: 1,
    WIRED: 2,

    1: "ON_BOARD",
    2: "WIRED",
  });

  OnetopStageTable.TransitionType = Object.freeze({
    AUTO: 1,
    MANUAL: 2,

    1: "AUTO",
    2: "MANUAL",
  });

  function OnetopStageTable(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  OnetopStageTable.prototype._read = function() {
    this.stages = [];
    for (var i = 0; i < 5; i++) {
      this.stages.push(new Stage(this._io, this, this._root));
    }
  }

  var Stage = OnetopStageTable.Stage = (function() {
    function Stage(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Stage.prototype._read = function() {
      this.powerLevel = this._io.readU1();
      this.holdTime = this._io.readU2be();
      this.maxHoldTime = this._io.readU2be();
      this.temperature = this._io.readU2be();
      this.transitionType = this._io.readBitsIntBe(4);
      this.sensorType = this._io.readBitsIntBe(4);
    }

    /**
     * Power level 0-10
     */

    /**
     * Cook temperature in centidegrees F
     */

    return Stage;
  })();

  return OnetopStageTable;
})();
return OnetopStageTable;
}));
