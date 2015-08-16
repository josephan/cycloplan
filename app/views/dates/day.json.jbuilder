json.array! @plans do |plan|
	json.id plan.id
  json.description plan.description
  json.start_at plan.start_at.to_formatted_s(:time)
  json.end_at plan.end_at.to_formatted_s(:time)
    json.event do
    json.id plan.event.id
    json.name plan.event.name
    json.image image_url(plan.event.image)
    json.about plan.event.about
  end
end