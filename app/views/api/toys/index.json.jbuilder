@toys.each do |toy|
  json.set! toy.id do
    json.partial! 'api/toys/toy', toy: toy
  end
end
