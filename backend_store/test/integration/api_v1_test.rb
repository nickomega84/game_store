require "test_helper"

class ApiV1Test < ActionDispatch::IntegrationTest
  test "It should return 200 OK in the gaming list  v1" do
    get api_v1_games_url
    
    assert_response :success
    assert_equal "application/json; charset=utf-8", @response.content_type
  end

  test "It should return 200 OK in the list of developers v1" do
    get api_v1_developers_url
    
    assert_response :success
  end
end