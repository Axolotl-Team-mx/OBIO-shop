from base.views import brand_views as views
from django.urls import path

urlpatterns = [
    path('getbrands/', views.getBrands, name='get-Brands'),
    path('createbrand/', views.createBrand, name='create-Brand'),
    path('getbrand/<str:pk>/', views.getBrand, name='get-Brand'),
    path('deletebrand/<str:pk>/', views.deleteBrand, name='delete-Brand'),
    path('updatebrand/<str:pk>/', views.updateBrand, name='update-Brand'),
]
    

