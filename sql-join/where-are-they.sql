select "a"."line1",
       "city"."name",
       "a"."district",
       "con"."name" as "country"
  from "addresses" as "a"
  join "cities" as "city" using ("cityId")
  join "countries" as "con" using ("countryId")
