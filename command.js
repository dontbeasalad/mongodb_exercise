show dbs

use spotify

test> show dbs
admin     40.00 KiB
config   108.00 KiB
local     72.00 KiB
spotify   24.00 KiB
test> show spotify
MongoshInvalidInputError: [COMMON-10001] 'spotify' is not a valid argument for "show".
test> use spotify
switched to db spotify
spotify> show spotify
MongoshInvalidInputError: [COMMON-10001] 'spotify' is not a valid argument for "show".
spotify> songs = {"title" : "Karolina",
... "artist" : "Sore",
... "album" : "Ports of Lima", }
{ title: 'Karolina', artist: 'Sore', album: 'Ports of Lima' }
spotify> db.spotify.insertOne(songs)
{
  acknowledged: true,
  insertedId: ObjectId("64b652d1c752a4c845daef74")
}
spotify> db.songs.insertOne()
MongoshInvalidInputError: [COMMON-10001] Missing required argument at position 0 (Collection.insertOne)
spotify> db.songs.insertOne(songs)
{
  acknowledged: true,
  insertedId: ObjectId("64b6531ac752a4c845daef75")
}
spotify> db.songs.find()
[
  {
    _id: ObjectId("64b6531ac752a4c845daef75"),
    title: 'Karolina',
    artist: 'Sore',
    album: 'Ports of Lima'
  }
]
spotify> db.songs.updateOne({title : "Karolina"},
... {$set : {artist: ["sore"]}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
spotify> db.songs.find()
[
  {
    _id: ObjectId("64b6531ac752a4c845daef75"),
    title: 'Karolina',
    artist: [ 'sore' ],
    album: 'Ports of Lima'
  }
]
spotify> songs = { "title": "Evakuasi", "artist": ["Hindia"], "album" : "Menari dengan Bayangan",}
{
  title: 'Evakuasi',
  artist: [ 'Hindia' ],
  album: 'Menari dengan Bayangan'
}
spotify> db.songs.insertOne()
MongoshInvalidInputError: [COMMON-10001] Missing required argument at position 0 (Collection.insertOne)
spotify> db.songs.insertOne(songs)
{
  acknowledged: true,
  insertedId: ObjectId("64b654bec752a4c845daef76")
}
spotify> db.songs.find()
[
  {
    _id: ObjectId("64b6531ac752a4c845daef75"),
    title: 'Karolina',
    artist: [ 'sore' ],
    album: 'Ports of Lima'
  },
  {
    _id: ObjectId("64b654bec752a4c845daef76"),
    title: 'Evakuasi',
    artist: [ 'Hindia' ],
    album: 'Menari dengan Bayangan'
  }
]
spotify> db.songs.insertMany([
... {title: "Untuk Apa", artist: ["Hindia"], album: "Menari dengan Bayangan"},
... {title: "Jam Makan Siang", artist: ["Hindia"], album: "Menari dengan Bayangan"},
... {title: "Besok Mungkin Kita Sampai", artist: ["Hindia"], album: "Menari dengan Bayangan"},
... {title: "Dehidrasi", artist: ["Hindia"], album: "Menari dengan Bayangan"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64b6561bc752a4c845daef77"),
    '1': ObjectId("64b6561bc752a4c845daef78"),
    '2': ObjectId("64b6561bc752a4c845daef79"),
    '3': ObjectId("64b6561bc752a4c845daef7a")
  }
}
spotify> db.songs.find()
[
  {
    _id: ObjectId("64b6531ac752a4c845daef75"),
    title: 'Karolina',
    artist: [ 'sore' ],
    album: 'Ports of Lima'
  },
  {
    _id: ObjectId("64b654bec752a4c845daef76"),
    title: 'Evakuasi',
    artist: [ 'Hindia' ],
    album: 'Menari dengan Bayangan'
  },
  {
    _id: ObjectId("64b6561bc752a4c845daef77"),
    title: 'Untuk Apa',
    artist: [ 'Hindia' ],
    album: 'Menari dengan Bayangan'
  },
  {
    _id: ObjectId("64b6561bc752a4c845daef78"),
    title: 'Jam Makan Siang',
    artist: [ 'Hindia' ],
    album: 'Menari dengan Bayangan'
  },
  {
    _id: ObjectId("64b6561bc752a4c845daef79"),
    title: 'Besok Mungkin Kita Sampai',
    artist: [ 'Hindia' ],
    album: 'Menari dengan Bayangan'
  },
  {
    _id: ObjectId("64b6561bc752a4c845daef7a"),
    title: 'Dehidrasi',
    artist: [ 'Hindia' ],
    album: 'Menari dengan Bayangan'
  }
]
spotify> db.songs.insertMany([
... {title: "Mungkin Takut Perubahan", artist: "Lomba Sihir", album: "Selamat Datang di Ujung Dunia"},"
Uncaught:
SyntaxError: Unterminated string constant. (2:98)

  1 | db.songs.insertMany([
> 2 | {title: "Mungkin Takut Perubahan", artist: "Lomba Sihir", album: "Selamat Datang di Ujung Dunia"},"
    |                                                                                                   ^
  3 |

spotify> db.songs.insertMany([ {title: "Mungkin Takut Perubahan", artist: "Lomba Sihir", album: "Selamat Datang di Ujung Dunia"},
... {title: "Alexandra", artist: ["Reality Club"], album: "What do You Really Know?"},"
Uncaught:
SyntaxError: Unterminated string constant. (2:82)

  1 | db.songs.insertMany([ {title: "Mungkin Takut Perubahan", artist: "Lomba Sihir", album: "Selamat Datang di Ujung Dunia"},
> 2 | {title: "Alexandra", artist: ["Reality Club"], album: "What do You Really Know?"},"
    |                                                                                   ^
  3 |

spotify> db.songs.insertMany([ {title: "Mungkin Takut Perubahan", artist: "Lomba Sihir", album: "Selamat Datang di Ujung Dunia"}, {title: "Alexandra", artist: ["Reality Club"], album: "What do You Really Know?"},
... {title: "The Most Beautiful Thing", artist: ["Bruno Major"], album: "To Let A Good Thing Die"}"
Uncaught:
SyntaxError: Unterminated string constant. (2:94)

  1 | db.songs.insertMany([ {title: "Mungkin Takut Perubahan", artist: "Lomba Sihir", album: "Selamat Datang di Ujung Dunia"}, {title: "Alexandra", artist: ["Reality Club"], album: "What do You Really Know?"},
> 2 | {title: "The Most Beautiful Thing", artist: ["Bruno Major"], album: "To Let A Good Thing Die"}"
    |                                                                                               ^
  3 |

spotify> db.songs.insertMany([ {title: "Mungkin Takut Perubahan", artist: "Lomba Sihir", album: "Selamat Datang di Ujung Dunia"}, {title: "Alexandra", artist: ["Reality Club"], album: "What do You Really Know?"}, {title: "The Most Beautiful Thing", artist: ["Bruno Major"], album: "To Let A Good Thing Die"},
... {title: "Angin Kencang", artist: ["Noh saleh"], album: "Angin Kencang"}])"
Uncaught:
SyntaxError: Unterminated string constant. (2:73)

  1 | db.songs.insertMany([ {title: "Mungkin Takut Perubahan", artist: "Lomba Sihir", album: "Selamat Datang di Ujung Dunia"}, {title: "Alexandra", artist: ["Reality Club"], album: "What do You Really Know?"}, {title: "The Most Beautiful Thing", artist: ["Bruno Major"], album: "To Let A Good Thing Die"},
> 2 | {title: "Angin Kencang", artist: ["Noh saleh"], album: "Angin Kencang"}])"
    |                                                                          ^
  3 |

spotify> db.songs.insertMany([ {title: "Mungkin Takut Perubahan", artist: "Lomba Sihir", album: "Selamat Datang di Ujung Dunia"}, {title: "Alexandra", artist: ["Reality Club"], album: "What do You Really Know?"}, {title: "The Most Beautiful Thing", artist: ["Bruno Major"], album: "To Let A Good Thing Die"}, {title: "Angin Kencang", artist: ["Noh saleh"], album: "Angin Kencang"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64b6584fc752a4c845daef7b"),
    '1': ObjectId("64b6584fc752a4c845daef7c"),
    '2': ObjectId("64b6584fc752a4c845daef7d"),
    '3': ObjectId("64b6584fc752a4c845daef7e")
  }
}
spotify> db.songs.find()
[
  {
    _id: ObjectId("64b6531ac752a4c845daef75"),
    title: 'Karolina',
    artist: [ 'sore' ],
    album: 'Ports of Lima'
  },
  {
    _id: ObjectId("64b654bec752a4c845daef76"),
    title: 'Evakuasi',
    artist: [ 'Hindia' ],
    album: 'Menari dengan Bayangan'
  },
  {
    _id: ObjectId("64b6561bc752a4c845daef77"),
    title: 'Untuk Apa',
    artist: [ 'Hindia' ],
    album: 'Menari dengan Bayangan'
  },
  {
    _id: ObjectId("64b6561bc752a4c845daef78"),
    title: 'Jam Makan Siang',
    artist: [ 'Hindia' ],
    album: 'Menari dengan Bayangan'
  },
  {
    _id: ObjectId("64b6561bc752a4c845daef79"),
    title: 'Besok Mungkin Kita Sampai',
    artist: [ 'Hindia' ],
    album: 'Menari dengan Bayangan'
  },
  {
    _id: ObjectId("64b6561bc752a4c845daef7a"),
    title: 'Dehidrasi',
    artist: [ 'Hindia' ],
    album: 'Menari dengan Bayangan'
  },
  {
    _id: ObjectId("64b6584fc752a4c845daef7b"),
    title: 'Mungkin Takut Perubahan',
    artist: 'Lomba Sihir',
    album: 'Selamat Datang di Ujung Dunia'
  },
  {
    _id: ObjectId("64b6584fc752a4c845daef7c"),
    title: 'Alexandra',
    artist: [ 'Reality Club' ],
    album: 'What do You Really Know?'
  },
  {
    _id: ObjectId("64b6584fc752a4c845daef7d"),
    title: 'The Most Beautiful Thing',
    artist: [ 'Bruno Major' ],
    album: 'To Let A Good Thing Die'
  },
  {
    _id: ObjectId("64b6584fc752a4c845daef7e"),
    title: 'Angin Kencang',
    artist: [ 'Noh saleh' ],
    album: 'Angin Kencang'
  }
]
spotify> db.artist.insertMany([
... {name: Sore, birth: "1998-02-01", genre: "alternative"},
... {name: Hindia, birth: "2018-02-01", genre: "Rock"},
... {name: Bruno Major, birth: "1992-02-01", genre: "RnB"},
Uncaught:
SyntaxError: Unexpected token, expected "," (4:13)

  2 | {name: Sore, birth: "1998-02-01", genre: "alternative"},
  3 | {name: Hindia, birth: "2018-02-01", genre: "Rock"},
> 4 | {name: Bruno Major, birth: "1992-02-01", genre: "RnB"},
    |              ^
  5 |

spotify> db.artist.insertMany([ {name: Sore, birth: "1998-02-01", genre: "alternative"}, {name: Hindia, birth: "2018-02-01", genre: "Rock"}, {name: Bruno Major, birth: "1992-02-01", genre: "RnB"},
Uncaught:
SyntaxError: Unexpected token, expected "," (1:145)

> 1 | db.artist.insertMany([ {name: Sore, birth: "1998-02-01", genre: "alternative"}, {name: Hindia, birth: "2018-02-01", genre: "Rock"}, {name: Bruno Major, birth: "1992-02-01", genre: "RnB"},
    |                                                                                                                                                  ^
  2 |

spotify> db.artist.insertMany([ {name: Sore, birth: "1998-02-01", genre: "alternative"}, {name: Hindia, birth: "2018-02-01", genre: "Rock"}, {name: Bruno Major, birth: "1992-02-01", genre: "RnB"}
Uncaught:
SyntaxError: Unexpected token, expected "," (1:145)

> 1 | db.artist.insertMany([ {name: Sore, birth: "1998-02-01", genre: "alternative"}, {name: Hindia, birth: "2018-02-01", genre: "Rock"}, {name: Bruno Major, birth: "1992-02-01", genre: "RnB"}
    |                                                                                                                                                  ^
  2 |
spotify> db.artist.insertMany([ {name: Sore, birth: "1998-02-01", genre: "alternative"}, {name: Hindia, birth: "2018-02-01", genre: "Rock"}, {name: Bruno Major, birth: "1992-02-01", genre: "RnB"}
Uncaught:
SyntaxError: Unexpected token, expected "," (1:145)

> 1 | db.artist.insertMany([ {name: Sore, birth: "1998-02-01", genre: "alternative"}, {name: Hindia, birth: "2018-02-01", genre: "Rock"}, {name: Bruno Major, birth: "1992-02-01", genre: "RnB"}
    |                                                                                                                                                  ^
  2 |

spotify> db.artist.insertMany([ {name: "Sore", birth: "1998-02-01", genre: "alternative"}, {name: "Hindia", birth: "2018-02-01", genre: "Rock"}, {name: "Bruno Major", birth: "1992-02-01", genre: "RnB"},
... {name: "Reality Club", birth: "2017-09-03", genre:"pop"},
... {name: "Lomba Sihir", birth: "2012-09-03", genre:"pop"},
... {name: "Noh Saleh", birth: "2022-09-03", genre:"pop"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64b65aaac752a4c845daef7f"),
    '1': ObjectId("64b65aaac752a4c845daef80"),
    '2': ObjectId("64b65aaac752a4c845daef81"),
    '3': ObjectId("64b65aaac752a4c845daef82"),
    '4': ObjectId("64b65aaac752a4c845daef83"),
    '5': ObjectId("64b65aaac752a4c845daef84")
  }
}
spotify> db.artist.find()
[
  {
    _id: ObjectId("64b65aaac752a4c845daef7f"),
    name: 'Sore',
    birth: '1998-02-01',
    genre: 'alternative'
  },
  {
    _id: ObjectId("64b65aaac752a4c845daef80"),
    name: 'Hindia',
    birth: '2018-02-01',
    genre: 'Rock'
  },
  {
    _id: ObjectId("64b65aaac752a4c845daef81"),
    name: 'Bruno Major',
    birth: '1992-02-01',
    genre: 'RnB'
  },
  {
    _id: ObjectId("64b65aaac752a4c845daef82"),
    name: 'Reality Club',
    birth: '2017-09-03',
    genre: 'pop'
  },
  {
    _id: ObjectId("64b65aaac752a4c845daef83"),
    name: 'Lomba Sihir',
    birth: '2012-09-03',
    genre: 'pop'
  },
  {
    _id: ObjectId("64b65aaac752a4c845daef84"),
    name: 'Noh Saleh',
    birth: '2022-09-03',
    genre: 'pop'
  }
]
spotify> db.popular_songs.insertMany([
... {title: "Angin Kencang", played: 200000, periodOfTime: 2023},
... {title: "Untuk Apa", played: 100000, periodOfTime: 2021},
... {title: "Alexandra", played: 10000, periodOfTime: 2019},
... {title: "The Most Beautiful Thing", played: 1000200, periodOfTime: 2019},
... {title: "Karolina", played: 1330200, periodOfTime: 2020},
... {title: "Mungkin Takut Perubahan", played: 4000000, periodOfTime: 2020},
... {title: "Dehidrasi", played: 3000000, periodOfTime: 2023},
... {title: "Besok Mungkin Kita Sampai", played: 1000000, periodOfTime: 2022},
... {title: "Evakuasi", played: 1220000, periodOfTime: 2022},
... {title: "Jam Makan Siang", played: 1110000, periodOfTime: 2022},
... ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64b65cd0c752a4c845daef85"),
    '1': ObjectId("64b65cd0c752a4c845daef86"),
    '2': ObjectId("64b65cd0c752a4c845daef87"),
    '3': ObjectId("64b65cd0c752a4c845daef88"),
    '4': ObjectId("64b65cd0c752a4c845daef89"),
    '5': ObjectId("64b65cd0c752a4c845daef8a"),
    '6': ObjectId("64b65cd0c752a4c845daef8b"),
    '7': ObjectId("64b65cd0c752a4c845daef8c"),
    '8': ObjectId("64b65cd0c752a4c845daef8d"),
    '9': ObjectId("64b65cd0c752a4c845daef8e")
  }
}
spotify> db.popular_songs.find()
[
  {
    _id: ObjectId("64b65cd0c752a4c845daef85"),
    title: 'Angin Kencang',
    played: 200000,
    periodOfTime: 2023
  },
  {
    _id: ObjectId("64b65cd0c752a4c845daef86"),
    title: 'Untuk Apa',
    played: 100000,
    periodOfTime: 2021
  },
  {
    _id: ObjectId("64b65cd0c752a4c845daef87"),
    title: 'Alexandra',
    played: 10000,
    periodOfTime: 2019
  },
  {
    _id: ObjectId("64b65cd0c752a4c845daef88"),
    title: 'The Most Beautiful Thing',
    played: 1000200,
    periodOfTime: 2019
  },
  {
    _id: ObjectId("64b65cd0c752a4c845daef89"),
    title: 'Karolina',
    played: 1330200,
    periodOfTime: 2020
  },
  {
    _id: ObjectId("64b65cd0c752a4c845daef8a"),
    title: 'Mungkin Takut Perubahan',
    played: 4000000,
    periodOfTime: 2020
  },
  {
    _id: ObjectId("64b65cd0c752a4c845daef8b"),
    title: 'Dehidrasi',
    played: 3000000,
    periodOfTime: 2023
  },
  {
    _id: ObjectId("64b65cd0c752a4c845daef8c"),
    title: 'Besok Mungkin Kita Sampai',
    played: 1000000,
    periodOfTime: 2022
  },
  {
    _id: ObjectId("64b65cd0c752a4c845daef8d"),
    title: 'Evakuasi',
    played: 1220000,
    periodOfTime: 2022
  },
  {
    _id: ObjectId("64b65cd0c752a4c845daef8e"),
    title: 'Jam Makan Siang',
    played: 1110000,
    periodOfTime: 2022
  }
]
spotify> git checkout
Uncaught:
SyntaxError: Missing semicolon. (1:3)

> 1 | git checkout
    |    ^
  2 |

spotify> db.artist.insertMany([
... {name: "Bruno Mars", birth: "1997-02-06", genre: "Pop"},
... {name: "Eminem", birth: "1980-01-03", genre: "Rap"},
... {name: "Lady Gaga", birth: "1976-01-03", genre: "Pop"},
... {name: "Arina Grande", birth: "1997-02-04", genre: "Pop"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64b67c3cc752a4c845daef8f"),
    '1': ObjectId("64b67c3cc752a4c845daef90"),
    '2': ObjectId("64b67c3cc752a4c845daef91"),
    '3': ObjectId("64b67c3cc752a4c845daef92")
  }
}
spotify> show collections
artist
popular_songs
songs
spotify> use dbs