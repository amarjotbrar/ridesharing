const data = {
	countries: {
		USA: {
			Jan: {
				rides: 23456,
				average_fare: 15.78,
				average_distance: 8.2,
				average_rating: 4.63,
				active_drivers: 10243,
				new_users: 5234,
			},
			Feb: {
				rides: 9875,
				average_fare: 14.92,
				average_distance: 7.5,
				average_rating: 4.58,
				active_drivers: 9521,
				new_users: 4872,
			},
			Mar: {
				rides: 135789,
				average_fare: 16.24,
				average_distance: 8.7,
				average_rating: 4.67,
				active_drivers: 11347,
				new_users: 6123,
			},
			Apr: {
				rides: 11432,
				average_fare: 15.59,
				average_distance: 7.9,
				average_rating: 4.55,
				active_drivers: 10723,
				new_users: 5589,
			},
			May: {
				rides: 15631,
				average_fare: 17.12,
				average_distance: 9.2,
				average_rating: 4.72,
				active_drivers: 12456,
				new_users: 7234,
			},
			Jun: {
				rides: 148723,
				average_fare: 16.85,
				average_distance: 9.0,
				average_rating: 4.69,
				active_drivers: 12098,
				new_users: 6872,
			},
			Jul: {
				rides: 172345,
				average_fare: 18.29,
				average_distance: 10.1,
				average_rating: 4.78,
				active_drivers: 13567,
				new_users: 8123,
			},
			Aug: {
				rides: 165432,
				average_fare: 17.95,
				average_distance: 9.8,
				average_rating: 4.75,
				active_drivers: 13109,
				new_users: 7654,
			},
			Sep: {
				rides: 120987,
				average_fare: 15.34,
				average_distance: 8.5,
				average_rating: 4.62,
				active_drivers: 10876,
				new_users: 5987,
			},
			Oct: {
				rides: 105678,
				average_fare: 14.87,
				average_distance: 7.8,
				average_rating: 4.59,
				active_drivers: 9723,
				new_users: 5210,
			},
			Nov: {
				rides: 118345,
				average_fare: 15.92,
				average_distance: 8.3,
				average_rating: 4.64,
				active_drivers: 10567,
				new_users: 6032,
			},
			Dec: {
				rides: 98765,
				average_fare: 14.92,
				average_distance: 7.5,
				average_rating: 4.58,
				active_drivers: 9521,
				new_users: 4872,
			},
		},
	},
};

const weeklyData = {
	"countries": {
	  "USA": {
		"Sunday": {
		  "rides": 43210,
		  "average_fare": 16.23,
		  "average_distance": 8.9,
		  "average_rating": 4.71,
		  "active_drivers": 3456,
		  "new_users": 1234
		},
		"Monday": {
		  "rides": 38765,
		  "average_fare": 15.98,
		  "average_distance": 8.5,
		  "average_rating": 4.68,
		  "active_drivers": 3210,
		  "new_users": 1098
		},
		"Tuesday": {
		  "rides": 45678,
		  "average_fare": 16.54,
		  "average_distance": 9.2,
		  "average_rating": 4.74,
		  "active_drivers": 3678,
		  "new_users": 1356
		},
		"Wednesday": {
		  "rides": 40987,
		  "average_fare": 16.32,
		  "average_distance": 8.8,
		  "average_rating": 4.70,
		  "active_drivers": 3421,
		  "new_users": 1209
		},
		"Thursday": {
		  "rides": 52345,
		  "average_fare": 17.12,
		  "average_distance": 9.7,
		  "average_rating": 4.78,
		  "active_drivers": 3876,
		  "new_users": 1567
		},
		"Friday": {
		  "rides": 48765,
		  "average_fare": 16.85,
		  "average_distance": 9.4,
		  "average_rating": 4.75,
		  "active_drivers": 3654,
		  "new_users": 1423
		},
		"Saturday": {
		  "rides": 34567,
		  "average_fare": 15.78,
		  "average_distance": 8.2,
		  "average_rating": 4.63,
		  "active_drivers": 2987,
		  "new_users": 1056
		}
	  },
	}
}; 


const hourlyData = {
	"countries": {
		"USA": {
		  "00:00": {
			"rides": 1234,
			"average_fare": 15.72,
			"average_distance": 8.0,
			"average_rating": 4.68,
			"active_drivers": 247,
			"new_users": 38
		  },
		  "01:00": {
			"rides": 987,
			"average_fare": 14.85,
			"average_distance": 7.3,
			"average_rating": 4.65,
			"active_drivers": 223,
			"new_users": 32
		  },
		  "23:00": {
			"rides": 1852,
			"average_fare": 16.39,
			"average_distance": 8.7,
			"average_rating": 4.73,
			"active_drivers": 314,
			"new_users": 53
		  }
		},
	},	
}

export function getMonths(){
	var d = data["countries"]["USA"];
	var months = [];
	for(var val in d){
		months.push(val.toString());
	}
	return months;
}

export function getMonthlyRides(months){
	var d = data["countries"]["USA"];
	var rides = [];
	for(var el in d){
		rides.push(d[el].rides);
	}
	return [getMonths(), rides.slice(0, months)];
}


export function getMonthlyUsers(months){
	var d = data["countries"]["USA"];
	var users = [];
	for(var el in d){
		users.push(d[el].new_users);
	}
	return [getMonths(), users.slice(0, months)];
}

export function getWeeklyRides(){
	var d = weeklyData["countries"]["USA"];
	var rides = [];
	for(var el in d){
		rides.push(d[el].rides);
	}
	return rides;
}


export function getWeeklyUsers(){
	var d = weeklyData["countries"]["USA"];
	var users = [];
	for(var el in d){
		users.push(d[el].new_users);
	}
	return users;
}


export function getHourlyRides(){
	var d = hourlyData["countries"]["USA"];
	var rides = [];
	for(var el in d){
		rides.push(d[el].rides);
	}
	return rides;
}


export function getHourlyUsers(){
	var d = hourlyData["countries"]["USA"];
	var users = [];
	for(var el in d){
		users.push(d[el].new_users);
	}
	return users;
}

export default data;
