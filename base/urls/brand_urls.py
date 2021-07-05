from base.views import brand_views as views
from django.urls import path

urlpatterns = [
    path('getbrands/', views.getBrands, name='getBrands'),
    path('createbrand/', views.createBrand, name='createBrand'),
    path('getbrand/<str:pk>/', views.getBrand, name='getBrand'),
    path('deletebrand/<str:pk>/', views.deleteBrand, name='deleteBrand'),
    path('updatebrand/<str:pk>/', views.updateBrand, name='updateBrand'),
]
    

