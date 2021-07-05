from django.urls import path
from base.views import product_views as views
urlpatterns = [
    path('getproducts/<str:query>/<str:cat>/<str:page>/<str:order>/', views.getProducts,
         name='get-products'),
    path('getproduct/<str:pk>/', views.getProduct,
         name='get-product')
]
