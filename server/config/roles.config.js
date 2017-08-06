/*
 * This config file contains the default roles for the app
 * This is a sample of roles that you can use, feel free to create your own.
 *
 * Default roles:
 * 	administrator:
 * 		-owner of the league
 * 		-has access to all privileges
 *	manager:
 *		-manager of the league
 *		-has access to all the teams, players, and season privileges
 *		-no access to settings tab
 *	coach:
 *		-coach of team(s)
 *		-has access to the teams tab
 *		-no access to the players, season, or settings tab
 *		-can view a subset of team(s) that he is assigned to and their roster(s)
 *		-can view player information through the roster
 *
 */

// Privileges that each role can be assigned
//
// Teams
// 	viewTeams: user can view the team tab 
// 	viewAllTeams: user can view all teams in the league
// 	viewSubsetTeams: user can view only a subset of teams
// 			 the list of teams is defined in the staff object in
// 			 the league collection
// 			 this would only be used for users that need to have limited
// 			 access to teams such as coaches or assistant coaches
// 	createTeams: user can create a team
// 	editTeams: user can edit a team
// 	deleteTeams: user can delete teams
//
// Players
// 	viewPlayers: user can view the player tab and a list of players
// 	viewPlayerRegistrations: user can view player applicants to the league
// 				 also allows the user to accept and deny applicants
//	createPlayers: user can create players
//	editPlayers: user can edit players
//	assignPlayers: user can assign players to teams
//
// Seasons
//	viewSeasons: user can view the seasons tab and a list of the seasons
//	editSeasons: user can edit a season
//	deleteSeasons: user can delete seasons
//
// Settings
//	viewSettings: user can view the settings and a list of staff members
//	editStaff: user can edit a staff member
//	deleteStaff: user can delete staff members
//	deleteLeague: user can delete the league

// This role is the one that is given to the creator of a league
const ownerRole = 'Administrator';

const roleDetails = {
	Administrator: {
		access: ['teams', 'players', 'seasons', 'staff'],
		permissions: {
			viewTeams: true,
			viewAllTeams: true,
			viewSubsetTeams: false,
			createTeams: true,
			editTeams: true,
			deleteTeams: true,
			viewPlayers: true,
			viewPlayerRegistrations: true,
			createPlayers: true,
			editPlayers: true,
			assignPlayers: true,
			viewSeasons: true,
			editSeasons: true,
			deleteSeasons: true,
			viewSettings: true,
			createStaff: true,
			editStaff: true,
			deleteStaff: true,
			deleteLeague: true
		}
	},
	'General Manager': {
		access: ['teams', 'players', 'seasons'],
		permissions: {
			viewTeams: true,
			viewAllTeams: true,
			viewSubsetTeams: false,
			createTeams: true,
			editTeams: true,
			deleteTeams: true,
			viewPlayers: true,
			viewPlayerRegistrations: true,
			createPlayers: true,
			editPlayers: true,
			assignPlayers: true,
			viewSeasons: true,
			editSeasons: true,
			deleteSeasons: true,
			viewSettings: false,
			createStaff: false,
			editStaff: false,
			deleteStaff: false,
			deleteLeague: false
		}
	},
	Coach: {
		access: ['teams'],
		permissions: {
			viewTeams: false,
			viewAllTeams: false,
			viewSubsetTeams: true,
			createTeams: false,
			editTeams: false,
			deleteTeams: false,
			viewPlayers: false,
			viewPlayerRegistrations: false,
			createPlayers: false,
			editPlayers: false,
			assignPlayers: false,
			viewSeasons: false,
			editSeasons: false,
			deleteSeasons: false,
			viewSettings: false,
			createStaff: false,
			editStaff: false,
			deleteStaff: false,
			deleteLeague: false
		}
	}
};


// Get the role for the league creator
exports.getOwnerRole = function() {
	return ownerRole;
};

// Get all role titles for the app
exports.getRoleTitles = function() {
	return Object.keys(roleDetails);
};

// Get role permissions for a single role
// @role(String) - role to get permissions for
exports.getRolePermissions = function(role) {
	return roleDetails[role].permissions;
};

// Get role access for a single role
// @role(string) - role to get access for
exports.getRoleAccess = function(role) {
	return roleDetails[role].access;
}
