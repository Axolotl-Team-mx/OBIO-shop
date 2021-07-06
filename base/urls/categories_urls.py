from base.views import order_views as views
from django.urls import path

urlpatterns = [
    path('createcategorie/', views.createCategorie, name='create-Categorie'),
    path('getcategories/', views.getCategories, name='get-Categories'),
    path('getcategorie/<str:pk>/', views.getCategorie, name='get-Categorie'),
    path('updatecategorie/<str:pk>/', views.updateCategorie, name='update-Categorie'),
    path('deletecategorie/<str:pk>/', views.deleteCategorie, name='delete-Categorie'),
]
