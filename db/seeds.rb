# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
HealthEvent.destroy_all
WorkEvent.destroy_all
HobbyEvent.destroy_all

HealthEvent.create!([
	{
		name: "sleep",
		image: "health-sleep.svg",
		about: "sleeping"
	},
	{
		name: "eat",
		image: "health-eat.svg",
		about: "eating food"
	},
	{
		name: "exercise",
		image: "health-exercise.svg",
		about: "exercising"
	},
	{
		name: "shower",
		image: "health-shower.svg",
		about: "taking a shower"
	}
])

WorkEvent.create!([
	{
		name: "commute",
		image: "work-commute.svg",
		about: "travelling to work"
	},
	{
		name: "job",
		image: "work-job.svg",
		about: "working to produce"
	},
	{
		name: "school",
		image: "work-school.svg",
		about: "becoming educated"
	},
	{
		name: "study",
		image: "work-study.svg",
		about: "learning and practicing knowledge"
	},
	{
		name: "shopping",
		image: "work-shopping.svg",
		about: "acquiring goods or service"
	},
	{
		name: "chores",
		image: "work-chores.svg",
		about: "cleaning home and running errands"
	}
])

HobbyEvent.create!([
	{
		name: "games",
		image: "hobby-games.svg",
		about: "playing video games"
	},
	{
		name: "internet",
		image: "hobby-internet.svg",
		about: "browsing internet"
	},
	{
		name: "movie",
		image: "hobby-movie.svg",
		about: "watching a movie"
	},
	{
		name: "music",
		image: "hobby-music.svg",
		about: "listening to music"
	},
	{
		name: "sports",
		image: "hobby-sports.svg",
		about: "playing sports"
	},
	{
		name: "reading",
		image: "hobby-reading.svg",
		about: "reading a book"
	},
	{
		name: "meet up",
		image: "hobby-meetup.svg",
		about: "meet up with fellow human beings"
	}
])

p "Created #{HobbyEvent.count + WorkEvent.count + HealthEvent.count} default events"