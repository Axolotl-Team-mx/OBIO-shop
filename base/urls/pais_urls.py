from base.views import order_views as views
from django.urls import path

urlpatterns = [
    path('createpais/', views.createPais, name='create-Pais'),
    path('getpaises/', views.getPaises, name='get-Paises'),
    path('getpais/<str:pk>/', views.getPais, name='get-Pais'),
    path('updatepais/<str:pk>/', views.updatePais, name='update-Pais'),
    path('deletepais/<str:pk>/', views.deletePais, name='delete-Pais'),
]