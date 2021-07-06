from base.views.address_views import getAddress
from base.views import brand_views as views
from django.urls import path

urlpatterns = [
    path('getaddress/', views.getAddresses, name='get-Addresses'),
    path('createaddress/', views.createAddresses, name='create-Addresses'),
    path('getaddress/<str:pk>/', views.getAddress, name='get-Address'),
    path('updateaddress/<str:pk>/', views.updateAddress, name='update-Address'),
    path('deleteaddress/<str:pk>/', views.deleteAddress, name='delete-Address'),
]