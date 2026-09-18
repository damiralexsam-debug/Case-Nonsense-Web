export const SENSES=["Eyes","Ears","Nose","Feel"];
export const SCENTS={
  "blood": {
    "name": "Blood trace",
    "color": "#d06a82",
    "description": "A sharp metallic, organic trace. A wound can explain it; it does not identify a person."
  },
  "tar": {
    "name": "Marine tar",
    "color": "#809bb0",
    "description": "Bitter, oily sealant used around the pier."
  },
  "pine": {
    "name": "Pine polish",
    "color": "#b2df9b",
    "description": "Fresh resin and furniture polish."
  },
  "dust": {
    "name": "Dry dust",
    "color": "#aaa790",
    "description": "Dry, stale, faint. Settled on quiet surfaces."
  },
  "wood": {
    "name": "Wood & wax",
    "color": "#c38d51",
    "description": "Woody, dry, slightly sweet."
  },
  "coffee": {
    "name": "Roasted coffee",
    "color": "#cf824c",
    "description": "Bitter, roasted, warm."
  },
  "anise": {
    "name": "Anise & yeast",
    "color": "#a9de6a",
    "description": "Sweet, sharp, fermented. A distinctive bakery mixture."
  },
  "soap": {
    "name": "Lemon detergent",
    "color": "#f4ed7a",
    "description": "Sharp citrus with a soapy finish."
  },
  "rain": {
    "name": "Wet wool",
    "color": "#81bcd9",
    "description": "Damp cloth, faint street air."
  },
  "metal": {
    "name": "Metallic residue",
    "color": "#e78784",
    "description": "Coppery and faint. Its source is not identified by smell alone."
  },
  "fuel": {
    "name": "Fuel residue",
    "color": "#d294ed",
    "description": "Oily, volatile, sharp."
  },
  "earth": {
    "name": "Wet soil",
    "color": "#93bc69",
    "description": "Earthy, damp, organic."
  },
  "bitter": {
    "name": "Bitter plant extract",
    "color": "#55d8b0",
    "description": "Green, bitter, astringent."
  },
  "smoke": {
    "name": "Combustion residue",
    "color": "#e8a668",
    "description": "Stale smoke and oily soot. A residue, not a reading of the air."
  },
  "orchid": {
    "name": "Vanilla orchid",
    "color": "#ef91c4",
    "description": "Rich, sweet, floral."
  },
  "ozone": {
    "name": "Scorched insulation",
    "color": "#86aefa",
    "description": "Hot plastic and acrid electrical residue."
  },
  "citrus": {
    "name": "Orange tape cleaner",
    "color": "#fbb968",
    "description": "Sweet orange above a dry solvent note."
  },
  "lavender": {
    "name": "Lavender",
    "color": "#bcb1ff",
    "description": "Dry, floral, herbal."
  },
  "sea": {
    "name": "Salt water & seaweed",
    "color": "#6fc9cf",
    "description": "Brine, wet seaweed and cool marine air. The water has no dry-dust residue."
  }
};
export const CASES=[
  {
    "id": "blackthorn-hunt",
    "number": "01",
    "title": "A Stranger in the Walls",
    "subtitle": "Three floors. One intruder. An exit you must secure.",
    "difficulty": "LIVE MANHUNT",
    "stars": 2,
    "time": "EXPLORE · QUESTION · PURSUE",
    "location": "BLACKTHORN MANOR",
    "date": "23:47 · THE STORM",
    "color": "#d8a77e",
    "layout": "mansion",
    "spawn": [
      0,
      18
    ],
    "bounds": [
      -30,
      30,
      -22,
      22
    ],
    "brief": "Elsie heard glass break upstairs, then found her father dead in his library. Someone is still moving through Blackthorn Manor. The doctor and housekeeper are sheltering downstairs; the figure Elsie saw wore a raincoat and climbed in from outside. Blackthorn was about to expose a fake children’s-home charity. Find the intruder, protect Elsie, and secure the service gate before he can disappear into the storm.",
    "facts": "Search three storeys connected by the rear staircase. The intruder will try to escape if you give him time. There is no visible countdown: listen for hurried footsteps and the gate warning. Feel the service latch in the ground-floor scullery to cut off his route. Reading your notebook or pausing freezes the hunt.",
    "suspects": [
      {
        "id": "intruder",
        "name": "Victor Senn",
        "role": "Raincoat stranger",
        "statement": "An uninvited figure is hiding somewhere above the hall."
      },
      {
        "id": "voss",
        "name": "Dr. Voss",
        "role": "Family doctor",
        "statement": "Waits downstairs with Elsie."
      },
      {
        "id": "felix",
        "name": "Felix Blackthorn",
        "role": "Estranged son",
        "statement": "Admits arguing with his father over the house."
      }
    ],
    "rooms": [
      {
        "name": "GREAT HALL",
        "center": [
          0,
          6
        ],
        "size": [
          20,
          32
        ],
        "doors": {
          "N": 0,
          "W": -10,
          "E": 0
        },
        "color": 6378308,
        "type": "foyer",
        "floor": 0
      },
      {
        "name": "LIBRARY",
        "center": [
          -20,
          -4
        ],
        "size": [
          20,
          36
        ],
        "doors": {
          "E": 0,
          "S": 0
        },
        "color": 4283216,
        "type": "library",
        "floor": 0
      },
      {
        "name": "WINTER GARDEN",
        "center": [
          -20,
          18
        ],
        "size": [
          20,
          8
        ],
        "doors": {
          "N": 0
        },
        "color": 5401700,
        "type": "garden",
        "floor": 0
      },
      {
        "name": "DINING ROOM",
        "center": [
          20,
          10
        ],
        "size": [
          20,
          24
        ],
        "doors": {
          "W": -4,
          "N": 0
        },
        "color": 6769233,
        "type": "dining",
        "floor": 0
      },
      {
        "name": "SCULLERY",
        "center": [
          20,
          -12
        ],
        "size": [
          20,
          20
        ],
        "doors": {
          "W": -4,
          "S": 0
        },
        "color": 5464419,
        "type": "kitchen",
        "floor": 0
      },
      {
        "name": "GRAND STAIR",
        "center": [
          0,
          -16
        ],
        "size": [
          20,
          12
        ],
        "doors": {
          "S": 0,
          "E": 0
        },
        "color": 5133658,
        "type": "stairs",
        "floor": 0
      },
      {
        "name": "PORTRAIT GALLERY",
        "center": [
          0,
          6
        ],
        "size": [
          20,
          32
        ],
        "doors": {
          "N": 0,
          "W": -10,
          "E": 0
        },
        "color": 6378308,
        "type": "gallery",
        "floor": 1
      },
      {
        "name": "MASTER SUITE",
        "center": [
          -20,
          -4
        ],
        "size": [
          20,
          36
        ],
        "doors": {
          "E": 0,
          "S": 0
        },
        "color": 4283216,
        "type": "bedroom",
        "floor": 1
      },
      {
        "name": "MUSIC ROOM",
        "center": [
          -20,
          18
        ],
        "size": [
          20,
          8
        ],
        "doors": {
          "N": 0
        },
        "color": 5401700,
        "type": "music",
        "floor": 1
      },
      {
        "name": "GUEST WING",
        "center": [
          20,
          10
        ],
        "size": [
          20,
          24
        ],
        "doors": {
          "W": -4,
          "N": 0
        },
        "color": 6769233,
        "type": "bedroom",
        "floor": 1
      },
      {
        "name": "LINEN ROOM",
        "center": [
          20,
          -12
        ],
        "size": [
          20,
          20
        ],
        "doors": {
          "W": -4,
          "S": 0
        },
        "color": 5464419,
        "type": "linen",
        "floor": 1
      },
      {
        "name": "FIRST LANDING",
        "center": [
          0,
          -16
        ],
        "size": [
          20,
          12
        ],
        "doors": {
          "S": 0,
          "E": 0
        },
        "color": 5133658,
        "type": "stairs",
        "floor": 1
      },
      {
        "name": "ATTIC GALLERY",
        "center": [
          0,
          6
        ],
        "size": [
          20,
          32
        ],
        "doors": {
          "N": 0,
          "W": -10,
          "E": 0
        },
        "color": 6378308,
        "type": "gallery",
        "floor": 2
      },
      {
        "name": "ARCHIVE",
        "center": [
          -20,
          -4
        ],
        "size": [
          20,
          36
        ],
        "doors": {
          "E": 0,
          "S": 0
        },
        "color": 4283216,
        "type": "archive",
        "floor": 2
      },
      {
        "name": "OBSERVATORY",
        "center": [
          -20,
          18
        ],
        "size": [
          20,
          8
        ],
        "doors": {
          "N": 0
        },
        "color": 5401700,
        "type": "observatory",
        "floor": 2
      },
      {
        "name": "NURSERY",
        "center": [
          20,
          10
        ],
        "size": [
          20,
          24
        ],
        "doors": {
          "W": -4,
          "N": 0
        },
        "color": 6769233,
        "type": "nursery",
        "floor": 2
      },
      {
        "name": "WORKSHOP",
        "center": [
          20,
          -12
        ],
        "size": [
          20,
          20
        ],
        "doors": {
          "W": -4,
          "S": 0
        },
        "color": 5464419,
        "type": "workshop",
        "floor": 2
      },
      {
        "name": "UPPER LANDING",
        "center": [
          0,
          -16
        ],
        "size": [
          20,
          12
        ],
        "doors": {
          "S": 0,
          "E": 0
        },
        "color": 5133658,
        "type": "stairs",
        "floor": 2
      }
    ],
    "objects": [
      {
        "id": "elsie",
        "name": "Elsie Blackthorn",
        "room": 0,
        "x": -3,
        "z": 10,
        "kind": "person",
        "observations": [
          {
            "id": "m-elsie",
            "sense": "Ears",
            "title": "Someone walking twice",
            "text": "“I saw a raincoat at the upstairs window. Not one of our guests. Dad said somebody would try to stop his announcement. Please find him before he leaves.”"
          },
          {
            "id": "m-elsieeye",
            "sense": "Eyes",
            "title": "Waiting by the door",
            "text": "Elsie grips the telephone cord. There is an unopened birthday card for her father in her coat pocket."
          }
        ],
        "npc": true,
        "coat": 12755798,
        "role": "Caller",
        "dialogue": "The rear stairs reach every floor. Mira knows the service gate. Please secure it before you go upstairs.",
        "challenge": "Please look in the library. I’m staying by the front door."
      },
      {
        "id": "intruder",
        "name": "The raincoat stranger",
        "room": 13,
        "x": 5,
        "z": -9,
        "kind": "person",
        "observations": [
          {
            "id": "m-voss",
            "sense": "Ears",
            "title": "An intruder’s admission",
            "text": "“I came for the file. He wouldn’t give it up. I never meant—just get out of my way.”"
          },
          {
            "id": "m-vosseye",
            "sense": "Eyes",
            "title": "A name in the torn raincoat",
            "text": "The green raincoat is torn at the cuff. A fresh cut shows beneath it. A card protruding from an inside pocket reads VICTOR SENN, CHILDREN’S FUTURE TRUST."
          },
          {
            "id": "m-vossscent",
            "sense": "Nose",
            "title": "Polish over a wound",
            "text": "Fresh pine polish overlays a metallic, organic trace at his sleeve."
          }
        ],
        "npc": true,
        "coat": 3826261,
        "role": "Uninvited intruder",
        "scents": [
          "pine",
          "blood"
        ],
        "patrol": [
          [
            -15,
            -13
          ],
          [
            -15,
            -5
          ],
          [
            -23,
            -5
          ]
        ],
        "culprit": true,
        "challengeEvidence": [],
        "challenge": "The stranger reaches for the torn sleeve and turns toward the staircase.",
        "escape": [
          27,
          -19
        ],
        "dialogue": "“Stay back. You have no idea what Blackthorn was going to do.”"
      },
      {
        "id": "mira",
        "name": "Mira Bell",
        "room": 4,
        "x": 3,
        "z": 3,
        "kind": "person",
        "observations": [
          {
            "id": "m-mira",
            "sense": "Ears",
            "title": "The ordinary cut",
            "text": "“Yes, that’s my blood on the chopping board. The knife slipped. I wrapped it before the blackout. Ask Elsie: she brought me the bandage.”"
          },
          {
            "id": "m-miraeye",
            "sense": "Eyes",
            "title": "A different dressing",
            "text": "Her left palm is bandaged. Both dark blue sleeves are intact."
          }
        ],
        "npc": true,
        "coat": 3161701,
        "role": "Housekeeper",
        "scents": [
          "blood",
          "soap"
        ],
        "dialogue": "The service gate catch is against the rear wall here. Push it down with Feel. Then use the grand stair behind the hall.",
        "challenge": "Blood alone? Look at the torn green fabric in the library. My uniform is blue."
      },
      {
        "id": "felix",
        "name": "Felix Blackthorn",
        "room": 3,
        "x": 4,
        "z": 3,
        "kind": "person",
        "observations": [
          {
            "id": "m-felix",
            "sense": "Ears",
            "title": "An angry son",
            "text": "“I wanted him to sell this place, yes. I was on the phone to my solicitor when everything went dark. The dining-room machine recorded the call.”"
          }
        ],
        "npc": true,
        "coat": 8540776,
        "role": "Son",
        "dialogue": "He was going to expose a fake charity tonight. The file is in the library. He wouldn’t tell me who was behind it.",
        "challenge": "Play the dining-room message. You can hear my argument continuing through the blackout."
      },
      {
        "id": "desk",
        "name": "Blackthorn’s writing desk",
        "room": 1,
        "x": -6,
        "z": -12,
        "kind": "desk",
        "observations": [
          {
            "id": "m-register",
            "sense": "Eyes",
            "title": "The file worth killing for",
            "text": "Charity transfers signed VICTOR SENN have gone to a private account. A photograph shows Senn in a green raincoat. Blackthorn has written: “Expose this tonight. Elsie deserves better than this fraud.”"
          },
          {
            "id": "m-deskfeel",
            "sense": "Feel",
            "title": "A fresh struggle",
            "text": "The desk edge has a fresh splinter. A thin sticky film sits beneath it."
          }
        ]
      },
      {
        "id": "fabric",
        "name": "Torn sleeve at the hearth",
        "room": 1,
        "x": 5,
        "z": -12,
        "kind": "fragment",
        "observations": [
          {
            "id": "m-fabric",
            "sense": "Eyes",
            "title": "Green wool and a silver thread",
            "text": "Green wool with a silver seam is caught on the hearth. A blood trail leads out toward the grand staircase."
          },
          {
            "id": "m-fabricscent",
            "sense": "Nose",
            "title": "A short trail",
            "text": "A blood trace mixed with pine polish continues toward the ballroom doorway."
          }
        ],
        "scents": [
          "blood",
          "pine"
        ]
      },
      {
        "id": "body",
        "name": "Blackthorn’s covered body",
        "room": 1,
        "x": 3,
        "z": -8,
        "kind": "covered",
        "observations": [
          {
            "id": "m-body",
            "sense": "Eyes",
            "title": "The interrupted announcement",
            "text": "His hand is still around a programme: “Tonight: where the children’s home donations really went.” The broken desk lamp lies beside him."
          },
          {
            "id": "m-bodyfeel",
            "sense": "Feel",
            "title": "A snapped cable",
            "text": "The lamp’s cable has been pulled from its fitting. The plug is cold; the weighted base is rough along one broken edge."
          }
        ]
      },
      {
        "id": "seat",
        "name": "Recently vacated armchair",
        "room": 13,
        "x": 5,
        "z": -12,
        "kind": "armchair",
        "observations": [
          {
            "id": "m-seat",
            "sense": "Feel",
            "title": "Warm in the middle",
            "text": "Two warmer patches remain in the cushion’s centre. The window beside it is broken and the room is cold. Someone has just stood up."
          },
          {
            "id": "m-seatnose",
            "sense": "Nose",
            "title": "The polished sleeve",
            "text": "Pine polish is concentrated on one armrest, with a faint blood trace."
          }
        ],
        "scents": [
          "pine",
          "blood"
        ],
        "physical": {
          "temperature": 33,
          "texture": "compressed velvet",
          "hardness": "yielding",
          "roughness": 0.55,
          "acoustic": "cloth"
        },
        "warmSeat": true
      },
      {
        "id": "phone",
        "name": "Dining-room message machine",
        "room": 3,
        "x": 7,
        "z": 7,
        "kind": "radio",
        "observations": [
          {
            "id": "m-call",
            "sense": "Ears",
            "title": "The call crosses the blackout",
            "text": "Felix is arguing about the house. A loud click interrupts the recording, then he says, “The lights have gone. Are you still there?” The same voice continues without a break."
          }
        ],
        "sound": "tape"
      },
      {
        "id": "knife",
        "name": "Scullery chopping board",
        "room": 4,
        "x": 7,
        "z": 5,
        "kind": "utensils",
        "observations": [
          {
            "id": "m-knife",
            "sense": "Eyes",
            "title": "A small kitchen accident",
            "text": "A sliced lemon, a short paring knife, and a neatly folded blue sleeve cover sit beside a first-aid wrapper. The blood droplets are confined to the board."
          },
          {
            "id": "m-knifesmell",
            "sense": "Nose",
            "title": "Blood and lemon",
            "text": "Blood is clear here, with lemon detergent. There is no pine-polish note."
          }
        ],
        "scents": [
          "blood",
          "soap"
        ]
      },
      {
        "id": "gate",
        "name": "Service gate latch",
        "room": 4,
        "x": 7,
        "z": -7,
        "kind": "lever",
        "observations": [
          {
            "id": "m-gate",
            "sense": "Feel",
            "title": "A heavy sliding catch",
            "text": "The warm inner handle moves freely. The outer catch drops into a steel staple. Pushing it down secures the service gate."
          }
        ],
        "action": {
          "id": "escape-secured",
          "label": "Secure the service gate",
          "sense": "Feel",
          "message": "The service gate is secured. Anyone using this exit will have to stop."
        }
      },
      {
        "id": "clock",
        "name": "Ballroom grandfather clock",
        "room": 0,
        "x": 8,
        "z": 11,
        "kind": "clock",
        "observations": [
          {
            "id": "m-clock",
            "sense": "Ears",
            "title": "The missing cane beat",
            "text": "The clock ticks evenly. Nearby footfalls sometimes arrive in quick pairs without the slower cane tap described by Elsie."
          }
        ],
        "sound": "tick"
      },
      {
        "id": "voss",
        "name": "Dr. Voss",
        "room": 0,
        "x": 4,
        "z": 11,
        "kind": "person",
        "npc": true,
        "coat": 7304315,
        "role": "Family doctor",
        "dialogue": "I was treating Mira’s hand downstairs. That wound on the intruder’s sleeve is fresh. Please look after Elsie.",
        "observations": [
          {
            "id": "m-realvoss",
            "sense": "Ears",
            "title": "The doctor who stayed",
            "text": "“Elsie and I heard the library crash, then footsteps climbing above us. Nobody at dinner wore that coat.”"
          }
        ]
      },
      {
        "id": "window-entry",
        "name": "Broken observatory window",
        "room": 14,
        "x": -6,
        "z": 1,
        "kind": "window",
        "scents": [
          "rain",
          "blood"
        ],
        "observations": [
          {
            "id": "m-entry",
            "sense": "Eyes",
            "title": "Glass on the inside",
            "text": "The window catch was forced from outside. Green fabric lies among inward-fallen glass. A climbing rope hangs over the sill."
          }
        ]
      }
    ],
    "trails": [
      {
        "scent": "blood",
        "floor": 0,
        "points": [
          [
            -15,
            -16
          ],
          [
            -15,
            -4
          ],
          [
            0,
            -4
          ],
          [
            0,
            -12
          ],
          [
            -9,
            -12
          ],
          [
            -9,
            -16
          ]
        ]
      },
      {
        "scent": "blood",
        "floor": 2,
        "points": [
          [
            9,
            -16
          ],
          [
            9,
            -12
          ],
          [
            0,
            -12
          ],
          [
            0,
            -4
          ],
          [
            -15,
            -4
          ],
          [
            -15,
            -13
          ]
        ]
      },
      {
        "scent": "pine",
        "floor": 2,
        "points": [
          [
            -15,
            -4
          ],
          [
            -15,
            -13
          ]
        ]
      }
    ],
    "leads": [
      {
        "question": "Can you cut off his escape?",
        "where": "Ground floor: enter the dining room from the great hall, then go north into the scullery. Feel the rear service latch.",
        "evidence": [
          "m-gate"
        ]
      },
      {
        "question": "What happened to Blackthorn?",
        "where": "Ground floor library: inspect the writing desk, hearth fabric and covered body.",
        "evidence": [
          "m-register",
          "m-fabric"
        ]
      },
      {
        "question": "Where did the stranger go?",
        "where": "The grand stair is north of the hall. Search the third-floor archive and observatory. Follow footsteps, blood and the warm chair. Get close and press E.",
        "evidence": [
          "m-seat",
          "m-vosseye"
        ]
      }
    ],
    "methods": [
      "Broke in, struck Blackthorn with the desk lamp, and hid upstairs with the stolen file",
      "The doctor poisoned Blackthorn at dinner",
      "Felix killed his father during the recorded telephone argument"
    ],
    "motives": [
      "Stop the exposure of a fraudulent children’s-home charity",
      "Inherit the mansion immediately",
      "Conceal theft from the household silver"
    ],
    "answer": {
      "suspect": "intruder",
      "method": 0,
      "motive": 0,
      "evidence": [
        "m-register",
        "m-fabric",
        "m-vosseye",
        "m-voss",
        "m-seat",
        "m-body",
        "m-elsie",
        "m-vossscent",
        "m-entry"
      ]
    },
    "requiredFlags": [
      "detained"
    ],
    "resolution": "Victor Senn broke into the manor to stop Blackthorn exposing the charity fraud. The weighted desk lamp, torn green seam and transfers connect him to the library; the forced window explains how he entered. The warm attic chair marks his hiding place. Securing the service gate or intercepting him stops his escape. Elsie leaves safely, and the children’s-home money can be traced.",
    "hints": [
      "Secure the ground-floor scullery gate early. Mira can direct you.",
      "Take the rear staircase up twice. There are fresh traces in the top-floor archive.",
      "Victor Senn is the raincoat intruder. Detain him, then use the charity file and torn fabric to explain the attack. Two supporting observations are enough."
    ],
    "escapeAfter": 480
  },
  {
    "id": "last-car",
    "number": "02",
    "title": "Do Not Uncouple",
    "subtitle": "Someone is knocking from the sealed carriage.",
    "difficulty": "RESCUE & RECONSTRUCTION",
    "stars": 2,
    "time": "LISTEN · RESTORE · RESCUE",
    "location": "THE NORTHBOUND SLEEPER",
    "date": "02:16 · SIGNAL FAILURE",
    "color": "#8dc4d8",
    "layout": "train",
    "spawn": [
      -61,
      0
    ],
    "bounds": [
      -65,
      65,
      -2.2,
      2.2
    ],
    "brief": "The sleeper has stopped on an empty stretch of track. Ada, a passenger, says her brother Jo went to check a fault and never came back. The porter says he got off at the last station. Now someone is knocking from the sealed baggage car. Find Jo, open a way out, and discover why the train was stopped.",
    "facts": "The train is stationary. There is no hidden countdown. The locked baggage bulkhead is real: listen through it, then find its release. Progress and rescued passengers remain saved. Conversations require Ears.",
    "suspects": [
      {
        "id": "porter",
        "name": "Leon Wren",
        "role": "Night porter",
        "statement": "Insists Jo left the train at the previous stop."
      },
      {
        "id": "sable",
        "name": "Sable Orr",
        "role": "Courier",
        "statement": "Has an expensive locked case and refuses to hand it over."
      },
      {
        "id": "ines",
        "name": "Ines Holt",
        "role": "Driver",
        "statement": "Says she stopped because the signal relay vanished."
      }
    ],
    "rooms": [
      {
        "name": "OBSERVATION CAR",
        "center": [
          -54,
          0
        ],
        "size": [
          22,
          4.4
        ],
        "doors": {
          "E": 0
        },
        "color": 3689571,
        "type": "lounge",
        "floor": 0
      },
      {
        "name": "SLEEPING CAR",
        "center": [
          -28,
          0
        ],
        "size": [
          30,
          4.4
        ],
        "doors": {
          "W": 0,
          "E": 0
        },
        "color": 5981266,
        "type": "sleepers",
        "floor": 0
      },
      {
        "name": "DINING CAR",
        "center": [
          -1,
          0
        ],
        "size": [
          24,
          4.4
        ],
        "doors": {
          "W": 0,
          "E": 0
        },
        "color": 6246459,
        "type": "diner",
        "floor": 0
      },
      {
        "name": "RELAY VESTIBULE",
        "center": [
          17,
          0
        ],
        "size": [
          12,
          4.4
        ],
        "doors": {
          "W": 0,
          "E": 0
        },
        "color": 3954009,
        "type": "electrical",
        "floor": 0
      },
      {
        "name": "BAGGAGE CAR",
        "center": [
          35,
          0
        ],
        "size": [
          24,
          4.4
        ],
        "doors": {
          "W": 0,
          "E": 0
        },
        "color": 5656647,
        "type": "baggage",
        "floor": 0
      },
      {
        "name": "POSTAL VAN",
        "center": [
          56,
          0
        ],
        "size": [
          18,
          4.4
        ],
        "doors": {
          "W": 0
        },
        "color": 3624274,
        "type": "postal",
        "floor": 0
      }
    ],
    "objects": [
      {
        "id": "ada",
        "name": "Ada Marin",
        "room": 0,
        "x": -7,
        "z": 1.2,
        "kind": "person",
        "observations": [
          {
            "id": "t-ada",
            "sense": "Ears",
            "title": "A signal from the other end",
            "text": "“Jo always knocks twice, waits, then once. We did it through our bedroom wall. Please just listen before they uncouple that car.”"
          }
        ],
        "npc": true,
        "coat": 13079908,
        "role": "Jo’s sister",
        "dialogue": "The porter took his tool roll past the dining car. Jo followed because he thought someone needed help.",
        "challenge": "I’m not leaving without him."
      },
      {
        "id": "porter",
        "name": "Leon Wren",
        "room": 2,
        "x": 0,
        "z": 1.2,
        "kind": "person",
        "observations": [
          {
            "id": "t-porter",
            "sense": "Ears",
            "title": "An early departure",
            "text": "“Your missing man stepped off at North Junction. I was polishing the sleeper brass when the fault occurred. Baggage is out of bounds.”"
          },
          {
            "id": "t-portereye",
            "sense": "Eyes",
            "title": "The wrong tool roll",
            "text": "His roll has an empty rectangular pocket marked SIGNAL RELAY. Blue cable insulation is caught in its clasp."
          },
          {
            "id": "t-porterscent",
            "sense": "Nose",
            "title": "Solvent on his gloves",
            "text": "Orange cleaner and fresh scorched insulation sit on the gloves."
          }
        ],
        "npc": true,
        "coat": 4615294,
        "role": "Night porter",
        "scents": [
          "citrus",
          "ozone"
        ],
        "patrol": [
          [
            -6,
            0.2
          ],
          [
            8,
            0
          ],
          [
            12,
            0.2
          ],
          [
            -6,
            0.2
          ]
        ],
        "culprit": true,
        "challengeEvidence": [
          "t-testimony",
          "t-roll",
          "t-order"
        ],
        "challenge": "They were only paying me to stop the train. Jo should never have opened the bag."
      },
      {
        "id": "sable",
        "name": "Sable Orr",
        "room": 1,
        "x": -5,
        "z": 1.2,
        "kind": "person",
        "observations": [
          {
            "id": "t-sable",
            "sense": "Ears",
            "title": "The case nobody may touch",
            "text": "“It’s a restored violin. I can show the serial number and delivery letter. Suspicious luggage is apparently easier to find than a missing person.”"
          },
          {
            "id": "t-sableeye",
            "sense": "Eyes",
            "title": "A documented instrument",
            "text": "The opened case contains a violin. Its serial matches the conservatory’s delivery letter."
          }
        ],
        "npc": true,
        "coat": 7757192,
        "role": "Courier",
        "dialogue": "There was an argument by the baggage door. One voice said, “Put the relay back.”",
        "challenge": "Check the letter and instrument. Then please find the man."
      },
      {
        "id": "ines",
        "name": "Ines Holt",
        "room": 3,
        "x": 1,
        "z": 1.2,
        "kind": "person",
        "observations": [
          {
            "id": "t-ines",
            "sense": "Ears",
            "title": "A deliberate stop",
            "text": "“A relay was pulled; this wasn’t a random failure. The baggage door release lost power too. Restore its fuse here, or find the manual release inside the sleeper service locker.”"
          }
        ],
        "npc": true,
        "coat": 10388036,
        "role": "Driver",
        "dialogue": "The release switch beside the baggage door needs power. A manual cable can open it without electricity.",
        "challenge": "The event recorder shows when the relay failed. Compare it with the porter’s claimed routine."
      },
      {
        "id": "jo",
        "name": "Jo Marin",
        "room": 4,
        "x": 3,
        "z": 0,
        "kind": "person",
        "observations": [
          {
            "id": "t-testimony",
            "sense": "Ears",
            "title": "The man who did not get off",
            "text": "“Leon pulled the relay. I saw him put it into his roll. Then he shoved me through this door. He said the transfer crew were waiting down the line.”"
          },
          {
            "id": "t-joeye",
            "sense": "Eyes",
            "title": "Very much on the train",
            "text": "Jo’s wrist has a rope mark and his work badge is bent. He can walk, but needs someone to open the door."
          }
        ],
        "npc": true,
        "coat": 10512450,
        "role": "Missing engineer",
        "requires": "baggage-open",
        "dialogue": "Ada’s here? Get me back to her. I thought nobody could hear me.",
        "action": {
          "id": "rescued",
          "label": "Ask Jo to follow you to Ada",
          "message": "Jo is safe with Ada in the observation car."
        }
      },
      {
        "id": "bulkhead",
        "name": "Sealed baggage bulkhead",
        "room": 3,
        "x": 5.65,
        "z": 0,
        "kind": "bulkhead",
        "observations": [
          {
            "id": "t-knock",
            "sense": "Ears",
            "title": "Two, a pause, then one",
            "text": "Two knocks. A pause. One knock. A muffled voice follows: “The handle does nothing from this side.”"
          },
          {
            "id": "t-doorfeel",
            "sense": "Feel",
            "title": "A locked door under pressure",
            "text": "The door is shut against its latch. A pulse from each knock carries through the lower panel."
          }
        ],
        "sound": "rescue",
        "action": {
          "id": "baggage-open",
          "label": "Pull the powered door release",
          "sense": "Feel",
          "needs": [
            "power"
          ],
          "message": "The baggage bulkhead slides aside. There is someone inside."
        }
      },
      {
        "id": "fuse",
        "name": "Door circuit fuse holder",
        "room": 3,
        "x": -2,
        "z": 1.35,
        "kind": "fusebox",
        "observations": [
          {
            "id": "t-fuse",
            "sense": "Eyes",
            "title": "One missing connection",
            "text": "The release circuit’s fuse is loose in its holder. A diagram labels it BAGGAGE DOOR, separate from the missing signal relay."
          },
          {
            "id": "t-fusefeel",
            "sense": "Feel",
            "title": "Loose, not burnt",
            "text": "The ceramic fuse is cool and intact. Its retaining clip has been deliberately lifted."
          }
        ],
        "action": {
          "id": "power",
          "label": "Seat the loose fuse",
          "sense": "Feel",
          "message": "The baggage release clicks on. Return to the bulkhead and pull the release."
        }
      },
      {
        "id": "locker",
        "name": "Sleeper service locker",
        "room": 1,
        "x": 10,
        "z": 1.35,
        "kind": "cabinet",
        "observations": [
          {
            "id": "t-locker",
            "sense": "Feel",
            "title": "A cable behind the lining",
            "text": "A stout cable runs behind a loose panel. A stamped tag reads BAGGAGE MANUAL RELEASE."
          },
          {
            "id": "t-lockerear",
            "sense": "Ears",
            "title": "A long mechanical connection",
            "text": "Tugging the cable makes something clack at the distant baggage door."
          }
        ],
        "action": {
          "id": "baggage-open",
          "label": "Pull the manual release cable",
          "sense": "Feel",
          "message": "The manual cable pulls the baggage door latch clear."
        }
      },
      {
        "id": "roll",
        "name": "Porter’s spare tool roll",
        "room": 2,
        "x": 3,
        "z": 1.35,
        "kind": "toolroll",
        "observations": [
          {
            "id": "t-roll",
            "sense": "Eyes",
            "title": "A relay wrapped for collection",
            "text": "A signal relay is wrapped in a service cloth. Its serial matches the missing unit on the driver’s fault card."
          },
          {
            "id": "t-rollnose",
            "sense": "Nose",
            "title": "Fresh cleaner on the contacts",
            "text": "Orange cleaner overlays the same scorched-insulation note as the porter’s gloves."
          }
        ],
        "scents": [
          "citrus",
          "ozone"
        ]
      },
      {
        "id": "order",
        "name": "Crushed transfer order",
        "room": 2,
        "x": -3,
        "z": 1.35,
        "kind": "ticket",
        "observations": [
          {
            "id": "t-order",
            "sense": "Eyes",
            "title": "A paid unscheduled stop",
            "text": "“L. Wren: hold the sleeper between signals 18 and 19. Transfer the bearer bonds. Balance on delivery.” The station stop at North Junction was cancelled."
          },
          {
            "id": "t-orderfeel",
            "sense": "Feel",
            "title": "Recently crushed paper",
            "text": "The paper is damp where it was tightly crumpled. Its perforated edge matches a stub on the porter’s service clipboard."
          }
        ]
      },
      {
        "id": "seat",
        "name": "Warm sleeper bunk",
        "room": 1,
        "x": -4,
        "z": -1.45,
        "kind": "bunk",
        "observations": [
          {
            "id": "t-seat",
            "sense": "Feel",
            "title": "A body-shaped hollow",
            "text": "The centre retains warmth while the window-side blanket is cold. A body recently left this bunk."
          },
          {
            "id": "t-seatnose",
            "sense": "Nose",
            "title": "An ordinary traveller",
            "text": "Coffee and wet wool. There is no orange-cleaner note."
          }
        ],
        "warmSeat": true,
        "scents": [
          "coffee",
          "rain"
        ],
        "physical": {
          "temperature": 32,
          "texture": "creased blanket",
          "hardness": "yielding",
          "roughness": 0.6,
          "acoustic": "cloth"
        }
      },
      {
        "id": "recorder",
        "name": "Train event recorder",
        "room": 0,
        "x": 3,
        "z": 1.35,
        "kind": "console",
        "observations": [
          {
            "id": "t-log",
            "sense": "Eyes",
            "title": "The stop that never happened",
            "text": "North Junction: PASS THROUGH. 02:09 relay circuit interrupted. 02:10 emergency stop. No doors opened before the stop."
          },
          {
            "id": "t-logear",
            "sense": "Ears",
            "title": "A live recorder",
            "text": "The relay monitor pulses slowly. The passenger announcement repeats automatically; it is not the porter speaking now."
          }
        ],
        "sound": "hum"
      }
    ],
    "trails": [
      {
        "scent": "citrus",
        "points": [
          [
            -26,
            0
          ],
          [
            -10,
            0
          ],
          [
            6,
            0
          ],
          [
            15,
            0
          ]
        ]
      },
      {
        "scent": "ozone",
        "points": [
          [
            12,
            1
          ],
          [
            12,
            0
          ],
          [
            3,
            0
          ]
        ]
      }
    ],
    "leads": [
      {
        "question": "Is someone still in the baggage car?",
        "where": "Follow the central aisle to the far end. Listen to the bulkhead with Ears.",
        "evidence": [
          "t-ada",
          "t-knock"
        ]
      },
      {
        "question": "Can you open the door?",
        "where": "Feel the relay vestibule fuse holder, or find the sleeper’s manual cable.",
        "evidence": [
          "t-fusefeel"
        ]
      },
      {
        "question": "Why was this train stopped?",
        "where": "Compare the event recorder, tool roll, and crushed transfer order. Speak with Jo once he is free.",
        "evidence": [
          "t-log",
          "t-roll",
          "t-order",
          "t-testimony"
        ]
      }
    ],
    "methods": [
      "Removed the signal relay and locked Jo in baggage after he witnessed the theft",
      "The courier sabotaged the train to hide a stolen violin",
      "The driver caused an accidental failure and Jo left at North Junction"
    ],
    "motives": [
      "Stop the train for a paid robbery of bearer bonds",
      "Collect a reward for rescuing Jo",
      "Delay delivery of the conservatory’s violin"
    ],
    "answer": {
      "suspect": "porter",
      "method": 0,
      "motive": 0,
      "evidence": [
        "t-testimony",
        "t-roll",
        "t-order",
        "t-log",
        "t-portereye",
        "t-porterscent",
        "t-knock",
        "t-ada"
      ]
    },
    "requiredFlags": [
      "rescued",
      "detained"
    ],
    "resolution": "Leon pulled the signal relay to create an unscheduled stop for a robbery crew. Jo caught him and was locked into the unpowered baggage car. The cancelled station stop made Leon’s story impossible. Jo’s knocking kept the rescue possible even when sight could not reach him. Restoring the release—or pulling its manual cable—brought him back to Ada. With the relay, payment order, and Jo’s testimony preserved, Leon cannot pass this off as a fault.",
    "hints": [
      "Walk toward the knocking. The missing man’s sister can tell you what to listen for.",
      "The driver offers two ways into baggage: an electrical release and a manual cable.",
      "Free Jo, lead him back to Ada, then record his account, the relay in the tool roll, and the transfer order. Question Leon and present those observations."
    ]
  },
  {
    "id": "pier-pressure",
    "number": "03",
    "title": "Pier Pressure",
    "subtitle": "The money is moving. So is the gunman.",
    "difficulty": "ACTIVE PURSUIT",
    "stars": 3,
    "time": "TRACK · CUT OFF · TAKE COVER",
    "location": "ROOKERY FERRY DOCK",
    "date": "04:32 · BEFORE FIRST SAILING",
    "color": "#7cafa8",
    "layout": "docks",
    "spawn": [
      -40,
      35
    ],
    "bounds": [
      -48,
      48,
      -98,
      42
    ],
    "brief": "Rookery’s ferry crew raised enough to keep their last boat running through winter. Tonight the fund was stolen, a dockworker was wounded, and the security guard wants to arrest the mechanic. The ferry dispatcher refuses to sail without the money. Search the freight yard, find the stolen case, and stop whoever is still moving it toward the launch.",
    "facts": "The dock has cover, open sightlines, and several routes around the freight stacks. A confrontation can become dangerous. Stay behind solid cover when the gunman aims. If pinned down, you return to the entrance with your evidence intact. Pausing freezes the action.",
    "suspects": [
      {
        "id": "rook",
        "name": "Cal Rook",
        "role": "Security guard",
        "statement": "Says he fired at the thief and saw the mechanic run."
      },
      {
        "id": "bea",
        "name": "Bea Moss",
        "role": "Ferry mechanic",
        "statement": "Says she ran toward the shot to help the wounded worker."
      },
      {
        "id": "otto",
        "name": "Otto Vale",
        "role": "Cargo broker",
        "statement": "Was selling a boat part privately after hours."
      }
    ],
    "rooms": [
      {
        "name": "FERRY FORECOURT",
        "center": [
          -24,
          30
        ],
        "size": [
          48,
          24
        ],
        "doors": {},
        "color": 6322039,
        "type": "yard",
        "floor": 0
      },
      {
        "name": "CONTAINER QUAY",
        "center": [
          0,
          -21
        ],
        "size": [
          96,
          78
        ],
        "doors": {},
        "color": 4545892,
        "type": "freight",
        "floor": 0
      },
      {
        "name": "DISPATCH HOUSE",
        "center": [
          -32,
          -14
        ],
        "size": [
          20,
          20
        ],
        "doors": {
          "E": 0,
          "S": 0
        },
        "color": 6455677,
        "type": "shed",
        "floor": 0
      },
      {
        "name": "ENGINE WORKSHOP",
        "center": [
          25,
          30
        ],
        "size": [
          46,
          24
        ],
        "doors": {
          "W": 0,
          "N": 0
        },
        "color": 6516856,
        "type": "garage",
        "floor": 0
      },
      {
        "name": "LAUNCH PIER",
        "center": [
          20,
          -79
        ],
        "size": [
          16,
          38
        ],
        "doors": {},
        "color": 7955788,
        "type": "pier",
        "floor": 0
      }
    ],
    "objects": [
      {
        "id": "nell",
        "name": "Nell Finch",
        "room": 0,
        "x": -14,
        "z": 3,
        "kind": "person",
        "observations": [
          {
            "id": "d-nell",
            "sense": "Ears",
            "title": "One winter of crossings",
            "text": "“My mum takes the early ferry to work. Half the town does. We counted that money together. Find the case before it leaves the pier.”"
          }
        ],
        "npc": true,
        "coat": 12815950,
        "role": "Dispatcher",
        "dialogue": "The launch fuel valve is at the end of the pier. Close it before confronting anyone who might run for the boat.",
        "challenge": "The fundraiser sheet is on the counter. Every name is someone who needs this ferry."
      },
      {
        "id": "rook",
        "name": "Cal Rook",
        "room": 1,
        "x": 8,
        "z": -18,
        "kind": "person",
        "observations": [
          {
            "id": "d-rook",
            "sense": "Ears",
            "title": "The guard’s version",
            "text": "“Moss ran from the gate after I fired. I’m the only armed guard here. Let me take her in, and you can stop wasting time.”"
          },
          {
            "id": "d-rookeye",
            "sense": "Eyes",
            "title": "A torn boot and fresh dressing",
            "text": "His right boot has a split heel. A dressing crosses his left forearm. The holster strap is unsnapped."
          },
          {
            "id": "d-rookscent",
            "sense": "Nose",
            "title": "Tar over blood",
            "text": "Fresh marine tar overlays blood near the cuff. Rain has not washed it away."
          }
        ],
        "npc": true,
        "coat": 4279144,
        "role": "Security guard",
        "scents": [
          "blood",
          "tar"
        ],
        "patrol": [
          [
            8,
            -39
          ],
          [
            8,
            -47
          ],
          [
            20,
            -47
          ],
          [
            20,
            -66
          ],
          [
            8,
            -47
          ]
        ],
        "culprit": true,
        "armed": true,
        "challengeEvidence": [
          "d-case",
          "d-camera",
          "d-boot"
        ],
        "challenge": "You should have let me finish the report.",
        "escape": [
          25,
          -93
        ]
      },
      {
        "id": "bea",
        "name": "Bea Moss",
        "room": 3,
        "x": 12,
        "z": 4,
        "kind": "person",
        "observations": [
          {
            "id": "d-bea",
            "sense": "Ears",
            "title": "Running toward the shot",
            "text": "“I heard the shot and went to help Sam. Rook told me to go back to my bay. I didn’t see a thief—only the guard and Sam.”"
          },
          {
            "id": "d-beaeye",
            "sense": "Eyes",
            "title": "Work boots without the split",
            "text": "Both boot heels are intact. Her hands and sleeves carry ordinary engine oil, with no fresh wound."
          }
        ],
        "npc": true,
        "coat": 5401731,
        "role": "Mechanic",
        "dialogue": "Sam is under the dispatch awning. He can tell you which direction the shot came from.",
        "challenge": "Check the heel marks. My soles don’t leave that split."
      },
      {
        "id": "otto",
        "name": "Otto Vale",
        "room": 0,
        "x": 4,
        "z": -4,
        "kind": "person",
        "observations": [
          {
            "id": "d-otto",
            "sense": "Ears",
            "title": "A different secret",
            "text": "“Fine. I sold a starter motor without logging it. That’s my fuel on the trolley. It doesn’t make me your armed robber.”"
          }
        ],
        "npc": true,
        "coat": 8282193,
        "role": "Cargo broker",
        "dialogue": "The guard’s locker is in dispatch. He went there before the launch engine started.",
        "challenge": "The buyer’s receipt is on the trolley. It describes a motor, not your cash case."
      },
      {
        "id": "sam",
        "name": "Sam Reed",
        "room": 2,
        "x": 5,
        "z": 6,
        "kind": "person",
        "observations": [
          {
            "id": "d-sam",
            "sense": "Ears",
            "title": "The shot from behind",
            "text": "“I saw him move the fundraiser case. I grabbed his sleeve. He fired when I turned toward Nell. The shot came from the freight side, not the road.”"
          }
        ],
        "npc": true,
        "coat": 9860949,
        "role": "Wounded dockworker",
        "dialogue": "I’m bandaged. Help is coming. Please keep Nell away from the guard.",
        "injured": true
      },
      {
        "id": "case",
        "name": "Fundraiser cash case",
        "room": 1,
        "x": 7,
        "z": -25,
        "kind": "cashcase",
        "observations": [
          {
            "id": "d-case",
            "sense": "Eyes",
            "title": "The town’s missing case",
            "text": "The case has the ferry logo and fundraiser seal. Its leather handle is wrapped in a security-uniform sleeve."
          },
          {
            "id": "d-casescent",
            "sense": "Nose",
            "title": "The same mixture",
            "text": "Blood and fresh marine tar cling to the sleeve and handle."
          }
        ],
        "scents": [
          "blood",
          "tar"
        ]
      },
      {
        "id": "camera",
        "name": "Dispatch security recorder",
        "room": 2,
        "x": -6,
        "z": -6,
        "kind": "console",
        "observations": [
          {
            "id": "d-camera",
            "sense": "Eyes",
            "title": "The report contradicts its own camera",
            "text": "A still shows Rook carrying the ferry case into the freight yard before the shot. His written report says he never left the gate."
          },
          {
            "id": "d-cameraear",
            "sense": "Ears",
            "title": "The shot’s sequence",
            "text": "The recorded shot follows Sam calling, “Cal, put it down.” The launch engine starts afterwards."
          }
        ],
        "sound": "tape"
      },
      {
        "id": "boot",
        "name": "Split heel impressions",
        "room": 1,
        "x": -17,
        "z": 10,
        "kind": "tracks",
        "observations": [
          {
            "id": "d-boot",
            "sense": "Eyes",
            "title": "One broken heel",
            "text": "The wet impressions show a split right heel. They run from dispatch toward the freight stacks and continue to the launch."
          },
          {
            "id": "d-bootfeel",
            "sense": "Feel",
            "title": "A gap in the tread",
            "text": "The right print has a deep missing wedge at its outside edge. The left print is complete."
          },
          {
            "id": "d-bootscent",
            "sense": "Nose",
            "title": "Tar carried along the boards",
            "text": "Marine tar follows the heel impressions. A blood trace joins it farther into the yard."
          }
        ],
        "scents": [
          "tar",
          "blood"
        ]
      },
      {
        "id": "blood",
        "name": "Drops beside the freight stack",
        "room": 1,
        "x": 3,
        "z": -5,
        "kind": "fragment",
        "observations": [
          {
            "id": "d-blood",
            "sense": "Eyes",
            "title": "Two directions after the shot",
            "text": "A few dark drops continue toward the launch. The larger patch lies beside Sam’s dropped cap, toward dispatch."
          },
          {
            "id": "d-bloodnose",
            "sense": "Nose",
            "title": "Fresh and carried",
            "text": "Blood is present on both routes. Tar is mixed only with the trail toward the launch."
          }
        ],
        "scents": [
          "blood",
          "tar"
        ]
      },
      {
        "id": "valve",
        "name": "Launch fuel shutoff",
        "room": 4,
        "x": 5,
        "z": -14,
        "kind": "valve",
        "observations": [
          {
            "id": "d-valve",
            "sense": "Feel",
            "title": "A quarter-turn stop",
            "text": "The valve vibrates with the launch engine. Its stop plate reads CLOSE. Turn it to stop the fuel supply."
          }
        ],
        "physical": {
          "temperature": 27,
          "texture": "ribbed wheel",
          "hardness": "rigid",
          "roughness": 0.3,
          "acoustic": "metal",
          "vibration": true
        },
        "action": {
          "id": "escape-secured",
          "label": "Close the launch fuel valve",
          "sense": "Feel",
          "message": "The launch engine winds down. The boat cannot leave."
        }
      },
      {
        "id": "bench",
        "name": "Guard’s shelter bench",
        "room": 2,
        "x": 4,
        "z": -6,
        "kind": "bench",
        "observations": [
          {
            "id": "d-bench",
            "sense": "Feel",
            "title": "Someone just stood up",
            "text": "The sheltered end of the bench is warm and compressed. The exposed end is cold and wet."
          },
          {
            "id": "d-benchnose",
            "sense": "Nose",
            "title": "Fresh sealant on the seat",
            "text": "Tar and a small blood trace sit on the sheltered end."
          }
        ],
        "warmSeat": true,
        "scents": [
          "tar",
          "blood"
        ],
        "physical": {
          "temperature": 32,
          "texture": "damp canvas cushion",
          "hardness": "yielding",
          "roughness": 0.6,
          "acoustic": "cloth"
        }
      },
      {
        "id": "fund",
        "name": "Ferry fundraiser board",
        "room": 2,
        "x": -6,
        "z": 7,
        "kind": "ticket",
        "observations": [
          {
            "id": "d-fund",
            "sense": "Eyes",
            "title": "A community in small amounts",
            "text": "£8 from the baker. £3 from the night cleaner. £12 from Sam. The total matches the amount marked on the stolen case. This was the winter fuel fund."
          }
        ]
      },
      {
        "id": "motor",
        "name": "Unlogged starter motor",
        "room": 3,
        "x": -12,
        "z": -7,
        "kind": "trolley",
        "observations": [
          {
            "id": "d-motor",
            "sense": "Eyes",
            "title": "A petty deal",
            "text": "A handwritten receipt from Otto lists one used starter motor. A buyer’s signature and motor serial agree."
          },
          {
            "id": "d-motornose",
            "sense": "Nose",
            "title": "An ordinary fuel source",
            "text": "Old engine fuel and oil. No blood or freshly applied marine tar."
          }
        ],
        "scents": [
          "fuel"
        ]
      }
    ],
    "trails": [
      {
        "scent": "tar",
        "points": [
          [
            -21,
            -14
          ],
          [
            -17,
            -14
          ],
          [
            -17,
            -27
          ],
          [
            8,
            -27
          ],
          [
            8,
            -46
          ],
          [
            20,
            -46
          ],
          [
            20,
            -88
          ]
        ]
      },
      {
        "scent": "blood",
        "points": [
          [
            -23,
            -9
          ],
          [
            -17,
            -9
          ],
          [
            3,
            -26
          ],
          [
            8,
            -46
          ],
          [
            20,
            -67
          ]
        ]
      }
    ],
    "leads": [
      {
        "question": "Who saw the theft, not just the aftermath?",
        "where": "Speak with Nell, Sam, and the workers using Ears. Check the dispatch recorder.",
        "evidence": [
          "d-nell",
          "d-sam",
          "d-camera"
        ]
      },
      {
        "question": "Where is the stolen case going?",
        "where": "Follow the marked central cargo lane north. Search beside container C07, then compare the impressions and the guard’s boots.",
        "evidence": [
          "d-boot",
          "d-case",
          "d-rookeye"
        ]
      },
      {
        "question": "Can you prevent a getaway?",
        "where": "Close the launch valve before showing your evidence. Use the freight stacks as cover if threatened.",
        "evidence": [
          "d-valve"
        ]
      }
    ],
    "methods": [
      "Stole the case, shot the witness, and framed the mechanic while moving it to the launch",
      "The mechanic stole the fund and fled through the front gate",
      "The cargo broker hid the fund inside the sold starter motor"
    ],
    "motives": [
      "Take the winter ferry fund and escape by launch",
      "Hide an unlogged spare-parts sale",
      "Get the mechanic dismissed for poor work"
    ],
    "answer": {
      "suspect": "rook",
      "method": 0,
      "motive": 0,
      "evidence": [
        "d-case",
        "d-camera",
        "d-cameraear",
        "d-boot",
        "d-rookeye",
        "d-rookscent",
        "d-sam",
        "d-casescent"
      ]
    },
    "requiredFlags": [
      "detained"
    ],
    "resolution": "Rook used his security access to take the winter fund. Sam caught him and grabbed his sleeve; Rook shot him and tried to redirect the investigation toward Bea. The recorder, uniform wrapping, split heel, and blood mixed with fresh tar establish a route and a person. Otto’s unlogged motor was a separate offence. With the launch stopped and Rook detained, Nell can return the money to the ferry crew. Sam’s contribution stays on the board.",
    "hints": [
      "Speak to the people who were here. Rook’s accusation is one account, not a finding.",
      "The dispatch recorder and split heel trail contradict the guard’s claimed position. Find the cash case among the freight stacks.",
      "Record the case, recorder, and heel impressions. Close the launch valve with Feel, then question Rook and show him the evidence. Take cover when he aims; approach between shots."
    ]
  }
];
