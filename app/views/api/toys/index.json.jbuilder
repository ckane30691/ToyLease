@toys.each do |toy|
  json.set! toy.id do
    json.partial! 'api/toys/toys', toy: toy
  end
end
