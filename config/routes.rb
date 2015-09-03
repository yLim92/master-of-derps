ReactPractice2::Application.routes.draw do
  resources :items, only: [:index]
end
