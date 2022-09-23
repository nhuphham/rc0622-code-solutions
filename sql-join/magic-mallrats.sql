select "cus"."firstName",
       "cus"."lastName",
       "films"."title"
  from "rentals"
  join "customers" as "cus" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  where "films"."title" = 'Magic Mallrats';
