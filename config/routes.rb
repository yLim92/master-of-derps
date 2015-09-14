ReactPractice2::Application.routes.draw do
  get "game" => "static_pages#game"
  resources :items, only: [:index]
end
