select "f"."title" as "title",
       "f"."releaseYear" as "release year",
       "genres"."name" as "genre"
  from "films" as "f"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "title" = 'Boogie Amelie';
