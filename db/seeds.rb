# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bench.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

loc1 = Bench.create!({description: 'sf baby', lat: 37.77, lng: -122.49})
loc2 = Bench.create!({description: 'fillmore street', lat: 37.81, lng: -122.42})
loc3 = Bench.create!({description: 'ocean swims', lat: 37.77, lng: -122.52})
loc4 = Bench.create!({description: 'slippery pea sighting', lat: 37.62, lng: -122.40})
loc5 = Bench.create!({description: 'golden gate dreams', lat: 36.77, lng: -122.59})