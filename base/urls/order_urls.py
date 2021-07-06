from base.views import order_views as views
from django.urls import path

urlpatterns = [
    path('getorders/', views.getOrders, name='get-Orders'),
    path('createorder/', views.createOrder, name='create-Order'),
    path('getorder/<str:pk>/', views.getOrder, name='get-Order'),
    path('updateorder/<str:pk>/', views.updateOrder, name='update-Order'),
    path('deleteorder/<str:pk>/', views.deleteOrder, name='delete-Order'),
]