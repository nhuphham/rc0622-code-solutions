select "con"."name",
       count("cities"."countryId") as "Cities"
  from "cities"
  join "countries" as "con" using ("countryId")
group by "con"."name";
