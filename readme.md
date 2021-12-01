<h1> Martian Robots </h1>

This project has been created to send orders to a series of robots with a specific surface on Mars.

Some robots will be lucky enough to stay alive and others will be lost, but their efforts will not be in vain, as they will leave a scent for the next sibling robots to avoid getting lost.

<h2>API</h2>

The project has been treated as if it were an api.

The port that has been treated has been 8800, if that port was busy by default it uses 8801.

Deployed at - https://martiansrobots.herokuapp.com/

<h2>ENDPOINTS</h2>

4 ENDPOINTS have been created, 1 for the POST and 3 for the GET.

<h3>POST /robot </h3>

The body of the message shall be as follows:

<pre>
{
	"world": {
		"x": 50,
		"y": 50
	},
	"robots": [{
		"start": {
			"x": 0,
			"y": 3,
			"orientation": "E"
		},
		"sequence": ["F", "F", "F", "F"]
	},
	{
		"start": {
			"x":0,
			"y":0,
			"orientation": "W"
		},
		"sequence": ["R", "F", "F", "F"]
	}]
}
</pre>

The following answer will be found:

<pre>
[
  {
    "x": 4,
    "y": 3,
    "orientation": "E",
    "lost": false
  },
  {
    "x": 0,
    "y": 3,
    "orientation": "N",
    "lost": false
  }
]
</pre>

There is an error response for the following cases :

- Check if robot is one array
- Check if robots are being sent
- Check if world is between size limits
- Check if instruction is less than 100 characters
- Check if robot start is out of world size
- Check if some sequence is invalid

<h3> GET /robot/get </h3>

All the robots that have been launched will be returned to us.

<h3> GET /robot/get/:id </h3>

The robot will be returned to us with the requested id.

<h3> GET /robot/lost </h3>

All robots that have been lost will be returned to us.

<h3> GET /robot/alive </h3>

All robots that have been launched and not lost will be returned to us.

<h2>Test</h2>

To run the tests we have several options (see package.json scripts) but the normal one is npm run test.