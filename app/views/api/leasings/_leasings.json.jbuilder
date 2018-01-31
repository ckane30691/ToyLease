json.extract! leasing, :id, :start_date, :end_date, :lease_duration, :total_cost_of_lease

toy = leasing.toy
json.toy do
  json.extract! :id, :title, :price, :image_url
end
