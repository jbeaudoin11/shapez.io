export const CHANGELOG = [
    {
        version: "1.2.1",
        date: "unreleased",
        entries: [
            "Fixed stacking bug for level 26 which required restarting the game",
            "Fix reward notification being too long sometimes (by LeopoldTal)",
            "Use locale decimal separator on belt reader display (by LeopoldTal)",
            "Vastly improved performance when saving games (by LeopoldTal)",
            "Updated translations",
        ],
    },
    {
        version: "1.2.0",
        date: "09.10.2020",
        entries: [
            "⚠️⚠️This update is HUGE, view the full changelog <a href='https://shapez.io/wires/' target='_blank'>here</a>! ⚠️⚠️",
        ],
    },
    {
        version: "1.1.18",
        date: "27.06.2020",
        entries: [
            "Huge performance improvements - up to double fps and tick-rate! This will wipe out all current items on belts.",
            "Reduce story shapes required until unlocking blueprints",
            "Allow clicking on variants to select them",
            "Add 'copy key' button to shape viewer",
            "Add more FPS to the belt animation and fix belt animation seeming to go 'backwards' on high belt speeds",
            "Fix deconstruct sound being played when right clicking hub",
            "Allow clicking 'Q' over a shape or color patch to automatically select the miner building (by Gerdon262)",
            "Update belt placement performance on huge factories (by Phlosioneer)",
            "Fix duplicate waypoints with a shape not rendering (by hexy)",
            "Fix smart tunnel placement deleting wrong tunnels (by mordof)",
            "Add setting (on by default) to store the last used rotation per building instead of globally storing it (by Magos)",
            "Added chinese (traditional) translation",
            "Updated translations",
        ],
    },
    {
        version: "1.1.17",
        date: "22.06.2020",
        entries: [
            "Color blind mode! You can now activate it in the settings and it will show you which color is below your cursor (Either resource or on the belt)",
            "Add info buttons to all shapes so you can figure out how they are built! (And also, which colors they have)",
            "Allow configuring autosave interval and disabling it in the settings",
            "The smart-tunnel placement has been reworked to properly replace belts. Thus the setting has been turned on again by default",
            "The soundtrack now has a higher quality on the standalone version than the web version",
            "Add setting to disable cut/delete warnings (by hexy)",
            "Fix bug where belts in blueprints don't orient correctly (by hexy)",
            "Fix camera moving weird after dragging and holding (by hexy)",
            "Fix keybinding for pipette showing while pasting blueprints",
            "Improve visibility of shape background in dark mode",
            "Added sound when destroying a building",
            "Added swedish translation",
            "Update tutorial image for tier 2 tunnels to explain mix/match (by jimmyshadow1)",
        ],
    },
    {
        version: "1.1.16",
        date: "21.06.2020",
        entries: [
            "You can now pickup buildings below your cursor with 'Q'!",
            "The game soundtrack has been extended! There are now 4 songs with over 13 minutes of playtime from <a href='https://soundcloud.com/pettersumelius' target='blank'>Peppsen</a>!",
            "Refactor keybindings overlay to show more appropriate keybindings",
            "Show keybindings for area-select in the upper left instead",
            "Automatically deselect area when selecting a new building",
            "Raise markers limit from 14 characters to 71 (by Joker-vD)",
            "Optimize performance by caching extractor items (by Phlosioneer)",
            "Added setting to enable compact building infos, which only show ratios and hide the image / description",
            "Apply dark theme to menu as well (by dengr1065)",
            "Fix belt planner not placing the last belt",
            "Fix buildings getting deleted when right clicking while placing a blueprint",
            "Fix for exporting screenshots for huge bases (It was showing an empty file) (by xSparfuchs)",
            "Fix buttons not responding when using right click directly after left click (by davidburhans)",
            "Fix hub marker being hidden by building info panel",
            "Disable dialog background blur since it can cause performance issues",
            "Added simplified chinese translations",
            "Update translations (Thanks to all translators!)",
        ],
    },
    {
        version: "1.1.15",
        date: "17.06.2020",
        entries: [
            "You can now place straight belts (and tunnels) by holding SHIFT! (For you, @giantwaffle ❤️)",
            "Added continue button to main menu and add separate 'New game' button (by jaysc)",
            "Added setting to disable smart tunnel placement introduced with the last update",
            "Added setting to disable vignette",
            "Update translations",
        ],
    },
    {
        version: "1.1.14",
        date: "16.06.2020",
        entries: [
            "There is now an indicator (compass) to the HUB for the HUB Marker!",
            "You can now include shape short keys in markers to render shape icons instead of text!",
            "Added mirrored variant of the painter",
            "When placing tunnels, unnecessary belts inbetween are now removed!",
            "You can now drag tunnels and they will automatically expand! (Just try it out, its intuitive)",
        ],
    },
    {
        version: "1.1.13",
        date: "15.06.2020",
        entries: [
            "Added shift modifier for faster pan (by jaysc)",
            "Added Japanese translations",
            "Added Portuguese (Portugal) translations",
            "Updated icon for Spanish (Latin America) - It was showing a Spanish flag before",
            "Updated existing translations",
        ],
    },
    {
        version: "1.1.12",
        date: "14.06.2020",
        entries: [
            "Huge performance improvements! The game should now run up to 60% faster!",
            "Added norwegian translation",
        ],
    },
    {
        version: "1.1.11",
        date: "13.06.2020",
        entries: [
            "Pinned shapes are now smart, they dynamically update their goal and also unpin when no longer required. Completed objectives are now rendered transparent.",
            "You can now cut areas, and also paste the last blueprint again! (by hexy)",
            "You can now export your whole base as an image by pressing F3!",
            "Improve upgrade number rounding, so there are no goals like '37.4k', instead it will now be '35k'",
            "You can now configure the camera movement speed when using WASD (by mini-bomba)",
            "Selecting an area now is relative to the world and thus does not move when moving the screen (by Dimava)",
            "Allow higher tick-rates up to 500hz (This will burn your PC!)",
            "Fix bug regarding number rounding",
            "Fix dialog text being hardly readable in dark theme",
            "Fix app not starting when the savegames were corrupted - there is now a better error message as well.",
            "Further translation updates - Big thanks to all contributors!",
        ],
    },
    {
        version: "1.1.10",
        date: "12.06.2020",
        entries: [
            "There are now linux builds on steam! Please report any issues in the Discord!",
            "Steam cloud saves are now available!",
            "Added and update more translations (Big thank you to all translators!)",
            "Prevent invalid connection if existing underground tunnel entrance exists (by jaysc)",
        ],
    },
    {
        version: "1.1.9",
        date: "11.06.2020",
        entries: [
            "Support for translations! Interested in helping out? Check out the <a target='_blank'  href='https://github.com/tobspr/shapez.io/tree/master/translations'>translation guide</a>!",
            "Update stacker artwork to clarify how it works",
            "Update keybinding hints on the top left to be more accurate",
            "Make it more clear when blueprints are unlocked when trying to use them",
            "Fix pinned shape icons not being visible in dark mode",
            "Fix being able to select buildings via hotkeys in map overview mode",
            "Make shapes unpinnable in the upgrades tab (By hexy)",
        ],
    },
    {
        version: "1.1.8",
        date: "07.06.2020",
        entries: [
            "You can now purchase the standalone on steam! <a href='https://steam.shapez.io' target='blank'>View steam page</a>",
            "Added ability to create markers in the demo, but only two.",
            "Contest #01 has ended! I'll now work through the entries, select the 5 I like most and present them to the community to vote for!",
        ],
    },
    {
        version: "1.1.7",
        date: "04.06.2020",
        entries: ["HOTFIX: Fix savegames not showing up on the standalone version"],
    },
    {
        version: "1.1.6",
        date: "04.06.2020",
        entries: [
            "The steam release will happen on the <strong>7th of June</strong> - Be sure to add it to your wishlist! <a href='https://steam.shapez.io' target='blank'>View on steam</a>",
            "Fixed level complete dialog being blurred when the shop was opened before",
            "Standalone: Increased icon visibility for windows builds",
            "Web version: Fixed firefox not loading the game when browsing in private mode",
        ],
    },

    {
        version: "1.1.5",
        date: "03.06.2020",
        entries: ["Added weekly contests!"],
    },
    {
        version: "1.1.4",
        date: "01.06.2020",
        entries: ["Add 'interactive' tutorial for the first level to improve onboarding experience"],
    },
    {
        version: "1.1.3",
        date: "01.06.2020",
        entries: [
            "Added setting to configure zoom / mouse wheel / touchpad sensitivity",
            "Fix belts being too slow when copied via blueprint (by Dimava)",
            "Allow binding mouse buttons to actions (by Dimava)",
            "Increase readability of certain HUD elements",
        ],
    },
    {
        version: "1.1.2",
        date: "30.05.2020",
        entries: [
            "The official trailer is now ready! Check it out <a href='https://www.youtube.com/watch?v=KyorY1uIqiQ' target='_blank'>here</a>!",
            "The <a href='https://steam.shapez.io' target='_blank'>steam page</a> is now live!",
            "Experimental linux builds are now available! Please give me feedback on them in the Discord",
            "Allow hovering pinned shapes to enlarge them",
            "Allow deselecting blueprints with right click and 'Q'",
            "Move default key for deleting from 'X' to 'DEL'",
            "Show confirmation when deleting more than 100 buildings",
            "Reintroduce 'SPACE' keybinding to center on map",
            "Improved keybinding hints",
            "Fixed some keybindings showing as 'undefined'",
        ],
    },
    {
        version: "1.1.1",
        date: "28.05.2020",
        entries: ["Fix crash when 'Show Hints' setting was turned off"],
    },
    {
        version: "1.1.0",
        date: "28.05.2020",
        entries: [
            "BLUEPRINTS! They are unlocked at level 12 and cost a special shape to build.",
            "MAP MARKERS! Press 'M' to create a waypoint and be able to jump to it",
            "Savegame levels are now shown in the main menu. For existing games, save them again to make the level show up.",
            "Allow holding SHIFT to rotate counter clockwise",
            "Added confirmation when deleting more than 500 buildings at a time",
            "Added background to toolbar to increase contrast",
            "Further decerase requirements of first levels",
            "Pinned shapes now are saved",
            "Allow placing extractors anywhere again, but they don't work at all if not placed on a resource",
            "Show dialog explaining some keybindings after completing level 4",
            "Fix keys being stuck when opening a dialog",
            "Swapped shape order for painting upgrades",
            "Allow changing all keybindings, including CTRL, ALT and SHIFT (by Dimava)",
            "Fix cycling through keybindings selecting locked buildings as well (by Dimava)",
            "There is now a github action, checking all pull requests with eslint. (by mrHedgehog)",
        ],
    },
    {
        version: "1.0.4",
        date: "26.05.2020",
        entries: [
            "Reduce cost of first painting upgrade, and change 'Shape Processing' to 'Cutting, Rotating & Stacking'",
            "Add dialog after completing level 2 to check out the upgrades tab.",
            "Allow changing the keybindings in the demo version",
        ],
    },
    {
        version: "1.0.3",
        date: "24.05.2020",
        entries: [
            "Reduced the amount of shapes required for the first 5 levels to make it easier to get into the game.",
        ],
    },
    {
        version: "1.0.2",
        date: "23.05.2020",
        entries: [
            "Introduced changelog",
            "Removed 'early access' label because the game isn't actually early access - its in a pretty good state already! (No worries, a lot more updates will follow!)",
            "Added a 'Show hint' button which shows a small video for almost all levels to help out",
            "Now showing proper descriptions when completing levels, with instructions on what the gained reward does.",
            "Show a landing page on mobile devices about the game not being ready to be played on mobile yet",
            "Fix painters and mixers being affected by the shape processors upgrade and not the painter one",
            "Added 'multiplace' setting which is equivalent to holding SHIFT all the time",
            "Added keybindings to zoom in / zoom out",
            "Tunnels now also show connection lines to tunnel exits, instead of just tunnel entries",
            "Lots of minor fixes and improvements",
        ],
    },
    {
        version: "1.0.1",
        date: "21.05.2020",
        entries: ["Initial release!"],
    },
];
