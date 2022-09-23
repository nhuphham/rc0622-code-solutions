With "filmCost" as (
  select "i"."filmId" as "filmId",
       sum("f"."replacementCost") as "cost"
  from "inventory" as "i"
  join "films" as "f" using ("filmId")
  group by "i"."filmId"
  order by "i"."filmId"
),
"filmRevenue" as (
  select "f"."filmId" as "filmId",
         "f"."title" as "title",
         "f"."description" as "description",
         "f"."rating" as "rating",
         sum("p"."amount") as "totalRevenue"
  from "payments" as "p"
  join "rentals" using ("rentalId")
  join "inventory" as "i" using ("inventoryId")
  join "films" as"f" using ("filmId")
  group by "filmId", "title", "description", "rating"
  order by "totalRevenue" desc
)

select "f"."title",
       "f"."description",
       "f"."rating",
       ("f"."totalRevenue" - "fc"."cost") as "totalProfit"
  from "filmRevenue" as "f"
  join "filmCost" as "fc" using ("filmId")
  order by "totalProfit" desc
  limit 5;
