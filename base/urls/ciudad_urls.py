from base.views import brand_views as views
from django.urls import path

urlpatterns = [
    path('createciudad/', views.createCiudad, name='create-Ciudad'),
    path('getciudades/', views.getCiudades, name='get-Ciudades'),
    path('getciudad/<str:pk>/', views.getCiudad, name='get-Ciudad'),
    path('updateciudad/<str:pk>/', views.updateCiudad, name='update-Ciudad'),
    path('deleteciudad/<str:pk>/', views.deleteCiudad, name='delete-Ciudad'),    
]