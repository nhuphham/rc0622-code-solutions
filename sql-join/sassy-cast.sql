select "c"."actorId",
       "actors"."firstName",
       "actors"."lastName",
       "films"."title" as "title"
  from "castMembers" as "c"
  join "films" using ("filmId")
  join "actors" using ("actorId")
  where "title" = 'Jersey Sassy';
