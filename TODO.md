<!-- Local Storage -->

Possible Uses:
isMember - Store if the user has a memberShip ( use to toggle available sounds and any premium related feature)
MembershipType - Store the type of membership
MembershipDate - Date Membership was active / usef for Membership renewall logic if MembershipType = "Supporter"
ActivePlaylist - If we want to have the users selected playlist as the sounds to show in the home screen.

Define other use Cases:

<!-- Redux StateManagement -->

Possible Uses:
playAll -> Use playAll slice to control global play button of all audios with a volume > 0
viewMembership -> Use viewMembership slice to control if "Beliver" or "Supporter" related text are shared through out the app

Define other use Cases for global stateManagement:

<!-- Upcoming Items * HIGH PRIO * -->

- Configure the .babelrc file to use alias ( simplify imports and reduce complexity of project structure future refactors )
- Create Initial Config file to Clean up App.tsx and reduce future complexity of initial configuration
- Configure LocalStorage to unlock audio on app open if isMember = true ( sonda logo will be used as trigger for testing purposes.)
- Connect playAll functionality
- Configure Fonts
- Configure SplashScreen to await for initial configuration setup

<!-- Fast Followers * Mid Prio *  -->

Navigation / Modal Implementation
Integrate Pipeline for ExpoGo Previews on Branch Push

<!-- Others -->

Start development of Other Screens.
Breakdown into task as needed.

<!-- Improve Performance of APP Items * Low Priority * -->

Use the Audio Unload feature on pause, load Audio on play or volume of if audio is not set. If audio is unloaded prevent Play all or play of audio to trigger without load audio condition.
