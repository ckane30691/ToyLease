@leasings.each do |leasing|
  json.set! leasing.id do
    json.partial! 'api/leasings/leasings', leasing: leasing
  end
end
