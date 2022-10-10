meta:
  id: onetop_stage_table
  file-extension: onetop_stage_table
  endian: be
  xref:
    ble-attribute: 29888f67-52e0-4507-8c50-fc4224657d33
seq:
  - id: stages
    type: stage
    repeat: expr
    repeat-expr: 5
types:
  stage:
    seq:
      - id: power_level
        type: u1
        doc: Power level 0-10
      - id: hold_time
        type: u2
      - id: max_hold_time
        type: u2
      - id: temperature
        type: u2
        doc: "Cook temperature in centidegrees F"
      - id: transition_type
        type: b4
        enum: transition_type
      - id: sensor_type
        type: b4
        enum: sensor_type
enums:
  sensor_type:
    1: on_board
    2: wired
  transition_type:
    1: auto
    2: manual
