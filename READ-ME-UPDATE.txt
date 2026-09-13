CASE: NONSENSE — cumulative update 1.3

Test first: https://case-nonsense.hifaproductions.chatgpt.site

This patch includes the earlier font and notebook improvements. It works over
the original working 1.1 export or the 1.2 update.

1. Extract the ZIP.
2. Upload its contents to the ROOT of Case-Nonsense-Web in GitHub, replacing
   matching files. Upload audio, fonts and models AS FOLDERS. Do not flatten them.
3. Keep the existing vendor folder, cases.js and other unchanged game files.
4. Commit the upload. Your connected Vercel project deploys the update.
5. Reload the game after deployment. No build settings changes are required.

The ZIP is a patch, not a complete game. Do not upload the ZIP itself.
The old music files are unused and may be removed to save space:
  audio/moil.mp3
  audio/dream-2.mp3
  audio/dream-ambience.mp3
  audio/mystery.mp3
Leaving these old files in place does not affect the new score.

MENU: Feel traces wherever the cursor points, including distant buildings.
Lit windows are warm. Nose has drifting scents; hover over the city to scan.
The cases retain their existing touch range and sniff timing. Menu music emits
reflected visual waves from the speakers on detected musical attacks.
The N glitch now repeats noticeably. Approach the case exit and press E to leave.

FURNISHINGS: selected free Kenney models, grounded furniture, wall-mounted boards
and vents, connected trolley wheels, supported concealed clues, and grounded tosses.
MUSIC: Dances and Dames, Night on the Docks - Sax, Cool Vibes — Kevin MacLeod.
Credits and licenses are included; retain audio/CREDITS.txt and models credits.

Your progress is preserved. Settings > Export/Import notebooks transfers it
between websites. This update does not change case solutions or evidence IDs.

REPLACE OR ADD:
  audio/CREDITS.txt
  audio/cool-vibes.mp3
  audio/dances-and-dames.mp3
  audio/night-on-the-docks.mp3
  beat-detector.js
  fonts/Newsreader-OFL.txt
  fonts/Newsreader.ttf
  fonts/SourceSans3-OFL.txt
  fonts/SourceSans3.ttf
  game.js
  index.html
  journal.js
  materials.js
  menu-perception.js
  model-kit.js
  models/CREDITS.txt
  models/Kenney-LICENSE.txt
  models/furniture-data.js
  music.js
  perception.js
  style.css
  world.js
