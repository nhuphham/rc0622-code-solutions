select "genres"."name",
       count("genres"."genreId") as "genreCount"
  from "genres"
  join "filmGenre" as "fg" using ("genreId")
  join "films" as "f" using ("filmId")
  join "castMembers" using ("filmId")
  join "actors" as "a" using ("actorId")
  where "a"."firstName" = 'Lisa'
  and "a"."lastName" = 'Monroe'
  group by "genres"."name";
