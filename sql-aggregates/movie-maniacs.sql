select "cus"."firstName" || ' ' || "cus"."lastName" as "Customer",
       sum("p"."amount") as "total"
  from "customers" as "cus"
  join "payments" as "p" using ("customerId")
  group by "customerId"
  order by "total" desc;
