FactoryGirl.define do
	factory :user do
		first_name "Franz"
		last_name "Schubert"
		email "fake@email.com"
		birthday "1950-01-10"
		timezone "UTC"
	end
end