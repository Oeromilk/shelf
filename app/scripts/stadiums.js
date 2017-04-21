var stadiums = [
  {
  "name": "Angel Stadium of Anaheim",
  "team": "Los Angeles Angels",
  "yearOpened": 1966,
  "centerField": 396,
  "capacity": 45477,
  "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/angels.gif",
  "location": "2000 E Gene Autry Way, Anaheim, CA 92806"
  },
  {
    "name": "AT&T Park",
    "team": "San Francisco Giants",
    "yearOpened": 2000,
    "centerField": 399,
    "capacity": 41915,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/giants_seat.gif",
    "location": "24 Willie Mays Plaza, San Francisco, CA 94107"
  },
  {
    "name": "Busch Stadium",
    "team": "St. Louis Cardinals",
    "yearOpened": 2006,
    "centerField": 400,
    "capacity": 45529,
    "seatingChartImage": "http://www.ballparksofbaseball.com/amenities/images/cardinals_seat.gif",
    "location": "700 Clark Ave, St. Louis, MO 63102"
  },
  {
    "name": "Chase Field",
    "team": "Arizona Diamondbacks",
    "yearOpened": 1998,
    "centerField": 407,
    "capacity": 48686,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/dbacks.gif",
    "location": "401 E Jefferson St, Phoenix, AZ 85004"
  },
  {
    "name": "Citi Field",
    "team": "New York Mets",
    "yearOpened": 2009,
    "centerField": 408,
    "capacity": 41922,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/mets_seat.gif",
    "location": "123-01 Roosevelt Ave, Queens, NY 11368"
  },
  {
    "name": "Citizens Bank Park",
    "team": "Philadelphia Phillies",
    "yearOpened": 2004,
    "centerField": 401,
    "capacity": 43651,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/phillies_seat.gif",
    "location": "1 Citizens Bank Way, Philadelphia, PA 19148"
  },
  {
    "name": "Comerica Park",
    "team": "Detroit Tigers",
    "yearOpened": 2000,
    "centerField": 420,
    "capacity": 41299,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/tigers.gif",
    "location": "2100 Woodward Ave, Detroit, MI 48201"
  },
  {
    "name": "Coors Field",
    "team": "Colorado Rockies",
    "yearOpened": 1995,
    "centerField": 415,
    "capacity": 50398,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/rockies.jpg",
    "location": "2001 Blake St, Denver, CO 80205"
  },
  {
    "name": "Dodger Stadium",
    "team": "Los Angeles Dodgers",
    "yearOpened": 1962,
    "centerField": 400,
    "capacity": 56000,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/dodgers_seat.gif",
    "location": "1000 Vin Scully Ave, Los Angeles, CA 90012"
  },
  {
    "name": "Fenway Park",
    "team": "Boston Red Sox",
    "yearOpened": 1912,
    "centerField": 420,
    "capacity": 37731,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/redsox.gif",
    "location": "4 Yawkey Way, Boston, MA 02215"
  },
  {
    "name": "Globe Life Park",
    "team": "Texas Rangers",
    "yearOpened": 1994,
    "centerField": 400,
    "capacity": 48114,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/rangers.gif",
    "location": "1000 Ballpark Way, Arlington, TX 76011"
  },
  {
    "name": "Great American Ball Park",
    "team": "Cincinnati Reds",
    "yearOpened": 2003,
    "centerField": 404,
    "capacity": 42319,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/reds_seat.gif",
    "location": "100 Joe Nuxhall Way, Cincinnati, OH 45202"
  },
  {
    "name": "Guaranteed Rate Field",
    "team": "Chicago White Sox",
    "yearOpened": 1991,
    "centerField": 400,
    "capacity": 40615,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/whitesox.gif",
    "location": "333 W 35th St, Chicago, IL 60616"
  },
  {
    "name": "Kauffman Stadium",
    "team": "Kansas City Royals",
    "yearOpened": 1973,
    "centerField": 410,
    "capacity": 37903,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/kauffman_seat.gif",
    "location": "1 Royal Way, Kansas City, MO 64129"
  },
  {
    "name": "Marlins Park",
    "team": "Miami Marlins",
    "yearOpened": 2012,
    "centerField": 407,
    "capacity": 36742,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/marlins_seat.gif",
    "location": "501 Marlins Way, Miami, FL 33125"
  },
  {
    "name": "Miller Park",
    "team": "Milwaukee Brewers",
    "yearOpened": 2001,
    "centerField": 400,
    "capacity": 41900,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/brewers_seat.gif",
    "location": "1 Brewers Way, Milwaukee, WI 53214"
  },
  {
    "name": "Minute Maid Park",
    "team": "Houston Astros",
    "yearOpened": 2000,
    "centerField": 409,
    "capacity": 41168,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/astros.gif",
    "location": "501 Crawford St, Houston, TX 77002"
  },
  {
    "name": "Nationals Park",
    "team": "Washington Nationals",
    "yearOpened": 2008,
    "centerField": 402,
    "capacity": 41339,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/nats_seat.gif",
    "location": "1500 S Capitol St SE, Washington, DC 20003"
  },
  {
    "name": "Oakland Coliseum",
    "team": "Oakland Athletics",
    "yearOpened": 1966,
    "centerField": 400,
    "capacity": 47170,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/athletics.gif",
    "location": "7000 Coliseum Way, Oakland, CA 94621"
  },
  {
    "name": "Oriole Park at Camden Yards",
    "team": "Baltimore Orioles",
    "yearOpened": 1992,
    "centerField": 410,
    "capacity": 45971,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/orioles.gif",
    "location": "333 W Camden St, Baltimore, MD 21201"
  },
  {
    "name": "Petco Park",
    "team": "San Diego Padres",
    "yearOpened": 2004,
    "centerField": 396,
    "capacity": 40209,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/padres_seat.gif",
    "location": "100 Park Blvd, San Diego, CA 92101"
  },
  {
    "name": "PNC Park",
    "team": "Pittsburgh Pirates",
    "yearOpened": 2001,
    "centerField": 399,
    "capacity": 38362,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/pirates_seat.gif",
    "location": "115 Federal St, Pittsburgh, PA 15212"
  },
  {
    "name": "Progressive Field",
    "team": "Cleveland Indians",
    "yearOpened": 1994,
    "centerField": 410,
    "capacity": 35051,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/indians.gif",
    "location": "2401 Ontario St, Cleveland, OH 44115"
  },
  {
    "name": "Safeco Field",
    "team": "Seattle Mariners",
    "yearOpened": 1989,
    "centerField": 400,
    "capacity": 47943,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/safeco.gif",
    "location": "1250 1st Avenue South, Seattle, WA 98134"
  },
  {
    "name": "SunTrust Park",
    "team": "Atlanta Braves",
    "yearOpened": 2017,
    "centerField": 400,
    "capacity": 41149,
    "seatingChartImage": "http://s1.ticketm.net/tm/en-us/tmimages/venue/maps/atl/74403s.gif",
    "location": "755 Battery Avenue Atlanta, GA 30339"
  },
  {
    "name": "Target Field",
    "team": "Minnesota Twins",
    "yearOpened": 2010,
    "centerField": 404,
    "capacity": 38885,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/twins.gif",
    "location": "1 Twins Way, Minneapolis, MN 55403"
  },
  {
    "name": "Tropicana Field",
    "team": "Tampa Bay Rays",
    "yearOpened": 1990,
    "centerField": 404,
    "capacity": 31042,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/rays_seat.jpg",
    "location": "1 Tropicana Dr, St. Petersburg, FL 33705"
  },
  {
    "name": "Wrigley Field",
    "team": "Chicago Cubs",
    "yearOpened": 1914,
    "centerField": 400,
    "capacity": 41268,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/cubs_seat.gif",
    "location": "1060 W Addison St, Chicago, IL 60613"
  },
  {
    "name": "Yankee Stadium",
    "team": "New York Yankees",
    "yearOpened": 2009,
    "centerField": 408,
    "capacity": 47422,
    "seatingChartImage": "http://ballparksofbaseball.com/amenities/images/yankees.gif",
    "location": "1 E 161st St, Bronx, NY 10451"
  }
]

module.exports = {
  stadiums: stadiums
};
