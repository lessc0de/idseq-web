require 'test_helper'

class BackgroundsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @background = backgrounds(:one)
    @user = users(:admin_one)
    sign_in @user
  end

  test "should get index" do
    get backgrounds_url
    assert_response :success
  end

  test "should create background" do
    post backgrounds_url, params: { name: 'new_name', sample_ids: [samples(:expired_sample).id, samples(:public_sample).id] }
    resp = JSON.parse(@response.body)
    assert_equal "ok", resp['status']
  end

  test "should show background" do
    get background_url(@background)
    assert_response :success
  end

  test "should update background" do
    patch background_url(@background), params: { background: { name: @background.name, pipeline_run_ids: @background.pipeline_runs.map(&:id), sample_ids: @background.samples.pluck(:id) } }
    assert_redirected_to background_url(@background)
  end

  test "should destroy background" do
    assert_difference('Background.count', -1) do
      delete background_url(@background)
    end

    assert_redirected_to backgrounds_url
  end
end
