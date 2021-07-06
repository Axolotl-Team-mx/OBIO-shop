from base.views.orderitems_views import getOrderItems
from base.views import brand_views as views
from django.urls import path

urlpatterns = [
    path('getorderitems/', views.getOrderItems, name='get-OrderItems'),
    path('createorderitems/', views.createOrderItems, name='create-OrderItems'),
    path('getorderitem/<str:pk>/', views.getOrderItem, name='get-OrderItem'),
    path('updateorderitem/<str:pk>/', views.updateOrderItem, name='update-OrderItem'),
    path('deleteorderitem/<str:pk>/', views.deleteOrderItem, name='delete-OrderItem'),
]